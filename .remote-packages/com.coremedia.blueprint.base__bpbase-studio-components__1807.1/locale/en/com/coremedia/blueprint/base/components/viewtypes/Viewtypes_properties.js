/**
 * This file contains localization of viewtype names and descriptions.
 * The name of a viewtype is looked up at the key consisting of the name
 * of the viewtype document and a _text suffix.
 * The long description of a viewtype is looked up at the key consisting of the name
 * of the viewtype document and a _description suffix.
 *[PublicApi]
 */
Ext.define("com.coremedia.blueprint.base.components.viewtypes.Viewtypes_properties", {

      /**
       * The name of the default viewtype that is represented by an empty link.
      */
  "_text": "Default",
  "contentTypes": "CMViewtype",
  "no_image": "No detailed image information available"
}, function() {

  com.coremedia.blueprint.base.components.viewtypes.Viewtypes_properties.INSTANCE = new com.coremedia.blueprint.base.components.viewtypes.Viewtypes_properties();
});