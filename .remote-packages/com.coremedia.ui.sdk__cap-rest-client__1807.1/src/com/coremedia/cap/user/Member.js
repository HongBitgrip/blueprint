Ext.define("com.coremedia.cap.user.Member", function(Member) {/*package com.coremedia.cap.user {
import com.coremedia.ui.data.RemoteBean;

/**
 * A member is a User or a Group.
 * <p>A member may be a member of any number of groups.  Direct or transitive membership can be tested,
 * and the set of groups can be queried.</p>
 * <p>A member may be managed internally in the CAP system,
 * or externally on an LDAP server.
 * An external LDAP server is identified by a domain name.
 * Any LDAP attributes are mapped as CapObject String attributes.</p>
 * <p>Information about LDAP members is held in a timeout based cache.
 * An earlier refresh can be requested manually.</p>
 *
 * <p>Some invariants:</p>
 * <pre>
 * isUser() == !isGroup()
 * isExternal() == !getDomain().equals(getRepository().builtInDomainName())
 * isExternal()
 *     ? getNameAtDomain().equals(getName()+"&#64;"+getDomain())
 *     : getNameAtDomain().equals(getName())
 * </pre>
 *
 * @see #isUser()
 * @see #isGroup()
 * @see #getDomain()
 * @see #isExternal()
 * 
 * /
[PublicApi]
public interface Member extends RemoteBean {

  /**
   * Return the user repository this member comes from.
   *
   * @return the user repository this member comes from
   * /
  function getRepository():UserRepository ;


  /**
   * Returns the name of this Member. For a member,
   * the pair of name and domain is unique.
   *
   * @return the name of this Member
   * /
  function getName():String;

  /**
   * Returns this Member's domain. For a member,
   * the pair of domain and name is unique.  The domain
   * is non-empty for an LDAP member.
   *
   * @return this Member's domain
   * @see UserRepository#builtInDomainName
   * /
  function getDomain():String;

  /**
   * Returns whether this Member is a Group.
   * @return true, if this Member is a Group, false otherwise
   * @see #isUser()
   * /
  function isGroup():Boolean;

  /**
   * Returns whether this Member is a User.
   * @return true, if this Member is a User, false otherwise
   * @see #isGroup()
   * /
  function isUser():Boolean;

  /**
   * Returns whether this Member is managed by the built-in user provider.
   * @return true, if this Member is defined by the built-in user provider.
   * /
  function isBuiltIn():Boolean;

  /**
   * Returns whether this Member is managed in an external LDAP server.
   * @return true, if this Member is defined in an external LDAP server.
   * /
  function isExternal():Boolean;

  /**
   * Return whether this user or group is a direct member of the given Group.
   *
   * @return true, if this user or group is a direct member of the given Group.
   *
   * @see Group
   * /
  function isDirectMemberOf(group:Group):Boolean;

  /**
   * Call-back or return whether this user or group is a direct or indirect (transitive)
   * member of the given Group.
   *
   * <p>A group is not considered to be a parent of itself, except when
   * there is a cycle in the membership relation.</p>
   *
   * <p>If no callback is given, the result (or <code>undefined</code>
   * for "not yet known") is returned immediately,
   * and dependencies are recorded, so that this method can be used in a
   * function-based ValueExpression.</p>
   *
   * @param group the group this user or group should be checked against
   * @param callback the optional callback that is called when the membership calculation is finished
   *   <p>Callback method signature: <code>function(result:Boolean):void</code></p>
   * @return nothing, if a callback is given; otherwise, whether this user or group is a
   *   transitive member of the given group (<code>true</code>, <code>false</code>,
   *   or <code>undefined</code> if some relevant group is not yet loaded).
   *
   * @see Group
   * @see #isDirectMemberOf()
   * @see com.coremedia.ui.data.ValueExpressionFactory#createFromFunction()
   * /
  function isMemberOf(group:Group, callback:Function = null):Boolean;

  /**
   * Returns all Groups in which this user or group is a direct member.
   *
   * <p>The returned Array is a read-only snapshot of the current
   * state. Attempts to modify the returned collection have no result
   * on the server.</p>
   *
   * <p>Since result is returned immediately, it may be <code>undefined</code>.
   * If <code>undefined</code> is returned, a dependency is recorded and
   * loading of this Member is triggered, so that this method can be used
   * in a ValueExpression.</p>
   *
   * @return all groups in which this user or group
   * is a direct member.
   *
   * @see Group
   * @see #isDirectMemberOf(Group)
   * /
  function getDirectGroups():Array/* Vector.<Group> * /;
  
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.RemoteBean"],
      requires: ["com.coremedia.ui.data.RemoteBean"]
    };
});
