Ext.define("com.coremedia.ui.ckeditor.dialogs.Dialog_cmlinkBase", function(Dialog_cmlinkBase) {/*package com.coremedia.ui.ckeditor.dialogs {
import com.coremedia.ui.ckeditor.AnchorUtil;
import com.coremedia.ui.ckeditor.CKDialog;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.util.EventUtil;

import ext.Ext;
import ext.MessageBox;
import ext.StringUtil;
import ext.container.Container;
import ext.data.Model;
import ext.form.field.ComboBox;
import ext.form.field.TextField;
import ext.form.field.VTypes;
import ext.window.MessageBoxWindow;

import joo.debug;

import net.jangaroo.net.URIUtils;

[ResourceBundle('com.coremedia.ui.ckeditor.CKEditor')]
public class Dialog_cmlinkBase extends CKDialog {

  private var targetTypeValueExpression:ValueExpression;

  public*/ function Dialog_cmlinkBase$(config/*:Dialog_cmlink = null*/) {if(arguments.length<=0)config=null;
    this.super$M0zK(config);
    this.addCustomVTypes$M0zK();

    this.targetTypeValueExpression$M0zK = AS3.getBindable(config,"targetTypeValueExpression");

    var selection = AS3.getBindable(this,"editor").getSelection();
    var element = null;

    // Fill in all the relevant fields if there's already one link selected.
    if (( element = this.getSelectedLink$M0zK(AS3.getBindable(this,"editor")) ) && element.hasAttribute('_xlink:href'))
      selection.selectElement(element);
    else
      element = null;

    this.setData(this.parseLink$M0zK.apply(this, [ AS3.getBindable(this,"editor"), element ]));
  }/*

  [Bindable]
  public var editor:Object;

  override public*/ function setData(data/*:Object*/)/*:void*/ {var this$=this;
    com.coremedia.ui.ckeditor.CKDialog.prototype.setData.call(this,data);
    // trace(data.target.type);
    com.coremedia.ui.util.EventUtil.invokeLater(function()/*:void*/ {
      this$.showOrHideTargetTextField$M0zK(data.target.type);
    });
  }/*

  private*/ function showOrHideTargetTextField(value/*:String*/)/*:void*/ {
    var textField/*:TextField*/ =AS3.as( (AS3.as(this.getComponent('form'),  Ext.container.Container)).getComponent('target'),  Ext.form.field.Text);
    if (value == 'other') {
      textField.enable();
    } else {
      textField.disable(true);
    }
  }/*

  //noinspection JSUnusedLocalSymbols
  public*/ function linkTypeSelected(combo/*:ComboBox*/, record/*:Model*/, index/*:int*/)/*:void*/ {
    this.showOrHideTargetTextField$M0zK(record.data.field1);
  }/*

  /**
   * Overwrites the default okHandler for simple error handling.
   * /
  protected override*/ function okHandler()/*:void*/ {
    var textfield/*:TextField*/ =AS3.as( (AS3.as(this.getComponent('form'),  Ext.container.Container)).getComponent('url'),  Ext.form.field.Text);
    var url/*:String*/ = textfield.getValue();
    try {
      // Check if the url is valid.
      if (this.isValid$M0zK(url)) {
        net.jangaroo.net.URIUtils.parse(url);
        com.coremedia.ui.ckeditor.CKDialog.prototype.okHandler.call(this);
        this.doOkHandler$M0zK();
      } else {
        Ext.MessageBox.show({
          title: this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'urlValidation_Error_title'),
          msg: Ext.String.format(this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'urlValidation_Error_text'), url),
          minWidth: 300,
          icon: Ext.window.MessageBox.ERROR,
          buttons: Ext.window.MessageBox.OK
        });
        this.cancelHandler();
      }
    } catch(e){if(AS3.is(e,AS3.Error)) {
      if(joo.debug) {
        AS3.trace("caught exception while parsing url '"+url+"': "+e);
      }
      this.cancelHandler();
    }else throw e;}
  }/*

  private*/ function addCustomVTypes()/*:void*/ {var this$=this;
    // custom VType for vtype:'validURL'
    Ext.apply(Ext.form.field.VTypes, {
      validURL:function (url) {
        return this$.isValid$M0zK(url);
      },
      validURLText:this.resourceManager.getString('com.coremedia.ui.ckeditor.CKEditor', 'urlValidation_Error_message')
    });
  }/*

  private*/ function isValid(url/*:String*/)/*:Boolean*/ {
    return (url.indexOf(' ') === -1);
  }/*

  private*/ function doOkHandler(){
    var attributes = {};
    var removeAttributes = [];
    var data = this.getData();

    var url = ( data.url && data.url.url ) || '';

    // No protocol available in URL string, not an anchor reference
    // keep in step with enabledness code in plugin.js
    if (com.coremedia.ui.ckeditor.AnchorUtil.isLinkWithoutUrlScheme(url)
            && com.coremedia.ui.ckeditor.AnchorUtil.isLinkNoAnchorReference(url)) {

      // make sure the URL has a scheme so it will not be misinterpreted as an internal link (relative URL)
      var emailPattern = /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if (emailPattern.test(url)) {
        url = "mailto:" + url;
      } else {
        url = "http://" + url;
      }
    }

    attributes['_xlink:href'] = url;
    attributes['href'] = '#';

    AS3.getBindable(this,"editor").fire('saveSnapshot');

    if (data.target) {

      if (this.targetTypeValueExpression$M0zK && this.targetTypeValueExpression$M0zK.getValue() !== data.target.type) {
        this.targetTypeValueExpression$M0zK.setValue(data.target.type);
      }

      if (data.target.type != 'none') {

        attributes['_xlink:show'] = data.target.type;
        if (data.target.type == 'other') {
          attributes['_xlink:role'] = data.target.name;
        } else {
          removeAttributes.push('_xlink:role');
        }
      }
      else {
        removeAttributes.push('_xlink:show');
      }
      removeAttributes.push('_cke_pa_onclick', 'onclick');
    }

    var element/*:**/ = AS3.getBindable(this,"editor").getSelection().getSelectedElement();
    if (element && element.getName() === "a") {
      // We're only editing an existing link, so just overwrite the attributes.
      var href = element.getAttribute('_xlink:href');
      var textView = element.getHtml();

      // IE BUG: Setting the name attribute to an existing link doesn't work.
      // Must re-create the link from weired syntax to workaround.
      if (CKEDITOR['env'].ie && attributes.name != element.getAttribute('name')) {
        var newElement = new CKEDITOR['dom'].element('<a name="' + CKEDITOR['tools'].htmlEncode(attributes.name) + '">',
                AS3.getBindable(this,"editor").document);

        selection = AS3.getBindable(this,"editor").getSelection();

        element.moveChildren(newElement);
        element.copyAttributes(newElement, { name : 1 });
        newElement.replace(element);
        element = newElement;

        selection.selectElement(element);
      }

      element.setAttributes(attributes);
      element.removeAttributes(removeAttributes);
      // Update text view when user changes protocol #4612.
      if (href == textView) {
        element.setHtml(attributes['_xlink:href']);
      }

      // delete this._.selectedElement;
    } else {
      // Create element if current selection is collapsed.
      var selection = AS3.getBindable(this,"editor").getSelection(),
              ranges = selection.getRanges();
      if (ranges.length == 1 && ranges[0].collapsed) {
        var text = new CKEDITOR['dom'].text(attributes['_xlink:href'], AS3.getBindable(this,"editor").document);
        ranges[0].insertNode(text);
        ranges[0].selectNodeContents(text);
        selection.selectRanges(ranges);
      }

      // Apply style.
      var style = new CKEDITOR['style']({ element : 'a', attributes : attributes });
      style.type = CKEDITOR['STYLE_INLINE'];		// need to override... dunno why.
      AS3.getBindable(this,"editor").applyStyle(style);

      // Id. Apply only to the first link.
      if (data.adv && data.adv.advId) {
        var links = AS3.getBindable(this,"editor").document.$.getElementsByTagName('a');
        for (var i = 0; i < links.length; i++) {
          if (links[i].href == attributes['_xlink:href']) {
            links[i].id = data.adv.advId;
            break;
          }
        }
      }
    }

    AS3.getBindable(this,"editor").fire('save');
    AS3.getBindable(this,"editor").fire('saveSnapshot');
  }/*

  /**
   * Get the surrounding link element of current selection.
   * @param editor
   * @example CKEDITOR.plugins.link.getSelectedLink( editor );
   * @since 3.2.1
   * The following selection will all return the link element.
   *         <pre>
   *  <a href="#">li^nk</a>
   *  <a href="#">[link]</a>
   *  text[<a href="#">link]</a>
   *  <a href="#">li[nk</a>]
   *  [<b><a href="#">li]nk</a></b>]
   *  [<a href="#"><b>li]nk</b></a>
   * </pre>
   * /
  private*/ function getSelectedLink(editor) {
    var range;
    try {
      range = editor.getSelection().getRanges(true)[ 0 ];
      range.shrink(CKEDITOR['SHRINK_TEXT']);
      var root = range.getCommonAncestor();
      return root.getAscendant('a', true);
    }
    catch(e) {
      return null;
    }
  }/*

  private*/ function parseLink(editor, element) {

    var href = (element && element.getAttribute('_xlink:href')) || 'http://';
    var returnValue = {};

    returnValue.url = {};
    returnValue.type = 'url';
    returnValue.url.url = href;

    // Load target and popup settings.
    if (element) {
      returnValue.target = {};

      var target = element.getAttribute('_xlink:show');
      var role = element.getAttribute('_xlink:role');

      returnValue.target.type = target;
      returnValue.target.name = role;

      // Record down the selected element in the dialog.
      editor.getSelection().selectElement(element);
    }

    return returnValue;
  }/*

  protected static*/ function getTargetType$static(targetTypeValueExpression/*:ValueExpression*/)/*:Object*/ {
    var targetType/*:String*/ = "new";
    if (targetTypeValueExpression && targetTypeValueExpression.getValue()) {
      targetType = targetTypeValueExpression.getValue();
    }
    return {'target.type': targetType};
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.ckeditor.CKDialog",
      targetTypeValueExpression$M0zK: null,
      constructor: Dialog_cmlinkBase$,
      super$M0zK: function() {
        com.coremedia.ui.ckeditor.CKDialog.prototype.constructor.apply(this, arguments);
      },
      setData: setData,
      showOrHideTargetTextField$M0zK: showOrHideTargetTextField,
      linkTypeSelected: linkTypeSelected,
      okHandler: okHandler,
      addCustomVTypes$M0zK: addCustomVTypes,
      isValid$M0zK: isValid,
      doOkHandler$M0zK: doOkHandler,
      getSelectedLink$M0zK: getSelectedLink,
      parseLink$M0zK: parseLink,
      config: {editor: null},
      statics: {getTargetType: getTargetType$static},
      requires: [
        "AS3.Error",
        "AS3.trace",
        "Ext",
        "Ext.String",
        "Ext.container.Container",
        "Ext.form.field.Text",
        "Ext.form.field.VTypes",
        "Ext.window.MessageBox",
        "com.coremedia.ui.ckeditor.CKDialog",
        "com.coremedia.ui.ckeditor.CKEditor_properties",
        "com.coremedia.ui.util.EventUtil",
        "net.jangaroo.net.URIUtils"
      ],
      uses: ["com.coremedia.ui.ckeditor.AnchorUtil"]
    };
});
