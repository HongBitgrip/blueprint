Ext.define("com.coremedia.personalization.ui.persona.selector.PersonaModels", function(PersonaModels) {/*package com.coremedia.personalization.ui.persona.selector {
import com.coremedia.cap.content.Content;

/**
 * Manage all PersonaModel instances. This class is an attempt to rein in
 * the persona UI. Personas used to receive updates through multiple channels.
 * At the same time, listeners were registered and never removed, causing all
 * PersonaModel instances to leak. By using this registry, one avoids
 * having multiple instances of a single model. At the same time, the models
 * may take care of loading themselves.
 * /
// Yes, the situation is still far from perfect.
public class PersonaModels {
  private static const*/var byUriPath$static/*: Object*/;/* =*/function byUriPath$static_(){byUriPath$static=( {});};/*

  public static*/ function forContent$static(content/*:Content*/)/*:PersonaModel*/ {
    var uriPath/*:String*/ = content.getUriPath();
    if (!byUriPath$static[uriPath]) {
      byUriPath$static[uriPath] = new com.coremedia.personalization.ui.persona.selector.PersonaModel(content);
    }
    return byUriPath$static[uriPath];
  }/*
}*/function PersonaModels$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: PersonaModels$,
      statics: {
        byUriPath: undefined,
        forContent: forContent$static,
        __initStatics__: function() {
          byUriPath$static_();
        }
      },
      uses: ["com.coremedia.personalization.ui.persona.selector.PersonaModel"]
    };
});
