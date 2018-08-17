Ext.define("com.coremedia.cms.editor.sdk.about.Lander", function(Lander) {/*package com.coremedia.cms.editor.sdk.about {

import ext.Ext;
import ext.dom.Element;
import ext.event.Event;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.sdk.about.Lander')]
public class Lander {
  private const PATH_PREFIX:String = "images/lander/";

  private static const*/var MIN_PORTAL_BORDER_DISTANCE$static/*:int*/ = 20;/*
  private static const*/var MIN_HORIZONTAL_PORTAL_NAME_DISTANCE$static/*:int*/ = 25;/*
  private static const*/var MIN_VERTICAL_PORTAL_NAME_DISTANCE$static/*:int*/ = 5;/*

  // If you think your name belongs here, add it!
  private const NAMES:Array =*/function NAMES_(){this.NAMES$DS7p=( [
    'Afriyie Adwiraah',
    'Sebastian Annies',
    'Tobias Baier',
    'Uni Bertelmann',
    'Anja Brandt',
    'Sebastian Büttner',
    'Matthias Faust',
    'Andreas Gawecki',
    'Elina Hotman',
    'Martti Jeenicke',
    'Moritz Kleine',
    'Olaf Kummer',
    'Mark Michaelis',
    'Manuel Ohlendorf',
    'Tobias Stadelmaier',
    'Stefan Eckhorst',
    'Matthias Wester-Ebbinghaus',
    'Christian Weitendorf',
    'Frank Wienberg',
    'Sigrid Kochte',
    'Michael Coldewey',
    'Rainer Reich',
    'Axel Wienberg',
    '&copy; 2009-2016 CoreMedia AG'
  ]);}/*;

  // current name
  private var name:String;
  private var hideName:Boolean;

  // key states
  private var left:Number = 0;
  private var up:Number = 0;
  private var right:Number = 0;
  private var down:Number = 0;

  // velocity
  private var vx:Number = 0;
  private var vy:Number = 0;
  // environment parameters
  private var speed:Number;
  private var gravity:Number;
  // whether the lander has crashed
  private var crash:Boolean = false;
  // position
  private var x:Number;
  private var y:Number;
  // boundary size
  private var bx:Number;
  private var by:Number;
  // maximum lander position
  private var mx:Number;
  private var my:Number;
  // portal position
  private var px:Number;
  private var py:Number;
  // previous portal position
  private var ppx:Number;
  private var ppy:Number;
  // whether the previous portal is visible
  private var ppVisible:Boolean;
  // The distance up to which the portal is visible;
  var portalVisibilityRadius:int;
  // the number of iterations since the jump was made
  private var timeSinceJump:Number;

  // various UI elements
  private var border:Element;
  private var hiddenInput:Element;
  private var lander:Element;
  private var portal:Element;
  private var previousPortal:Element;
  private var nameDiv:Element;

  // border positions of the name element
  private var nameTop:Number;
  private var nameRight:Number;
  private var nameBottom:Number;
  private var nameLeft:Number;

  private var interval:Object;

  public*/ function Lander$(el/*:Element*/) {NAMES_.call(this);
    el.dom.className = "cm-lander";

    this.bx$DS7p = el.getWidth();
    this.by$DS7p = el.getHeight();

    this.x$DS7p = this.bx$DS7p / 2;
    this.y$DS7p = MIN_PORTAL_BORDER_DISTANCE$static;

    this.portalVisibilityRadius = (this.bx$DS7p + this.by$DS7p) / 8 + 10;

    var maxDimension/*:Number*/ = Math.max(this.bx$DS7p, this.by$DS7p);
    this.speed$DS7p = Math.sqrt(maxDimension * maxDimension / 150000 + 1);

    this.border$DS7p = el.createChild({tag: "div"});
    this.border$DS7p.dom.className = "cm-lander__border";
    this.border$DS7p.dom.style.width = this.bx$DS7p + "px";
    this.border$DS7p.dom.style.height = this.by$DS7p + "px";

    this.nameDiv$DS7p = this.createElement$DS7p("div");
    this.nameDiv$DS7p.dom.className = "cm-lander__name";

    this.portal$DS7p = this.createElement$DS7p("div");
    this.portal$DS7p.dom.className = "cm-lander__portal";

    this.previousPortal$DS7p = this.createElement$DS7p("div");
    this.previousPortal$DS7p.dom.className = "cm-lander__previous-portal";

    this.lander$DS7p = this.createElement$DS7p("img");
    this.lander$DS7p.setOpacity(1);

    this.name$DS7p = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.sdk.about.Lander', 'instructions_text');
    this.showName$DS7p();

    this.mx$DS7p = this.bx$DS7p - 15;
    this.my$DS7p = this.by$DS7p - 16;
    this.enterWorld$DS7p(false);

    this.hiddenInput$DS7p = this.border$DS7p.createChild({tag: "input", type: "text"});
    this.hiddenInput$DS7p.focus();
    this.hiddenInput$DS7p.on("keydown",AS3.bind( this,"keyDown$DS7p"));
    this.hiddenInput$DS7p.on("keyup",AS3.bind( this,"keyUp$DS7p"));
    this.hiddenInput$DS7p.dom.style.position = "absolute";
    this.hiddenInput$DS7p.dom.style.top = "-10000px";

    this.interval$DS7p = window.setInterval(AS3.bind(this,"move$DS7p"), 50);
  }/*

  private*/ function updateGravity()/*:void*/ {
    this.gravity$DS7p = 0.7 + Math.random();
  }/*

  private*/ function updateName()/*:void*/ {
    this.name$DS7p = this.NAMES$DS7p[Math.floor(this.NAMES$DS7p.length * Math.random())];
    this.showName$DS7p();
  }/*

  private*/ function showName()/*:void*/ {
    this.nameDiv$DS7p.dom.innerHTML = this.name$DS7p;
    this.nameDiv$DS7p.setOpacity(1);
    this.nameDiv$DS7p.dom.style.left = "1";
    this.nameDiv$DS7p.dom.style.top = "1";
    for (var i/*:uint*/ = 5; i < 100; i++) {
      this.nameDiv$DS7p.dom.style.fontSize = i + "px";
      if (this.nameDiv$DS7p.getWidth() > this.bx$DS7p * 0.6 || this.nameDiv$DS7p.getHeight() > this.by$DS7p * 0.6) {
        break;
      }
    }
    this.nameTop$DS7p = (this.by$DS7p - this.nameDiv$DS7p.getHeight()) / 2;
    this.nameRight$DS7p = (this.bx$DS7p + this.nameDiv$DS7p.getWidth()) / 2;
    this.nameBottom$DS7p = (this.by$DS7p + this.nameDiv$DS7p.getHeight()) / 2;
    this.nameLeft$DS7p = (this.bx$DS7p - this.nameDiv$DS7p.getWidth()) / 2;
    this.nameDiv$DS7p.dom.style.left = this.nameLeft$DS7p + "px";
    this.nameDiv$DS7p.dom.style.top = this.nameTop$DS7p + "px";
  }/*

  private*/ function updatePreviousPortal()/*:void*/ {
    for (var i/*:uint*/ = 0; i < 10; i++) {
      this.ppVisible$DS7p = true;
      this.ppx$DS7p = MIN_PORTAL_BORDER_DISTANCE$static + (this.bx$DS7p - 2 * MIN_PORTAL_BORDER_DISTANCE$static) * (Math.random() * 0.8 + 0.1);
      this.ppy$DS7p = MIN_PORTAL_BORDER_DISTANCE$static + (this.by$DS7p - 2 * MIN_PORTAL_BORDER_DISTANCE$static) * (Math.random() * 0.8 + 0.1);
      if (this.ppx$DS7p < this.nameLeft$DS7p - MIN_HORIZONTAL_PORTAL_NAME_DISTANCE$static ||
        this.ppx$DS7p > this.nameRight$DS7p + MIN_VERTICAL_PORTAL_NAME_DISTANCE$static ||
        this.ppy$DS7p < this.nameTop$DS7p - MIN_HORIZONTAL_PORTAL_NAME_DISTANCE$static ||
        this.ppy$DS7p > this.nameBottom$DS7p + MIN_VERTICAL_PORTAL_NAME_DISTANCE$static) {
        break;
      }
    }
    this.x$DS7p = this.ppx$DS7p;
    this.y$DS7p = this.ppy$DS7p;
  }/*

  private*/ function updatePortal()/*:void*/ {
    for (var i/*:uint*/ = 0; i < 10; i++) {
      this.px$DS7p = MIN_PORTAL_BORDER_DISTANCE$static + (this.mx$DS7p - 2 * MIN_PORTAL_BORDER_DISTANCE$static) * (Math.random() * 0.8 + 0.1);
      this.py$DS7p = MIN_PORTAL_BORDER_DISTANCE$static + (this.my$DS7p - 2 * MIN_PORTAL_BORDER_DISTANCE$static) * (Math.random() * 0.8 + 0.1);
      if (this.px$DS7p < this.nameLeft$DS7p - 25 ||
        this.px$DS7p > this.nameRight$DS7p + 5 ||
        this.py$DS7p < this.nameTop$DS7p - 25 ||
        this.py$DS7p > this.nameBottom$DS7p + 5) {
        break;
      }
    }
  }/*

  private*/ function enterWorld(portalHit/*:Boolean*/)/*:void*/ {
    this.timeSinceJump$DS7p = 0;
    if (portalHit) {
      this.updateName$DS7p();
      this.updatePreviousPortal$DS7p();
    }
    this.hideName$DS7p = false;
    this.updatePortal$DS7p();
    this.updateGravity$DS7p();
  }/*

  private*/ function updateKeyState(value/*:Number*/, e/*:Event*/)/*:void*/  {
    var key/*:Number*/ = e.getKey();
    switch (key) {
    case Ext.event.Event.LEFT:
      this.left$DS7p = value;
      break;
    case Ext.event.Event.UP:
      this.up$DS7p = value;
      break;
    case Ext.event.Event.RIGHT:
      this.right$DS7p = value;
      break;
    case Ext.event.Event.DOWN:
      this.down$DS7p = value;
      break;
    }
  }/*
  private*/ function keyDown(e/*:Event*/)/*:void*/ {
    this.updateKeyState$DS7p(1, e);
  }/*
  private*/ function keyUp(e/*:Event*/)/*:void*/ {
    this.updateKeyState$DS7p(0, e);
  }/*
  private static*/ function sqr$static(x/*:Number*/)/*:Number*/ {
    return x * x;
  }/*
  private*/ function move()/*:void*/ {
    this.timeSinceJump$DS7p++;

    this.vy$DS7p = this.vy$DS7p + 0.07 * this.speed$DS7p * this.gravity$DS7p;
    if (!this.crash$DS7p) {
      this.vy$DS7p = this.vy$DS7p - 0.3 * this.up$DS7p * this.speed$DS7p;
      this.vx$DS7p = this.vx$DS7p + 0.15 * (this.right$DS7p - this.left$DS7p) * this.speed$DS7p;
    }
    if (this.y$DS7p < this.my$DS7p - 1 || Math.abs(this.vx$DS7p) > 0.3) {
      this.x$DS7p = this.x$DS7p + this.vx$DS7p;
    }
    this.y$DS7p = this.y$DS7p + this.vy$DS7p;
    if (this.x$DS7p < 0) {
      this.x$DS7p = 0;
      this.vx$DS7p = -0.4 * this.vx$DS7p;
      if (!this.crash$DS7p) {
        this.crash$DS7p = 1;
        this.y$DS7p = this.y$DS7p - 1;
      }
    } else if (this.x$DS7p > this.mx$DS7p) {
      this.x$DS7p = this.mx$DS7p;
      this.vx$DS7p = -0.4 * this.vx$DS7p;
      if (!this.crash$DS7p) {
        this.crash$DS7p = 1;
        this.y$DS7p = this.y$DS7p - 1;
      }
    }
    if (this.y$DS7p < -1 && this.vy$DS7p < 0) {
      this.y$DS7p = -2;
      this.vy$DS7p = Math.min(1, -0.4 * this.vy$DS7p);
      this.crash$DS7p = 1;
    } else if (this.y$DS7p > this.my$DS7p) {
      this.y$DS7p = this.my$DS7p;
      if (this.vy$DS7p > 1.4 * this.speed$DS7p) {
        this.crash$DS7p = 1;
      }
      if (this.crash$DS7p) {
        this.vx$DS7p = this.vx$DS7p * 0.3;
        this.vy$DS7p = Math.max(-1, this.vy$DS7p * -0.4);
      } else {
        this.vx$DS7p = this.vx$DS7p * 0.4;
        this.vy$DS7p = this.vy$DS7p * -0.6;
      }
    }

    if (Math.sqrt(sqr$static(this.x$DS7p - this.px$DS7p) + sqr$static(this.y$DS7p - this.py$DS7p)) < 4) {
      this.enterWorld$DS7p(true);
    }

    this.lander$DS7p.dom.style.left = this.x$DS7p + "px";
    this.lander$DS7p.dom.style.top = this.y$DS7p + "px";
    var landerStyle/*:String*/ = "";
    if (this.crash$DS7p) {
      landerStyle ="-crash";
    } else if (this.up$DS7p) {
      landerStyle = "-fire-" + Math.floor(Math.random() * 4);
    }
    this.lander$DS7p.dom["src"] = Ext.getResourcePath(this.PATH_PREFIX$DS7p + "lander" + landerStyle + ".svg", null, 'com.coremedia.ui.sdk__editor-components');
    this.lander$DS7p.dom["height"] = '16';
    this.lander$DS7p.dom["width"] = '24';

    this.portal$DS7p.dom.style.left = this.px$DS7p + "px";
    this.portal$DS7p.dom.style.top = this.py$DS7p + "px";
    this.portal$DS7p.setOpacity(1 - Math.min(1, Math.sqrt(sqr$static(this.x$DS7p - this.px$DS7p) + sqr$static(this.y$DS7p - this.py$DS7p)) / this.portalVisibilityRadius * 1.2 - 0.2));

    if (this.ppVisible$DS7p) {
      this.previousPortal$DS7p.dom.style.left = this.ppx$DS7p + "px";
      this.previousPortal$DS7p.dom.style.top = this.ppy$DS7p + "px";
    }
    this.previousPortal$DS7p.setOpacity(this.ppVisible$DS7p ? 1 - Math.min(1, Math.sqrt(sqr$static(this.x$DS7p - this.ppx$DS7p) + sqr$static(this.y$DS7p - this.ppy$DS7p) + sqr$static(this.timeSinceJump$DS7p * 1.5)) / this.portalVisibilityRadius * 1.2 - 0.2) : 0);

    if (!this.hideName$DS7p) {
      this.nameDiv$DS7p.setOpacity(Math.max(0, 1 - this.timeSinceJump$DS7p / 100));
    }
  }/*

  private*/ function createElement(tag/*:String*/)/*:Element*/ {
    var result/*:Element*/ = this.border$DS7p.createChild({tag: tag});
    result.dom.style.position = "absolute";
    result.setOpacity(0);
    return result;
  }/*

  public*/ function stop()/*:void*/ {
    if (this.interval$DS7p) {
      window.clearInterval(this.interval$DS7p);
    }
    if (this.hiddenInput$DS7p) {
      this.hiddenInput$DS7p.un("keydown",AS3.bind( this,"keyDown$DS7p"), null);
      this.hiddenInput$DS7p.un("keyup",AS3.bind( this,"keyUp$DS7p"), null);
    }
 }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      PATH_PREFIX$DS7p: "images/lander/",
      name$DS7p: null,
      hideName$DS7p: false,
      left$DS7p: 0,
      up$DS7p: 0,
      right$DS7p: 0,
      down$DS7p: 0,
      vx$DS7p: 0,
      vy$DS7p: 0,
      speed$DS7p: NaN,
      gravity$DS7p: NaN,
      crash$DS7p: false,
      x$DS7p: NaN,
      y$DS7p: NaN,
      bx$DS7p: NaN,
      by$DS7p: NaN,
      mx$DS7p: NaN,
      my$DS7p: NaN,
      px$DS7p: NaN,
      py$DS7p: NaN,
      ppx$DS7p: NaN,
      ppy$DS7p: NaN,
      ppVisible$DS7p: false,
      portalVisibilityRadius: 0,
      timeSinceJump$DS7p: NaN,
      border$DS7p: null,
      hiddenInput$DS7p: null,
      lander$DS7p: null,
      portal$DS7p: null,
      previousPortal$DS7p: null,
      nameDiv$DS7p: null,
      nameTop$DS7p: NaN,
      nameRight$DS7p: NaN,
      nameBottom$DS7p: NaN,
      nameLeft$DS7p: NaN,
      interval$DS7p: null,
      constructor: Lander$,
      updateGravity$DS7p: updateGravity,
      updateName$DS7p: updateName,
      showName$DS7p: showName,
      updatePreviousPortal$DS7p: updatePreviousPortal,
      updatePortal$DS7p: updatePortal,
      enterWorld$DS7p: enterWorld,
      updateKeyState$DS7p: updateKeyState,
      keyDown$DS7p: keyDown,
      keyUp$DS7p: keyUp,
      move$DS7p: move,
      createElement$DS7p: createElement,
      stop: stop,
      requires: [
        "Ext",
        "Ext.event.Event",
        "com.coremedia.cms.editor.sdk.about.Lander_properties",
        "mx.resources.ResourceManager"
      ]
    };
});
