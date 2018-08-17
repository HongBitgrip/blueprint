Ext.define("com.coremedia.elastic.social.studio.usermanagement.actions.DeleteUserImageAction", function(DeleteUserImageAction) {/*package com.coremedia.elastic.social.studio.usermanagement.actions{
import com.coremedia.elastic.social.studio.usermanagement.actions.*;
import net.jangaroo.ext.Exml;

    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class DeleteUserImageAction extends DeleteUserImageActionBase{

    import com.coremedia.ui.data.ValueExpression;

    import mx.resources.ResourceManager;

    public*/function DeleteUserImageAction$(config/*:DeleteUserImageAction = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.usermanagement.actions.DeleteUserImageActionBase*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.actions.DeleteUserImageActionBase,{});
    var defaults_$1/*:DeleteUserImageAction*/ =AS3.cast(DeleteUserImageAction,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( mx.resources.ResourceManager.getInstance().getString('com.coremedia.icons.CoreIcons', 'remove')));
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$QnMG(config_$1);
  }/*

    /**
     * The ValueExpression which holds the user whose image shall be deleted.
     * /
    [Bindable]
    public var userValueExpression:ValueExpression;

    /**
     The callback which is called after successfully deleting the users image.
     * /
    [Bindable]
    public var success:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.usermanagement.actions.DeleteUserImageActionBase",
      constructor: DeleteUserImageAction$,
      super$QnMG: function() {
        com.coremedia.elastic.social.studio.usermanagement.actions.DeleteUserImageActionBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        userValueExpression: null,
        success: null
      },
      requires: [
        "com.coremedia.elastic.social.studio.usermanagement.actions.DeleteUserImageActionBase",
        "com.coremedia.icons.CoreIcons_properties",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ]
    };
});
