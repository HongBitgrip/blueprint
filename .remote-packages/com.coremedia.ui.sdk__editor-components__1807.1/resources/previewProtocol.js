/**
 *  CoreMedia Namespace
 */
var coremedia = (function (module) {
  return module;
}(coremedia || {}));
coremedia.preview = (function (module) {
  return module;
}(coremedia.preview || {}));

coremedia.preview.$ && coremedia.preview.$(document).ready(function () {
  var $ = coremedia.preview.$;

  var DATA_CM_METADATA = "data-cm-metadata";
  var DATA_CM_IDREF = "data-cm-idref";
  var DATA_CM_METADATA_ID = "data-cm-metadata-id";

  // add "cm-studio-preview" CSS Class to root element
  $(document.documentElement).addClass("cm-studio-preview");

  /////////////// DISPATCHING POST MESSAGE EVENTS ///////////////

  function postMessageHandler(event) {
    var msg = event.originalEvent.data;
    var origin = event.originalEvent.origin;
    if (origin === window.com_coremedia_pbe_studioUrl || window.com_coremedia_pbe_studioUrl === "*") {
      var msgJson = undefined;
      try {
        msgJson = JSON.parse(msg);
      } catch (err) {
      }
      if (msgJson) {
        if (msgJson.type === 'updateElementsText') {
          directUpdate(msgJson.body.ids, msgJson.body.oldValue, msgJson.body.newValue);
        } else if (msgJson.type === 'highlightElements') {
          updateHighlights(msgJson.body.metadataIds);
        } else if (msgJson.type === 'secondaryHighlightElements') {
          updateHighlights(msgJson.body.metadataIds, true);
        } else if (msgJson.type === 'scrollElementsIntoView') {
          scrollIntoView(msgJson.body.metadataIds);
        } else if (msgJson.type === 'setScrollPosition') {
          setScrollPosition(msgJson, event.originalEvent.source);
        } else if (msgJson.type === 'retrieveDocumentDimensions') {
          sendDocumentDimensions(msgJson, event.originalEvent.source);
        } else if (msgJson.type === 'retrieveScrollPosition') {
          sendScrollPosition(msgJson, event.originalEvent.source);
        } else if (msgJson.type === 'retrieveGlobalVariable') {
          sendGlobalVariable(msgJson, event.originalEvent.source);
        } else if (msgJson.type === 'retrieveDataAttribute') {
          sendDataAttribute(msgJson, event.originalEvent.source);
        } else if (msgJson.type === 'enableDocumentScroll') {
          enableDocumentScroll(msgJson);
        }
      }
    }
  }

  /////////////// GLOBAL REFERENCE TO STUDIO STATE ///////////////

  // Keep reference of Studio state where necessary.
  var studioKnownValues = {
    documentDimensions: {},
    metadataNodeList: [],
    lastHoverNode: undefined
  };

  /////////////// DIRECT UPDATE FOR TEXT NODES ///////////////

  function directUpdate(ids, oldValue, newValue) {
    if (ids) {
      try {
        oldValue = $.trim(oldValue);
        for (var i = 0; i < ids.length; i++) {
          var id = ids[i];
          var elem = cmMetadataIdToDomNodeMapping[id];
          // Maybe the preview frame is being reloaded and cannot be found ...
          if (elem) {
            // .. ok, it's there. Check whether the text matches the expected value.
            var firstChild = elem.firstChild;
            // so use "nodeType" to check for Text:
            // Node.TEXT_NODE = 3, does not exist in IE
            var textNode = firstChild && firstChild.nodeType === 3 ? firstChild : null;
            if (!textNode && !oldValue || textNode && $.trim(textNode.data) == oldValue) {
              if (!textNode) {
                textNode = document.createTextNode(newValue);
                elem.appendChild(textNode);
              } else {
                textNode.data = newValue;
              }
            }
          }
        }
      } catch (e) {
        // just to be robust: if anything fails, fall back to reloading update.
      }
    }
  }

  /////////////// CONTEXT CLICK HANDLING ///////////////

  function handleContextClick(event) {
    var nextUpwardsMetadataNode = findClosestMetadataUpInDomTree(event.target);
    if (nextUpwardsMetadataNode) {
      // IE9 can't handle positions in scaled frames correctly. Use some dirty magic to compensate.
      var ie9Magic = computeIE9Magic();
      var eventCoords = [event.clientX * ie9Magic, event.clientY * ie9Magic];
      sendClickMessage(nextUpwardsMetadataNode.id, 'contextClick', eventCoords, null, null);
    }
    event.preventDefault();
  }

  /////////////// MOUSE OVER HANDLING ///////////////

  function handleMouseOver(event) {
    var nextUpwardsMetadataNode = findClosestMetadataUpInDomTree(event.target);
    if (nextUpwardsMetadataNode !== studioKnownValues.lastHoverNode) {
      if (nextUpwardsMetadataNode) {
        sendHoverMessage(nextUpwardsMetadataNode.id);
      } else {
        sendHoverMessage();
      }
      studioKnownValues.lastHoverNode = nextUpwardsMetadataNode;
    }
  }

  /////////////// HIGHLIGHTING ///////////////

  // Chrome does not always draw absolutely positioned elements within a scaled
  // parent (iframe). It helps to force it into gpu rendering.
  if (!!window.chrome) {
    var chromeEnableHWDrawing = $('<div/>').addClass('chrome-drawing-workaround').appendTo(window.document.body);
    chromeEnableHWDrawing.css({transform: 'translateZ(0)'});
  }

  var HIGHLIGHT_BORDER_WIDTH = 2;
  var PRIMARY_HIGHLIGHT_CLASS_CSS = "previewIntegrationHighlightCss";
  var PRIMARY_HIGHLIGHT_CLASS_DOM = "previewIntegrationHighlightDom";
  var PRIMARY_HIGHLIGHT_BORDER_COLOR = "#4189DD";

  var SECONDARY_HIGHLIGHT_CLASS_CSS = "secondaryPreviewIntegrationHighlightCss";
  var SECONDARY_HIGHLIGHT_CLASS_DOM = "secondaryPreviewIntegrationHighlightDom";
  var SECONDARY_HIGHLIGHT_BORDER_COLOR = '#8A8686';

  var primaryHighlightedElements = [];
  var secondaryHighlightedElements = [];
  var cssClassDefinitionsInstalled = false;

  function installCSSClassDefinitionsIfNecessary() {
    if (!cssClassDefinitionsInstalled) {
      var rules = "." + PRIMARY_HIGHLIGHT_CLASS_CSS + "{ box-shadow: " + PRIMARY_HIGHLIGHT_BORDER_COLOR + " 0 0 0 " + HIGHLIGHT_BORDER_WIDTH + "px inset; }";
      rules += "." + SECONDARY_HIGHLIGHT_CLASS_CSS + "{ box-shadow: " + SECONDARY_HIGHLIGHT_BORDER_COLOR + " 0 0 0 " + HIGHLIGHT_BORDER_WIDTH + "px inset; }";
      $('head').append('<style type="text/css">' + rules + '</style>');
      cssClassDefinitionsInstalled = true;
    }
  }

  function updateHighlights(metadataIds, isSecondaryHighlight) {
    var currentSetOfHighlightedElements = isSecondaryHighlight ? secondaryHighlightedElements : primaryHighlightedElements;
    // Only remove highlight borders if there is at least one highlighted element that should not be highlighted.
    if (!metadataIds || $(currentSetOfHighlightedElements).not(metadataIds).length !== 0) {
      removeHighlightElements(isSecondaryHighlight);
    }
    if (metadataIds) {
      $.each(metadataIds, function (index, metadataId) {
        // Only draw rectangle if necessary.
        if ($.inArray(metadataId, currentSetOfHighlightedElements) === -1) {
          var metadataElement = cmMetadataIdToDomNodeMapping[metadataId];
          if (metadataElement) {
            var jElement = $(metadataElement);
            var compStyle = window.getComputedStyle(metadataElement);
            var visible = jElement.is(":visible") && (compStyle.visibility !== 'hidden') && (compStyle.opacity !== '0');
            if ((jElement.prop("tagName") !== "HTML") && visible) {
              var highlightStrategy = findMetadataProperty(cmMetadataMap[metadataId], "cm_highlightStrategy");
              if (highlightStrategy === "CSS") {
                installCSSClassDefinitionsIfNecessary();
                var cssClass = isSecondaryHighlight ? SECONDARY_HIGHLIGHT_CLASS_CSS : PRIMARY_HIGHLIGHT_CLASS_CSS;
                jElement.addClass(cssClass);
              } else {
                var boundingClientRect = jElement.get(0).getBoundingClientRect();
                drawRectangle(jElement.offset().left, jElement.offset().top, boundingClientRect.width, boundingClientRect.height, isSecondaryHighlight);
              }
              currentSetOfHighlightedElements.push(metadataId);
            }
          }
        }
      });
    }
  }

  function redrawAllHighlights() {
    var primaryElements = primaryHighlightedElements.concat();
    var secondaryElements = secondaryHighlightedElements.concat();
    removeHighlightElements(false);
    removeHighlightElements(true);
    updateHighlights(primaryElements, false);
    updateHighlights(secondaryElements, true);
  }

  // Remove all primary or secondary highlight elements and update state.
  function removeHighlightElements(isSecondaryHighlight) {
    // Do not handle dom mutation events caused by highlighting changes.
    pauseMetadataObservation();

    // Remove absolute positioned frame elements.
    var cssClass = isSecondaryHighlight ? SECONDARY_HIGHLIGHT_CLASS_DOM : PRIMARY_HIGHLIGHT_CLASS_DOM;
    var borderElements = $('.' + cssClass);
    borderElements.remove();

    // Remove alternate highlight styles.
    cssClass = isSecondaryHighlight ? SECONDARY_HIGHLIGHT_CLASS_CSS : PRIMARY_HIGHLIGHT_CLASS_CSS;
    $('.' + cssClass).each(function () {
      $(this).removeClass(cssClass);
    });

    // Empty the current set of metadata ids.
    var metadataIds = isSecondaryHighlight ? secondaryHighlightedElements : primaryHighlightedElements;
    while(metadataIds.length > 0) {
      metadataIds.pop();
    }

    startMetadataObservation();
  }

  // Draw permeable rectangle of given size at given position.
  function drawRectangle(posX, posY, width, height, isSecondaryHighlight) {
    pauseMetadataObservation();

    var cssClass = isSecondaryHighlight ? SECONDARY_HIGHLIGHT_CLASS_DOM : PRIMARY_HIGHLIGHT_CLASS_DOM;
    var borderColor = isSecondaryHighlight ? SECONDARY_HIGHLIGHT_BORDER_COLOR : PRIMARY_HIGHLIGHT_BORDER_COLOR;

    // IE9 can't handle positions in scaled frames correctly. Use some dirty magic to compensate.
    var ie9Magic = computeIE9Magic();
    if (ie9Magic > 1) {
      // For some unknown reasons in IE9 the position also needs some offset correction.
      var bodyOffsetX = $('body').offset().left;
      var bodyOffsetY = $('body').offset().top;
      posX = (posX - bodyOffsetX) * ie9Magic;
      posY = (posY - bodyOffsetY) * ie9Magic;
      width = width * ie9Magic;
      height = height * ie9Magic;
    }

    width = Math.round(width);
    height = Math.round(height);
    var documentHeight = getDocumentDimensions().documentHeight;
    var documentWidth = getDocumentDimensions().documentWidth;

    var topElement = $('<div/>').addClass(cssClass).appendTo(window.document.body);
    var bottomElement = $('<div/>').addClass(cssClass).appendTo(window.document.body);
    var leftElement = $('<div/>').addClass(cssClass).appendTo(window.document.body);
    var rightElement = $('<div/>').addClass(cssClass).appendTo(window.document.body);

    $("." + cssClass).css({"background-color": borderColor, 'position': 'absolute', 'z-index': 2147483647}).hide();
    topElement.css({'left': posX, 'top': Math.max(posY, 0), 'width': width, 'height': HIGHLIGHT_BORDER_WIDTH});
    bottomElement.css({'left': posX, 'top': Math.min(posY + height, documentHeight) - HIGHLIGHT_BORDER_WIDTH, 'width': width, 'height': HIGHLIGHT_BORDER_WIDTH});
    leftElement.css({'top': posY, 'left': Math.max(posX, 0), 'width': HIGHLIGHT_BORDER_WIDTH, 'height': height});
    rightElement.css({'top': posY, 'left': Math.min(posX + width, documentWidth) - HIGHLIGHT_BORDER_WIDTH, 'width': HIGHLIGHT_BORDER_WIDTH, 'height': height});
    $("." + cssClass).show();

    startMetadataObservation();
  }

  /////////////// SCROLLING ///////////////

  function scrollIntoView(metadataIds) {
    var scrollTarget = getScrollTarget(metadataIds);
    if (scrollTarget) {
      doScrollIntoView(scrollTarget);
    }
  }

  var lastScrollLeft = NaN;
  var lastScrollTop = NaN;

  function setScrollPosition(msgJson, sourceWindow) {
    var scrollLeft = msgJson.body.scrollLeft;
    var scrollTop = msgJson.body.scrollTop;
    var replyWith = msgJson.replyWith;

    // Round the scroll values so that they can be reliably transferred
    // to attribute values. This avoid spurious scroll events because
    // rounding errors are mistaken for manual scrolling.
    lastScrollLeft = Math.round(scrollLeft);
    lastScrollTop = Math.round(scrollTop);
    // Set the scroll position.
    $(window).scrollLeft(lastScrollLeft);
    $(window).scrollTop(lastScrollTop);

    var message = {
      inReplyTo: replyWith
    };
    sourceWindow.postMessage(JSON.stringify(message), window.com_coremedia_pbe_studioUrl);
  }

  // Current heuristic: Return undefined if at least one element is in viewport or none of the elements are visible.
  // Otherwise: Return first element that can be scrolled into view.
  function getScrollTarget(metadataIds) {
    var visibleMetadataElement = undefined;
    $.each(metadataIds.reverse(), function (index, metadataId) {
      var metadataElement = cmMetadataIdToDomNodeMapping[metadataId];
      if (metadataElement && (metadataElement.clientHeight > 0)) {
        if (elementInViewport(metadataElement)) {
          // IDEA does not detect the outer scope usage correctly!
          //noinspection JSUnusedAssignment
          visibleMetadataElement = undefined;
          return false;
        }
        visibleMetadataElement = metadataElement;
      }
    });
    return visibleMetadataElement;
  }

  // Return true if the given element is fully visible in the viewport.
  function elementInViewport(el) {
    return elementInViewportX(el) && elementInViewportY(el);
  }

  function elementInViewportX(el) {
    var viewportLeft = window.pageXOffset;
    var viewportWidth = $(window).width();
    if (!viewportWidth) {
      return false;
    }
    var elOffset = getElementOffset(el);
    var elWidth = el.clientWidth;

    var completelyVisible = elOffset.left >= viewportLeft &&
            (elOffset.left + elOffset.width) <= (viewportLeft + viewportWidth);

    var visiblePart = Math.max(0, Math.min(elOffset.left + elWidth, viewportLeft + viewportWidth) - Math.max(elOffset.left, viewportLeft));

    // Either return true if (1) element is completely visible (in width) or (2) it makes up at least 30% of the viewport (in width)
    return completelyVisible || (visiblePart / viewportWidth) > 0.3;
  }

  function elementInViewportY(el) {
    var viewportTop = window.pageYOffset;
    var viewportHeight = $(window).height();
    if (!viewportHeight) {
      return false;
    }
    var elOffset = getElementOffset(el);
    var elHeight = el.clientHeight;

    var completelyVisible = elOffset.top >= viewportTop &&
            (elOffset.top + elOffset.height) <= (viewportTop + viewportHeight);

    var visiblePart = Math.max(0, Math.min(elOffset.top + elHeight, viewportTop + viewportHeight) - Math.max(elOffset.top, viewportTop));

    // Either return true if (1) element is completely visible (in height) or (2) it makes up at least 30% of the viewport (in height)
    return completelyVisible || (visiblePart / viewportHeight) > 0.3;
  }

  function getElementOffset(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return {top: top, left: left, width: width, height: height};
  }

  function doScrollIntoView(el) {
    var elOffset = getElementOffset(el);
    window.scrollTo(elementInViewportX(el) ? 0 : elOffset.left, elementInViewportY(el) ? 0 : elOffset.top);
  }

  /////////////// RETRIEVE DOCUMENT DIMENSIONS ///////////////

  function sendDocumentDimensions(msgJson, sourceWindow) {
    // From now on the Studio is expected to know the new values
    // This is a bit simplified as the message protocol is asynchronous.
    studioKnownValues.documentDimensions = getDocumentDimensions();

    var message = {
      inReplyTo : msgJson.replyWith,
      body : studioKnownValues.documentDimensions
    };
    sourceWindow.postMessage(JSON.stringify(message), window.com_coremedia_pbe_studioUrl);
  }

  function getDocumentDimensions() {
    return {
      documentHeight : document.body.scrollHeight,
      documentWidth : document.body.scrollWidth
    };
  }

  /////////////// RETRIEVE SCROLL POSITION ///////////////

  function sendScrollPosition(msgJson, sourceWindow) {
    var message = {
      inReplyTo : msgJson.replyWith,
      body : getScrollPosition()
    };
    sourceWindow.postMessage(JSON.stringify(message), window.com_coremedia_pbe_studioUrl);
  }

  function getScrollPosition() {
    // document.body.scroll* for Chrome,
    // document.documentElement.scroll* for IE
    return {
      scrollTop : $(window).scrollTop(),
      scrollLeft : $(window).scrollLeft()
    };
  }

  /////////////// CM METADATA GATHERING ///////////////

  // Counter for unique metadata IDs
  var metadataKeyCounter = 0;
  var METADATA_ID_PREFIX = "CM_METADATA_";

  // Map: metadata ID --> partial metadata tree
  var cmMetadataMap;

  // Map: metadata ID --> DOM node where metadata is annotated
  var cmMetadataIdToDomNodeMapping;

  // Let's start and collect some metadata
  initMetadata();

  function initMetadata() {
    // move metadata of nodes with data-cm-idref:
    selectElementsWithAttribute(DATA_CM_IDREF).each(moveMetadataOfProxyNode);

    // Start metadata gathering with HTML root
    var documentHtml = document.documentElement;

    cmMetadataMap = {
      root: {
        id: "root",
        children: []
      }
    };

    cmMetadataIdToDomNodeMapping = {
      root: documentHtml
    };

    // Start breadth-first gathering of metadata throughout the DOM tree
    gatherCmMetadata();
  }

  // called by jQuery each(), so we need both parameters!
  //noinspection JSUnusedLocalSymbols
  function moveMetadataOfProxyNode(index, proxyNode) {
    var jProxyNode = $(proxyNode);
    var idRef = jProxyNode.attr(DATA_CM_IDREF);
    var metadata = jProxyNode.attr(DATA_CM_METADATA);
    if (idRef && metadata) {
      var targetElement = selectElementsWithId(idRef);
      targetElement.attr(DATA_CM_METADATA, metadata);
    }
    jProxyNode.remove();
  }

  // Breadth-first gathering of metadata throughout the DOM tree. In each step, the DOM node from the
  // front of the 'nodeQueue' parameter is visited and checked for metadata. the children DOM nodes to
  // visit are added to the rear of the queue.
  function gatherCmMetadata() {
    selectElementsWithAttribute(DATA_CM_METADATA).each(function(index, domNode) {
      var jDomNode = $(domNode);

      var rawMetadataArrayString = jDomNode.attr(DATA_CM_METADATA);
      try {
        var metadataArray = rawMetadataArrayString && JSON.parse(rawMetadataArrayString);
      } catch (e) {
        console.warn("Ignoring invalid metadata string: '" + rawMetadataArrayString + "'", e);
      }

      // The DOM node holds metadata if it has a CM metadata array
      if (metadataArray && metadataArray.length > 0) {
        // ID of the metadata parent element.
        var metadataNodeParent = findClosestMetadataUpInDomTree(domNode.parentNode) || cmMetadataMap.root;

        // Include array elements as branch into metadata tree
        for (var i = 0; i < metadataArray.length; i++) {
          metadataNodeParent = addMetadataNodeToMetadataTree(metadataArray[i], metadataNodeParent, domNode);
        }
        jDomNode.attr(DATA_CM_METADATA_ID, metadataNodeParent.id);
      } else {
        jDomNode.removeAttr(DATA_CM_METADATA_ID);
      }
    });
  }

  // Returns the raw metadata string for the given dom node.

  // Add given metadata node to metadata tree.
  function addMetadataNodeToMetadataTree(metadataNode, parent, domNode) {
    var metadata = $.extend({}, metadataNode, {
      id: METADATA_ID_PREFIX + ++metadataKeyCounter,
      parentId: parent.id,
      children: []
    });

    // Filling the CM metadata map
    cmMetadataMap[metadata.id] = metadata;
    // CM metadata tree construction
    parent.children.push(metadata);
    // Filling the metadata ID to DOM node map
    cmMetadataIdToDomNodeMapping[metadata.id] = domNode;
    return metadata;
  }

  /////////////// CM METADATA QUERYING ///////////////

  // Find next DOM node with metadata attached upwards in DOM tree, beginning
  // from given node. Return metadata node or undefined.
  function findClosestMetadataUpInDomTree(currentDomNode) {
    var parentNode = $(currentDomNode).closest("[" + DATA_CM_METADATA + "]");
    return getMetadataFromWrapper(parentNode);
  }

  // If a property is given, the first parent metadata node defining this property is returned or undefined.
  function findMetadataProperty(metadataNode, property) {
    for (var currentMetadataNode = metadataNode;
         currentMetadataNode;
         currentMetadataNode = cmMetadataMap[currentMetadataNode.parentId]) {
      if (property in currentMetadataNode) {
        return currentMetadataNode[property];
      }
    }
    return undefined;
  }

  // Get metadata IDs for given DOM node if there are attached metadata. Otherwise return empty array.
  function getMetadataFromWrapper(jDomNode) {
    return cmMetadataMap[jDomNode.attr(DATA_CM_METADATA_ID)];
  }

  /////////////// SUMMARIZE AND SEND METADATA ///////////////

  function getMetadata() {
    return {
      url:document.location.href,
      cmMetadata: cmMetadataMap.root
    };
  }

  /////////////// GLOBAL VARIABLES ///////////////

  function sendGlobalVariable(msgJson, sourceWindow) {
    var messageBody = {
      value: window[msgJson.body.variableName]
    };
    var message = {
      inReplyTo:msgJson.replyWith,
      body:messageBody
    };
    sourceWindow.postMessage(JSON.stringify(message), window.com_coremedia_pbe_studioUrl);
  }

  /////////////// SCROLLING ///////////////

  function enableDocumentScroll(msgJson) {
    // Required for IE browsers. Setting iframe height for responsive preview still
    // shows scroll bars from time to time. This can result in an endless responsive
    // view adjustment loop.
    var enable = msgJson.body.enable;
    $(document.body).css("overflow-y", enable ? "auto" : "hidden");
    $(document.body).css("overflow-x", enable ? "auto" : "hidden");
  }

  /////////////// DATA ATTRIBUTES ///////////////

  function sendDataAttribute(msgJson, sourceWindow) {
    var dataAttributeName = msgJson.body.dataAttributeName;
    var data = [];
    $("[data-" + dataAttributeName + "]").each(function () {
      data.push($(this).data(dataAttributeName));
    });
    var messageBody = {
      value: data
    };
    var message = {
      inReplyTo:msgJson.replyWith,
      body:messageBody
    };
    sourceWindow.postMessage(JSON.stringify(message), window.com_coremedia_pbe_studioUrl);
  }

  /////////////// TOOLS ///////////////

  function sendClickMessage(metadataNodeId, clickType, eventCoords, elementCoords, elementDimensions) {
    var msg = JSON.stringify({
      type: 'click',
      body: {
        clickedMetadataNodeId: metadataNodeId,
        clickType: clickType,
        eventCoords: eventCoords,
        elementCoords: elementCoords,
        elementDimensions: elementDimensions,
        scrollX: window.scrollX,
        scrollY: window.scrollY
      }
    });
    window.parent.postMessage(msg, window.com_coremedia_pbe_studioUrl);
  }

  function sendHoverMessage(metadataNodeId) {
    var msg = JSON.stringify({
      type: 'hover',
      body: {
        hoveredMetadataNodeId: metadataNodeId
      }
    });
    window.parent.postMessage(msg, window.com_coremedia_pbe_studioUrl);
  }

  function computeIE9Magic() {
    var referenceElement = $(document.documentElement);
    var boundingClientRect = referenceElement.get(0).getBoundingClientRect();
    if (boundingClientRect.width > boundingClientRect.height) {
      return Math.max(1, referenceElement.outerWidth() / boundingClientRect.width);
    } else {
      return Math.max(1, referenceElement.outerHeight() / boundingClientRect.height);
    }
  }

  ///////////////////////////////////////////////////
  /////////////// MAIN INITIALIZATION ///////////////
  ///////////////////////////////////////////////////

  // Attach local listeners
  $('body').on('contextmenu', handleContextClick);
  $('body').on('mouseover', handleMouseOver);
  $(window).resize(redrawAllHighlights);

  // Enable post message handling
  $(window).on('message', postMessageHandler);

  // Load all stylesheets and JS specific for the Studio preview (eg. to disable animations)
  loadAdditionalStudioStylesAndJs();

  // Register at parent window
  var msg = JSON.stringify({
    type:'ready',
    body: getMetadata()
  });

  // Remember initial list of metadata nodes.
  studioKnownValues.metadataNodeList = selectElementsWithAttribute(DATA_CM_METADATA);
  window.parent.postMessage(msg, window.com_coremedia_pbe_studioUrl);


  /////////////// PROGRAMMATIC SCROLLING /////////////////

  window.document.addEventListener('wheel', wheel);

  function wheel(event){
    var deltaX = getDeltaX(event);
    var deltaY = getDeltaY(event);
    if (deltaX || deltaY) {
      window.scrollBy(deltaX, deltaY);
    }
    if (event.preventDefault) {
      event.preventDefault();
    }
    event.returnValue = false;
  }

  function getDeltaY(event) {
    if (event.deltaY) {
      return event.deltaY * (event.deltaMode ? event.deltaMode * 14 : 1);
    }
    return 0;
  }

  function getDeltaX(event) {
    if (event.deltaX) {
      return event.deltaX * (event.deltaMode ? event.deltaMode * 14 : 1);
    }
    return 0;
  }

  /////////////// ADDITIONAL CSS AND JS FOR STUDIO PREVIEW /////////////////

  function loadAdditionalStudioStylesAndJs() {
    var i;
    var studioStyleSheets = [];
    var studioJSFiles = [];
    var headMetadata = getMetadataFromWrapper($('head'));
    if (headMetadata) {
      studioStyleSheets = headMetadata['cm_studioPreviewCss'];
      studioJSFiles = headMetadata['cm_studioPreviewJs'];
    }
    if (studioStyleSheets && studioStyleSheets.length > 0) {
      for (i = 0; i < studioStyleSheets.length; i++) {
        $("head").append($(document.createElement("link")).attr({
          href: studioStyleSheets[i],
          type: "text/css",
          rel: "stylesheet"
        }));
      }
    }

    if (studioJSFiles && studioJSFiles.length > 0) {
      for (i = 0; i < studioJSFiles.length; i++) {
        $("body").append($(document.createElement('script')).attr({
          type: 'text/javascript',
          src: studioJSFiles[i]
        }));
      }
    }
  }

  /////////////// UPDATE MANAGEMENT /////////////////

  var metadataObserver;
  var heightObserver;
  startMetadataObservation();

  function startMetadataObservation() {
    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    if (MutationObserver) {
      if (!metadataObserver) {
        metadataObserver = new MutationObserver(deferProcessMetadataChange);
      }
      metadataObserver.observe(document.documentElement, {childList: true, subtree: true});

      if (!heightObserver) {
        heightObserver = new MutationObserver(deferProcessDimensionChange);
      }
      heightObserver.observe(document.documentElement, { attributes: true, childList: true, characterData: true, subtree: true });
    } else {
      document.body.addEventListener("DOMSubtreeModified", deferProcessMetadataChange, false);
      document.body.addEventListener("DOMSubtreeModified", deferProcessDimensionChange, false);
    }
  }

  function pauseMetadataObservation() {
    if (metadataObserver) {
      metadataObserver.disconnect();
      heightObserver.disconnect();
    } else {
      document.body.removeEventListener("DOMSubtreeModified", deferProcessMetadataChange, false);
      document.body.removeEventListener("DOMSubtreeModified", deferProcessDimensionChange, false);
    }
  }

  // Buffer some events before further action is triggered
  var metadataChangeTimer;
  function deferProcessMetadataChange() {
    window.clearTimeout(metadataChangeTimer);
    metadataChangeTimer = window.setTimeout(processMetadataChange, 200);
  }

  // Compare list of metadata nodes to reference list. Try not to compare complete
  // metadata trees as the tree generation is rather expensive.
  function processMetadataChange() {
    var newMetadataNodes = selectElementsWithAttribute(DATA_CM_METADATA);
    var updated = (studioKnownValues.metadataNodeList.length !== newMetadataNodes.length);
    if (!updated) {
      studioKnownValues.metadataNodeList.each(function(index,element) {
        updated = updated || (element !== newMetadataNodes.get(index));
        return !updated;
      });
    }
    if (updated) {
      // Remember new Studio state.
      studioKnownValues.metadataNodeList = newMetadataNodes;
      initMetadata();
      sendUpdateMessage(getMetadata());
    }
  }

  function sendUpdateMessage(body) {
    var msg = JSON.stringify({
      type: 'update',
      body: body
    });
    window.parent.postMessage(msg, window.com_coremedia_pbe_studioUrl);
  }

  function selectElementsWithAttribute(attributeName) {
    return $("[" + attributeName + "]");
  }

  function selectElementsWithId(id) {
    return $("#" + id);
  }

  // Buffer some events before further action is triggered
  var dimensionChangeTimer;
  function deferProcessDimensionChange() {
    window.clearTimeout(dimensionChangeTimer);
    dimensionChangeTimer = window.setTimeout(processDimensionChange, 200);
  }

  // Compare new document dimensions to reference dimensions and
  // send update message if necessary.
  function processDimensionChange() {
    var oldDocumentDimensions = studioKnownValues.documentDimensions;
    var newDocumentDimensions = getDocumentDimensions();
    for (var property in newDocumentDimensions) {
      if (newDocumentDimensions.hasOwnProperty(property)) {
        if (newDocumentDimensions[property] !== oldDocumentDimensions[property]) {
          sendResizeMessage({
            oldDimensions: oldDocumentDimensions,
            newDimensions: newDocumentDimensions
          });
          redrawAllHighlights();
          return;
        }
      }
    }
  }

  function sendResizeMessage(body) {
    var msg = JSON.stringify({
      type: 'resize',
      body: body
    });
    window.parent.postMessage(msg, window.com_coremedia_pbe_studioUrl);
  }

  document.addEventListener("scroll", sendScrollMessage);

  function sendScrollMessage() {
    // Make sure not to feed back scroll position if the current
    // scroll position was set by the parent frame.
    if (lastScrollTop !== $(window).scrollTop() || lastScrollLeft !== $(window).scrollLeft()) {
      var msg = JSON.stringify({
        type: 'scroll',
        body: {}
      });
      window.parent.postMessage(msg, window.com_coremedia_pbe_studioUrl);

      // Forget last scroll position so that a new event is sent when
      // returning to the programmatically established scroll position.
      lastScrollLeft = NaN;
      lastScrollTop = NaN;
    }
  }
});
