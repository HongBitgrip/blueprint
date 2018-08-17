Ext.define("com.coremedia.personalization.ui.condition.OperatorSelector", function(OperatorSelector) {/*package com.coremedia.personalization.ui.condition {
import com.coremedia.personalization.ui.util.SelectionRuleHelper;
import com.coremedia.ui.components.LocalComboBox;

import ext.data.ArrayStore;

import mx.resources.ResourceManager;

/**
 * ComboBox for selecting among a list of condition operators.
 * /
[ResourceBundle('com.coremedia.personalization.ui.Personalization')]
public class OperatorSelector extends LocalComboBox {

    // default operator names
    private static const*/var OPERATOR_NAMES$static/*:**/;/* =*/function OPERATOR_NAMES$static_(){OPERATOR_NAMES$static=( {});};function static$0(){
    {
        OPERATOR_NAMES$static[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_LESS_THAN] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_less');
        OPERATOR_NAMES$static[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_LESS_THAN_OR_EQUAL] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_less_equal');
        OPERATOR_NAMES$static[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_EQUAL] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_equal');
        OPERATOR_NAMES$static[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_NOTEQUAL] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_not_equal');
        OPERATOR_NAMES$static[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_GREATER_THAN_OR_EQUAL] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_greater_equal');
        OPERATOR_NAMES$static[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_GREATER_THAN] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_greater');
        OPERATOR_NAMES$static[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_CONTAINS] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_contains');
    }}/*

    public*/ function OperatorSelector$(usedOperators/*:Array*/, operatorNames/*:* = undefined*/, operatorEmptyText/*:String = undefined*/) {var this$=this;
      operatorNames = (operatorNames !== undefined) ? operatorNames : {};/*

        const*/var operatorArray/*:Array*/ = createOperators$static(usedOperators, operatorNames);
        var superConfig/*:LocalComboBox*/ = AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
        superConfig.itemId = "operatorSelector";
        superConfig.flex = 30;
        superConfig.listConfig = {
          minWidth: 130
        };
        AS3.setBindable(superConfig,"emptyText" , operatorEmptyText != null ? operatorEmptyText : this.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_operator'));
        superConfig.forceSelection = true;
        superConfig.allowBlank = false;
        superConfig.validator = function (v/*:**/)/*:**/ {
            for (var i/*:int*/ = 0; i < operatorArray.length; i++) {
                if (operatorArray[i][1] == v) {
                    return true;
                }
            }
            return this$.resourceManager.getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_invalid');
        };
        var arrayStoreCfg/*:ArrayStore*/ = AS3.cast(Ext.data.ArrayStore,{});
        arrayStoreCfg['id'] = 0;
        AS3.setBindable(arrayStoreCfg,"fields" , [
            'myId',
            'displayText'
        ]);
        AS3.setBindable(arrayStoreCfg,"data" , operatorArray);
        AS3.setBindable(superConfig,"store" , new Ext.data.ArrayStore(arrayStoreCfg));
        superConfig.valueField = 'myId';
        AS3.setBindable(superConfig,"displayField" , 'displayText');
        AS3.setBindable(superConfig,"encodeItems" , true);
        this.super$z5AG(superConfig);
        if (operatorArray.length > 0) this.setValue(operatorArray[0]);

        this.addListener('change',AS3.bind( this,"onModified$z5AG"));
        this.addListener('select',AS3.bind( this,"onModified$z5AG"));

    }/*

    private*/ function onModified()/*:void*/ {
        this.fireEvent('modified');
    }/*

    /**
     * Builds an array with operators and operator names in a form suitable for an
     * ArrayStore of a ComboBox.
     *
     * @param usedOperators the used operators as an array of operator identifiers, e.g.
     *  <code>[SelectionRuleHelper.OP_EQUAL, SelectionRuleHelper.OP_NOTEQUAL]</code>.
     * @param operatorNames new operator names for a subset of the usedOperators in a dictionary, e.g.
     *  <code>operatorNames[SelectionRuleHelper.OP_EQUAL] = 'is'</code>
     *
     * @return array that can be used as data in an ArrayStore of a ComboBox.
     * /
    private static*/ function createOperators$static(usedOperators/*:Array*/, operatorNames/*:* = undefined*/)/*:Array*/ {
      operatorNames = (operatorNames !== undefined) ? operatorNames : {};

      var operatorArray/*:Array*/ = new Array();
      for (var i/*:int*/ = 0; i < usedOperators.length; i++) {
          var op/*:String*/ = usedOperators[i];
          var opName/*:String*/ = OPERATOR_NAMES$static[op];
          if (operatorNames != null && operatorNames[op] != null) {
              opName = operatorNames[op];
          }
          var entry/*:Array*/ = [op, opName];
          operatorArray.push(entry);
      }
      return operatorArray;
    }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.LocalComboBox",
      constructor: OperatorSelector$,
      super$z5AG: function() {
        com.coremedia.ui.components.LocalComboBox.prototype.constructor.apply(this, arguments);
      },
      onModified$z5AG: onModified,
      statics: {
        OPERATOR_NAMES: undefined,
        __initStatics__: function() {
          OPERATOR_NAMES$static_();
          static$0();
        }
      },
      requires: [
        "Ext.data.ArrayStore",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.ui.components.LocalComboBox",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.personalization.ui.util.SelectionRuleHelper"]
    };
});
