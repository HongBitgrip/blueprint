Ext.define("com.coremedia.personalization.ui.plugin.RepositoryPathObserverManager", function(RepositoryPathObserverManager) {/*package com.coremedia.personalization.ui.plugin {
import joo.debug;

public class RepositoryPathObserverManager {

  private static const*/var instances$static/*:Object*/;/* =*/function instances$static_(){instances$static=( {});};/*
  private static const*/var counter$static/*:Object*/;/* =*/function counter$static_(){counter$static=( {});};/*
  

  /**
   * Returns the repository observer instance of the supplied configuration.
   * Makes sure that is at most a single observer for each config to prevent unnecessary polling.
   *
   * @param path the repository path to observe as a '/'-separated sequence of folder names (not IDs)
   * @param contentType the content type to look for
   * @param pollingInterval interval in ms between requests to the repository
   *
   * @return an observer instance
   * /
  public static*/ function getInstance$static(path/*:String*/, contentType/*:String*/, pollingInterval/*:int*/)/*:RepositoryPathObserver*/ {/*
    const*/var instanceKey/*:String*/ = createKey$static(path, contentType, pollingInterval);
    var instance/*:RepositoryPathObserver*/ = instances$static[instanceKey];
    if (!instance) {
      instance = new com.coremedia.personalization.ui.plugin.RepositoryPathObserver(path, contentType, pollingInterval);
      instances$static[instanceKey] = instance;
      counter$static[instanceKey] = 1;
    } else {
      counter$static[instanceKey] ++;
    }
    if(joo.debug) {
      AS3.trace("[INFO] " + counter$static[instanceKey] + " references to repository path observer for instanceKey " + instanceKey + " recorded");
    }
    return instance;
  }/*

  private static*/ function createKey$static(path/*:String*/, contentType/*:String*/, pollingInterval/*:int*/)/*:String*/ {
    return path + '#' + contentType + '#' + pollingInterval;
  }/*
  
  internal static*/ function releaseInstance$static(path/*:String*/, documentType/*:String*/, pollingInterval/*:int*/)/*:void*/ {/*
    const*/var key/*:String*/ = createKey$static(path, documentType, pollingInterval);/*
    const*/var count/*:int*/ = counter$static[key];
    if(count > 1) {
      counter$static[key] --;
      if(joo.debug){
        AS3.trace("[INFO] unregistered instance for key " + key + " ("  + counter$static[key] + " instances remaining)");
      }
    } else {/*
      const*/var inst/*:RepositoryPathObserver*/ = instances$static[key];
      if(inst){
        inst.clearInterval();
      }
      clearReferences$static(key);
      if(joo.debug) {
        AS3.trace("[INFO] destroyed repository path observer for key " + key);
      }
    }
  }/*

  private static*/ function clearReferences$static(key){
    delete counter$static[key];
    delete instances$static[key];
    if(joo.debug) {
      AS3.trace("[INFO] cleared repository path observer references for key " + key);
    }
  }/*
}*/function RepositoryPathObserverManager$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: RepositoryPathObserverManager$,
      statics: {
        instances: undefined,
        counter: undefined,
        getInstance: getInstance$static,
        releaseInstance: releaseInstance$static,
        __initStatics__: function() {
          instances$static_();
          counter$static_();
        }
      },
      requires: ["AS3.trace"],
      uses: ["com.coremedia.personalization.ui.plugin.RepositoryPathObserver"]
    };
});
