Ext.define("com.coremedia.cms.studio.imageeditor.util.TransformationChain", function(TransformationChain) {/*package com.coremedia.cms.studio.imageeditor.util {
import ext.Ext;

/**
 * helper class for de/serializing REST API transform command chains
 * reads string in format
 *    crop;x=10;y=10;width=100;height=120/scale;width=100;height=0
 * and returns array
 *    [{crop:{x:10, y:10, width:100, height:120}}, {scale:{width:100, height:0}}]
 * /
public class TransformationChain {

  /**
   *
   * @param chain
   * @return
   * /
  public static*/ function deserialize$static(chain/*:String*/)/*:Array*/ {
    var commands/*:Array*/ = [];
    chain && Ext.each(chain.split('/'), function (transformation/*:String*/)/*:void*/ {
      var frags/*:Array*/ = transformation.split(';'),
              transformation_name/*:String*/ =AS3.as( frags.shift(),  String), keyval/*:Array*/,
              cmd/*:Object*/ = {};
      cmd[transformation_name] = {};
      Ext.each(frags, function (keyval_pair/*:String*/)/*:void*/ {
        keyval = keyval_pair.split("=");
        if (Ext.isNumber(keyval[1])) {
          cmd[transformation_name][keyval[0]] = Number(keyval[1]);
        } else if (Ext.isBoolean(keyval[1])) {
          cmd[transformation_name][keyval[0]] = Boolean(keyval[1]);
        } else if (Ext.isString(keyval[1])) {
          cmd[transformation_name][keyval[0]] = String(keyval[1]);
        }
      }, null);
      commands.push(cmd);
    }, null);
    return commands;
  }/*

  public static*/ function serialize$static(commands/*:Array*/)/*:String*/ {
    var outter/*:Array*/ = [];
    Ext.each(commands, function (cmd/*:Object*/)/*:void*/ {
      Ext.iterate(cmd, function (cmd_name/*:String*/, cmd_params/*:Object*/)/*:void*/ {
        var inner/*:Array*/ = [];
        Ext.iterate(cmd_params, function (cmd_prop_name/*:String*/, cmd_value/*:**/, prop/*:Object*/)/*:void*/ {
          inner.push(cmd_prop_name + '=' + prop[cmd_prop_name]);
        }, null);
        outter.push(cmd_name + ';' + inner.join(';'));
      }, null);
    }, null);
    return outter.join('/');
  }/*
}*/function TransformationChain$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: TransformationChain$,
      statics: {
        deserialize: deserialize$static,
        serialize: serialize$static
      },
      requires: ["Ext"]
    };
});
