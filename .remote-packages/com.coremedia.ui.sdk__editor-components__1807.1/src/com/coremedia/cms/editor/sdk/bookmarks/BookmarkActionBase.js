Ext.define("com.coremedia.cms.editor.sdk.bookmarks.BookmarkActionBase", function(BookmarkActionBase) {/*package com.coremedia.cms.editor.sdk.bookmarks {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.actions.ContentAction;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Component;
import ext.button.Button;

import net.jangaroo.ext.Exml;

import mx.resources.ResourceManager;

/**
 * Action for creating a bookmark using the active document.
 * /
public class BookmarkActionBase extends ContentAction {

  [ExtConfig]
  public var tooltipPressed:String;

  [ExtConfig]
  public var ariaLabel:String;

  [ExtConfig]
  public var ariaLabelPressed:String;

  private var neverHide:Boolean;
  private var preventHideMenuVE:ValueExpression;
  private var pressedValueExpression:ValueExpression;

  /**
   * @param config
   * /
  public*/ function BookmarkActionBase$(config/*:BookmarkActionBase = null*/) {if(arguments.length<=0)config=null;
    this.super$jcGe(net.jangaroo.ext.Exml.apply({
      enableToggle: true, // automatically make all buttons that use me toggle buttons!
      handler:AS3.bind( this,"handle$jcGe")
    }, config));
    this.tooltipPressed = config.tooltipPressed;
    this.ariaLabel = config.ariaLabel;
    this.ariaLabelPressed = config.ariaLabelPressed;
    this.preventHideMenuVE$jcGe = config.preventHideMenuVE$jcGe;
    this.neverHide$jcGe = config.neverHide$jcGe;
    this.pressedValueExpression$jcGe = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"calculatePressed$jcGe"));
  }/*

  private*/ function updateInfo()/*:void*/ {
    var contents/*:Array*/ = this.getContents();
    var text/*:String*/ = this.isBookmarked(contents[0]) ? mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Bookmark_button_remove_text') :
            mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Bookmark_button_add_text');
    var tooltip/*:String*/ = this.isBookmarked(contents[0]) ? mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Bookmark_button_remove_tooltip') :
            mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'Bookmark_button_add_tooltip');

    this.setText(text);
    this.setTooltip(tooltip);
  }/*

  [InjectFromExtParent(variableNameConfig="contentVariableName")]
  override public*/ function setContents(contents/*:**/)/*:void*/ {
    com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.setContents.call(this,contents);
  }/*

  public*/ function isBookmarked(content/*:Content*/)/*:Boolean*/ {
    return com.coremedia.cms.editor.sdk.bookmarks.BookmarkManager.getInstance().contains(content);
  }/*

  /**
   * Updates the label of the action, depending on the selected
   * content is already bookmarked or not.
   * /
  override protected*/ function isDisabledFor(contents/*:Array*/)/*:Boolean*/ {
    return contents.length !== 1;
  }/*

  override protected*/ function calculateHidden()/*:Boolean*/ {
    return !this.neverHide$jcGe && com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.calculateHidden.call(this);
  }/*

  private*/ function calculatePressed()/*:Boolean*/ {
    var content/*:Content*/ = this.getContent();
    return content === undefined ? undefined : ! !content && com.coremedia.cms.editor.sdk.bookmarks.BookmarkManager.getInstance().contains(content);
  }/*

  /* The following methods are copied from DependencyTrackedToggleActionBase. It should become a mixin or utility! * /

  public override*/ function addComponent(comp/*:Component*/)/*:void*/ {var this$=this;
    com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.addComponent.call(this,comp);

    if (comp) {
      com.coremedia.cms.editor.sdk.bookmarks.BookmarkManager.getInstance().getAvailableBookmarksExpression().addChangeListener(AS3.bind(this,"updateInfo$jcGe"));
      this.getValueExpression().addChangeListener(AS3.bind(this,"updateInfo$jcGe"));

      comp.on("beforedestroy", function ()/*:void*/ {
        com.coremedia.cms.editor.sdk.bookmarks.BookmarkManager.getInstance().getAvailableBookmarksExpression().removeChangeListener(AS3.bind(this$,"updateInfo$jcGe"));
        this$.getValueExpression().removeChangeListener(AS3.bind(this$,"updateInfo$jcGe"));
      });
    }

    this.updateComponentPressedState$jcGe(comp, this.calculatePressed$jcGe());

    if (this.items.length === 1) {
      this.pressedValueExpression$jcGe.addChangeListener(AS3.bind(this,"updatePressedState$jcGe"));
    }

    var pressed/*:Boolean*/ = this.pressedValueExpression$jcGe.getValue();
    if (pressed !== undefined) {
      this.updateComponentPressedState$jcGe(comp, pressed);
    }
  }/*

  private*/ function updatePressedState(inheritValueExpression/*:ValueExpression*/)/*:void*/ {var this$=this;
    var pressed/*:Boolean*/ = inheritValueExpression.getValue();
    this.each(function (comp/*:Component*/)/*:void*/ {
      this$.updateComponentPressedState$jcGe(comp, pressed);
    });
  }/*

  /**
   * Updates the label of the action, depending on the selected
   * content is already bookmarked or not.
   * /
  private*/ function updateComponentPressedState(comp/*:Component*/, pressed/*:Boolean*/)/*:void*/ {
    var button/*:Button*/ =AS3.as( comp,  Ext.button.Button);
    if (button) {
      button.toggle(pressed, true);
      var newTooltip/*:String*/ = pressed ? this.tooltipPressed : AS3.cast(BookmarkActionBase,this.initialConfig).tooltip;
      if (newTooltip !== undefined) {
        AS3.setBindable(button,"tooltip" , newTooltip);
      }
      var newAriaLabel/*:String*/ = pressed ? this.ariaLabelPressed : AS3.cast(BookmarkActionBase,this.initialConfig).ariaLabel;
      if (newAriaLabel !== undefined) {
        button.ariaLabel = newAriaLabel;
      }
    }
  }/*

  public override*/ function removeComponent(comp/*:Component*/)/*:void*/ {
    com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.removeComponent.call(this,comp);

    if (this.items.length === 0) {
      this.pressedValueExpression$jcGe.removeChangeListener(AS3.bind(this,"updatePressedState$jcGe"));
    }
  }/*

  /* END copied from DependencyTrackedToggleActionBase * /

  private*/ function handle()/*:void*/ {
    var content/*:Content*/ = this.getContent();
    if (content) {
      var bookmarkManager/*:BookmarkManager*/ = com.coremedia.cms.editor.sdk.bookmarks.BookmarkManager.getInstance();
      if (!this.pressedValueExpression$jcGe.getValue()) {
        bookmarkManager.applyBookmark(content.getName(), content);
      } else {
        bookmarkManager.removeBookmark(content);
        if (this.preventHideMenuVE$jcGe) {
          this.preventHideMenuVE$jcGe.setValue(false);
        }
      }
    }
    this.updateInfo$jcGe();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.actions.ContentAction",
      metadata: {setContents: [
        "InjectFromExtParent",
        [
          "variableNameConfig",
          "contentVariableName"
        ]
      ]},
      tooltipPressed: null,
      ariaLabel: null,
      ariaLabelPressed: null,
      neverHide$jcGe: false,
      preventHideMenuVE$jcGe: null,
      pressedValueExpression$jcGe: null,
      constructor: BookmarkActionBase$,
      super$jcGe: function() {
        com.coremedia.cms.editor.sdk.actions.ContentAction.prototype.constructor.apply(this, arguments);
      },
      updateInfo$jcGe: updateInfo,
      setContents: setContents,
      isBookmarked: isBookmarked,
      isDisabledFor: isDisabledFor,
      calculateHidden: calculateHidden,
      calculatePressed$jcGe: calculatePressed,
      addComponent: addComponent,
      updatePressedState$jcGe: updatePressedState,
      updateComponentPressedState$jcGe: updateComponentPressedState,
      removeComponent: removeComponent,
      handle$jcGe: handle,
      requires: [
        "Ext.button.Button",
        "com.coremedia.cms.editor.sdk.actions.ContentAction",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "mx.resources.ResourceManager",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.bookmarks.BookmarkManager"]
    };
});
