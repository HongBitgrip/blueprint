/*
 * @file Class Styles plugin for CKEditor
 * Copyright (C) 2011 Alfonso Martinez de Lizarrondo
 * Developed for CoreMedia
 *
 * == BEGIN LICENSE ==
 *
 * Licensed under the terms of any of the following licenses at your
 * choice:
 *
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    http://www.gnu.org/licenses/gpl.html
 *
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 *
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    http://www.mozilla.org/MPL/MPL-1.1.html
 *
 * == END LICENSE ==
 *
 */

(function() {

  // This function can not be inlined as it would keep the current ckeditor instance in
  // its context. This would be a rather massive memory leak.
  function classStyleCommandDelegate(style) {
    CKEDITOR.styleCommand.call(this, style);
  }

  function classStyleExecImplementation(editor) {
    CKEDITOR.styleCommand.prototype.exec.call(this, editor);
    editor.forceNextSelectionCheck();
  }

  function stylePrototypeGetState(elementPath, editor) {
    if (!!elementPath && this.checkApplicable(elementPath, editor)) {
      if (this.type === CKEDITOR.STYLE_INLINE) {

        // If command is a style add command
        if (this._.definition.attributes['class']) {
          if (this.checkActive(elementPath)) {
            var elements = elementPath.elements;

            for (var i = 0, element; i < elements.length; i++) {
              element = elements[i];
              if (this.checkElementMatch(element, true)) {
                return CKEDITOR.TRISTATE_ON;
              }
            }
          }
          return CKEDITOR.TRISTATE_OFF;
        } else {
          return this.checkActive(elementPath) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_DISABLED;
        }
      } else {
        return this.checkActive(elementPath) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF;
      }
    }
    else {
      return CKEDITOR.TRISTATE_DISABLED;
    }
  }

  CKEDITOR.plugins.add('classstyles',
      {
        init: function (editor) {
          CKEDITOR.classStyle.prototype = CKEDITOR.style.prototype;

          CKEDITOR.style.prototype.getState = stylePrototypeGetState;

          // a styleCommand with a classStyle needs to force selection check, so subclass styleCommand:
          CKEDITOR.classStyleCommand = classStyleCommandDelegate;
          CKEDITOR.classStyleCommand.prototype = new CKEDITOR.styleCommand();
          CKEDITOR.classStyleCommand.prototype.exec = classStyleExecImplementation;

          var groups = editor.config.classGroups,
              styles = {},
              commands = {},
              style,
              className;

          for (var groupName in groups) {
            var group = groups[ groupName ];
            var elements = {};
            if (group.blockElements) {
              var tmpElements = group.blockElements.split('|');
              for (var i = 0; i < tmpElements.length; i++) {
                elements[ tmpElements[ i ].toLowerCase() ] = 1;
              }
            } else {
              elements = 'span';
            }

            for (var b = 0; b < group.styleClasses.length; b++) {
              className = group.styleClasses[b];

              var copy = [];
              for (var j = 0; j < group.styleClasses.length; j++) {
                if (j === b) continue;
                copy.push(group.styleClasses[ j ]);
              }

              // create a style
              var commandName = "style_" + groupName + "_" + className;
              styles[ commandName ] = style = new CKEDITOR.classStyle(groupName, elements, className, copy);

              // Create a command
              var command = editor.addCommand(commandName, new CKEDITOR.classStyleCommand(style));
              commands[ commandName ] = command;
            }

            //create remove command
            var removeCommandName = "style_" + groupName + "__remove";
            styles[ removeCommandName ] = style = new CKEDITOR.classStyle(groupName, elements, null, group.styleClasses);
            commands[ removeCommandName ] = editor.addCommand(removeCommandName, new CKEDITOR.classStyleCommand(style));
          }


          // Update command states
          var onChange = function (ev) {
            // Avoid changing the state if the editor is in readOnly mode
            if (ev.editor.readOnly)
              return;

            var elementPath = ev.name === 'selectionChange' ? ev.data.path : ev.editor.elementPath();

            // Loop through all registered commands.
            for (var i in commands) {
              // Check the current state for the style
              commands[ i ].setState(styles[ i ].getState(elementPath, ev.editor));
            }
          };
          editor.on('selectionChange', onChange);
          editor.on('change', onChange);

        }, //Init
        requires: []
      });

  (function () {

    // Function for the DOM walker to traverse the tree returning only the valid elements
    // if jumpToSibling is true, then after successfully finding a node, don't return any children of it and skip to its sibling
    var ourBlockBoundary = function (elements, jumpToSibling, firstMatch) {
      // If there's an initial match, set straight the first sibling to check
      var nextCheckNode = firstMatch && firstMatch.getNext();

      return function (node, type) {
        if (nextCheckNode && !nextCheckNode.equals(node))
          return false;

        if (node.type === CKEDITOR.NODE_ELEMENT
            && ( typeof elements === 'string' ? node.getName() === elements : node.getName() in elements )) {
          if (jumpToSibling)
            nextCheckNode = node.getNext();

          return true;
        }
        return false;
      };
    };

    // Loop the selected range like blocks, but apply like Objects.
    function applyObjectBlockStyle(range) {
      // Apply it on the start node
      // try to walk up the DOM to find the right node
      var element = range.startContainer.getAscendant(this.element, true);
      if (element)
        setupElement(element, this);

      // If it's collapsed don't do anything more
      if (range.collapsed)
        return;

      var walker = new CKEDITOR.dom.walker(range),
          nextNode;

      walker.evaluator = ourBlockBoundary(this.element, true, element);
      while (nextNode = walker.next()) {
        setupElement(nextNode, this)
      }
    }

    function setupElement(el, style) {
      var def = style._.definition,
          attributes = def.attributes,
          styles = CKEDITOR.style.getStyleText(def),
          className = def.className,
          otherClasses = def.otherClasses;

      // Assign all defined attributes.
      if (attributes) {
        for (var att in attributes) {
          el.setAttribute(att, attributes[ att ]);
        }
      }

      // Assign all defined styles.
      if (styles)
        el.setAttribute('style', styles);

      // Remove other classes from this style group
      if (otherClasses) {
        for (var i = 0; i < otherClasses.length; i++)
          el.removeClass(otherClasses[ i ]);
      }

      if (className)
        el.addClass(className);

      return el;
    }


    // Loop the selected range like blocks, but remove like Objects.
    function removeObjectBlockStyle(range) {
      // try to walk up the DOM if it's collapsed to find the right node
      var element = range.startContainer.getAscendant(this.element, true);
      while (element && !this.checkElementRemovable(element)) {
        // Walk up until we find the ascendant that has the class that we want to remove
        element = element.getAscendant(this.element, false);
      }
      if (element)
        removeStyleFromBlock(element, this);

      // If it's collapsed don't do anything more
      if (range.collapsed)
        return;

      var walker = new CKEDITOR.dom.walker(range),
          nextNode;

      // Walk all the children to remove the class
      walker.evaluator = ourBlockBoundary(this.element, false);
      while (nextNode = walker.next()) {
        if (this.checkElementRemovable(nextNode))
          removeStyleFromBlock(nextNode, this)
      }
    }

    function removeStyleFromBlock(block, style) {
      var def = style._.definition,
          attributes = def.attributes;

      if (style.checkElementRemovable(block)) {
        // Remove all defined attributes.
        if (attributes) {
          for (var att in attributes) {
            block.removeAttribute(att, attributes[ att ]);
          }
        }

        // Remove all defined styles.
        if (def.styles) {
          for (var i in def.styles) {
            if (!def.styles.hasOwnProperty(i))
              continue;

            block.removeStyle(i);
          }
        }

        if (style._.definition.className)
          block.removeClass(style._.definition.className);
      }
    }

    CKEDITOR.classStyle = function (name, elements, className, otherClasses) {
      var definition;
      if (typeof elements === 'object')
        definition = {
          element: elements,
          className: className,
          otherClasses: otherClasses
        };
      else {
        var overrides = '';
        for (var i = 0; i < otherClasses.length; i++) {
          if (i > 0) overrides += '|';
          overrides += otherClasses[ i ];
        }
        var re = new RegExp('^' + overrides + '$');
        definition = {
          element: elements,
          attributes: {'class': className},
          overrides: [
            { element: 'span', attributes: { 'class': re } }
          ]
        }
      }
      // Call the base constructor
      CKEDITOR.style.call(this, definition);

      // Readjust the detected type. It's either Object or Inline (if elements==false)
      if (typeof elements === 'object') {

        this.applyToRange = applyObjectBlockStyle;
        this.removeFromRange = removeObjectBlockStyle;

        // Checks if an element, or any of its attributes, is removable by the
        // current style definition.
        // Short version just for classes...
        this.checkElementRemovable = function (element) {
          if (!element)
            return false;

          var name = element.getName();
          if (typeof this.element === 'string' ? name === this.element : name in this.element) {
            return (element.hasClass(this._.definition.className) );
          }
          return false;
        };

        var superCheckApplicable = this.checkApplicable;
        this.checkApplicable = function (elementPath, editor, filter) {
          var applicable = elementPath && superCheckApplicable.call(this, elementPath, editor, filter);
            var element = applicable && elementPath.lastElement.getAscendant(this.element, true);
            return element &&
              (this._.definition.className || // either add or remove some class, or...
                  this._.definition.otherClasses.some(function (styleClass) { // ...some of the classes to remove...
                    return element.hasClass(styleClass);    // ...is present.
                  }));
        };
      }


    };

  })();
}());
