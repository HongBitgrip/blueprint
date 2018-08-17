// Set current time... Enables remote control to find out when studio was started
window.document.openTimestamp = (new Date()).getTime();
// Set window name if necessary. Makes window accessible via remote control.
if (window.name != "CoreMediaStudio") {
  window.name = "CoreMediaStudio";
}

joo = joo || {};
joo.localization = joo.localization || {};
joo.localization.localeCookieName = "com.coremedia.cms.editor.locale";
