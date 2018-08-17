Ext.define("com.coremedia.cms.editor.sdk.premular.PremularFieldGroups", function(PremularFieldGroups) {/*package com.coremedia.cms.editor.sdk.premular {
import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.struct.Struct;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.beanFactory;

/**
 * Objects of this classes are created for each premular.
 * The save the state of all PropertyFieldGroups so that
 * they can accessed synchronously when the group is rendered.
 * /
public class PremularFieldGroups {

  private var fieldCache:Bean =*/function fieldCache_(){this.fieldCache$EB1w=( com.coremedia.ui.data.beanFactory.createLocalBean());}/*;

  public*/ function PremularFieldGroups$()/*:void*/ {fieldCache_.call(this);
  }/*

  /**
   * Returns the PropertyFieldGroup state for the given document type and item id.
   * The state may have not been stored yet.
   * @param contentTypeName the document type to find the states for
   * @param itemId the item id of the component to find the collapsible state for
   * /
  public*/ function getGroup(contentTypeName/*:String*/, itemId/*:String*/)/*:PremularFieldGroup*/ {
    var groups/*:Array*/ = this.fieldCache$EB1w.get(contentTypeName);
    if(groups) {
      for/* each*/(var $1=0;$1</* in*/ groups.length;++$1) {var group/*:PremularFieldGroup*/ =groups[$1];
        if(group.getItemId() === itemId) {
          return group;
        }
      }
    }
    return null;
  }/*

  /**
   * Loads all collapsible states from the user settings
   * @param contentTypeName the document type to load the states for
   * /
  public*/ function loadStatesFor(contentTypeName/*:String*/)/*:void*/ {
    var formFields/*:Struct*/ = com.coremedia.cms.editor.sdk.editorContext.getPreferences().get('forms');
    if(formFields) {
      var fields/*:Struct*/ = formFields.get(contentTypeName);
      if(fields) {
        var descriptors/*:Array*/ = fields.getType().getDescriptors();
        for/* each*/(var $1=0;$1</* in*/ descriptors.length;++$1) {var desc/*:CapPropertyDescriptor*/ =descriptors[$1];
          var itemId/*:String*/ = desc.name;
          var collapsed/*:Boolean*/ = fields.get(itemId);

          var group/*:PremularFieldGroup*/ = new com.coremedia.cms.editor.sdk.premular.PremularFieldGroup(itemId, collapsed);
          if(!this.fieldCache$EB1w.get(contentTypeName)) {
            this.fieldCache$EB1w.set(contentTypeName, []);
          }
          this.fieldCache$EB1w.get(contentTypeName).push(group);
        }
      }
    }
  }/*

  public*/ function updatePremularFieldGroup(contentTypeName/*:String*/, itemId/*:String*/, isCollapsed/*:Boolean*/)/*:PremularFieldGroup*/ {
    var group/*:PremularFieldGroup*/ = this.getGroup(contentTypeName, itemId);
    if (group) {
      group.setCollapsed(isCollapsed);
    } else {
      if(!this.fieldCache$EB1w.get(contentTypeName)) {
        this.fieldCache$EB1w.set(contentTypeName, []);
      }
      this.fieldCache$EB1w.get(contentTypeName).push(new com.coremedia.cms.editor.sdk.premular.PremularFieldGroup(itemId, isCollapsed));
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: PremularFieldGroups$,
      getGroup: getGroup,
      loadStatesFor: loadStatesFor,
      updatePremularFieldGroup: updatePremularFieldGroup,
      requires: ["com.coremedia.ui.data.beanFactory"],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.premular.PremularFieldGroup"
      ]
    };
});
