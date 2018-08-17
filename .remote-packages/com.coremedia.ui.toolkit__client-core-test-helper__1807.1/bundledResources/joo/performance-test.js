/**
 * simple library to measure some client performance
 */
(function() {
  var tests = {};

  // very basic JSON stringify method, sufficient for our use case.
  function toJsonString(value) {
    if (!value) {
      return 'null';
    }
    var result = [];
    if (typeof value === "string") {
      return '"' + value + '"';
    } else if (typeof value === "number") {
      return String(value);
    } else if (Object.prototype.toString.apply(value) === '[object Array]') {
      for (var i = 0; i < value.length; ++i) {
        result.push(toJsonString(value[i]));
      }
      return '[' + result.join(',\n') + ']';
    } else {
      for (var p in value) {
        if ((typeof value[p]) !== "function") {
          result.push('"' + p + '": ' + toJsonString(value[p]));
        }
      }
      return '{' + result.join(', ') + '}';
    }
  }

  function doAnalyzeDom(node, depth, stats) {
    // Gather statistics.
    var tagName = node.tagName;
    if (tagName) {
      stats.count++;
      stats.maxDepth = Math.max(stats.maxDepth, depth);
      stats.sumDepth += depth;
      stats.sumDepthSquare += depth * depth;
      stats.byTag[tagName] = stats.byTag[tagName] ? stats.byTag[tagName] + 1 : 1;
    }

    // Recurse.
    var childNodes = node.childNodes;
    for (var i = 0; i < childNodes.length; i++) {
      var child=childNodes[i];
      doAnalyzeDom(child, depth+1, stats);
    }
  }

  window.PerformanceTest = {
    startTest: function(name) {
      var start = new Date().getTime();
      tests[name] = {'start': start};
      /*if (window.console !== undefined) {
       console.info("startTest: %s", name);
       } */
    },

    endTest: function(name) {
      var test = tests[name];
      if (test) {
        test.time = new Date().getTime() - test.start;
        /* if (window.console !== undefined) {
         console.info("endTest: ", name);
         }*/
      }
    },

    startTestWithCounter: function(name) {
      var start = new Date().getTime();
      tests[name] = {'start': start };
      tests[name].counter = 0;
    },

    endTestWhenCounterReached: function(name, condition) {
      if(tests[name].counter === condition) {
        PerformanceTest.endTest(name);
          /* if (window.console !== undefined) {
            console.info("endTest: ", name);
         } */
      }
    },

    incrementCounter: function(name) {
      tests[name].counter++;
    },

    listResults: function() {
      if (window.console !== undefined) {
        for (var test in tests) {
          if (tests[test].time) {
            console.info("Test: '%s' took %sms (%ssec).", test, tests[test].time, (tests[test].time) / 1000);
          } else {
            console.info("Test: '%s' started at %s never stopped.", test, (new Date(tests[test].start)).toTimeString());
          }
        }
      }
    },

    runningTests: function() {
      var result = [];
      for (var test in tests) {
        if (!tests[test].time) {
          result.push(test);
        }
      }
      return result;
    },

    testStillRunning: function(name) {
      return tests[name] && !tests[name].time;
    },

    resultAsJsonString: function(name) {
      if (tests[name]) {
        return "{ \"test\":\"" + name + "\", \"start\":" + tests[name].start + ", \"duration\": " + tests[name].time + "}";
      } else {
        return null;
      }
    },

    resultsAsJsonString: function() {
      var json = "[";
      for (var test in tests) {
        json += "{ \"test\":\"" + test + "\", \"start\":" + tests[test].start + ", \"duration\": " + tests[test].time + "},\n";
      }
      if (json.length > 1) {
        json = json.substr(0, json.length - 2);
      }
      json += "]";
      return json;
    },

    analyzeDom: function(domId) {
      var stats = {
        count:0,
        sumDepth:0,
        maxDepth:0,
        sumDepthSquare:0,
        byTag:{}
      };
      doAnalyzeDom(domId ? document.getElementById(domId) : document.body, 0, stats);
      stats.averageDepth = stats.sumDepth / stats.count;
      stats.stdDevDepth = Math.sqrt(stats.sumDepthSquare / stats.count - stats.sumDepth * stats.sumDepth / stats.count / stats.count);
      return stats;
    },

    analyzeDomAsJsonString: function(domId) {
      return toJsonString(PerformanceTest.analyzeDom(domId));
    }
  };
})();
