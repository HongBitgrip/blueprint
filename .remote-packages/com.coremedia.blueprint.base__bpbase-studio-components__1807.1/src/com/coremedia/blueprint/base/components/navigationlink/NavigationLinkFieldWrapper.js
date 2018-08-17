Ext.define("com.coremedia.blueprint.base.components.navigationlink.NavigationLinkFieldWrapper", function(NavigationLinkFieldWrapper) {/*package com.coremedia.blueprint.base.components.navigationlink{
import com.coremedia.blueprint.base.components.navigationlink.*;
import ext.form.FieldContainer;
import net.jangaroo.ext.Exml;
public class NavigationLinkFieldWrapper extends FieldContainer{

    import com.coremedia.ui.data.Bean;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.blueprint.base.components.config.navigationLinkFieldWrapper";

    public*/function NavigationLinkFieldWrapper$(config/*:NavigationLinkFieldWrapper = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.form.FieldContainer*/ =AS3.cast(Ext.form.FieldContainer,{});
    var defaults_$1/*:NavigationLinkFieldWrapper*/ =AS3.cast(NavigationLinkFieldWrapper,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"label")));
    config_$1.itemId = "navigationGrid";
    var local_NavigationLinkField_31_5_$1/*: com.coremedia.blueprint.base.components.navigationlink.NavigationLinkField*/ =AS3.cast(com.coremedia.blueprint.base.components.navigationlink.NavigationLinkField,{});
    AS3.setBindable(local_NavigationLinkField_31_5_$1,"doctype" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"doctype")));
    local_NavigationLinkField_31_5_$1.emptyText =net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"emptyText"));
    AS3.setBindable(local_NavigationLinkField_31_5_$1,"valueExpression" , com.coremedia.ui.data.ValueExpressionFactory.create(AS3.getBindable(config,"propertyName"), AS3.getBindable(config,"model")));
    AS3.setBindable(local_NavigationLinkField_31_5_$1,"siteExpression" , AS3.getBindable(config,"siteExpression"));
    config_$1.items = [local_NavigationLinkField_31_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$bcwR(config_$1);
  }/*

    [Bindable]
    public var model:Bean;
    [Bindable]
    public var siteExpression:ValueExpression;

    [Bindable]
    public var propertyName:String;

    [Bindable]
    public var label:String;

    [Bindable]
    public var doctype:String;

    [Bindable]
    public var emptyText:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.form.FieldContainer",
      alias: "widget.com.coremedia.blueprint.base.components.config.navigationLinkFieldWrapper",
      constructor: NavigationLinkFieldWrapper$,
      super$bcwR: function() {
        Ext.form.FieldContainer.prototype.constructor.apply(this, arguments);
      },
      config: {
        model: null,
        siteExpression: null,
        propertyName: null,
        label: null,
        doctype: null,
        emptyText: null
      },
      requires: [
        "Ext.form.FieldContainer",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.blueprint.base.components.navigationlink.NavigationLinkField"]
    };
});
