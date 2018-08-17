Ext.define("com.coremedia.ui.skins.ButtonSkin", function(ButtonSkin) {/*package com.coremedia.ui.skins {
/**
 * Declares all usable skins for buttons defined in the studio-theme.
 *
 * - Skins are grouped into different categories.
 * - Skins of the same category are meant to be exchangeable without any other adjustments to the component
 * - as ExtJS has default skins, we do not use all default skins. If there is no constant for the default skin in the
 *   category, this means that this is not in use.
 * /
[PublicApi]
public class ButtonSkin extends BaseSkin {

  /* ENUM NAME * /
  private static const*/var ENUM_NAME$static/*:String*/ = "ButtonSkin";/*
  /* SKIN GROUP * /
  public static const SKIN_GROUP:String = "buttons";

  // default skin does not need to be explicitly defined
  public static const DEFAULT:ButtonSkin =*/function DEFAULT$static_(){ButtonSkin.DEFAULT=( new ButtonSkin("default"));}/*;

  public static const TOOLBAR:ButtonSkin =*/function TOOLBAR$static_(){ButtonSkin.TOOLBAR=( new ButtonSkin("toolbar"));}/*;
  public static const TOOLBAR_GROUPED:ButtonSkin =*/function TOOLBAR_GROUPED$static_(){ButtonSkin.TOOLBAR_GROUPED=( new ButtonSkin(ButtonSkin.TOOLBAR.getSkin() + "-grouped"));}/*;

  public static const TOOLBAR_DARK:ButtonSkin =*/function TOOLBAR_DARK$static_(){ButtonSkin.TOOLBAR_DARK=( new ButtonSkin("toolbar-dark"));}/*;
  public static const TOOLBAR_DARK_GROUPED:ButtonSkin =*/function TOOLBAR_DARK_GROUPED$static_(){ButtonSkin.TOOLBAR_DARK_GROUPED=( new ButtonSkin(ButtonSkin.TOOLBAR_DARK.getSkin() + "-grouped"));}/*;

  public static const WORKAREA:ButtonSkin =*/function WORKAREA$static_(){ButtonSkin.WORKAREA=( new ButtonSkin("workarea", 'The buttons with this skin are used in workareas.'));}/*;

  public static const INVERTED:ButtonSkin =*/function INVERTED$static_(){ButtonSkin.INVERTED=( new ButtonSkin("inverted"));}/*;
  public static const MAIN_NAVIGATION:ButtonSkin =*/function MAIN_NAVIGATION$static_(){ButtonSkin.MAIN_NAVIGATION=( new ButtonSkin("main-navigation"));}/*;

  public static const SIMPLE:ButtonSkin =*/function SIMPLE$static_(){ButtonSkin.SIMPLE=( new ButtonSkin("simple"));}/*;
  public static const HIGHLIGHT:ButtonSkin =*/function HIGHLIGHT$static_(){ButtonSkin.HIGHLIGHT=( new ButtonSkin("highlight"));}/*;
  public static const SIMPLE_HIGHLIGHT:ButtonSkin =*/function SIMPLE_HIGHLIGHT$static_(){ButtonSkin.SIMPLE_HIGHLIGHT=( new ButtonSkin("simple-highlight"));}/*;
  public static const SIMPLE_INVERTED:ButtonSkin =*/function SIMPLE_INVERTED$static_(){ButtonSkin.SIMPLE_INVERTED=( new ButtonSkin(ButtonSkin.SIMPLE + "-inverted"));}/*;

  public static const FOOTER_PRIMARY:ButtonSkin =*/function FOOTER_PRIMARY$static_(){ButtonSkin.FOOTER_PRIMARY=( new ButtonSkin("footer-primary"));}/*;
  public static const FOOTER_SECONDARY:ButtonSkin =*/function FOOTER_SECONDARY$static_(){ButtonSkin.FOOTER_SECONDARY=( new ButtonSkin("footer-secondary"));}/*;

  public static const INLINE:ButtonSkin =*/function INLINE$static_(){ButtonSkin.INLINE=( new ButtonSkin("inline"));}/*;

  public static const VIVID:ButtonSkin =*/function VIVID$static_(){ButtonSkin.VIVID=( new ButtonSkin("vivid"));}/*;

  public static const VIVID_TOOLBAR:ButtonSkin =*/function VIVID_TOOLBAR$static_(){ButtonSkin.VIVID_TOOLBAR=( new ButtonSkin("vivid-toolbar"));}/*;

  public static const USER_MENU:ButtonSkin =*/function USER_MENU$static_(){ButtonSkin.USER_MENU=( new ButtonSkin("user-menu"));}/*;

  public static const BREADCRUMB:ButtonSkin =*/function BREADCRUMB$static_(){ButtonSkin.BREADCRUMB=( new ButtonSkin("breadcrumb"));}/*;

  public static const LINK:ButtonSkin =*/function LINK$static_(){ButtonSkin.LINK=( new ButtonSkin("link"));}/*;

  public static const LOGO:ButtonSkin =*/function LOGO$static_(){ButtonSkin.LOGO=( new ButtonSkin("logo"));}/*;


  /**
   * An array containing all ButtonSkin enums.
   * /
  [ArrayElementType("com.coremedia.ui.skins.ButtonSkin")]
  public static const values:Array =*/function values$static_(){ButtonSkin.values=( com.coremedia.ui.util.Enum.collectValues(ButtonSkin));}/*;*/

  function ButtonSkin$(skin/*:String*/, skinGroup/*:String = null*/, description/*:String = null*/, enumName/*:String = null*/) {switch(Math.max(arguments.length,1)){case 1:skinGroup=null;case 2:description=null;case 3:enumName=null;}
    this.super$7Yhh(skin, skinGroup ? skinGroup : ButtonSkin.SKIN_GROUP, description, enumName ? enumName : ENUM_NAME$static);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.skins.BaseSkin",
      metadata: {"": ["PublicApi"]},
      constructor: ButtonSkin$,
      super$7Yhh: function() {
        com.coremedia.ui.skins.BaseSkin.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SKIN_GROUP: "buttons",
        DEFAULT: undefined,
        TOOLBAR: undefined,
        TOOLBAR_GROUPED: undefined,
        TOOLBAR_DARK: undefined,
        TOOLBAR_DARK_GROUPED: undefined,
        WORKAREA: undefined,
        INVERTED: undefined,
        MAIN_NAVIGATION: undefined,
        SIMPLE: undefined,
        HIGHLIGHT: undefined,
        SIMPLE_HIGHLIGHT: undefined,
        SIMPLE_INVERTED: undefined,
        FOOTER_PRIMARY: undefined,
        FOOTER_SECONDARY: undefined,
        INLINE: undefined,
        VIVID: undefined,
        VIVID_TOOLBAR: undefined,
        USER_MENU: undefined,
        BREADCRUMB: undefined,
        LINK: undefined,
        LOGO: undefined,
        values: undefined,
        __initStatics__: function() {
          DEFAULT$static_();
          TOOLBAR$static_();
          TOOLBAR_GROUPED$static_();
          TOOLBAR_DARK$static_();
          TOOLBAR_DARK_GROUPED$static_();
          WORKAREA$static_();
          INVERTED$static_();
          MAIN_NAVIGATION$static_();
          SIMPLE$static_();
          HIGHLIGHT$static_();
          SIMPLE_HIGHLIGHT$static_();
          SIMPLE_INVERTED$static_();
          FOOTER_PRIMARY$static_();
          FOOTER_SECONDARY$static_();
          INLINE$static_();
          VIVID$static_();
          VIVID_TOOLBAR$static_();
          USER_MENU$static_();
          BREADCRUMB$static_();
          LINK$static_();
          LOGO$static_();
          values$static_();
        }
      },
      requires: [
        "com.coremedia.ui.skins.BaseSkin",
        "com.coremedia.ui.util.Enum"
      ]
    };
});
