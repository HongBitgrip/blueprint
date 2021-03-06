import $ from "jquery";
import { findAndSelf } from "@coremedia/js-jquery-utils";
import { EVENT_LAYOUT_CHANGED } from "@coremedia/js-basic";
import { EVENT_NODE_APPENDED } from "@coremedia/brick-dynamic-include";
import * as deviceDetector from "@coremedia/js-device-detector";
import * as livecontext from "./livecontext";

function applyDisablePopupCart($target) {
  findAndSelf($target, ".cm-icon--cart[data-cm-popup-control]").each(
    function() {
      const $popup = $(this);
      const identifier = "cm-popup-control";
      $popup.data(
        identifier,
        $.extend({}, $popup.data(identifier), { disabled: true })
      );
    }
  );
}

function removeDisablePopupCart($target) {
  findAndSelf($target, ".cm-icon--cart[data-cm-popup-control]").each(
    function() {
      const $popup = $(this);
      const identifier = "cm-popup-control";
      $popup.data(
        identifier,
        $.extend({}, $popup.data(identifier), { disabled: false })
      );
    }
  );
}

function applyDisableImageMap($target) {
  // should be moved to imagemap default functionality
  findAndSelf($target, ".cm-imagemap").each(function() {
    const $imagemap = $(this);

    const $imagemapImage = $imagemap.find(".cm-imagemap__image");
    $imagemapImage.attr("useMap", "");

    const config = $.extend(
      { defaultLink: undefined },
      $imagemap.data("cm-imagemap")
    );
    if (config.defaultLink) {
      const $imagemapLink = $imagemap.find(".cm-imagemap__link");
      $imagemapLink.attr("href", config.defaultLink);
    }
  });
}

function removeDisableImageMap($target) {
  findAndSelf($target, ".cm-imagemap").each(function() {
    const $imagemap = $(this);

    const $imagemapLink = $imagemap.find(".cm-imagemap__link");
    $imagemapLink.removeAttr("href");

    const $imagemapImage = $imagemap.find(".cm-imagemap__image");
    const $imagemapAreas = $imagemap.find(".cm-imagemap__areas");
    $imagemapImage.attr("useMap", "#" + $imagemapAreas.attr("name"));
  });
}

const devices = {
  mobile: {
    applySettings: function($target) {
      applyDisableImageMap($target);
      applyDisablePopupCart($target);
    },
    removeSettings: function($target) {
      removeDisablePopupCart($target);
      removeDisableImageMap($target);
    },
    portrait: {
      applySettings: function($target) {
        applyDisablePopupCart($target);
      },
      removeSettings: function($target) {
        removeDisablePopupCart($target);
      },
    },
    landscape: {
      applySettings: function($target) {
        applyDisablePopupCart($target);
      },
      removeSettings: function($target) {
        removeDisablePopupCart($target);
      },
    },
  },
  tablet: {
    applySettings: function($target) {},
    removeSettings: function($target) {},
    portrait: {
      applySettings: function(/*$target*/) {},
      removeSettings: function(/*$target*/) {},
    },
    landscape: {
      applySettings: function(/*$target*/) {},
      removeSettings: function(/*$target*/) {},
    },
  },
  desktop: {
    applySettings: function($target) {
      // show info text for certain icons
      findAndSelf($target, ".cm-icon--user-details .cm-icon__info").removeClass(
        "cm-visuallyhidden"
      );
      findAndSelf($target, ".cm-icon--login .cm-icon__info").removeClass(
        "cm-visuallyhidden"
      );
      findAndSelf($target, ".cm-icon--button-top .cm-icon__info").removeClass(
        "cm-visuallyhidden"
      );

      // find header icon for main navigation
      const $headerNavigationIcon = findAndSelf(
        $target,
        ".cm-placement-header .cm-icon--navigation"
      );
      // header navigation is placed below the navigation icon
      const $headerNavigation = $headerNavigationIcon.find(".cm-navigation");

      // it no longer acts as icon...
      $headerNavigationIcon.removeClass("cm-icon");
      $headerNavigation.removeClass("cm-icon__symbol");
      // ...and navigation will be transformed into mega-menu
      $headerNavigation.addClass("mega-menu");
      // change width of mega-menu items
      livecontext.setMegaMenuItemsWidth();

      // find header icon for search
      const $headerSearchIcon = findAndSelf(
        $target,
        ".cm-placement-header .cm-icon--search"
      );
      // search form is placed below the search icon
      const $headerSearchForm = $headerSearchIcon.find(".cm-search-form");

      // it no longer acts as icon...
      $headerSearchIcon.removeClass("cm-icon");
      // submit button in search form has a different icon for desktop
      $headerSearchForm
        .find(".cm-search-form__button > i")
        .removeClass("icon-arrow-right")
        .addClass("icon-search");
      // attach form to search icon without being wrapped into popup
      $headerSearchForm.appendTo(".cm-search");
    },
    removeSettings: function($target) {
      // find header icon for search
      const $headerSearchIcon = findAndSelf(
        $target,
        ".cm-placement-header .cm-icon--search"
      );
      // search form is placed below the search icon
      const $headerSearchForm = $headerSearchIcon.find(".cm-search-form");

      $headerSearchForm.appendTo(".cm-popup--search");
      $headerSearchForm
        .find(".cm-search-form__button > i")
        .removeClass("icon-search")
        .addClass("icon-arrow-right");
      $headerSearchIcon.addClass("cm-icon");

      // remove width of mega-menu items
      livecontext.unsetMegaMenuItemsWidth();

      // find header icon for main navigation
      const $headerNavigationIcon = findAndSelf(
        $target,
        ".cm-placement-header .cm-icon--navigation"
      );
      // header navigation is placed below the navigation icon
      const $headerNavigation = $headerNavigationIcon.find(".cm-navigation");

      $headerNavigation.removeClass("mega-menu");
      $headerNavigation.addClass("cm-icon__symbol");
      $headerNavigationIcon.addClass("cm-icon");

      findAndSelf($target, ".cm-icon--button-top .cm-icon__info").addClass(
        "cm-visuallyhidden"
      );
      findAndSelf($target, ".cm-icon--login .cm-icon__info").addClass(
        "cm-visuallyhidden"
      );
      findAndSelf($target, ".cm-icon--user-details .cm-icon__info").addClass(
        "cm-visuallyhidden"
      );
    },
    portrait: {
      applySettings: function(/*$target*/) {},
      removeSettings: function(/*$target*/) {},
    },
    landscape: {
      applySettings: function(/*$target*/) {},
      removeSettings: function(/*$target*/) {},
    },
  },
};

/**
 *
 * @param device
 * @param orientation
 * @param $target
 */
export function removeSettings(device, orientation, $target) {
  if (devices[device] !== undefined) {
    if (devices[device][orientation] !== undefined) {
      devices[device][orientation].removeSettings($target);
    } else {
      devices[device].removeSettings($target);
    }
  }
}

/**
 *
 * @param device
 * @param orientation
 * @param $target
 */
export function applySettings(device, orientation, $target) {
  if (devices[device] !== undefined) {
    if (devices[device][orientation] !== undefined) {
      devices[device][orientation].applySettings($target);
    } else {
      devices[device].applySettings($target);
    }
  }
}

$(function() {
  const $document = $(document);

  // update images on device change
  $document.on(deviceDetector.EVENT_DEVICE_CHANGED, function(
    event,
    newDevice,
    oldDevice
  ) {
    removeSettings(oldDevice.type, oldDevice.orientation, $document);
    if (oldDevice.type !== newDevice.type) {
      removeSettings(oldDevice.type, undefined, $document);
      applySettings(newDevice.type, undefined, $document);
    }
    applySettings(newDevice.type, newDevice.orientation, $document);
    $document.trigger(EVENT_LAYOUT_CHANGED);
  });

  // device settings need to be reapplied if DOM changes
  $document.on(EVENT_NODE_APPENDED, function(event, $node) {
    const device = deviceDetector.getLastDevice();
    applySettings(device.type, device.orientation, $node);
  });
});
