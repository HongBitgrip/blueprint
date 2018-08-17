Ext.define("com.coremedia.cms.editor.sdk.actions.OpenVersionComparisonAction", function(OpenVersionComparisonAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 <p>
 An <code>ext.Action</code> that shows a version in a tab in the workarea,
 selecting a view that compares the version with the current state
 of the content.
 </p>

 * /
public class OpenVersionComparisonAction extends OpenVersionComparisonActionBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function OpenVersionComparisonAction$(config/*:OpenVersionComparisonAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.OpenVersionComparisonActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenVersionComparisonActionBase,{});
    var defaults_$1/*:OpenVersionComparisonAction*/ =AS3.cast(OpenVersionComparisonAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$XXkY(config_$1);
  }/*

    /**
     * A value expression evaluating to a content version. The current version of the
     * Content will be compared to this version.
     * /
    [Bindable]
    public var versionValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.OpenVersionComparisonActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: OpenVersionComparisonAction$,
      super$XXkY: function() {
        com.coremedia.cms.editor.sdk.actions.OpenVersionComparisonActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {versionValueExpression: null},
      requires: [
        "com.coremedia.cms.editor.sdk.actions.OpenVersionComparisonActionBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
