Ext.define("flexunit.textui.ResultPrinter", function(ResultPrinter) {/* /*

============================================== Jangaroo part ==============================================*/
    return {
      mixins: [
        "flexunit.framework.TestListener",
        "flexunit.textui.Printer"
      ],
      constructor: ResultPrinter$,
      print: print,
      printHeader: printHeader,
      printErrors: printErrors,
      printFailures: printFailures,
      printDefects: printDefects,
      printDefect$BZR1: printDefect,
      printDefectHeader$BZR1: printDefectHeader,
      printDefectTrace$BZR1: printDefectTrace,
      printFooter$BZR1: printFooter,
      addError: addError,
      addFailure: addFailure,
      endTest: endTest,
      startTest: startTest,
      updateProgress$BZR1: updateProgress,
      _progress$BZR1: null,
      requires: [
        "AS3.trace",
        "flexunit.framework.TestListener",
        "flexunit.textui.Printer"
      ],
      uses: ["flexunit.framework.TestFailure"]
    };
});