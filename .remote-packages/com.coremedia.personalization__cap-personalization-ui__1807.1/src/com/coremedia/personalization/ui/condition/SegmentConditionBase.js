Ext.define("com.coremedia.personalization.ui.condition.SegmentConditionBase", function(SegmentConditionBase) {/* /*
 * Copyright CoreMedia AG, Hamburg, 2010. All rights reserved.
 * /
package com.coremedia.personalization.ui.condition {

import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.personalization.ui.plugin.ContentSelector;
import com.coremedia.personalization.ui.util.RuleXMLCoDec;
import com.coremedia.personalization.ui.util.SelectionRuleHelper;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.util.IdUtil;

import ext.data.Model;
import ext.form.field.ComboBox;
import ext.form.field.DisplayField;
import ext.util.Format;

import mx.resources.ResourceManager;

/**
 * The SegmentCondition is used to select among the currently defined segments. Segments are defined
 * in documents within the CMS.
 *
 * @xtype com.coremedia.personalization.ui.condition.SegmentCondition
 * /
[ResourceBundle('com.coremedia.personalization.ui.Personalization')]
public class SegmentConditionBase extends AbstractCondition {

  private static const*/var DEFAULT_DOCTYPE$static/*:String*/ = "CMSegment";/*
  private static const*/var DEFAULT_PATH$static/*:String*/ = "/System/personalization/segments";/*

  private static const*/var SEGMENTS_EMPTY_TEXT$static/*:String*/ = "segment";/*
  private static const*/var KEY_PATTERN$static/*:RegExp*/;/* =*/function KEY_PATTERN$static_(){KEY_PATTERN$static=( new RegExp('^([a-zA-Z_][a-zA-Z_0-9]*\\.)?' + com.coremedia.personalization.ui.util.RuleXMLCoDec.INTERNAL_CONTENT_ID_PREFIX + '(\\d+)$'));};/*

  private static const*/var OPERATORS$static/*:Array*/;/* =*/function OPERATORS$static_(){OPERATORS$static=( [com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_EQUAL, com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_NOTEQUAL]);};/*
  private static*/ var SEGMENT_OPERATOR_NAMES$static/*:Object*/;/* =*/function SEGMENT_OPERATOR_NAMES$static_(){SEGMENT_OPERATOR_NAMES$static=( {});};function static$0(){
  {
    SEGMENT_OPERATOR_NAMES$static[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_EQUAL] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_segment_is');
    SEGMENT_OPERATOR_NAMES$static[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_NOTEQUAL] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_segment_is_not');
  }}/*

  // the prefix of the properties rendered by this component
  private var propertyPrefix:String = "";

  // the combobox used to select segments
  private var segmentSelector:ContentSelector;

  /**
   * Creates a new segment condition.
   *
   * @cfg {String} conditionName name to be used for this condition instance in the condition combox
   * @cfg {String} propertyPrefix prefix of context properties mapped to this condition instance. The characters
   *  following the prefix in a property name are assumed to represent the segment. This is similar to how keywords are
   *  handled in the KeywordCondition.
   * @cfg {Boolean} isDefault set to true if this condition is to be the default condition of the condition panel. The
   *   first condition in the list of the registered conditions with the default flag set is used as the default
   * @cfg {String} operatorEmptyText the text to be shown if no operator is selected. Default to <i>operator</i>. Optional.
   * @cfg {Object} operatorNames user-presentable names of the operators. See below. Optional.
   * @cfg {String} operator the operator to select initially. Optional.
   * @cfg {String} segmentEmptyText the text to be shown in the property field if it is empty. Defaults to <i>segment</i>. Optional.
   * @cfg {String} suffixText the text to be shown after the value field. Defaults to <i>null</i>. Optional.
   * @cfg {Array} paths repository paths containing segment definitions. Default is "System/personalization/segments".
   * @cfg {String} docType type of documents containing segment definitions. Default is "CMSegment".
   *
   * The names used for the available operators can be overridden by a dictionary supplied via
   * the <b>operatorNames</b> property. The available operators and their default names are:
   *
   * <ul>
   *   <li>eq: 'is'</li>
   *   <li>ne: 'is not'</li>
   * </ul>
   *
   * @param config the configuration to be applied to this component
   * /
  public*/ function SegmentConditionBase$(config/*:SegmentCondition = null*/) {if(arguments.length<=0)config=null;

    // check the supplied configuration
    if (AS3.getBindable(config,"propertyPrefix") == null) {
      throw new AS3.Error("config.propertyPrefix must not be null");
    }
    this.propertyPrefix$3lM6 = AS3.getBindable(config,"propertyPrefix").length > 0 ? AS3.getBindable(config,"propertyPrefix") + '.' : "";

    // plugins may want to modify the list of paths used by the selector, so make sure
    // it's available before the plugins are called
    this.initSegmentSelector$3lM6(AS3.getBindable(config,"segmentEmptyText"), AS3.getBindable(config,"paths"), AS3.getBindable(config,"docType"));

    // create operator combo
    var operators/*:**/ = config['operators'];
    var operator/*:**/ = config['operator'];
    var opSelector/*:OperatorSelector*/ = this.initOpSelector(null, AS3.getBindable(config,"operatorNames"), AS3.getBindable(config,"operatorEmptyText"), operator,
            OPERATORS$static, com.coremedia.personalization.ui.condition.AbstractConditionBase.DEFAULT_OPERATOR_DISPLAY_NAMES);

    this.super$3lM6(config);

    this.addOpSelector$3lM6(opSelector, operators, operator);
    this.add(this.segmentSelector$3lM6);

    // add the suffix
    if (config['suffixText'] != null) {
      var suffixTextCfg/*:DisplayField*/ = AS3.cast(Ext.form.field.Display,{});
      suffixTextCfg.itemId = "suffixText";
      AS3.setBindable(suffixTextCfg,"value" , AS3.getBindable(config,"suffixText"));
      this.add(suffixTextCfg);
    }
  }/*

  private*/ function addOpSelector(opSelector/*:OperatorSelector*/, operators/*:**/, operator/*:**/)/*:void*/ {var this$=this;
    this.add(opSelector);/*

    const*/var internalOperators/*:Array*/ = operators != null ? com.coremedia.personalization.ui.condition.AbstractConditionBase.convertToInternalNames(operators) : OPERATORS$static;
    this.on("afterrender", function ()/*:void*/ {
      opSelector.addListener('modified', function ()/*:void*/ {
        this$.fireEvent('modified');
      });
      // set the initial operator
      opSelector.setValue(operator ? com.coremedia.personalization.ui.condition.AbstractConditionBase.internalFromExternalOperatorName(operator) : internalOperators[0]);
    });
  }/*

  /**
   * Adds a new repository path from which segment definitions are retrieved
   *
   * @param path repository path consisting of '/'-separated folder names
   * @param suffix optional suffix to be added to the labels of conditions retrieved from the path
   * /
  public*/ function addPath(path/*:String*/, suffix/*:String = ""*/)/*:void*/ {if(arguments.length<=1)suffix="";
    this.segmentSelector$3lM6.addPath(path, suffix);
  }/*

  /**
   * Removes the repository paths from the set of paths from which this component retrieves
   * segment definitions
   *
   * @param path the path to be removed; consists of '/'-separated folder names
   * /
  public*/ function removePath(path/*:String*/)/*:void*/ {
    this.segmentSelector$3lM6.removePath(path);
  }/*

  /**
   * Removes all repository paths from this component. Without any paths, the component
   * won't be able to show any segments.
   * /
  public*/ function clearPaths()/*:void*/ {
    this.segmentSelector$3lM6.clearPaths();
  }/*

  /* ------------------------------------------

   Segment selector

   ------------------------------------------ * /

  private*/ function initSegmentSelector(emptyText/*:String*/, paths/*:Array*/, docType/*:String*/)/*:void*/ {var this$=this;
    var contentSelectorCfg/*:ContentSelector*/ = AS3.cast(com.coremedia.personalization.ui.plugin.ContentSelector,{});
    contentSelectorCfg.itemId = "segmentSelector";
    contentSelectorCfg.flex = 30;
    contentSelectorCfg.listConfig = {minWidth: 200};
    AS3.setBindable(contentSelectorCfg,"emptyText" , emptyText != null ? emptyText : SEGMENTS_EMPTY_TEXT$static);
    contentSelectorCfg.forceSelection = true;
    contentSelectorCfg.typeAhead = true;
    contentSelectorCfg.allowBlank = false;
    contentSelectorCfg.triggerAction = "all";
    contentSelectorCfg.queryMode = 'local';
    AS3.setBindable(contentSelectorCfg,"paths" , paths || DEFAULT_PATH$static);
    AS3.setBindable(contentSelectorCfg,"docType" , docType || DEFAULT_DOCTYPE$static);
    this.segmentSelector$3lM6 = new com.coremedia.personalization.ui.plugin.ContentSelector(contentSelectorCfg);

    this.segmentSelector$3lM6.addListener('change', function ()/*:void*/ {
      this$.fireEvent('modified');
    });

    this.segmentSelector$3lM6.addListener('select', function (combo/*:ComboBox*/, record/*:Model*/, index/*:Number*/)/*:void*/ {
      this$.fireEvent('modified');
    });

    // if data changed (e.g. segment deleted), validate again
    this.segmentSelector$3lM6.getStore().addListener('datachanged',AS3.bind( this,"validateStore$3lM6"));

    // validate again, if focus is lost (e.g. open dropdown, and click anywhere else)
    this.segmentSelector$3lM6.addListener('blur',AS3.bind( this,"validateStore$3lM6"));

    // validate again on afterrender
    this.segmentSelector$3lM6.addListener('afterrender',AS3.bind( this,"validateStore$3lM6"));

  }/*

  /**
   * Validates the comboBox entry. The comboBox will be marked as invalid if the comboBox store doesn't
   * contain the value of the comboBox.
   * /
  private*/ function validateStore()/*:void*/ {var this$=this;/*
    const*/var value/*:**/ = this.segmentSelector$3lM6.getValue();
    var numericId/*:int*/ = com.coremedia.ui.util.IdUtil.parseContentId(value);
    if (numericId > 0) {
      var bean/*:RemoteBean*/ = com.coremedia.cms.editor.sdk.editorContext.getBeanFactory().getRemoteBean(
              com.coremedia.ui.util.IdUtil.formatContentBean(numericId));
      bean.load(function ()/*:void*/ {
        // check if value is not in store
        if (this$.segmentSelector$3lM6.getStore().find(this$.segmentSelector$3lM6.valueField, value) == -1) {
          // set segment name as rawValue to avoid checking out the document
          this$.segmentSelector$3lM6.setRawValue(Ext.util.Format.htmlDecode(bean.get("name")));
          // mark as "invalid"
          this$.segmentSelector$3lM6.markInvalid(this$.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_warning_invalid_removed'));
        }
      });
    }
  }/*


  /* ------------------------------------------

   Condition interface

   ------------------------------------------ * /

  public override*/ function getPropertyName()/*:String*/ {/*
    const*/var v/*:**/ = this.segmentSelector$3lM6.getValue();
    var result/*:String*/ = this.propertyPrefix$3lM6 + com.coremedia.personalization.ui.util.RuleXMLCoDec.INTERNAL_CONTENT_ID_PREFIX;
    if (v) {
      return result + com.coremedia.ui.util.IdUtil.parseContentId(v);
    }
    return result + com.coremedia.ui.util.IdUtil.MISSING_CONTENT_ID;
  }/*

  public override*/ function setPropertyName(name/*:String*/)/*:void*/ {/*
    const*/var match/*:Object*/ = KEY_PATTERN$static.exec(name);
    if (match && match[1] == this.propertyPrefix$3lM6 && match[2] != com.coremedia.ui.util.IdUtil.MISSING_CONTENT_ID) {
      this.segmentSelector$3lM6.setValue(com.coremedia.ui.util.IdUtil.formatContentId(match[2]));
    }
    else {
      this.segmentSelector$3lM6.clearValue();
    }
  }/*

  public override*/ function getPropertyValue()/*:String*/ {
    return "true";
  }/*

  public override*/ function setPropertyValue(v/*:String*/)/*:void*/ {
    if (v !== com.coremedia.personalization.ui.util.SelectionRuleHelper.EMPTY_VALUE && v !== 'true') {
      throw AS3.cast(AS3.Error,"SegmentCondition does not support 'false' as a value. Instead, use '!= true' in your conditions.");
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.AbstractCondition",
      propertyPrefix$3lM6: "",
      segmentSelector$3lM6: null,
      constructor: SegmentConditionBase$,
      super$3lM6: function() {
        com.coremedia.personalization.ui.condition.AbstractCondition.prototype.constructor.apply(this, arguments);
      },
      addOpSelector$3lM6: addOpSelector,
      addPath: addPath,
      removePath: removePath,
      clearPaths: clearPaths,
      initSegmentSelector$3lM6: initSegmentSelector,
      validateStore$3lM6: validateStore,
      getPropertyName: getPropertyName,
      setPropertyName: setPropertyName,
      getPropertyValue: getPropertyValue,
      setPropertyValue: setPropertyValue,
      statics: {
        KEY_PATTERN: undefined,
        OPERATORS: undefined,
        SEGMENT_OPERATOR_NAMES: undefined,
        __initStatics__: function() {
          KEY_PATTERN$static_();
          OPERATORS$static_();
          SEGMENT_OPERATOR_NAMES$static_();
          static$0();
        }
      },
      requires: [
        "AS3.Error",
        "Ext.form.field.Display",
        "Ext.util.Format",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.condition.AbstractCondition",
        "com.coremedia.ui.util.IdUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.personalization.ui.condition.AbstractConditionBase",
        "com.coremedia.personalization.ui.plugin.ContentSelector",
        "com.coremedia.personalization.ui.util.RuleXMLCoDec",
        "com.coremedia.personalization.ui.util.SelectionRuleHelper"
      ]
    };
});
