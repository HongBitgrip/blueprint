Ext.define("com.coremedia.cms.editor.sdk.dashboard.WidgetType", function(WidgetType) {/*package com.coremedia.cms.editor.sdk.dashboard {

import ext.Component;

/**
 * A type of widgets that can be added to the Studio's dashboard.
 * It serves as a factory for widgets and knows how to save and restore widgets' states.
 * /
[PublicApi]
public interface WidgetType {

  /**
   * Return the string identifying this widget type.
   * @return a string identifying this widget type
   * /
  function getId():String;

  /**
   * Factory method that creates a new widget of this widget type.
   * It takes a state object and restores that state in the newly created widget.
   * If present, the <code>widgetTypeId</code> has already been removed
   * from the state object.
   * If the widget has state, it can implement the interface
   * <code>StateHolder</code> to provide feedback about state changes.
   *
   * @param state the state based on which the new widget is initialized
   * @return a new widget that is to be added to the dashboard
   *
   * @see com.coremedia.ui.data.StateHolder
   * /
  function createWidget(state:Object):Component;

  /**
   * Given a widget component created previously by this widget type,
   * return an array of tools to show for the given widget. Return null, if
   * no tools can be provided. Note that the reload button present in many
   * widgets is special in that it appears automatically when the the widget
   * component implements the Reloadable interface.
   *
   * @param widget the widget component
   * @return the tools
   *
   * @see Reloadable
   * /
  function createTools(widget:Component):Array;

  /**
   * Factory method that creates a new widget editor of this widget type.
   * It takes a state object and initializes the editor with this state object.
   * If present, the <code>widgetTypeId</code> has already been removed
   * from the state object.
   * The editor component should implement the interface
   * <code>StateHolder</code> to provide feedback about state changes.
   * <p>
   *   If this widget type supports no editable configuration options,
   *   the method may return null.
   * </p>
   *
   * @param state the state based on which the new editor widget is initialized
   * @return a new widget that is to be added to the dashboard
   *
   * @see com.coremedia.ui.data.StateHolder
   * /
  function createEditor(state:Object):Component;

  /**
   * Return the icon class for the icon in the widget creation banner in edit mode.
   *
   * @return the icon class
   * /
  function getIconCls(): String;

  /**
   * Return the name of this widget type for display in edit mode.
   *
   * @return the name
   * /
  function getName(): String;

  /**
   * Return a description of this widget type for displaying a help text in edit mode.
   *
   * @return the description
   * /
  function getDescription(): String;

  /**
   * Return a description of this widget type for displaying a help text in edit mode, encoded
   * in HTML. This allows formatted descriptions of the widget type.
   * Note that the output of this method is written directly into the DOM
   * without escaping special characters.
   *
   * @return the description
   * /
  function getDescriptionHTML(): String;

  /**
   *  Return the default number of rows spanned by widgets of this widget type.
   *
   * @return the number of rows
   * /
  function getDefaultRowSpan():uint;

  /**
   * Compute the title of this widget in ordinary dashboard mode.
   * The title may depend on the current state
   * and thus be different from the immutable name.
   *
   * @param state the current state
   * @return the title
   * /
  function getTitle(state:Object):String;

  /**
   * Whether widgets of this type can be created manually with an
   * initially empty configuration.
   *
   * @return whether widgets can be created manually
   * /
  function isManuallyCreatable():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
