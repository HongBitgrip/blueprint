Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileHeader", function(UserProfileHeader) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.user{
import com.coremedia.elastic.social.studio.moderation.shared.details.user.*;
import net.jangaroo.ext.Exml;
import com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainer;
public class UserProfileHeader extends UserProfileHeaderBase{

    import com.coremedia.elastic.social.studio.model.Moderation;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.userProfileHeader";

    public*/function UserProfileHeader$(config/*:UserProfileHeader = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileHeaderBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileHeaderBase,{});
    var defaults_$1/*:UserProfileHeader*/ =AS3.cast(UserProfileHeader,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var es_ContributionStatusContainer_21_5_$1/*:com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainer*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainer,{});
    es_ContributionStatusContainer_21_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileHeaderBase.STATUS_VIEW_ITEM_ID);
    AS3.setBindable(es_ContributionStatusContainer_21_5_$1,"moderation" , AS3.getBindable(config,"moderation"));
    config_$1.items = [es_ContributionStatusContainer_21_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Wg0R(config_$1);
  }/*

    [Bindable]
    public var moderation:Moderation;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileHeaderBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.userProfileHeader",
      constructor: UserProfileHeader$,
      super$Wg0R: function() {
        com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileHeaderBase.prototype.constructor.apply(this, arguments);
      },
      config: {moderation: null},
      requires: [
        "com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileHeaderBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainer"]
    };
});
