Ext.define("com.coremedia.cap.content.ContentObject", function(ContentObject) {/* /**
 * Created by IntelliJ IDEA.
 * User: mbruegma
 * Date: 18.10.11
 * Time: 13:21
 * To change this template use File | Settings | File Templates.
 * /
package com.coremedia.cap.content {
import com.coremedia.cap.common.CapObject;

/**
 * Fires when the type of this Content becomes available.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.TYPE
 * @see Content#getType()
 * /
[Event(name="type", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * The uniform aspects of contents and versions.
 *
 * @see com.coremedia.cap.content.Content
 * @see com.coremedia.cap.content.Version
 * /
[PublicApi]
public interface ContentObject extends CapObject {
  /**
   * Returns this Content's <code>ContentType</code>.
   *
   * @return this Content's <code>ContentType</code>.
   *
   * @see ContentPropertyNames#TYPE
   * /
  function getType():ContentType;

  /**
   * Return a <code>ContentProperties</code> object representing the project-specific properties of this Content.
   * @return a <code>ContentProperties</code> object representing the project-specific properties of this Content.
   *
   * @see ContentPropertyNames#PROPERTIES
   * /
  function getProperties():ContentProperties;

  /**
   * Return the ContentRepository this Content comes from.
   *
   * @return the ContentRepository this Content comes from
   * /
  function getRepository():ContentRepository;

  /**
   * Return true, if this object represents a content.
   *
   * @return true, if this object represents a content.
   *
   * @see Content
   * /
  function isContent():Boolean;

  /**
   * Return true, if this object represents a version.
   *
   * @return true, if this object represents a version.
   *
   * @see Content
   * /
  function isVersion():Boolean;

  /**
   * Returns whether this content is destroyed (has been destroyed on the server)
   * or never existed.
   *
   * Destruction must not be confused with deletion: A deleted resource can be
   * restored, while destruction is irreversible.
   *
   * This method does not cause the bean to be loaded.
   * Call <code>load()</code> if necessary.
   * The destroyed flag may be known even if the bean has not been loaded.
   * This method registers a dependency with the dependency tracker.
   *
   * @return true, if this bean is destroyed (has been destroyed on the server)
   *   or never existed, false, if it exists,
   *   and <code>undefined</code>, if its existence is not known.
   *
   * @see com.coremedia.ui.data.Bean#getState()
   * @see com.coremedia.ui.data.BeanState#NON_EXISTENT
   * /
  function isDestroyed():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.common.CapObject"],
      requires: ["com.coremedia.cap.common.CapObject"]
    };
});
