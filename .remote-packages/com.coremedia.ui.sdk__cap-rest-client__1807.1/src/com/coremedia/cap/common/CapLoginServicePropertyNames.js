Ext.define("com.coremedia.cap.common.CapLoginServicePropertyNames", function(CapLoginServicePropertyNames) {/*package com.coremedia.cap.common {

/**
 * CapConnectionPropertyNames is a container for static identifiers of CapLoginService property names.
 * Use these if you want to attach listeners to CapLoginService properties or access them in a generic way.
 * The property constants refer to the corresponding properties in the CapLoginService interface.
 *
 * @see com.coremedia.cap.common.CapConnection
 * @see com.coremedia.ui.data.Bean#addPropertyChangeListener()
 * @see com.coremedia.ui.data.Bean#removePropertyChangeListener()
 * @see com.coremedia.ui.data.Bean#hasPropertyChangeListener()
 * @see com.coremedia.ui.data.Bean#get()
 * @see com.coremedia.ui.data.Bean#set()
 * /
public class CapLoginServicePropertyNames {

  /**
   * @private
   * Do not invoke. This class only contains constants.
   * /
  public*/ function CapLoginServicePropertyNames$() {
  }/*

  /**
   * @see com.coremedia.cap.common.CapLoginService#getVersion()
   * /
  public static const VERSION:String = 'version';

  /**
   * @eventType domains
   * @see com.coremedia.cap.common.CapLoginService#getDomains()
   * /
  public static const DOMAINS:String = 'domains';

}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: CapLoginServicePropertyNames$,
      statics: {
        VERSION: 'version',
        DOMAINS: 'domains'
      }
    };
});
