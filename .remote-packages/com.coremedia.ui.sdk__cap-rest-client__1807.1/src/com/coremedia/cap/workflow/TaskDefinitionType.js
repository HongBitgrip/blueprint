Ext.define("com.coremedia.cap.workflow.TaskDefinitionType", function(TaskDefinitionType) {/*package com.coremedia.cap.workflow {
import com.coremedia.ui.util.Enum;

/**
 * Enumeration of the possible types of task definitions.
 *
 * @see TaskDefinition
 * /
[PublicApi]
public class TaskDefinitionType extends Enum {
  /** the type of an automated task * /
  public static const AUTOMATED:TaskDefinitionType =*/function AUTOMATED$static_(){TaskDefinitionType.AUTOMATED=( new TaskDefinitionType());}/*;

  /** the type of a user task * /
  public static const USER:TaskDefinitionType =*/function USER$static_(){TaskDefinitionType.USER=( new TaskDefinitionType());}/*;

  /** the type of a choice decision * /
  public static const CHOICE:TaskDefinitionType =*/function CHOICE$static_(){TaskDefinitionType.CHOICE=( new TaskDefinitionType());}/*;

  /** the type of a switch task * /
  public static const SWITCH:TaskDefinitionType =*/function SWITCH$static_(){TaskDefinitionType.SWITCH=( new TaskDefinitionType());}/*;

  /** the type of an if decision * /
  public static const IF:TaskDefinitionType =*/function IF$static_(){TaskDefinitionType.IF=( new TaskDefinitionType());}/*;

  /** the type of a fork * /
  public static const FORK:TaskDefinitionType =*/function FORK$static_(){TaskDefinitionType.FORK=( new TaskDefinitionType());}/*;

  /** the type of a join * /
  public static const JOIN:TaskDefinitionType =*/function JOIN$static_(){TaskDefinitionType.JOIN=( new TaskDefinitionType());}/*;

  /** the type of a fork of a subprocess * /
  public static const FORK_SUBPROCESS:TaskDefinitionType =*/function FORK_SUBPROCESS$static_(){TaskDefinitionType.FORK_SUBPROCESS=( new TaskDefinitionType());}/*;

  /** the type of a join of a subprocess * /
  public static const JOIN_SUBPROCESS:TaskDefinitionType =*/function JOIN_SUBPROCESS$static_(){TaskDefinitionType.JOIN_SUBPROCESS=( new TaskDefinitionType());}/*;

  /**
   * An array containing all task definition types.
   * /
  [ArrayElementType("com.coremedia.cap.workflow.TaskDefinitionType")]
  public static const values:Array =*/function values$static_(){TaskDefinitionType.values=( com.coremedia.ui.util.Enum.collectValues(TaskDefinitionType));}/*;

  /**
   * Return the task definition type with the given name.
   *
   * @param name the name of the task definition type
   * @return the task definition type
   * /
  public static*/ function named$static(name/*:String*/)/*:TaskDefinitionType*/ {
    return com.coremedia.ui.util.Enum.namedIn(name, TaskDefinitionType);
  }/*
}*/function TaskDefinitionType$() {this.super$x8Gl();}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.util.Enum",
      metadata: {"": ["PublicApi"]},
      super$x8Gl: function() {
        com.coremedia.ui.util.Enum.prototype.constructor.apply(this, arguments);
      },
      constructor: TaskDefinitionType$,
      statics: {
        AUTOMATED: undefined,
        USER: undefined,
        CHOICE: undefined,
        SWITCH: undefined,
        IF: undefined,
        FORK: undefined,
        JOIN: undefined,
        FORK_SUBPROCESS: undefined,
        JOIN_SUBPROCESS: undefined,
        values: undefined,
        named: named$static,
        __initStatics__: function() {
          AUTOMATED$static_();
          USER$static_();
          CHOICE$static_();
          SWITCH$static_();
          IF$static_();
          FORK$static_();
          JOIN$static_();
          FORK_SUBPROCESS$static_();
          JOIN_SUBPROCESS$static_();
          values$static_();
        }
      },
      requires: ["com.coremedia.ui.util.Enum"]
    };
});
