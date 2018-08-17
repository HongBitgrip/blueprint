Ext.define("com.coremedia.cms.editor.sdk.member.MemberElementBase", function(MemberElementBase) {/*package com.coremedia.cms.editor.sdk.member {
import com.coremedia.cap.user.Group;
import com.coremedia.cap.user.Member;
import com.coremedia.cap.user.User;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.util.ExecuteEventually;

import ext.container.Container;

public class MemberElementBase extends Container {

  /**
   * The member bean as the underlying model.
   * /
  [Bindable]
  public var member:Member;

  /**
   * Value Expression holding the list of members where this component's member is part of.
   * The 'expand' (group) and 'remove' actions refer to this list.
   * /
  [Bindable]
  public var membersValueExpression:ValueExpression;


  /**
   * Transforms the text display of a member (default is to display the name).
   * The transformer function should have the following signature:
   *
   * <code>function memberDisplayTransformer(member:Member):String</code>
   * /
  [Bindable]
  public var memberDisplayTransformer:Function;

  /**
   * Determines whether a member shall be displayed as read-only.
   * For the read-only case, the remove button (and the expand button for a group)
   * is hidden. The predicate should have the following signature:
   *
   * &lt;code>function memberReadOnlyPredicate(member:Member):Boolean&lt;/code>
   * /
  [Bindable]
  public var memberReadOnlyPredicate:Function;

  /**
   * Custom handler function to call when the delete button for a member is clicked
   * (default behaviour is to remove the member from the value of by the
   * <code>membersValueExpression</code>).
   *
   * A custom handler function is required to have the following signature:
   * <code>function memberRemovedHandler(member:Member, membersValueExpression:ValueExpression):void</code>
   *
   * /
  [Bindable]
  public var memberRemovedHandler:Function;

  private var sessionUserUriPath:String;

  private var expandGroupButtonVisibilityVE:ValueExpression;

  private var memberReadonlyVE:ValueExpression;

  public*/ function MemberElementBase$(config/*:MemberElement = null*/) {if(arguments.length<=0)config=null;
    this.super$enFv(config);

    this.sessionUserUriPath$enFv = com.coremedia.cms.editor.sdk.editorContext.getSession().getUser().getUriPath();
  }/*

  protected*/ function expandGroup()/*:void*/ {var this$=this;
    var group/*:Group*/ =AS3.as( AS3.getBindable(this,"member"),  com.coremedia.cap.user.Group);
    if (group) {
      // Create clone via concat([])
      var newSelectedMembers/*:Array*/ = AS3.getBindable(this,"membersValueExpression").getValue().filter(function (mbm/*:Member*/)/*:Boolean*/ {
        return (mbm !== AS3.getBindable(this$,"member"));
      });

      function eventuallySetValue()/*:void*/ {
        AS3.getBindable(this$,"membersValueExpression").setValue(newSelectedMembers);
      }

      var execEvt/*:ExecuteEventually*/ = new com.coremedia.ui.util.ExecuteEventually(eventuallySetValue);
      this.addSelectedUsersRecursively$enFv(AS3.as(AS3.getBindable(this,"member"),  com.coremedia.cap.user.Group), newSelectedMembers, execEvt);
      execEvt.proceed();
    }
  }/*

  private*/ function addSelectedUsersRecursively(group/*:Group*/, newSelectedMembers/*:Array*/, execEvt/*:ExecuteEventually*/)/*:void*/ {var this$=this;
    execEvt.delay();
    group.loadDirectMembers(function (members/*:Array*/)/*:void*/ {
      com.coremedia.ui.data.RemoteBeanUtil.loadAll(function ()/*:void*/ {
        members.forEach(function (member/*:Member*/)/*:void*/ {
          if (newSelectedMembers.indexOf(member) === -1) {
            if (AS3.is(member,  com.coremedia.cap.user.User)) {
              // do not add oneself
              if (member.getUriPath() != this$.sessionUserUriPath$enFv) {
                newSelectedMembers.push(member);
              }
            } else {
              this$.addSelectedUsersRecursively$enFv(AS3.as(member,  com.coremedia.cap.user.Group), newSelectedMembers, execEvt);
            }
          }
        });
        execEvt.proceed();
      }, members);
    });
  }/*

  protected*/ function removeMember()/*:void*/ {var this$=this;
    if (AS3.getBindable(this,"memberRemovedHandler")) {
      AS3.getBindable(this,"memberRemovedHandler")(AS3.getBindable(this,"member"), AS3.getBindable(this,"membersValueExpression"));
    } else {
      var members/*:Array*/ = AS3.getBindable(this,"membersValueExpression").getValue().concat([]);
      var newSelectedMembers/*:Array*/ = members.filter(function (mbm/*:Member*/)/*:Boolean*/ {
        return AS3.getBindable(this$,"member") !== mbm;
      });
      AS3.getBindable(this,"membersValueExpression").setValue(newSelectedMembers);
    }
  }/*

  protected*/ function getExpandGroupsButtonVisibilityVE()/*:ValueExpression*/ {var this$=this;
    if (!this.expandGroupButtonVisibilityVE$enFv) {
      this.expandGroupButtonVisibilityVE$enFv = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        return (AS3.getBindable(this$,"member").isGroup());
      });
    }
    return this.expandGroupButtonVisibilityVE$enFv;
  }/*

  protected*/ function computeMemberName()/*:String*/ {
    if (AS3.getBindable(this,"member").isLoaded()) {
      if (AS3.getBindable(this,"memberDisplayTransformer")) {
        return AS3.getBindable(this,"memberDisplayTransformer")(AS3.getBindable(this,"member"));
      } else {
        return AS3.getBindable(this,"member").getName();
      }
    } else {
      AS3.getBindable(this,"member").load();
    }

    return undefined;
  }/*

  protected*/ function getMemberVisibleVE()/*:ValueExpression*/ {var this$=this;
    if (!this.memberReadonlyVE$enFv) {
      this.memberReadonlyVE$enFv = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        if (AS3.getBindable(this$,"memberReadOnlyPredicate")) {
          return !AS3.getBindable(this$,"memberReadOnlyPredicate")(AS3.getBindable(this$,"member"));
        } else {
          return true;
        }
      });
    }

    return this.memberReadonlyVE$enFv;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      sessionUserUriPath$enFv: null,
      expandGroupButtonVisibilityVE$enFv: null,
      memberReadonlyVE$enFv: null,
      constructor: MemberElementBase$,
      super$enFv: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      expandGroup: expandGroup,
      addSelectedUsersRecursively$enFv: addSelectedUsersRecursively,
      removeMember: removeMember,
      getExpandGroupsButtonVisibilityVE: getExpandGroupsButtonVisibilityVE,
      computeMemberName: computeMemberName,
      getMemberVisibleVE: getMemberVisibleVE,
      config: {
        member: null,
        membersValueExpression: null,
        memberDisplayTransformer: null,
        memberReadOnlyPredicate: null,
        memberRemovedHandler: null
      },
      requires: [
        "Ext.container.Container",
        "com.coremedia.cap.user.Group",
        "com.coremedia.cap.user.User",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.util.ExecuteEventually"
      ],
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
