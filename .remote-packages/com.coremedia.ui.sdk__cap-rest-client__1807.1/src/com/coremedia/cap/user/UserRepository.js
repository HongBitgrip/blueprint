Ext.define("com.coremedia.cap.user.UserRepository", function(UserRepository) {/*package com.coremedia.cap.user {

/**
 * A user repository client, allowing access to
 * users and groups. Users and groups are transparently cached.
 * /
[PublicApi]
public interface UserRepository {

  /**
   * The name of the built in domain of the user manager server.
   *
   * <p>The value of this constant is "" (the empty string).</p>
   * /
  function get builtInDomainName():String;

  /**
   * Returns the Member with the given URI path. Returns null,
   * if URI path does not match the User or Group path pattern.
   *
   * <p>This delegates to<ul>
   *   <li><code>getGroup()</code></li>
   *   <li><code>getUser()</code></li>
   * </ul></p>
   * <p>to find the Member with the given URI path.</p>
   *
   * @param uriPath the URI path of the Member to return
   * @return the Member with the given URI path, or null,
   *         if URI path does not match the User or Group path pattern.
   * /
  function getMember(uriPath:String):Member;

  /**
   * Returns the User with the given URI path. Returns null,
   * if URI path does not match the User URI path pattern.
   *
   * @param uriPath the URI path of the User to return
   * @return the User with the given URI path, or null,
   *         if URI path does not match the User URI path pattern
   * /
  function getUser(uriPath:String):User;

  /**
   * Returns the Group with the given URI path. Returns null,
   * if URI path does not match the Group URI path pattern.
   *
   * @param uriPath the URI path of the Group to return
   * @return the Group with the given URI path, or null,
   *         if URI path does not match the Group URI path pattern
   * /
  function getGroup(uriPath:String):Group;

  /**
   * Returns the Group with the given name and domain,
   * or null, if there is no group found.
   *
   * <p>Name and domain are separated by an at character (<code>&#64;</code>).
   * If no at character occurs in <code>nameAtDomain</code>, the domain is
   * assumed to be the builtin domain.
   * There must be at most one at character in <code>nameAtDomain</code>.</p>
   *
   * @param nameAtDomain the name and domain of the Group to return
   * @param callback the function that is called with the group matching name and domain or
   * null if no group was found
   * <p>Method signature: <code>function(group:Group):void</code></p>
   *
   * @see Group
   * /
  function getGroupByName(nameAtDomain:String, callback:Function):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
