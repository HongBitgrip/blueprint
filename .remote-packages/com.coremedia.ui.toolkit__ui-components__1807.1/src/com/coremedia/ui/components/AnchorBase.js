Ext.define("com.coremedia.ui.components.AnchorBase", function(AnchorBase) {/*package com.coremedia.ui.components {
import com.coremedia.ui.util.ObjectUtils;

import ext.Component;
import ext.Ext;
import ext.dom.Element;

public class AnchorBase extends Component {

  [ExtConfig]
  public var href:String;

  [ExtConfig]
  public var text:String;

  /**
   * @param config the config object
   * /
  public*/ function AnchorBase$(config/*:Anchor = null*/) {if(arguments.length<=0)config=null;
    this.super$QZBw(AS3.cast(com.coremedia.ui.components.Anchor,Ext.apply({
      // if you want to use the image's default width / height in IE, width and height may not have any value, even
      // 'auto' does not work, but they have to be unspecified!
      autoEl: com.coremedia.ui.util.ObjectUtils.removeUndefinedProperties({
        tag: 'a',
        href: config['href'] || "",
        tooltip: config['tooltip'],
        target: config['target'] || "_blank",
        html: config['text']
      })
    }, config)));
    this.setHref(config['href']);
    this.setText(config['text']);
  }/*


  override protected*/ function onRender(parentNode/* : Element*/, containerIdx/* : Number*/)/*:void*/ {
    Ext.Component.prototype.onRender.call(this,parentNode, containerIdx);
    this.el.dom.href = this.href;
  }/*

  public*/ function getHref()/*:String*/ {
    return this.href;
  }/*

  public*/ function setHref(href/*:String*/)/*:void*/ {
    this.href = href || "";
    if (this.el) {
      this.el.dom.href = this.href;
    }
  }/*

  public*/ function getText()/*:String*/ {
    return this.text;
  }/*

  public*/ function setText(text/*:String*/)/*:void*/ {
    this.text = text || "[link]";
    if (this.el) {
      this.el.dom.innerHTML = this.text;
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Component",
      href: null,
      text: null,
      constructor: AnchorBase$,
      super$QZBw: function() {
        Ext.Component.prototype.constructor.apply(this, arguments);
      },
      onRender: onRender,
      getHref: getHref,
      setHref: setHref,
      getText: getText,
      setText: setText,
      requires: [
        "Ext",
        "Ext.Component",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: ["com.coremedia.ui.components.Anchor"]
    };
});
