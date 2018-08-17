Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.AbstractStartTranslationWorkflowPanelBase", function(AbstractStartTranslationWorkflowPanelBase) {/*package com.coremedia.cms.editor.controlroom.workflow.translation {

import com.coremedia.ui.data.ValueExpression;

import ext.container.Container;

/**
 * The base class of the <code>AbstractStartTranslationWorkflowPanel</code>.
 * Do not instantiate this class directly. Use <code>AbstractStartTranslationWorkflowPanel</code> instead.
 *
 * @see AbstractStartTranslationWorkflowPanel
 * /
[PublicApi]
public class AbstractStartTranslationWorkflowPanelBase extends Container {
  public var pullTranslation:Boolean = undefined;

  /**
   * Create an instance of this class.
   * Do not instantiate this class directly. Use <code>AbstractStartTranslationWorkflowPanel</code> instead.
   *
   * @param config the configuration object
   * /
  public*/ function AbstractStartTranslationWorkflowPanelBase$(config/*:AbstractStartTranslationWorkflowPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$j$5r(config);
  }/*

  /**
   * <p>
   *   Return an array of mappings from variable names to variable values.
   *   One translation process will be started for each element of the
   *   returned array. For each translation process the process variables
   *   are initialized according to the returned mapping. A typical use
   *   case would be to create one variable mapping for each target site
   *   when translation to multiple sites at the same time.
   * </p>
   * <p>
   *   By default, this method throws an error. Subclasses
   *   must override this method to ensure that processes are started.
   * </p>
   *
   * the callback is called with an array of mappings from variable names to variable values
   * /
  public*/ function computeProcessVariableMappings(callback/*:Function*/)/*:void*/ {
    throw new AS3.Error("computeProcessVariableMappings() must be overridden by subclasses");
  }/*

  /**
   * The list of contents that are subject to translation.
   * Amongst others, this list is used to remove the contents from my edited contents
   * if getRemoveEditedContent() returns true.
   *
   * @return the contents that should be translated
   * /
  public*/ function getMasterContents()/*:Array*/ {
    throw new AS3.Error("getMasterContents() must be overridden by subclasses");
  }/*

  /**
   * <p>
   *   Returns true, if the contents in the translation workflow should be removed
   *   from my edited content by starting the workflow
   * </p>
   * @return true, if the contents should be removed from my edited content
   * /
  public*/ function getRemoveEditedContent()/*:Boolean*/ {
    throw new AS3.Error("getRemoveMyEditedContent must be overridden by subclasses");
  }/*

  /**
   * <p>
   *   Return true if the start button of the create translation process window
   *   should be disabled at this point of time. If the implementation registers
   *   dependencies with the dependency tracker, for example by reading a bean
   *   or a value expression, the method is called again when the dependencies
   *   are invalidated.
   * </p>
   * <p>
   *   By default, this method returns false, indicating that a process can always
   *   be started.
   * </p>
   *
   * @return true if the start button should be disabled
   * /
  public*/ function isStartButtonDisabled()/*:Boolean*/ {
    return false;
  }/*

  /**
   * Return whether this window is configured to start a pull translation (translation into the preferred site)
   * rather than a push translation (translation from the preferred site).
   *
   * @return true for pull translation
   * /
  public*/ function isPullTranslation()/*:Boolean*/ {
    return this.pullTranslation;
  }/*

  /**
   * Executes actions before starting the actual translation workflow, for example
   * the check in of all contents needed for the translation. If the
   * implementation throws an error, the creation of the workflow may be prevented.
   *
   * @param callback the function that starts the translation workflow in case of success.
   * /
  public*/ function beforeStartWorkflow(callback/*:Function*/)/*:void*/ {
    callback();
  }/*

  /**
   * @private
   * /
  [InjectFromExtParent]
  public*/ function setContents(contents/*:Array*/)/*:void*/ {
    this.initializeContents(contents);
  }/*

  //noinspection JSUnusedLocalSymbols,JSMethodCanBeStatic
  /**
   * <p>
   *   Initialize the contents on which a translation was requested by the user.
   * </p>
   * <p>
   *   By default, this method throws an error. Subclasses
   *   must override this method to ensure that the array of contents
   *   is correctly forwarded to the view model.
   * </p>
   *
   * @param contents the contents
   *
   * @see com.coremedia.cap.content.Content
   * /
  public*/ function initializeContents(contents/*:Array*/)/*:void*/ {
    throw new AS3.Error("initializeContents must be overridden by subclasses");
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      metadata: {
        "": ["PublicApi"],
        setContents: ["InjectFromExtParent"]
      },
      pullTranslation: undefined,
      constructor: AbstractStartTranslationWorkflowPanelBase$,
      super$j$5r: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      computeProcessVariableMappings: computeProcessVariableMappings,
      getMasterContents: getMasterContents,
      getRemoveEditedContent: getRemoveEditedContent,
      isStartButtonDisabled: isStartButtonDisabled,
      isPullTranslation: isPullTranslation,
      beforeStartWorkflow: beforeStartWorkflow,
      setContents: setContents,
      initializeContents: initializeContents,
      requires: [
        "AS3.Error",
        "Ext.container.Container"
      ]
    };
});
