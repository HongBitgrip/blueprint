/**
 * Properties class for ResourceBundle "PageGridPropertyField".
 */
Ext.define("com.coremedia.blueprint.base.pagegrid.PageGridPropertyField_properties", {

  requires: [
    "com.coremedia.icons.CoreIcons_properties"
  ],
      /**
       * Placements layout localizations
      */
  "PageLayout_title": "Page Layout",
  "PageLayout_allSites": "all",
  "PageLayout_tooltip": "Select the layout of this page. <br>By default, the <b>standard layout<\/b> of the site is used.<br>Changing the layout will affect the available <b>placements below<\/b>.",
  "PageLayout_error_noLayout_text": "No layout defined for this page and no default layout found.",
  "PageLayout_default_text": "Default",
  "InheritPlacementAction_text": "Inherit Placement",
  "InheritPlacementAction_tooltip": "Inherit the placement of the parent page",
  "InheritPlacementAction_tooltipPressed": "Define custom content items",
  "LockPlacementAction_text": "Lock Placement",
  "LockPlacementAction_tooltip": "Lock placement editing in all child pages",
  "PlacementState_inheritedFrom_text": "This placement is inherited from",
  "PlacementState_lockedBy_text": "This placement is locked by and inherited from",
  "PlacementState_missing_text": "No parent page is set, thus, no placement can be inherited",
  "PlacementState_missing_text_tooltip": "Click the toolbar button <b>inherit placement<\/b> to create this placement",
      /**
       * Per placement viewtype related localizations
      */
  "Placements_viewtype_tooltip": "Select the layout variant for this placement. If set, the layout variant affects how the placement is rendered."
}, function() {
  /**
   * Placement field related localizations
  */
  this.prototype["InheritPlacementAction_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.inherit;
  this.prototype["LockPlacementAction_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.no_rights;

  com.coremedia.blueprint.base.pagegrid.PageGridPropertyField_properties.INSTANCE = new com.coremedia.blueprint.base.pagegrid.PageGridPropertyField_properties();
});