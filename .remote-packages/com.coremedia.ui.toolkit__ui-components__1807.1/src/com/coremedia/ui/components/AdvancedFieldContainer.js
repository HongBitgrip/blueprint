Ext.define("com.coremedia.ui.components.AdvancedFieldContainer", function(AdvancedFieldContainer) {/*package com.coremedia.ui.components {

import com.coremedia.ui.util.AriaUtils;
import com.coremedia.ui.util.createComponentSelector;

import ext.Component;
import ext.Ext;
import ext.event.Event;
import ext.form.FieldContainer;
import ext.form.Labelable;

/**
 * FieldContainer with advanced functionality.
 *
 * Provides the {@link #defaultField} configuration which can be used to attach the {#labelEl} of the field container
 * to the component matching the given selector.
 *
 * This covers focusing the field when the label is clicked and adding screen reader support.
 * /
public class AdvancedFieldContainer extends FieldContainer {

  private var activeDefaultField:Component;

  private var _inputId:String;
  private var _defaultField:String;

  /**
   * Specifies if instead of connecting the {@link #fieldLabel} to the {@link #defaultField} only the click behaviour
   * shall occur (focusing the default field).
   *
   * Not bindable, this config must not be changed after initialization.
   * /
  [ExtConfig]
  public var delegateLabelClickOnly:Boolean;

  /**
   * Specifies if the {@link FieldContainer} is marked as a field group (for screen readers).
   * This means that the aria role attribute of its containerEl will be changed to "group" and it will be labelled by
   * the labelEl.
   * /
  [ExtConfig]
  public var fieldGroup:Boolean;

  public*/ function AdvancedFieldContainer$(config/*:AdvancedFieldContainer = null*/) {if(arguments.length<=0)config=null;
    var defaultConfig/*:AdvancedFieldContainer*/ = AS3.cast(AdvancedFieldContainer,{});
    defaultConfig.delegateLabelClickOnly = false;
    this.super$Hiyz(AS3.cast(AdvancedFieldContainer,Ext.apply({}, config, defaultConfig)));
  }/*

  // TODO: private API access. consider adding this to ext-as.
  public native function get containerEl():*;

  override protected*/ function afterRender()/*:void*/ {
    Ext.form.FieldContainer.prototype.afterRender.call(this);
    this.updateDefaultField$Hiyz(null, AS3.getBindable(this,"defaultField"));
    this.labelEl.on("click",AS3.bind( this,"onLabelClick$Hiyz"));
    if (this.fieldGroup) {
      // inspired by CheckboxGroup implementation from Sencha
      // ExtJS uses a lot of private API to set the role and labelled-by during rendering
      // The way it is solved here tries to avoid that (except for containerEl) as this might not be stable when
      // upgrading to a newer version
      com.coremedia.ui.util.AriaUtils.setRole(this.containerEl, com.coremedia.ui.util.AriaUtils.ROLE_GROUP);
      com.coremedia.ui.util.AriaUtils.addLabelledBy(this.containerEl, this.labelEl.id);
    }
  }/*

  override public*/ function getInputId()/*:String*/ {
    return !this.delegateLabelClickOnly ? this._inputId$Hiyz : "";
  }/*

  private*/ function onLabelClick(ev/*:Event*/)/*:void*/ {
    var notLabelable/*:Boolean*/ = !(AS3.is(this.activeDefaultField$Hiyz,  Ext.form.Labelable));
    if (this.activeDefaultField$Hiyz
            && notLabelable || this.delegateLabelClickOnly) {
      ev.stopEvent();
      this.activeDefaultField$Hiyz.focus();
    }
  }/*

  private*/ function setInputId(newInputId/*:String*/)/*:void*/ {
    this._inputId$Hiyz = newInputId;
    // only set if rendered, otherwise getInputId will be called upon render from Labelable
    if (this.rendered && !this.delegateLabelClickOnly) {
      this.labelEl.set({"for": newInputId});
    }
  }/*

  /**
   * Specifies a selector to a {@link Component} that is used as the default field of the {@link FieldContainer}.
   * /
  [Bindable]
  public*/ function get$defaultField()/*:String*/ {
    return this._defaultField$Hiyz;
  }/*

  [Bindable]
  public*/ function set$defaultField(newDefaultField/*:String*/)/*:void*/ {
    var oldDefaultField/*:String*/ = AS3.getBindable(this,"defaultField");
    this._defaultField$Hiyz = newDefaultField;

    if (this.rendered) {
      this.updateDefaultField$Hiyz(oldDefaultField, newDefaultField);
    }
  }/*

  private*/ function updateDefaultField(oldDefaultField/*:String*/, newDefaultField/*:String*/)/*:void*/ {
    var newActiveDefaultField/*:Component*/ = newDefaultField ? this.down(newDefaultField) : null;
    if (oldDefaultField !== newDefaultField) {

      var oldLabelable/*:Labelable*/ =AS3.as( this.activeDefaultField$Hiyz,  Ext.form.Labelable);
      var newLabelable/*:Labelable*/ =AS3.as( newActiveDefaultField,  Ext.form.Labelable);

      if (this.activeDefaultField$Hiyz && !newActiveDefaultField) {
        this.defaultFocus = null;
        if (!this.delegateLabelClickOnly) {
          if (oldLabelable) {
            this.setInputId$Hiyz(null);
          } else {
            com.coremedia.ui.util.AriaUtils.removeLabelledBy(this.activeDefaultField$Hiyz.el, this.labelEl.id);
          }
        }
      }
      if (newActiveDefaultField) {
        this.defaultFocus = com.coremedia.ui.util.createComponentSelector().id(newActiveDefaultField.getId()).build();
        if (!this.delegateLabelClickOnly) {
          if (newLabelable) {
            this.setInputId$Hiyz(newLabelable.getInputId());
          } else {
            com.coremedia.ui.util.AriaUtils.addLabelledBy(newActiveDefaultField.el, this.labelEl.id);
          }
        }
      }


      this.activeDefaultField$Hiyz = newActiveDefaultField;
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.form.FieldContainer",
      activeDefaultField$Hiyz: null,
      _inputId$Hiyz: null,
      _defaultField$Hiyz: null,
      delegateLabelClickOnly: false,
      fieldGroup: false,
      constructor: AdvancedFieldContainer$,
      super$Hiyz: function() {
        Ext.form.FieldContainer.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      getInputId: getInputId,
      onLabelClick$Hiyz: onLabelClick,
      setInputId$Hiyz: setInputId,
      getDefaultField: get$defaultField,
      setDefaultField: set$defaultField,
      updateDefaultField$Hiyz: updateDefaultField,
      config: {defaultField: undefined},
      requires: [
        "Ext",
        "Ext.form.FieldContainer",
        "Ext.form.Labelable"
      ],
      uses: [
        "com.coremedia.ui.util.AriaUtils",
        "com.coremedia.ui.util.createComponentSelector"
      ]
    };
});
