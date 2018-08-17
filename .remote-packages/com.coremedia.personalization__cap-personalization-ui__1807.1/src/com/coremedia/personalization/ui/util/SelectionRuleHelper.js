Ext.define("com.coremedia.personalization.ui.util.SelectionRuleHelper", function(SelectionRuleHelper) {/*package com.coremedia.personalization.ui.util {
import joo.debug;

/**
 * This utility class provides functions for converting selection rules written in the
 * CoreMedia selection-rules language from and to a representation better suited
 * for UI construction and initialization.
 * /
public class SelectionRuleHelper {

  public static const CON_AND:String = '_and_';
  public static const CON_OR:String = '_or_';

  public static const OP_LESS_THAN:String = '<';
  public static const OP_LESS_THAN_OR_EQUAL:String = '<=';
  public static const OP_EQUAL:String = '=';
  public static const OP_NOTEQUAL:String = '!=';
  public static const OP_GREATER_THAN_OR_EQUAL:String = '>=';
  public static const OP_GREATER_THAN:String = '>';
  public static const OP_CONTAINS:String = '#';
  public static const EMPTY_VALUE:String = '/v/';
  public static const EMPTY_OPERATOR:String = '/o/';

  private static const*/var SYNTAX_KEYWORD$static/*:String*/ = '([a-zA-Z_][a-zA-Z_0-9\\.\\:]*)';/* // e.g. contextName.content:60
  private static const*/var SYNTAX_BOOL$static/*:String*/ = 'true|false';/*
  private static const*/var SYNTAX_SEPARATOR$static/*:String*/ = '\\s*(?:;|\\r?\\s*\\n)+\\s*';/*
  private static const*/var SYNTAX_OPERATOR$static/*:String*/;/* =*/function SYNTAX_OPERATOR$static_(){SYNTAX_OPERATOR$static=( '(<|<=|=|>=|!=|#|>|' + SelectionRuleHelper.EMPTY_OPERATOR + ')');};/*
  private static const*/var SYNTAX_NUMBER$static/*:String*/ = '\\d+(\\.\\d+)?';/*
  private static const*/var SYNTAX_STRING$static/*:String*/ = '"[^"]*"';/*
  private static const*/var SYNTAX_DATE$static/*:String*/ = '\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}';/*
  private static const*/var SYNTAX_TIME$static/*:String*/ = '\\d{2}:\\d{2}:\\d{2}';/*
  private static const*/var SYNTAX_VALUE$static/*:String*/;/* =*/function SYNTAX_VALUE$static_(){SYNTAX_VALUE$static=( '(' + SYNTAX_TIME$static + '|' + SYNTAX_DATE$static + '|' + SYNTAX_STRING$static + '|' + SYNTAX_KEYWORD$static + '|' + SYNTAX_NUMBER$static + '|' + SYNTAX_BOOL$static + '|' + SelectionRuleHelper.EMPTY_VALUE + ')');};/*
  private static const*/var SYNTAX_CONDITION$static/*:String*/;/* =*/function SYNTAX_CONDITION$static_(){SYNTAX_CONDITION$static=( SYNTAX_KEYWORD$static + '\\s*' + SYNTAX_OPERATOR$static + '\\s*' + SYNTAX_VALUE$static);};/*
  private static const*/var SYNTAX_CONTENTID$static/*:String*/;/* =*/function SYNTAX_CONTENTID$static_(){SYNTAX_CONTENTID$static=( com.coremedia.personalization.ui.util.RuleXMLCoDec.INTERNAL_CONTENT_ID_PREFIX + "(\\d+)");};/*
  private static const*/var SYNTAX_RULE$static/*:String*/;/* =*/function SYNTAX_RULE$static_(){SYNTAX_RULE$static=(
          '^(' +
          '\\s*select\\s+(' + SYNTAX_CONTENTID$static + ')(\\s+if\\s+' + SYNTAX_CONDITION$static +
          '(\\s+(and|or)\\s+' + SYNTAX_CONDITION$static + ')*)?\\s*' +
          ')?$');};/*

  // pattern used to test rule syntax
  private static const*/var RULE_SYNTAX_PATTERN$static/*:RegExp*/;/* =*/function RULE_SYNTAX_PATTERN$static_(){RULE_SYNTAX_PATTERN$static=( new RegExp(SYNTAX_RULE$static));};/*
  // pattern used to test separator syntax
  private static const*/var RULE_SEPARATOR_PATTERN$static/*:RegExp*/;/* =*/function RULE_SEPARATOR_PATTERN$static_(){RULE_SEPARATOR_PATTERN$static=( new RegExp(SYNTAX_SEPARATOR$static));};/*
  // pattern used to test conditions syntax
  private static const*/var CONDITIONS_SYNTAX_PATTERN$static/*:RegExp*/;/* =*/function CONDITIONS_SYNTAX_PATTERN$static_(){CONDITIONS_SYNTAX_PATTERN$static=( new RegExp(
          '^(\\s*' + SYNTAX_CONDITION$static + '(\\s+(and|or)\\s+' + SYNTAX_CONDITION$static + ')*)?\\s*$'));};/*
  // pattern used to extract the content id used in a rule
  private static const*/var CONTENTID_PATTERN$static/*:RegExp*/;/* =*/function CONTENTID_PATTERN$static_(){CONTENTID_PATTERN$static=( new RegExp('^\\s*select\\s+' + SYNTAX_CONTENTID$static));};/*
  // pattern used to extract the 'conditions' part of a rule
  private static const*/var CONDITIONS_PATTERN$static/*:RegExp*/;/* =*/function CONDITIONS_PATTERN$static_(){CONDITIONS_PATTERN$static=( new RegExp('\\s*select\\s+(.+)\\s+if\\s+(.+)'));};/*
  // pattern used to split a predicate into its parts
  private static const*/var PRED_PATTERN$static/*:RegExp*/;/* =*/function PRED_PATTERN$static_(){PRED_PATTERN$static=( new RegExp('^\\s*' + SYNTAX_KEYWORD$static +
    '\\s*' + SYNTAX_OPERATOR$static + '\\s*' + SYNTAX_VALUE$static + '\\s*$'));};/*

  /**
   * Tests whether the supplied rules are syntactically sound.
   *
   * @param rules the rules to be tested
   *
   * @return true iff the rules comply to the language syntax
   * /
  public static*/ function isValidRuleList$static(rules/*:String*/)/*:Boolean*/ {
    var rulesArray/*:Array*/ = SelectionRuleHelper.splitRules(rules);
    for(var i/*:int*/ = 0; i < rulesArray.length; i++) {
      var rule/*:String*/ = rulesArray[i];
      if(RULE_SYNTAX_PATTERN$static.exec(rule) == null) {
        return false;
      }
    }
    return true;
  }/*

  /**
   * Tests whether the supplied conditions expression is syntactically sound.
   *
   * @param conditionsExpr the expression to be tested
   *
   * @return true iff the expression complies to the language syntax
   * /
  public static*/ function isValidConditionsExpr$static(conditionsExpr/*:String*/)/*:Boolean*/ {
    return CONDITIONS_SYNTAX_PATTERN$static.exec(conditionsExpr) != null;
  }/*

  /**
   * Parses a list of rules.
   *
   * @param rules
   *
   * @return
   * /
  public static*/ function parseSelectionRules$static(rules/*:String*/)/*:Array*/ {
    var result/*:Array*/ = [];

    if (rules == null || rules.length == 0)
      return result;/*

    const*/var singleRules/*:Array*/ = SelectionRuleHelper.splitRules(rules);
    for (var i/*:int*/ = 0; i < singleRules.length; ++i) {/*
      const*/var rule/*:String*/ = singleRules[i];/*
      const*/var contentId/*:int*/ = SelectionRuleHelper.contentIdFromSelectionRule(rule);/*
      const*/var conditions/*:Array*/ = SelectionRuleHelper.conditionsFromConditionsExpr(SelectionRuleHelper.conditionsExprFromSelectionRule(rule));
      result.push([contentId, conditions]);
    }
    return result;
  }/*

  /**
   * Splits a list of rules into individual rules. Uses ';' and/or
   * newlines as the split character. Rule syntax is not checked.
   *
   * @param rules the list of rules to be split
   *
   * @return an array containing the individual rules without the separation chars
   * /
  public static*/ function splitRules$static(rules/*:String*/)/*:Array*/ {
    return rules.split(RULE_SEPARATOR_PATTERN$static);
  }/*

  /**
   * Extracts the content id from the supplied rule. Only the number without the
   * 'content:' prefix is being returned. Assumes the supplied rule is well formatted.
   *
   * @param rule the rule from which to extract the content id
   *
   * @return the numeric id or 0 if the id cannot be extracted
   * /
  public static*/ function contentIdFromSelectionRule$static(rule/*:String*/)/*:int*/ {/*
    const*/var match/*:Object*/ = CONTENTID_PATTERN$static.exec(rule);
    return match != null ? match[1] : 0;
  }/*

  /**
   * Parses a conditions expression. This method can parse only
   * a subset of the valid conditionsExpr syntax. In particular, an empty result
   * is returned if the supplied expression is not of the form
   * <code><key> (&lt;|&lt;=|=|&gt;=|&gt;) <value> [(and|or) <key> ((&lt;|&lt;=|=|&gt;=|&gt;) <value>]...</code>
   *
   * @param conditionsExpr the expression to be parsed
   *
   * @return an array of keyword, operator, value, connector entries, e.g.
   *  <code>['foo', OP_EQUAL, '0.7', CON_OR, 'bar', OP_LESS_THAN, '0.5']</code>.
   * /  
  public static*/ function conditionsFromConditionsExpr$static(conditionsExpr/*:String*/)/*:Array*/ {

    var result/*:Array*/ = [];
    var conditions/*:Array*/ = [];

    if (conditionsExpr == null || conditionsExpr == "")
      return result;

    // normalize string so that we don't stumble over line-breaks
    conditionsExpr = conditionsExpr.replace(/\s+/g, ' ');

    while (true) {
      var match/*:Array*/ = conditionsExpr.match(/^(.+)\s+(and|or)\s+(.+)$/);

      if (match) {
        conditionsExpr = match[1];
        var opMatch/*:String*/ = match[match.length - 2];
        var opSuffix/*:String*/ = match[match.length - 1];
        conditions.unshift(opMatch, opSuffix);
      } else {
        conditions.unshift(conditionsExpr);
        break;
      }
    }
    var op/*:String*/ = null;
    for (var i/*:int*/ = 0; i < conditions.length; ++i) {
      var pred/*:String*/ = conditions[i];
      if (pred == "and") {
        op = SelectionRuleHelper.CON_AND;
      } else if (pred == "or") {
        op = SelectionRuleHelper.CON_OR;
      } else {
        var predMatch/*:Object*/ = PRED_PATTERN$static.exec(pred);
        if(joo.debug) {
          AS3.trace("found predicate", pred, "with fragments", predMatch);
        }
        if (predMatch != null) {
          if (op != null)
            result.push(op);
          result.push(predMatch[1], predMatch[2], predMatch[3]);
          op = null;
        } else {
          // syntax error. abort parsing
          if(joo.debug) {
            AS3.trace("[WARN]: unable to parse conditions",conditionsExpr,"unknown predicate detected", pred);
          }
          return [];
        }
      }
    }
    return result;
  }/*

  /**
   * Extracts  the conditions part of a rule.
   *
   * @param rule The rule from which to extract the conditions.
   *
   * @return the conditionsExpr of the rule
   * /
  public static*/ function conditionsExprFromSelectionRule$static(rule/*:String*/)/*:String*/ {
    if (rule == null || rule == "")
      return "";/*
    const*/var condMatch/*:Object*/ = CONDITIONS_PATTERN$static.exec(rule);
    return condMatch != null ? condMatch[2] : "";
  }/*

  /**
   * Creates a string representing a selection rule for content objects in valid rule syntax.
   *
   * @param contentId content id to be used in the rule. Assumed to be an integer.
   * @param conditions conditions to be used in the rule. Assumed to be an array
   *  of keyword, operator, value, connector entries, e.g.
   * <code>['foo', OP_EQUAL, '0.7', CON_OR, 'bar', OP_LESS_THAN, '0.5']</code>.
   *
   * @return a rule in valid rule syntax
   * /
  public static*/ function createContentSelectionRule$static(contentId/*:int*/, conditions/*:Array*/)/*:String*/ {
    return 'select content:' + contentId + conditionString$static(conditions);
  }/*

  /**
   * Creates a string representing a selection rule for content objects in valid rule syntax.
   *
   * @param contentId content id to be used in the rule. Assumed to be an integer.
   * @param conditionsExpr conditions expression to be used in the rule
   *
   * @return a rule in valid rule syntax
   * /
  public static*/ function createContentSelectionRuleFromConditionsExpr$static(contentId/*:int*/, conditionsExpr/*:String*/)/*:String*/ {
    return 'select content:' + contentId + (conditionsExpr != null && conditionsExpr.length > 0 ? ' if ' + conditionsExpr : '');
  }/*

  // creates the conditions segment (everything after the 'if') of a rule
  private static*/ function conditionString$static(conditions/*:Array*/)/*:String*/ {
    var result/*:String*/ = "";
    if (conditions != null && conditions.length > 0) {
      result += ' if ';
      result += SelectionRuleHelper.createConditionsExpr(conditions);
     }
    return result;
  }/*

  /**
   * Creates a string representing a conditions expressions as defined in the CMSelectionRules grammar.
   *
   * @param conditions conditions to be used in the rule. Assumed to be an array
   *  of keyword, operator, value, connector entries, e.g.
   * <code>['foo', OP_EQUAL, '0.7', CON_OR, 'bar', OP_LESS_THAN, '0.5']</code>.
   *
   * @return a valid conditions expression
   * /
  public static*/ function createConditionsExpr$static(conditions/*:Array*/)/*:String*/ {
    var result/*:String*/ = "";
    for (var i/*:int*/ = 0; i < conditions.length; ++i) {/*
       const*/var token/*:String*/ = conditions[i];
       switch (token) {
         case SelectionRuleHelper.CON_AND:
           result += ' and ';
           break;
         case SelectionRuleHelper.CON_OR:
           result += ' or ';
           break;
         default:
           result += token;
       }
     }
    return result;
  }/*

  /**
   * Creates a string representing a selection rule for segments in valid rule syntax.
   *
   * @param segmentName name to be used in the rule. Assumed to be a String.
   * @param conditions conditions to be used in the rule. Assumed to be an array
   *  of keyword, operator, value, connector entries, e.g.
   * <code>['foo', OP_EQUAL, '0.7', CON_OR, 'bar', OP_LESS_THAN, '0.5']</code>.
   *
   * @return a rule in valid rule syntax
   * /
  public static*/ function createSegmentSelectionRule$static(segmentName/*:String*/, conditions/*:Array*/)/*:String*/ {
    return 'select segment:' + segmentName + conditionString$static(conditions);
  }/*

  /**
   * Concatenates rules to a rule list. Doesn't perform any syntax checking, so if
   * garbage is supplied, garbage will be returned. Skips all empty rules (rules that
   * are <code>null</code> or <code>""</code>).
   *
   * @param rules the rules to be concatenated
   *
   * @return the concatenated rules
   * /
  public static*/ function createSelectionRuleList$static(rules/*:Array*/)/*:String*/ {
    var ruleList/*:String*/ = "";
    for (var i/*:int*/ = 0; i < rules.length; ++i) {
      if (rules[i] == null || rules[i] == "") continue;
      if (ruleList != "") ruleList += "; ";
      ruleList += rules[i];
    }
    return ruleList;
  }/*
}*/function SelectionRuleHelper$() {}/*

}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: SelectionRuleHelper$,
      statics: {
        CON_AND: '_and_',
        CON_OR: '_or_',
        OP_LESS_THAN: '<',
        OP_LESS_THAN_OR_EQUAL: '<=',
        OP_EQUAL: '=',
        OP_NOTEQUAL: '!=',
        OP_GREATER_THAN_OR_EQUAL: '>=',
        OP_GREATER_THAN: '>',
        OP_CONTAINS: '#',
        EMPTY_VALUE: '/v/',
        EMPTY_OPERATOR: '/o/',
        SYNTAX_OPERATOR: undefined,
        SYNTAX_VALUE: undefined,
        SYNTAX_CONDITION: undefined,
        SYNTAX_CONTENTID: undefined,
        SYNTAX_RULE: undefined,
        RULE_SYNTAX_PATTERN: undefined,
        RULE_SEPARATOR_PATTERN: undefined,
        CONDITIONS_SYNTAX_PATTERN: undefined,
        CONTENTID_PATTERN: undefined,
        CONDITIONS_PATTERN: undefined,
        PRED_PATTERN: undefined,
        isValidRuleList: isValidRuleList$static,
        isValidConditionsExpr: isValidConditionsExpr$static,
        parseSelectionRules: parseSelectionRules$static,
        splitRules: splitRules$static,
        contentIdFromSelectionRule: contentIdFromSelectionRule$static,
        conditionsFromConditionsExpr: conditionsFromConditionsExpr$static,
        conditionsExprFromSelectionRule: conditionsExprFromSelectionRule$static,
        createContentSelectionRule: createContentSelectionRule$static,
        createContentSelectionRuleFromConditionsExpr: createContentSelectionRuleFromConditionsExpr$static,
        createConditionsExpr: createConditionsExpr$static,
        createSegmentSelectionRule: createSegmentSelectionRule$static,
        createSelectionRuleList: createSelectionRuleList$static,
        __initStatics__: function() {
          SYNTAX_OPERATOR$static_();
          SYNTAX_VALUE$static_();
          SYNTAX_CONDITION$static_();
          SYNTAX_CONTENTID$static_();
          SYNTAX_RULE$static_();
          RULE_SYNTAX_PATTERN$static_();
          RULE_SEPARATOR_PATTERN$static_();
          CONDITIONS_SYNTAX_PATTERN$static_();
          CONTENTID_PATTERN$static_();
          CONDITIONS_PATTERN$static_();
          PRED_PATTERN$static_();
        }
      },
      requires: ["AS3.trace"],
      uses: ["com.coremedia.personalization.ui.util.RuleXMLCoDec"]
    };
});
