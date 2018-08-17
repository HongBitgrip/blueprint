/* globals CKEDITOR */

(function () {
  'use strict';

  var PLUGIN_NAME = 'cmbase';

  if (typeof CKEDITOR.coremedia === 'undefined') {
    // Create CoreMedia Namespace
    CKEDITOR.coremedia = {};
  }

  var HASH_PARAM_RE = /([^=]*)=(.*)/;

  /**
   * Get the given hash parameter value from the given url
   * @param {string} key the hash parameter key to read
   * @returns {string/boolean} undefined iff. hash parameter is not set; true iff. the hash parameter is given without
   * arguments; string value otherwise
   */
  CKEDITOR.coremedia.getHashParam = function (key) {
    if (window.location && window.location.hash) {
      // substring: Remove hash
      var hash = window.location.hash.substring(1);
      var hashParams = hash.split(/[&]/);
      for (var i = 0; i < hashParams.length; i++) {
        var hashParam = hashParams[i];
        if (key === hashParam) {
          return true;
        }
        var paramMatch = HASH_PARAM_RE.exec(hashParam);
        if (paramMatch) {
          if (paramMatch[1] === key) {
            // Map empty String to truthy value.
            return paramMatch[2] || true;
          }
        }
      }
    }
    return undefined;
  };

  var LEVELS = ['debug', 'info', 'warn', 'error'];
  var DISABLED_LEVELS = (function () {
    var ckDebugLevel = CKEDITOR.coremedia.getHashParam('ckdebug');
    if (ckDebugLevel === true) {
      // Default log level, if any logging is requested
      ckDebugLevel = 'info';
    } else if (ckDebugLevel === 'verbose') {
      // Legacy alias for debug: verbose
      ckDebugLevel = 'debug';
    }
    var levelIndex = LEVELS.indexOf(ckDebugLevel);
    return -1 < levelIndex ? LEVELS.slice(0, levelIndex) : LEVELS;
  })();

  /**
   * Logger which knows different log levels. Log level is configured by hash parameter <code>ckdebug</code>.
   */
  CKEDITOR.coremedia.Logger = CKEDITOR.tools.createClass({
    /**
     * Constructor for the logger.
     * @param {CKEDITOR} editor editor whose name will be used within logging
     * @param {string} loggerName optional name of the logger
     */
    $: function (editor, loggerName) {
      this.loggerName = editor.name + (loggerName ? ':' + loggerName : '');
      this.logger = {
        debug: this.getLogger('debug'),
        info: this.getLogger('info'),
        warn: this.getLogger('warn'),
        error: this.getLogger('error')
      };
    },
    proto: {
      getLogger: function (level) {
        if (DISABLED_LEVELS.indexOf(level) < 0) {
          if (window.console && window.console[level] && window.console[level].apply) {
            return function () {
              window.console[level].apply(null, Array.prototype.slice.call(arguments));
            }
          }
        }
        return null;
      },
      /**
       * Transforms JavaScript arguments object into an array and adds some information in front of the message.
       * @param {string} level the log level
       * @param {Arguments} argumentsObject the original arguments passed to the logging function
       * @returns {Array} array of arguments
       */
      loggerArguments: function (level, argumentsObject) {
        var argumentsArray = Array.prototype.slice.call(argumentsObject);
        argumentsArray.unshift('[' + level.toUpperCase() + ']', this.loggerName + ':');
        return argumentsArray;
      },
      /**
       * Determines if debug logging is enabled.
       * @returns {boolean} true if debug logging is enabled, false otherwise
       */
      isDebugEnabled: function () {
        return !!this.logger['debug'];
      },
      /**
       * Writes a debug message.
       * @param {...*} message the message to print
       */
      debug: function (message) {
        this.isDebugEnabled() && this.logger['debug'].apply(null, this.loggerArguments('debug', arguments));
      },
      /**
       * Determines if info logging is enabled.
       * @returns {boolean} true if info logging is enabled, false otherwise
       */
      isInfoEnabled: function () {
        return !!this.logger['info'];
      },
      /**
       * Writes a warning message.
       * @param {...*} message the message to print
       */
      info: function (message) {
        this.isInfoEnabled() && this.logger['info'].apply(null, this.loggerArguments('info', arguments));
      },
      /**
       * Determines if warn logging is enabled.
       * @returns {boolean} true if warn logging is enabled, false otherwise
       */
      isWarnEnabled: function () {
        return !!this.logger['warn'];
      },
      /**
       * Writes a warning message.
       * @param {...*} message the message to print
       */
      warn: function (message) {
        this.isWarnEnabled() && this.logger['warn'].apply(null, this.loggerArguments('warn', arguments));
      },
      /**
       * Determines if error logging is enabled.
       * @returns {boolean} true if error logging is enabled, false otherwise
       */
      isErrorEnabled: function () {
        return !!this.logger['error'];
      },
      /**
       * Writes an error message.
       * @param {...*} message the message to print
       */
      error: function (message) {
        this.isErrorEnabled() && this.logger['error'].apply(null, this.loggerArguments('error', arguments));
      }
    }
  });

  CKEDITOR.plugins.add(PLUGIN_NAME, {
    requires: []
  });
})();
