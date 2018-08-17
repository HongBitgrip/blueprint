Ext.define("com.coremedia.elastic.social.studio.usermanagement.details.UserWarningContainer", function(UserWarningContainer) {/*package com.coremedia.elastic.social.studio.usermanagement.details{
import com.coremedia.elastic.social.studio.usermanagement.details.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.ExtendedDisplayField;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class UserWarningContainer extends UserWarningContainerBase{

    import com.coremedia.ui.mixins.OverflowBehaviour;
    import com.coremedia.ui.mixins.ValidationState;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.DisplayFieldSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.userWarningContainer";

    public*/function UserWarningContainer$(config/*:UserWarningContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.usermanagement.details.UserWarningContainerBase*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.details.UserWarningContainerBase,{});
    var defaults_$1/*:UserWarningContainer*/ =AS3.cast(UserWarningContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.CARD_200.getSkin());
    AS3.setBindable(config_$1,"margin" , "12 0 0 0");
    var ui_ExtendedDisplayField_26_5_$1/*:com.coremedia.ui.components.ExtendedDisplayField*/ =AS3.cast(com.coremedia.ui.components.ExtendedDisplayField,{});
    ui_ExtendedDisplayField_26_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserWarningContainerBase.STATE_MESSAGES_ITEM_ID);
    AS3.setBindable(ui_ExtendedDisplayField_26_5_$1,"overflowBehaviour" , com.coremedia.ui.mixins.OverflowBehaviour.BREAK_WORD);
    AS3.setBindable(ui_ExtendedDisplayField_26_5_$1,"validationState" , com.coremedia.ui.mixins.ValidationState.ERROR);
    config_$1.items = [ui_ExtendedDisplayField_26_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$CiTM(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.usermanagement.details.UserWarningContainerBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.userWarningContainer",
      constructor: UserWarningContainer$,
      super$CiTM: function() {
        com.coremedia.elastic.social.studio.usermanagement.details.UserWarningContainerBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.usermanagement.details.UserWarningContainerBase",
        "com.coremedia.ui.components.ExtendedDisplayField",
        "com.coremedia.ui.mixins.OverflowBehaviour",
        "com.coremedia.ui.mixins.ValidationState",
        "com.coremedia.ui.skins.ContainerSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
