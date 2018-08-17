/**
 *[PublicApi]
 * <p>
 * This file defines localized names of process definitions, task definitions, and process states.
 * There are four pattern for properties in this file:
 * </p>
 * <ul>
 * <li>
 *   <code>PDN_text</code>:
 *   the name of a process definition, where <code>PDN</code> is the process definition name;
 * </li>
 * <li>
 *   <code>PDN_state_STATE_text</code>:
 *   the name of a process state, where <code>PDN</code> is the process definition name
 *   and STATE is the string id of the state;
 * </li>
 * <li>
 *   <code>PDN_VAR_text</code>:
 *   the name of a process variable, where <code>PDN</code> is the process definition name
 *   and VAR is the name of the variable;
 * </li>
 * <li>
 *   <code>PDN_task_TDN_text</code>:
 *   the name of a task definition, where <code>PDN</code> is the name of the process definition
 *   containing the task definition and TDN is the name of the task definition.
 * </li>
 * </ul>
 */
Ext.define("com.coremedia.cms.editor.ProcessDefinitions_properties", {

      /**
       * @private
      */
  "ignored": "ignored"
}, function() {

  com.coremedia.cms.editor.ProcessDefinitions_properties.INSTANCE = new com.coremedia.cms.editor.ProcessDefinitions_properties();
});