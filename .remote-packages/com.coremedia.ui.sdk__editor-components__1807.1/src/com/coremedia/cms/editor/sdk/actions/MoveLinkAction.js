Ext.define("com.coremedia.cms.editor.sdk.actions.MoveLinkAction", function(MoveLinkAction) {/*package com.coremedia.cms.editor.sdk.actions{
import com.coremedia.cms.editor.sdk.actions.*;
import net.jangaroo.ext.Exml;
[PublicApi]
public class MoveLinkAction extends MoveLinkActionBase{

    import com.coremedia.cms.editor.sdk.util.ILinkListWrapper;

    import ext.grid.GridPanel;

    public static const ACTION_ID_UP:String =*/function ACTION_ID_UP$static_(){MoveLinkAction.ACTION_ID_UP=( com.coremedia.cms.editor.sdk.actions.MoveAction.UP);}/*;
    public static const ACTION_ID_DOWN:String =*/function ACTION_ID_DOWN$static_(){MoveLinkAction.ACTION_ID_DOWN=( com.coremedia.cms.editor.sdk.actions.MoveAction.DOWN);}/*;

    public*/function MoveLinkAction$(config/*:MoveLinkAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.actions.MoveLinkActionBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.MoveLinkActionBase,{});
    var defaults_$1/*:MoveLinkAction*/ =AS3.cast(MoveLinkAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$NJgi(config_$1);
  }/*

    [Bindable]
    public var direction:String;

    [Bindable]
    public var grid:GridPanel;

    [Bindable]
    public var linkListWrapper:ILinkListWrapper;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.MoveLinkActionBase",
      metadata: {"": ["PublicApi"]},
      constructor: MoveLinkAction$,
      super$NJgi: function() {
        com.coremedia.cms.editor.sdk.actions.MoveLinkActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        direction: null,
        grid: null,
        linkListWrapper: null
      },
      statics: {
        ACTION_ID_UP: undefined,
        ACTION_ID_DOWN: undefined,
        __initStatics__: function() {
          ACTION_ID_UP$static_();
          ACTION_ID_DOWN$static_();
        }
      },
      requires: [
        "com.coremedia.cms.editor.sdk.actions.MoveLinkActionBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.actions.MoveAction"]
    };
});
