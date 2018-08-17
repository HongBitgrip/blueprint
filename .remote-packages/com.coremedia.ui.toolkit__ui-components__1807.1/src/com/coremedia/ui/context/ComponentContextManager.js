Ext.define("com.coremedia.ui.context.ComponentContextManager", function(ComponentContextManager) {/*package com.coremedia.ui.context {
import com.coremedia.ui.context.expression.ContextExpressionMap;
import com.coremedia.ui.data.PropertyChangeEvent;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.EventUtil;

import ext.Action;
import ext.Component;
import ext.ComponentManager;
import ext.Ext;
import ext.app.ViewModel;
import ext.app.bind.Binding;
import ext.container.Container;

public class ComponentContextManager {
  /**
   * A dynamic attribute that is attached to components requesting
   * a context expression directly. The object stored in the attribute
   * of this name maps context variable names to value expressions.
   * This ensures that value expressions are not generated twice.
   * /
  private static const*/var CONTEXT_EXPRESSIONS_ATTRIBUTE$static = "$$com.coremedia.cms.editor.sdk.context.ComponentContextManager.expressions";/*

  private static*/ var instance$static/*:ComponentContextManager*/=null;/*

  /**
   * Contains all components that wait for being registered.
   * /
  private const componentsWithComponentRegisteredListeners:Array =*/function componentsWithComponentRegisteredListeners_(){this.componentsWithComponentRegisteredListeners$QwpO=( []);}/*;
  /**
   * For each component that wait for being registered, contains an Array of Functions to be called.
   * /
  private const componentRegisteredListeners:Array =*/function componentRegisteredListeners_(){this.componentRegisteredListeners$QwpO=( []);}/*;

  private var contextExpressionMap:ContextExpressionMap =*/function contextExpressionMap_(){this.contextExpressionMap$QwpO=( new com.coremedia.ui.context.expression.ContextExpressionMap());}/*;

  public static*/ function getInstance$static()/*:ComponentContextManager*/ {
    if (!instance$static) {
      instance$static = new ComponentContextManager();
    }
    return instance$static;
  }

  function ComponentContextManager$() {var this$=this;componentsWithComponentRegisteredListeners_.call(this);componentRegisteredListeners_.call(this);contextExpressionMap_.call(this);
    Ext.define(null, {
      override: 'Ext.Component',

      initComponent: function()/*:void*/ {arguments=Array.prototype.slice.call(arguments);
        this$.fireComponentRegistered$QwpO(this);
        this$.componentAdded$QwpO(this);
        this.callParent(arguments);
      },

      destroy: function ()/*:void*/ {arguments=Array.prototype.slice.call(arguments);
        this.callParent(arguments);
        this$.componentRemoved$QwpO(this);
      }
    });

    //Try to fix the viewModel issue when adding components dynamically (see ComponentContextManagerTest#testUpdateAfterAdd)
    //When dynamically adding an item to a container ext seems to set no parent to the viewModel of the item
    //so let's try to do just that (still not working :-(
/*
    Ext.define(null, {
      override: 'Ext.container.Container',

      add: function():void {
        var me:Container = this;
        //continue only when adding dynamically
        if (me.rendered) {
          var items:* = arguments;
          var itemsArray:Array = (items is Array) ? items : [items];
          itemsArray.forEach(function(item:Component):void {
            var viewModel:ViewModel = item.getViewModel();
            if (viewModel && !viewModel.getParent()) {
              var parentViewModel:ViewModel = me.lookupViewModel();
              if (parentViewModel) {
                viewModel.setParent(parentViewModel);
              }
            }
          });
        }
        this.callParent(arguments);
      }
    });
*/

    instance$static = this;
  }/*

  /*
   * We have to implement a custom event mechanism, because not-ready components are not yet able to register event listeners.
   * /

  private*/ function addComponentRegisteredListener(component/*:Component*/, listener/*:Function*/)/*:void*/ {
    var index/*:int*/ = this.componentsWithComponentRegisteredListeners$QwpO.indexOf(component);
    if (index !== -1) {
      this.componentRegisteredListeners$QwpO[index].push(listener);
    } else {
      this.componentsWithComponentRegisteredListeners$QwpO.push(component);
      this.componentRegisteredListeners$QwpO.push([listener]);
    }
  }/*

  private*/ function fireComponentRegistered(component/*:Component*/)/*:void*/ {
    var index/*:int*/ = this.componentsWithComponentRegisteredListeners$QwpO.indexOf(component);
    if (index !== -1) {
      this.componentsWithComponentRegisteredListeners$QwpO.splice(index, 1);
      var listeners/*:Array*/ = this.componentRegisteredListeners$QwpO.splice(index, 1)[0];
      for/* each*/ (var $1=0;$1</* in*/ listeners.length;++$1) {var listener/*:Function*/ =listeners[$1];
        listener();
      }
    }
  }/*

  ///////////Component Lifecycle

  private*/ function componentAdded(component/*:Component*/)/*:void*/ {var this$=this;
    com.coremedia.ui.logging.Logger.debug("component added " + component['$className'] + " " + component.getId());
    var clazz/*:Class*/ = com.coremedia.ui.context.ComponentContextHelper.getClass(component);

    // process the provide annotation in the component
    this.findProvidesInMembers$QwpO(clazz, [], function (member/*:MemberDeclaration*/)/*:void*/ {
      var context/*:String*/ = com.coremedia.ui.context.ComponentContextHelper.getProvideContextName(component, member);
      if (!context) return;
      this$.createViewModel$QwpO(component);
      //initialize the view model data with the initial context
      component.getViewModel().set(context, component[member.memberName]());

       //bind from view model to provider
      var bindCallback/*:Function*/ = function(value/*:**/)/*:void*/ {
        var oldValue/*:**/ = component[member.memberName]();
        if (oldValue === value) return;
        var setter/*:String*/ = member.getSetter();
        if (!(AS3.is(component[setter],  Function))) {
          com.coremedia.ui.logging.Logger.warn("The component " + AS3.getBindable(component,"id","DUMMY") + " has no setter " + setter + " Two-way binding will not work.");
        } else {
          component[setter](value);
        }
      };

      this$.bind$QwpO(component, context, bindCallback);

      //bind the provider --> the view model
      component.mon(component, context, function (event/*:PropertyChangeEvent*/)/*:void*/ {
        component.getViewModel().set(context, event.newValue);
      });
    });

    // process the inject annotation in the component
    this.findInjectsInMembers$QwpO(clazz, [], function (member/*:MemberDeclaration*/)/*:void*/ {
      var context/*:String*/ = com.coremedia.ui.context.ComponentContextHelper.getInjectContextName(component, member);
      if (!context) return;
      //bind from the parent view model to the consumer
      var bindCallback/*:Function*/ = function (value/*:**/)/*:void*/ {
        var getter/*:String*/ = member.getGetter();
        if (!(AS3.is(component[getter],  Function))) {
          com.coremedia.ui.logging.Logger.warn("The component " + AS3.getBindable(component,"id","DUMMY") + " has no getter " + getter);
        } else {
          var oldValue/*:**/ = component[getter]();
          if (oldValue === value) return;
        }
        component[member.memberName](value);
      };
      this$.bind$QwpO(component, context, bindCallback);
    });

    // Actions are not registered by the ComponentManager
    // Search for consumers in action hierarchy.
    if (component.baseAction) {
      var baseAction/*:Action*/ = component.baseAction;
      this.findInjectsInMembers$QwpO(com.coremedia.ui.context.ComponentContextHelper.getClass(baseAction), [],
              function (member/*:MemberDeclaration*/)/*:void*/ {
                var context/*:String*/ = com.coremedia.ui.context.ComponentContextHelper.getInjectContextName(baseAction, member);
                if (!context) return;
                //bind from the parent view model to the consumer's base action
                var bindCallback/*:Function*/ = function (value/*:**/)/*:void*/ {
                  var getter/*:String*/ = member.getGetter();
                  if (!baseAction[getter]) {
                    com.coremedia.ui.logging.Logger.warn("The action " + baseAction.getText() + " has no getter " + getter);
                  } else {
                    var oldValue/*:**/ = baseAction[getter]();
                    if (oldValue === value) return;
                  }
                  baseAction[member.memberName](value);
                };
                this$.bind$QwpO(component, context, bindCallback);
              });
    }
  }/*

  /**
   * set the view model of the given component if it does'nt have any.
   *
   * @param component
   * /
  private*/ function createViewModel(component/*:Component*/)/*:ViewModel*/ {
    if (!component.getViewModel()) {
      //use the config instead of an object see Ext.mixin.BindableView#applyViewModel
      component.setViewModel(AS3.cast(Ext.app.ViewModel,{}));
    }
    return component.getViewModel();
  }/*

  private*/ function componentRemoved(component/*:Component*/)/*:void*/ {
    this.contextExpressionMap$QwpO.remove(component);
  }/*

  private*/ function findProvidesInMembers(clazz/*:Class*/, processed/*:Array*/, callback/*:Function*/)/*:void*/ {
    var metadata/*:Object*/ = clazz.prototype.metadata;
    for (var memberName/*:String*/ in metadata) {
      var member/*:MemberDeclaration*/ = com.coremedia.ui.context.ComponentContextHelper.getMemberDeclaration(clazz, memberName);
      if (processed.indexOf(member.memberName) < 0) {
        if (com.coremedia.ui.context.ComponentContextHelper.getProvideMetaData(member)) {
          com.coremedia.ui.logging.Logger.debug("Found provide annotated method " + member.memberName);
          callback.call(null, member);
        }
      }
      processed.push(memberName);
    }

    var superClass/*:Class*/ = com.coremedia.ui.context.ComponentContextHelper.getSuperClass(clazz);
    if (superClass) {
      this.findProvidesInMembers$QwpO(superClass, processed, callback);
    }
  }/*

  private*/ function findInjectsInMembers(clazz/*:Class*/, processed/*:Array*/, callback/*:Function*/)/*:void*/ {
    if (!clazz) {
      return;
    }
    for (var memberName/*:String*/ in clazz.prototype.metadata) {
      var member/*:MemberDeclaration*/ = com.coremedia.ui.context.ComponentContextHelper.getMemberDeclaration(clazz, memberName);
      if (processed.indexOf(member.memberName) < 0) {
        if (com.coremedia.ui.context.ComponentContextHelper.getInjectMetaData(member)) {
          com.coremedia.ui.logging.Logger.debug("Found inject annotated method " + member.memberName);
          callback.call(null, member);
        }
      }
      processed.push(member.memberName);
    }

    var superClass/*:Class*/ = com.coremedia.ui.context.ComponentContextHelper.getSuperClass(clazz);
    if (superClass) {
      this.findInjectsInMembers$QwpO(superClass, processed, callback);
    }
  }/*

  public*/ function getContextExpression(consumer/*:Component*/, context/*:String*/)/*:ValueExpression*/ {var this$=this;
    if (!this.contextExpressionMap$QwpO.get(consumer, context)) {
      var expression/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.createFromValue();
      this.contextExpressionMap$QwpO.add(consumer, context, expression);
      if (consumer.rendered) {
        this.bindExpression$QwpO(consumer, context, expression);
      } else {
        var continueAfterRender/*:Function*/ = function ()/*:void*/ {
          consumer.mon(consumer, "render", function ()/*:void*/ {
            this$.bindExpression$QwpO(consumer, context, expression);
          });
        };
        if (isRegistered$static(consumer)) {
          continueAfterRender();
        } else {
          this.addComponentRegisteredListener$QwpO(consumer, continueAfterRender);
        }
      }
    }

    return this.contextExpressionMap$QwpO.get(consumer, context);
  }/*

  private*/ function bindExpression(consumer/*:Component*/, context/*:String*/, expression/*:ValueExpression*/)/*:void*/ {
    var bindCallback/*:Function*/ = function (value/*:**/)/*:void*/ {
      // normalize values before setting value expression to avoid switches from undefined to null
      var exprValue/*:**/ = expression.getValue();
      value = ! !value ? value : null;
      exprValue = ! !exprValue ? exprValue : null;
      if (exprValue !== value) {
        expression.setValue(value);
      }
    };
    var boundCallback/*:Function*/ = function(binding/*:Binding*/)/*:void*/ {
      //two-way binding
      var listener/*:Function*/ = function ()/*:void*/ {
        var value/*:**/ = expression.getValue();
        if (value !== binding.getValue()) {
          // This should occur inside an invokeLater because expression.setValue() from above also
          // includes an invokeLater. We need an even playing field to avoid confusing the order
          // of updates.
          com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
            binding.setValue(value);
          });
        }
      };
      expression.addChangeListener(listener);
      consumer.mon(consumer, "destroy", function ()/*:void*/ {
        expression.removeChangeListener(listener);
      });
    };
    this.bind$QwpO(consumer, context, bindCallback, boundCallback);
  }/*

  private static*/ function isRegistered$static(component/*:Component*/)/*:Boolean*/ {
    return component.initialConfig && component.getId() && Ext.ComponentManager.get(component.getId());
  }/*

  private*/ function bind(component/*:Component*/, context/*:String*/, bindCallback/*:Function*/,
                        boundCallback/*:Function = undefined*/)/*:void*/ {var this$=this;
    var viewModel/*:ViewModel*/ = component.lookupViewModel();
    if (!viewModel) {
      //the component might be not yet added. Wait for the transitive root container to be added
      var root/*:Component*/ = this.lookupRootComponent$QwpO(component);
      root.on("added", function()/*:void*/ {
        this$.bind$QwpO(root, context, bindCallback, boundCallback);
      }, undefined, {single:true});
      return;
      //TODO: how to handle the case when there is finally no viewModel?
    }

    if (viewModel.destroyed) {
      return;
    }

    var binding/*:Binding*/ = viewModel.bind("{" + context + "}", bindCallback);

    // viewModel.bind() is asynchronous.
    // In some cases it might be important that the bindCallback is called immediately.
    // Thus, we additionally call it here iff there is a current value for the context.
    var currentContextValue/*:**/ = viewModel.get(context);
    currentContextValue && bindCallback(currentContextValue);

    component.on("destroy", function ()/*:void*/ {
      binding.destroy();
    });

    if (boundCallback) {
      boundCallback(binding);
    }
  }/*

  private*/ function lookupRootComponent(component/*:Component*/)/*:Component*/ {
    var root/*:Container*/ = component.up();
    if (!root) {
      return component;
    }
    return this.lookupRootComponent$QwpO(root);
  }/*
  /**
   * data binding: set the viewModel of the given component to the config
   * TODO EXT6: Check if this is necessary as EXT6 has improved component hierarchy
   * /
  public static*/ function configOwnerCt$static(config/*:Object*/, ownerCt/*:Component*/)/*:void*/ {
    if (!config['viewModel'] && ownerCt.lookupViewModel()) {
      config['viewModel'] = ownerCt.lookupViewModel();
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ComponentContextManager$,
      addComponentRegisteredListener$QwpO: addComponentRegisteredListener,
      fireComponentRegistered$QwpO: fireComponentRegistered,
      componentAdded$QwpO: componentAdded,
      createViewModel$QwpO: createViewModel,
      componentRemoved$QwpO: componentRemoved,
      findProvidesInMembers$QwpO: findProvidesInMembers,
      findInjectsInMembers$QwpO: findInjectsInMembers,
      getContextExpression: getContextExpression,
      bindExpression$QwpO: bindExpression,
      bind$QwpO: bind,
      lookupRootComponent$QwpO: lookupRootComponent,
      statics: {
        getInstance: getInstance$static,
        configOwnerCt: configOwnerCt$static
      },
      requires: [
        "Ext",
        "Ext.ComponentManager",
        "Ext.app.ViewModel",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.EventUtil"
      ],
      uses: [
        "com.coremedia.ui.context.ComponentContextHelper",
        "com.coremedia.ui.context.expression.ContextExpressionMap"
      ]
    };
});
