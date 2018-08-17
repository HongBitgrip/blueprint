Ext.define("com.coremedia.cms.editor.sdk.premular.DocumentTabPanelBase", function(DocumentTabPanelBase) {/*package com.coremedia.cms.editor.sdk.premular {

import com.coremedia.cap.content.Content;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;
import com.coremedia.ui.mixins.IHighlightableMixin;
import com.coremedia.ui.mixins.ILazyItemsContainerMixin;
import com.coremedia.ui.util.MathUtil;
import com.coremedia.ui.util.createComponentSelector;

import ext.Component;
import ext.Ext;
import ext.container.Container;
import ext.dom.Element;
import ext.form.field.Checkbox;
import ext.panel.Panel;
import ext.tab.TabPanel;

/**
 * Fires after this component was touched manually by a subcomponent.
 * /
[Event(name = "documentTabPanelTouched")] // NOSONAR - no type

/**
 * The base class for tab panels that can be used for tabbed document forms.
 * Do not inherit from this class directly. Instead, inherit from
 * <code>DocumentTabPanel</code>.
 *
 * @see DocumentTabPanel
 * /
[PublicApi]
public class DocumentTabPanelBase extends TabPanel implements FocusListener, ILazyItemsContainerMixin {
  /**
   * An event to be fired the panel when a component in its scope
   * has been touched manually. The panel may then take appropriate
   * action.
   * /
  private static const*/var TOUCHED$static/*:String*/ = "documentTabPanelTouched";/*

  /**
   * The time between two soft-scrolling updates in milliseconds.
   * /
  private static const*/var SOFT_SCROLL_INTERVAL$static/*:int*/ = 30;/*

  /**
   * The registry in which information about property fields can
   * be looked up, especially about the editor components and their
   * placements on multiple tabs.
   * /
  private var propertyFieldRegistry:IPropertyFieldRegistry;

  /**
   * A value expression evaluating to the content object
   * /
  private var bindTo:ValueExpression;

  /**
   * arrays of detected property fields, indexed by document form id
   * /
  private var propertyFieldsByDocumentFormId:Object;

  /**
   * property name indexed by property field id
   * /
  private var propertyNameByPropertyFieldId:Object;

  /**
   * Set to true while the current tab is changed programmatically.
   * While true, tab change  events should not be assumed
   * to originate from a user interaction.
   * /
  private var tabChangeInProgress:Boolean = false;

  /**
   * The component that has last been identified as the current property field.
   * /
  private var currentPropertyField:Component = null;

  /**
   * The DOM element that contains the current property field
   * and that was marked with an appropriate style class.
   * /
  private var currentFieldElement:Element = null;

  /**
   * The component that has last been used to transmit a scroll position.
   * /
  private var referencePropertyField:Component = null;

  /**
   * The last known position of the referencePropertyField;
   * /
  private var referencePropertyFieldPosition:Number = NaN;

  /**
   * The component for which a focus event is expected,
   * because it was programmatically focused.
   * /
  private var expectedFocusTarget:Component = null;

  /**
   * The position to which a from has been scrolled programmatically.
   * If this position is observed when processing a scroll event,
   * that event should not be assumed
   * to originate from a user interaction.
   * /
  private var expectedScrollPosition:Number = NaN;

  /**
   * Set to true while a form is scrolled programmatically.
   * While true, scroll events should not be assumed
   * to originate from a user interaction.
   * /
  private var scrollInProgress:Boolean = false;

  /**
   * The remaining distance to scroll. If NaN, no asynchronous
   * scroll process is currently running.
   * /
  private var remainingSoftScrollDistance:Number = NaN;

  /**
   * The document form that is current scrolling softly.
   * /
  private var softScrollingForm:DocumentForm = null;

  /**
   * An object that controls the flow of focus, scroll and collapse events.
   * If null, no events are forwarded.
   * /
  [Bindable]
  public var focusForwarder:FocusForwarder;

  private var forceReadOnly:Boolean;

  /**
   * Create a new instance of this class.
   *
   * @param config the config object
   * /
  public*/ function DocumentTabPanelBase$(config/*:DocumentTabPanel = null*/) {if(arguments.length<=0)config=null;
    this.propertyFieldsByDocumentFormId$PPoz = {};
    this.propertyNameByPropertyFieldId$PPoz = {};

    this.propertyFieldRegistry$PPoz = AS3.getBindable(config,"propertyFieldRegistry");
    this.bindTo$PPoz = AS3.getBindable(config,"bindTo");

    this.super$PPoz(config);

    AS3.getBindable(this,"focusForwarder") && AS3.getBindable(this,"focusForwarder").addListener(this);

    this.setForceReadOnly((AS3.getBindable(config,"forceReadOnlyValueExpression") && AS3.getBindable(config,"forceReadOnlyValueExpression").getValue()) ?
      AS3.getBindable(config,"forceReadOnlyValueExpression").getValue() : false);

    // Before the first rendering, the correct tab should be selected.
    this.on("beforerender",AS3.bind( this,"beforeRender$PPoz"), this, {single:true});
    // React to special manual interactions by sending a show event.
    this.on(TOUCHED$static,AS3.bind( this,"sendShow$PPoz"));
    // React on collapsible changes, used for synchronizing the differencing view
    this.on("collapsibleChanged",AS3.bind( this,"collapsibleChanged$PPoz"));
  }/*

  /**
   * Event handler for the collapsible state changes on this document tab panel.
   * @param collapsibleItemId the itemId that has been expanded or collapsed
   * @param expanded true if the collapsible has been expanded
   * /
  private*/ function collapsibleChanged(collapsibleItemId/*:String*/, expanded/*:Boolean*/)/*:void*/ {
    AS3.getBindable(this,"focusForwarder").forwardCollapsibleChangeToManager(collapsibleItemId, expanded);
  }/*

  /**
   * Invoked when the focus manager fire a COLLAPSIBLE_EVENT. This is used when the state of the other
   * collapsible in the differencing view has changed.
   * @param collapsibleItemId the itemId of the collapsible to change the state for
   * @param expanded true if the collapsible state has been expanded
   * /
  public*/ function onCollapsibleChange(collapsibleItemId/*:String*/, expanded/*:Boolean*/)/*:void*/ {
    var collapsible/*:PropertyFieldGroup*/ =AS3.as( this.down(com.coremedia.ui.util.createComponentSelector().itemId(collapsibleItemId).build()),  com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup);
    if(collapsible && collapsible.rendered) {
      if(expanded) {
        collapsible.expand(true);
      }
      else {
        collapsible.collapse();
      }
    }
  }/*

  /**
   * Return the name of the content type to be edited in this form.
   * By convention, this is exactly the item id of this component.
   *
   * @return the name of the content type
   *
   * @see com.coremedia.cap.content.ContentType#getName()
   * /
  private*/ function getContentTypeName()/*:String*/ {
    return this.getItemId();
  }/*

  /**
   * Before render, ask focus forwarder for current tab and/or property
   * field and select initial tab accordingly.
   * /
  private*/ function beforeRender()/*:void*/ {
    var property/*:String*/ = AS3.getBindable(this,"focusForwarder") && AS3.getBindable(this,"focusForwarder").getProperty();
    var tabTitle/*:String*/;
    if (property) {
      // Prefer to compute the tab from the title, ...
      tabTitle = this.propertyFieldRegistry$PPoz.getTabTitle(property, this.getContentTypeName$PPoz());
    } else {
      // ... but replicate the forwarders tab if necessary.
      tabTitle = AS3.getBindable(this,"focusForwarder") && AS3.getBindable(this,"focusForwarder").getTabTitle();
    }
    if (tabTitle) {
      var tab/*:Container*/ = this.getTabByTitle$PPoz(tabTitle);
      if (tab) {
        this.setActiveTab(tab.getItemId());
        return;
      }
    }
    this.setActiveTab(0);
  }/*



  /**
   * Compute the tab title of the given component, which may be
   * either a document form, a document form dispatcher (for the classical
   * two tab mode), or an arbitrary panel (for the default meta-data
   * panel).
   *
   * @param component the component whose tab title should be computed
   * @return the tab title, or null if the title cannot be determined
   * /
  private static*/ function getTabTitle$static(component/*:Component*/)/*:String*/ {
    if (AS3.is(component,  com.coremedia.cms.editor.sdk.premular.DocumentForm)) {
      return AS3.getBindable(AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentForm,component),"title");
    }
    if (AS3.is(component,  com.coremedia.cms.editor.sdk.premular.DocumentFormDispatcher)) {
      return AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentFormDispatcher,component).title;
    }
    if (AS3.is(component,  Ext.panel.Panel)) {
      return AS3.getBindable(AS3.cast(Ext.panel.Panel,component),"title","DUMMY");
    }
    return null;
  }/*


  /**
   * Find the tab with the given title.
   *
   * @param tabTitle the title
   * @return the matching tab, or null if no such tab is available
   * /
  private*/ function getTabByTitle(tabTitle/*:String*/)/*:Container*/ {
    var tab/*:Container*/ = AS3.cast(Ext.container.Container,this.itemCollection.findBy(function (component/*:Component*/)/*:Boolean*/ {
      return getTabTitle$static(component) === tabTitle;
    }));
    return tab;
  }/*

  public*/ function onPropertyShow(bean/*:Bean*/, tabTitle/*:String*/, property/*:String*/,
                                 isFocus/*:Boolean*/, setCurrentProperty/*:Boolean*/, sendState/*:Boolean*/,
                                 position/*:Number*/, distance/*:Number*/, scrollOnly/*:Boolean*/)/*:void*/ {
    var content/*:Content*/ =AS3.as( bean,  com.coremedia.cap.content.Content);
    if (!content || content.getType().getName() !== this.getContentTypeName$PPoz()) {
      // Probably this panel is currently hidden and a document of another
      // type is being edited in the premular.
      return;
    }

    // Try to focus the matching property field first.
    if (property !== null) {
      var propertyFieldFocused/*:Boolean*/ = this.showPropertyFieldByName$PPoz(property, isFocus, setCurrentProperty, sendState, position, distance, scrollOnly);
      if (propertyFieldFocused) {
        return;
      }
    }

    // Alternatively, focus the correct tab so that the user can scroll manually.
    if (tabTitle !== null) {
      var tab/*:Container*/ = this.getTabByTitle$PPoz(tabTitle);
      if (this.getActiveTab() !== tab) {
        this.setActiveTabSilently$PPoz(tab);
        this.setCurrentPropertyField$PPoz(null);
      }
    } else {
      this.setCurrentPropertyField$PPoz(null);
    }

    if (sendState) {
      this.sendPosition$PPoz(isFocus, false, true, scrollOnly);
    }
  }/*

  private*/ function setActiveTabSilently(tab/*:Container*/)/*:void*/ {
    this.tabChangeInProgress$PPoz = true;
    try {
      this.setActiveTab(tab);
    } finally {
      this.tabChangeInProgress$PPoz = false;
    }
  }/*

  /**
   * @private
   *
   * Focus the property field for the given property name.
   * If content is provided, also checks whether the correct content is edited by
   * the field.
   *
   * This method is provided for tests, only.
   *
   * @param focusPropertyName the name of the property to focus (It has to be the full property path name, typically
   *        starting with <code>"properties."</code>
   * @return true/false whether the component could be focused or not
   * /
  public*/ function focusPropertyField(focusPropertyName/*:String*/)/*:Boolean*/ {
    return this.showPropertyFieldByName$PPoz(focusPropertyName, true, true, true, NaN, NaN, false);
  }/*

  /**
   * Focus the property field for the given property name.
   * The property name must be the full property path name, typically
   * starting with the <code>"properties."</code> prefix.
   * If a content is provided, also checks whether the correct content is edited by
   * the field.
   *
   * @param propertyName the name of the property to focus
   * @param isFocus whether the property should be focused
   *        or simply scrolled to the indicated position
   * @param setCurrentProperty whether the current property should be set
   * @param sendPositionToManager whether to inform the forwarder about the current position
   * @param targetPosition the position of the property field
   * @param distance the distance that the form was scrolled since the last position was transmitted
   *        (form content moves up = positive), or NaN if soft-scrolling should be disabled
   * @return true/false whether the component could be focused or not
   * /
  private*/ function showPropertyFieldByName(propertyName/*:String*/,
                                           isFocus/*:Boolean*/, setCurrentProperty/*:Boolean*/, sendPositionToManager/*:Boolean*/,
                                           targetPosition/*:Number*/, distance/*:Number*/, scrollOnly/*:Boolean*/)/*:Boolean*/
  {var this$=this;
    // if the property is not set, ignore it (This fixes STUDIO-864, also part of STUDIO-879 fix)
    if (!propertyName)  {
      return false;
    }
    var propertyField/*:Component*/ = this.propertyFieldRegistry$PPoz.getPropertyField(propertyName, this.getContentTypeName$PPoz());
    if (!propertyField) {
      return false;
    }

    // find the tab this property field lives in
    var tab/*:Container*/ = propertyField.findParentBy(function (item/*:Container*/)/*:Boolean*/ {
      return this$.itemCollection.contains(item);
    });

    // if no tab found, break
    if (!tab) {
      return true;
    }

    if (!scrollOnly) {
      // expand all collapsed panels surrounding the property field
      var currentComponent/*:Component*/ = propertyField;
      while (currentComponent && currentComponent !== tab) {
        if (AS3.is(currentComponent,  Ext.panel.Panel) && AS3.getBindable(AS3.cast(Ext.panel.Panel,currentComponent),"collapsed","DUMMY")) {
          //if the tab has only collapsed property fields or just info panels, the component might not have been rendered yet.
          if (currentComponent.el) {
            AS3.cast(Ext.panel.Panel,currentComponent).expand(true);
          }

          // Do not replicate movement on source after expanding nodes.
          // The visual changes are significant anyway.
          distance = NaN;
        }
        currentComponent = currentComponent.up();
      }
    }

    // activate the tab, if needed.
    if (this.getActiveTab() !== tab) {
      this.setActiveTabSilently$PPoz(tab);
      // Do not replicate movement on source when changing tabs.
      distance = NaN;
    }

    var jumped/*:Boolean*/ = false;
    var propertyFieldInfo/*:PropertyFieldInfo*/ = getPropertyFieldInfo$static(propertyField);
    if (propertyFieldInfo) {
      this.referencePropertyField$PPoz = propertyField;
      this.referencePropertyFieldPosition$PPoz = NaN;

      if (isNaN(targetPosition)) {
        jumped = !propertyFieldInfo.isFullyVisible();

        // In some cases, just focusing is not enough in order to scroll the component
        // properly into view as it might be the case that the label is not visible (scrolled out at top).
        // So instead of scrolling only the editing area into view, the whole property
        // field container should be scrolled into view.
        var propertyFieldEl/*:Element*/ = propertyFieldInfo.getPropertyFieldEl();
        propertyFieldEl.scrollIntoView(propertyFieldInfo.getDocumentForm().getEl(), false);
        this.scrollDocumentFormSoftlyBy$PPoz(0, propertyFieldInfo.getDocumentForm());
      } else {
        var totalDistance/*:Number*/ = propertyFieldInfo.getPropertyFieldRelativeY() - targetPosition;
        // Repeat the movement that was made at the source, if it is known and
        // if it points into the same direction that we have to scroll eventually.
        if (!isNaN(distance) && com.coremedia.ui.util.MathUtil.signum(distance) === com.coremedia.ui.util.MathUtil.signum(totalDistance) ) {
          // Do not go farther (absolutely) than the totalDistance that has to be covered.
          this.scrollDocumentFormBy$PPoz(com.coremedia.ui.util.MathUtil.signum(distance) * Math.min(Math.abs(distance), Math.abs(totalDistance)), propertyFieldInfo.getDocumentForm());
          propertyFieldInfo = getPropertyFieldInfo$static(propertyField);
        }

        // Adjust target position according to scroll bounds.
        var currentScrollTop/*:Number*/ = propertyFieldInfo.getDocumentForm().getEl().dom.scrollTop;

        var currentPosition/*:Number*/ = propertyFieldInfo.getPropertyFieldRelativeY();
        var softScrollDistance/*:Number*/ = currentPosition - targetPosition;
        // Do not scroll beyond top of the form.
        if (softScrollDistance < -currentScrollTop) {
          softScrollDistance = -currentScrollTop;
        }
        if (isNaN(distance) || Math.abs(softScrollDistance) < 5) {
          this.scrollDocumentFormBy$PPoz(softScrollDistance, propertyFieldInfo.getDocumentForm());
          softScrollDistance = NaN;
        }
        this.scrollDocumentFormSoftlyBy$PPoz(softScrollDistance, propertyFieldInfo.getDocumentForm());
      }
    }

    if (setCurrentProperty) {
      this.setCurrentPropertyField$PPoz(propertyField);
    }

    if (isFocus) {
      // Remember that the field will be focused and that no additional events
      // have to be created.
      this.expectedFocusTarget$PPoz = propertyField;
      // focus the field
      if (propertyField['select']) {
        propertyField.focus(true, 1);
      }
      else {
        propertyField.focus(false, 1);
      }
    }

    if (sendPositionToManager) {
      // forward the field change to other panels
      this.sendPosition$PPoz(true, false, jumped, false);
    }

    return true;
  }/*

  /**
   * Scroll the current document form by the given amount.
   *
   * @param distance the distance to scroll (form content moves up = positive)
   * @param documentForm the document form to scroll
   * /
  private*/ function scrollDocumentFormBy(distance/*:Number*/, documentForm/*:DocumentForm*/)/*:void*/ {
    if (distance === 0) {
      return;
    }

    var documentFormEl/*:Element*/ = documentForm.getEl();
    var newScrollTop/*:Number*/ = documentFormEl.dom.scrollTop + distance;
    // Any scroll events that arrive in the following are caused
    // by ourselves. Do not react to such events, only to user
    // events.
    this.scrollInProgress$PPoz = true;
    documentFormEl.dom.scrollTop = newScrollTop;
    // The scroll position might have changed, because the form is not long enough.
    // Remember the current value in case of a delayed callback.
    this.expectedScrollPosition$PPoz = documentFormEl.dom.scrollTop;
    // Only now do we release the flag for procedural scrolling:
    // IE seems to send events while reading scrollTop, not while
    // writing scrollTop.
    this.scrollInProgress$PPoz = false;
  }/*

  /**
   * Scroll the current document form softly by the given amount.
   *
   * @param softScrollDistance the distance to scroll (form content moves up = positive)
   * @param component the component to scroll
   * /
  private*/ function scrollDocumentFormSoftlyBy(softScrollDistance/*:Number*/, component/*:DocumentForm*/)/*:void*/ {
    if (isNaN(this.remainingSoftScrollDistance$PPoz) && !isNaN(softScrollDistance)) {
      this.eventuallyScrollSoftly$PPoz();
    }
    this.remainingSoftScrollDistance$PPoz = softScrollDistance;
    this.softScrollingForm$PPoz = component;
  }/*

  /**
   * Start an asynchronous process to scroll the form into the desired position.
   * /
  private*/ function eventuallyScrollSoftly()/*:void*/ {
    window.setTimeout(AS3.bind(this,"scrollSoftly$PPoz"), SOFT_SCROLL_INTERVAL$static);
  }/*

  /**
   * Perform a single step in the soft-scroll animation.
   * Schedule another step if necessary.
   * /
  private*/ function scrollSoftly()/*: void*/ {
    if (!isNaN(this.remainingSoftScrollDistance$PPoz)) {
      var direction/*:Number*/ = com.coremedia.ui.util.MathUtil.signum(this.remainingSoftScrollDistance$PPoz);
      var absoluteDistance/*:Number*/ = Math.abs(this.remainingSoftScrollDistance$PPoz);
      var distance/*:Number*/ = direction * Math.min(absoluteDistance, Math.max(10, absoluteDistance / 5));
      distance = Math.round(distance);
      this.remainingSoftScrollDistance$PPoz = this.remainingSoftScrollDistance$PPoz - distance;
      this.scrollDocumentFormBy$PPoz(distance, this.softScrollingForm$PPoz);
      if (this.remainingSoftScrollDistance$PPoz === 0) {
        this.remainingSoftScrollDistance$PPoz = NaN;
        this.softScrollingForm$PPoz = null;
      } else {
        this.eventuallyScrollSoftly$PPoz();
      }
    }
  }/*

  /**
   * Remember the given field as the current property field and
   * add a style class for highlighting.
   *
   * @param propertyField the property field
   * /
  private*/ function setCurrentPropertyField(propertyField/*:Component*/)/*:void*/ {
    this.setCurrentHighlighted$PPoz(false);

    this.currentPropertyField$PPoz = propertyField;
    this.currentFieldElement$PPoz = this.currentPropertyField$PPoz ? DocumentTabPanelBase.findLabeledElement(this.currentPropertyField$PPoz) : null;

    this.setCurrentHighlighted$PPoz(true);
  }/*

  private*/ function setCurrentHighlighted(newHighlighted/*:Boolean*/)/*:void*/ {
    setHighlighted$static(this.currentPropertyField$PPoz, newHighlighted);
    var ct/*:Container*/ =AS3.as( this.currentPropertyField$PPoz,  Ext.container.Container);
    if (ct) {
      ct.cascade(function (item/*:Component*/)/*:Boolean*/ {
        setHighlighted$static(item, newHighlighted);
        return true;
      });
    }
  }/*

  private static*/ function setHighlighted$static(cmp/*:Component*/, newHighlighted/*:Boolean*/)/*:void*/ {
    var highlightable/*:IHighlightableMixin*/ =AS3.as( cmp,  com.coremedia.ui.mixins.HighlightableMixin);
    if (highlightable) {
      AS3.setBindable(highlightable,"highlighted" , newHighlighted);
    }
  }/*

  private static*/ function findDocumentForm$static(propertyField/*:Component*/)/*:DocumentForm*/ {
    return AS3.cast(com.coremedia.cms.editor.sdk.premular.DocumentForm,propertyField.findParentByType(com.coremedia.cms.editor.sdk.premular.DocumentForm));
  }/*

  /**
   * @private
   *
   * Find that DOM element that encloses the property field and its label.
   *
   * @param propertyField the property field
   * @return the enclosing DOM element
   * /
  public static*/ function findLabeledElement$static(propertyField/*:Component*/)/*:Element*/ {
    var el/*:Element*/ = propertyField.getEl();
    // Unless the element is directly marked as a property field,
    // skip to surrounding div, ignoring labels embedded in the property field.
    if (el && !el.hasCls('property-field-boundary')) {
      el = el.up("div");
    }
    // Look for a div containing a label or marked as a property field.
    while(el &&
            (!el.child('label') || AS3.cast(Ext.dom.Element,el.child('label')).dom.innerHTML === "") &&
            !el.hasCls('property-field-boundary'))
    {
      el = el.up("div");
    }
    if (el && el.child('label') && AS3.cast(Ext.dom.Element,el.child('label')).dom.innerHTML != "") {
      return el;
    } else {
      return propertyField.getEl();
    }
  }/*

  private static*/ function hasFocus$static(field/*:Component*/)/*:Boolean*/ {
    // HACK: The condition field['hasFocus'] is not officially documented,
    // but it was mentioned in
    // http://forums.ext.net/showthread.php?12645-SOLVED-verify-if-Textbox-has-focus
    // by the ExtJS core developer Vladimir.
    //
    return field['hasFocus'] || (AS3.is(field,  Ext.form.field.Checkbox) && Ext.isWebKit); //webkit browsers cannot focus the checkbox, so we fix it by that:
  }/*

  /**
   * @private
   *
   * Register the component as a property field for the given property name
   * @param propertyName the name of the property
   * @param propertyField the field
   * /
  public*/ function registerPropertyField(propertyName/*:String*/, propertyField/*:Component*/)/*:void*/ {var this$=this;
    var documentForm/*:DocumentForm*/ = findDocumentForm$static(propertyField);
    if (documentForm) {
      // If the document is new, ...
      var id/*:String*/ = documentForm.getId();
      if (!this.propertyFieldsByDocumentFormId$PPoz[id]) {
        // ... prepare the array of property fields ...
        this.propertyFieldsByDocumentFormId$PPoz[id] = [];
        // ... and after the first render detect scroll operations in the form ...
        if (!documentForm.rendered) {
          documentForm.addListener("afterrender", function ()/*:void*/ {
            this$.registerScrollListener$PPoz(documentForm);
          }, null, {single: true});
        } else {
          this.registerScrollListener$PPoz(documentForm);
        }
        // ... and after each layout make sure to adjust the scroll position.
        documentForm.addListener("afterlayout", function()/*:void*/ {
          AS3.getBindable(this$,"focusForwarder") && AS3.getBindable(this$,"focusForwarder").refireShow();
        });
      }
      // Remember the property field.
      this.propertyFieldsByDocumentFormId$PPoz[id].push(propertyField);
    }

    this.propertyNameByPropertyFieldId$PPoz[propertyField.getId()] = propertyName;

    // write focus events back to the context info bean when field is able to focus
    propertyField.mon(propertyField, "focus", function ()/*:void*/ {
        this$.propertyFieldFocused$PPoz(propertyField);
    });

    // When the property editor loses the focus, inform the VE about that if it has not
    // been set to another editor yet.
    // (makes it possible to re-focus the same field more than once)
    propertyField.mon(propertyField, "blur", function()/*:void*/ {
      this$.propertyFieldBlurred$PPoz(propertyField);
    });

    //TODO: what else? listen to focus event on element?
    this.propertyFieldRegistry$PPoz.registerPropertyField(propertyName, this.getContentTypeName$PPoz(), propertyField);
  }/*

  private*/ function registerScrollListener(documentForm/*:DocumentForm*/)/*:void*/ {var this$=this;
    documentForm.getEl().addListener("scroll", function ()/*:void*/ {
      this$.documentFormScrolled$PPoz(documentForm);
    });
  }/*

  private*/ function documentFormScrolled(documentForm/*:DocumentForm*/)/*:void*/ {
    if (this.scrollInProgress$PPoz || !(documentForm.getEl().dom.scrollTop !== this.expectedScrollPosition$PPoz)) {
      return;
    }

    this.expectedScrollPosition$PPoz = NaN;

    // Stop soft-scrolling.
    this.scrollDocumentFormSoftlyBy$PPoz(0, documentForm);

    this.sendShow$PPoz();
  }/*

  public*/ function unregisterPropertyField(propertyName/*:String*/, propertyField/*:Component*/)/*:void*/ {
    // Remove propertyField from property field index.
    for (var documentFormId/*:String*/ in this.propertyFieldsByDocumentFormId$PPoz) {
      // Can not use findDocumentForm() as the component might have been removed from the form.
      var fields/*:Array*/ = this.propertyFieldsByDocumentFormId$PPoz[documentFormId];
      var index/*:int*/ = fields.indexOf(propertyField);
      if (index !== -1) {
        fields.splice(index, 1);
      }
    }
    delete this.propertyNameByPropertyFieldId$PPoz[propertyField.getId()];

    this.propertyFieldRegistry$PPoz.unregisterPropertyField(propertyName, this.getContentTypeName$PPoz(), propertyField);
  }/*

  private*/ function propertyFieldFocused(propertyField/*:Component*/)/*:void*/ {
    var isUserInteraction/*:Boolean*/ = propertyField !== this.expectedFocusTarget$PPoz;
    this.expectedFocusTarget$PPoz = null;
    if (isUserInteraction) {
      var propertyFieldInfo/*:PropertyFieldInfo*/ = getPropertyFieldInfo$static(propertyField);
      if (propertyFieldInfo) {
        // Stop soft-scrolling.
        this.scrollDocumentFormSoftlyBy$PPoz(0, propertyFieldInfo.getDocumentForm());

        this.setCurrentPropertyField$PPoz(propertyField);
        this.sendFocus$PPoz();
      }
    }
  }/*

  private*/ function propertyFieldBlurred(propertyField/*:Component*/)/*:void*/ {
    if (propertyField === this.currentPropertyField$PPoz) {
      this.setCurrentPropertyField$PPoz(null);
      AS3.getBindable(this,"focusForwarder") && AS3.getBindable(this,"focusForwarder").forwardBlurToManager();
    }
  }/*

  private*/ function sendShow()/*:void*/ {
    this.sendPosition$PPoz(false, false, false, true);
  }/*

  private*/ function sendFocus()/*:void*/ {
    this.sendPosition$PPoz(true, true, false, false);
  }/*

  /**
   * Notify the focus forwarder that this document panel has changed its
   * scroll position.
   *
   * @param isFocus whether a focus event should be sent
   * @param userOperation whether this event was triggered by a direct user interaction
   * @param jumped whether a discontinuous jump of the current field was observed
   * /
  private*/ function sendPosition(isFocus/*:Boolean*/, userOperation/*:Boolean*/, jumped/*:Boolean*/, scrollOnly/*:Boolean*/)/*:void*/ {
    var tabTitle/*:String*/ = this.getActiveTab()['title'];

    // Compute the distance that the old reference field moved
    // since we last sent a position. (Positive = form content scrolled up.)
    var distance/*:Number*/ = this.referencePropertyFieldPosition$PPoz - this.getReferencePosition$PPoz();
    if (isNaN(distance)) {
      // Previously, this panel was remotely controlled.
      distance = 0;
    }
    if (jumped) {
      // The user is not confused by an arbitrary movement.
      distance = NaN;
    }

    // Determine the property field that serves as the reference
    // for determining the position.
    this.referencePropertyField$PPoz = null;
    // Check whether the current property field can serve as a reference.
    if (this.currentPropertyField$PPoz) {
      var currentFieldInfo/*:PropertyFieldInfo*/ = getPropertyFieldInfo$static(this.currentPropertyField$PPoz);
      if (currentFieldInfo &&
              currentFieldInfo.isVisible())
      {
        this.referencePropertyField$PPoz = this.currentPropertyField$PPoz;
      }
    }
    // Otherwise, find the property field that is located at the center of the panel.
    if (!this.referencePropertyField$PPoz) {
      this.referencePropertyField$PPoz = this.findCentralPropertyField$PPoz(tabTitle);
    }

    var propertyFieldInfo/*:PropertyFieldInfo*/ = null;
    if (this.referencePropertyField$PPoz) {
      propertyFieldInfo = getPropertyFieldInfo$static(this.referencePropertyField$PPoz);
      this.referencePropertyFieldPosition$PPoz = propertyFieldInfo.getPropertyFieldRelativeY();
    } else {
      this.referencePropertyFieldPosition$PPoz = NaN;
    }

    var propertyName/*:String*/ = propertyFieldInfo === null ? null : this.propertyNameByPropertyFieldId$PPoz[this.referencePropertyField$PPoz.getId()];
    var position/*:Number*/ = propertyFieldInfo === null ? NaN : propertyFieldInfo.getPropertyFieldRelativeY();
    var content/*:Content*/ = this.bindTo$PPoz.getValue();

    AS3.getBindable(this,"focusForwarder") && AS3.getBindable(this,"focusForwarder").forwardShowToManager(content, tabTitle, propertyName, isFocus, userOperation, position, distance, scrollOnly);
  }/*

  private*/ function getReferencePosition()/*:Number*/ {
    if (!this.referencePropertyField$PPoz) {
      return NaN;
    }
    var propertyFieldInfo/*:PropertyFieldInfo*/ = getPropertyFieldInfo$static(this.referencePropertyField$PPoz);
    if (propertyFieldInfo === null) {
      return NaN;
    } else {
      return propertyFieldInfo.getPropertyFieldRelativeY();
    }
  }/*

  private*/ function findCentralPropertyField(tabTitle/*:String*/)/*:Component*/ {
    var propertyFields/*:Array*/ = this.propertyFieldRegistry$PPoz.getPropertyFields(tabTitle, this.getContentTypeName$PPoz());
    if (!propertyFields) {
      // The current form contains no property fields.
      return null;
    }
    var centralPropertyField/*:Component*/ = this.selectCentralPropertyField$PPoz(propertyFields, false);
    if (!centralPropertyField) {
      centralPropertyField = this.selectCentralPropertyField$PPoz(propertyFields, false);
    }
    return centralPropertyField;
  }/*

  private*/ function selectCentralPropertyField(propertyFields/*:Array*/, allowInvisible/*:Boolean*/)/*:Component*/ {
    var minDistance/*:Number*/ = Number.MAX_VALUE;
    var centralPropertyField/*:Component*/ = null;
    propertyFields.forEach(function (propertyField/*:Component*/)/*:void*/ {
      var propertyFieldInfo/*:PropertyFieldInfo*/ = getPropertyFieldInfo$static(propertyField);
      if (propertyFieldInfo && (propertyFieldInfo.isVisible() || allowInvisible)) {
        var documentFormCenter/*:Number*/ = propertyFieldInfo.getDocumentFormY() + propertyFieldInfo.getDocumentFormHeight() / 2;
        var propertyFieldBottom/*:Number*/ = (propertyFieldInfo.getPropertyFieldY() + propertyFieldInfo.getPropertyFieldHeight());
        // Compute the distance from the center of the form to the nearest
        // part of the property field. This is 0 if the field spans the center of the form.
        var distance/*:Number*/ = Math.max(0, documentFormCenter - propertyFieldBottom, propertyFieldInfo.getPropertyFieldY() - documentFormCenter);
        if (distance < minDistance) {
          minDistance = distance;
          centralPropertyField = propertyField;
        }
      }
    });
    return centralPropertyField;
  }/*

  /**
   * For the given property field, return an object describing its position on the screen
   * and providing the main DOM elements.
   *
   * @param propertyField
   * @return a two-element array
   * /
  private static*/ function getPropertyFieldInfo$static(propertyField/*:Component*/)/*:PropertyFieldInfo*/ {
    var theDocumentForm/*:DocumentForm*/ = findDocumentForm$static(propertyField);
    if (theDocumentForm) {
      var labeledElement/*:Element*/ = DocumentTabPanelBase.findLabeledElement(propertyField);
      if (labeledElement) {
        var documentFormEl/*:Element*/ = theDocumentForm.getEl();
        return new com.coremedia.cms.editor.sdk.premular.PropertyFieldInfo(labeledElement, labeledElement.getY(), labeledElement.getHeight(),
                theDocumentForm, documentFormEl.getY(), documentFormEl.getHeight());
      }
    }
    return null;
  }/*

  /**
   * @inheritDoc
   * /
  override protected*/ function onDestroy()/*:void*/ {
    Ext.tab.Panel.prototype.onDestroy.call(this);
    // remove change listeners
    AS3.getBindable(this,"focusForwarder") && AS3.getBindable(this,"focusForwarder").removeListener(this);
  }/*

  /**
   * Notify the document tab panel surrounding the given component
   * that the component has been touched manually.
   *
   * @param component the component that was touched
   * /
  public static*/ function touched$static(component/*:Component*/)/*:void*/ {
    var parent/*:Container*/ = component.findParentByType(com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.xtype);
    if (parent) {
      parent.fireEvent(TOUCHED$static);
    }
  }/*

  // fire event as a context provider when context value is changed
  public*/ function setForceReadOnly(readOnly/*:Boolean*/)/*:void*/ {
    var oldValue/*:Boolean*/ = this.forceReadOnly$PPoz;
    this.forceReadOnly$PPoz = readOnly;

    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.sdk.premular.DocumentTabPanel.FORCE_READ_ONLY_VARIABLE_NAME, oldValue, readOnly);
  }/*

  [ProvideToExtChildren]
  public*/ function getForceReadOnly()/*:Boolean*/ {
    return this.forceReadOnly$PPoz;
  }/*

  /** @inheritDoc * /
  public native function itemsAreLazy():Boolean;

  /** @inheritDoc * /
  public native function get itemsLazyUntilEvent():String;

  /** @inheritDoc * /
  public native function set itemsLazyUntilEvent(eventName:String):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.tab.Panel",
      mixins: [
        "com.coremedia.cms.editor.sdk.premular.FocusListener",
        "com.coremedia.ui.mixins.LazyItemsContainerMixin"
      ],
      metadata: {
        "": [
          "Event",
          [
            "name",
            "documentTabPanelTouched"
          ],
          "PublicApi"
        ],
        getForceReadOnly: ["ProvideToExtChildren"]
      },
      propertyFieldRegistry$PPoz: null,
      bindTo$PPoz: null,
      propertyFieldsByDocumentFormId$PPoz: null,
      propertyNameByPropertyFieldId$PPoz: null,
      tabChangeInProgress$PPoz: false,
      currentPropertyField$PPoz: null,
      currentFieldElement$PPoz: null,
      referencePropertyField$PPoz: null,
      referencePropertyFieldPosition$PPoz: NaN,
      expectedFocusTarget$PPoz: null,
      expectedScrollPosition$PPoz: NaN,
      scrollInProgress$PPoz: false,
      remainingSoftScrollDistance$PPoz: NaN,
      softScrollingForm$PPoz: null,
      forceReadOnly$PPoz: false,
      constructor: DocumentTabPanelBase$,
      super$PPoz: function() {
        Ext.tab.Panel.prototype.constructor.apply(this, arguments);
      },
      collapsibleChanged$PPoz: collapsibleChanged,
      onCollapsibleChange: onCollapsibleChange,
      getContentTypeName$PPoz: getContentTypeName,
      beforeRender$PPoz: beforeRender,
      getTabByTitle$PPoz: getTabByTitle,
      onPropertyShow: onPropertyShow,
      setActiveTabSilently$PPoz: setActiveTabSilently,
      focusPropertyField: focusPropertyField,
      showPropertyFieldByName$PPoz: showPropertyFieldByName,
      scrollDocumentFormBy$PPoz: scrollDocumentFormBy,
      scrollDocumentFormSoftlyBy$PPoz: scrollDocumentFormSoftlyBy,
      eventuallyScrollSoftly$PPoz: eventuallyScrollSoftly,
      scrollSoftly$PPoz: scrollSoftly,
      setCurrentPropertyField$PPoz: setCurrentPropertyField,
      setCurrentHighlighted$PPoz: setCurrentHighlighted,
      registerPropertyField: registerPropertyField,
      registerScrollListener$PPoz: registerScrollListener,
      documentFormScrolled$PPoz: documentFormScrolled,
      unregisterPropertyField: unregisterPropertyField,
      propertyFieldFocused$PPoz: propertyFieldFocused,
      propertyFieldBlurred$PPoz: propertyFieldBlurred,
      sendShow$PPoz: sendShow,
      sendFocus$PPoz: sendFocus,
      sendPosition$PPoz: sendPosition,
      getReferencePosition$PPoz: getReferencePosition,
      findCentralPropertyField$PPoz: findCentralPropertyField,
      selectCentralPropertyField$PPoz: selectCentralPropertyField,
      onDestroy: onDestroy,
      setForceReadOnly: setForceReadOnly,
      getForceReadOnly: getForceReadOnly,
      config: {focusForwarder: null},
      statics: {
        findLabeledElement: findLabeledElement$static,
        touched: touched$static
      },
      requires: [
        "Ext",
        "Ext.container.Container",
        "Ext.dom.Element",
        "Ext.form.field.Checkbox",
        "Ext.panel.Panel",
        "Ext.tab.Panel",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cms.editor.sdk.premular.FocusListener",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil",
        "com.coremedia.ui.mixins.HighlightableMixin",
        "com.coremedia.ui.mixins.LazyItemsContainerMixin",
        "com.coremedia.ui.util.MathUtil",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.premular.DocumentForm",
        "com.coremedia.cms.editor.sdk.premular.DocumentFormDispatcher",
        "com.coremedia.cms.editor.sdk.premular.DocumentTabPanel",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldInfo"
      ]
    };
});
