Ext.define("com.coremedia.cms.editor.sdk.preview.PreviewDependencyManager", function(PreviewDependencyManager) {/*package com.coremedia.cms.editor.sdk.preview {

import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTree;
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.PropertyChangeEvent;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.impl.PropertyPathUtil;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.ObjectUtils;

import ext.util.Observable;

/**
 * Fires after the dependency has changed.
 * Parameters:
 * <ul>
 *   <li>
 *     <code>metadataId:String</code> the id of the metadata
 *   </li>
 *   <li>
 *     <code>oldValue:*</code> the old value
 *   </li>
 *   <li>
 *     <code>newValue:*</code> the new value
 *   </li>
 * </ul>
 * /
[Event(name = "previewDepChanged")] // NOSONAR - no type

/**
 * Internal helper class that encapsulates the preview dependency management.
 *
 * During initialization all preview dependencies are collected from the metadata tree.
 * Client components can then register listeners to be informed whenever one of these
 * collected dependencies changes.
 * /
internal class PreviewDependencyManager extends Observable {

  /**
   * Name of the event that fires whenever one of the collected dependencies changes.
   * /
  public static const PREVIEW_DEPENDENCY_CHANGED_EVENT:String = "previewDepChanged";

  private var dependencies:Array/*Array<Bean>* /;
  private var metadataIdsByBeanAndProperty:Object/*<String,Array<String>>* /;
  private var metadataValueExpression:ValueExpression;

  private var previewPanel:PreviewPanelBase;

  private var initialBean:Bean;

  /**
   * Create a new PreviewDependencyManager for the given preview panel. The instance of the dependency manager
   * updates automatically whenever the preview metadata changes.
   * When the instance is not used anymore, destroy should be called to release listeners.
   * @param previewPanel The preview panel to collect metadata from.
   * @param initialBean  The value expression holding the bean being previewed
   * @see #cleanup()
   * /
  public*/ function PreviewDependencyManager$(previewPanel/*:PreviewPanelBase*/, initialBean/*:Bean*/) {this.super$7v7w();
    this.previewPanel$7v7w = previewPanel;
    this.initialBean$7v7w = initialBean;

    // Until the metadata becomes available for the first time,
    // listen to all changes of the bean provided by the bindTo value
    // expression.
    if (initialBean) {
      initialBean.addValueChangeListener(AS3.bind(this,"initialBeanValueChanged$7v7w"));
    }

    this.setup$7v7w();
  }/*

  private*/ function setup()/*:void*/ {var this$=this;
    if (this.previewPanel$7v7w.rendered) {
      this.getMetadataValueExpression$7v7w().addChangeListener(AS3.bind(this,"initMetadata"));
    } else {
      this.previewPanel$7v7w.on("afterrender", function ()/*:void*/ {
        this$.getMetadataValueExpression$7v7w().addChangeListener(AS3.bind(this$,"initMetadata"));
      }, null, {single:true});
    }
  }/*

  private*/ function getMetadataValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.metadataValueExpression$7v7w) {
      this.metadataValueExpression$7v7w = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:MetadataTree*/ {
        return this$.previewPanel$7v7w.getMetadataService().getMetadataTree([com.coremedia.cms.editor.sdk.preview.MetadataHelper.METADATA_DEFAULT_PROPERTY]);
      });
    }

    return this.metadataValueExpression$7v7w;
  }/*

  private*/ function initialBeanValueChanged()/*:void*/ {
    this.firePreviewDependencyChangedEvent$7v7w(null, null, null);
  }/*

  /**
   * Returns IDs of all metadata nodes that depend on the given bean and property.
   * Returns undefined when uninitialized or no matching dependencies were registered.
   * @param bean Bean dependency
   * @param property Bean property
   * @return Array of metadata IDs that show the given bean property value
   * /
  public*/ function getMetadataIdsForBeanProperty(bean/*:Bean*/, property/*:String*/)/*:Array*/ {
    if (this.metadataIdsByBeanAndProperty$7v7w) {/*
      const*/var key/*:String*/ = generateBeanPropertyKey$static(bean, property);
      return this.metadataIdsByBeanAndProperty$7v7w[key];
    }
    return undefined;
  }/*

  private*/ function dependencyChangedListener(event/*:PropertyChangeEvent*/)/*:void*/ {var this$=this;
    // Stop here if the bean is just being loaded.
    if (event.oldState !== com.coremedia.ui.data.BeanState.UNKNOWN) {
      var bean/*:Bean*/ =AS3.as( event.bean,  com.coremedia.ui.data.Bean);
      var newValue/*:**/ = event.newValue;
      var oldValue/*:**/ = event.oldValue;
      var changedProperty/*:String*/ = com.coremedia.ui.data.impl.PropertyPathUtil.deserialize(event.property).join(".");
      var beanPropertyKey/*:String*/ = generateBeanPropertyKey$static(bean, changedProperty);
      var metadataId/*:String*/ = this.metadataIdsByBeanAndProperty$7v7w[beanPropertyKey];

      // do not fire event when value has not changed.
      if (oldValue !== undefined &&
              !com.coremedia.ui.util.ObjectUtils.equal(oldValue, newValue) &&
              (!(AS3.is(oldValue,  Object) &&AS3.is( newValue,  Object)) || !com.coremedia.ui.util.ObjectUtils.compareObjectsWithEqual(oldValue, newValue))) {

        function doFireEvent ()/*:void*/ {
          this$.firePreviewDependencyChangedEvent$7v7w(metadataId, oldValue, newValue);
        }

        if (AS3.is(bean,  com.coremedia.ui.data.RemoteBean)) {
          // Make sure the timestamp after the update has been written to the
          // global time tracker. To this end flush, but only after giving
          // the writer some time to complete other property updates.
          com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
            AS3.cast(com.coremedia.ui.data.RemoteBean,bean).flush(doFireEvent);
          });
        } else {
          doFireEvent();
        }
      }
    }
  }/*

  private*/ function firePreviewDependencyChangedEvent(metadataId/*:String*/, oldValue/*:**/, newValue/*:**/)/*:void*/ {
    this.fireEvent(PreviewDependencyManager.PREVIEW_DEPENDENCY_CHANGED_EVENT, metadataId, oldValue, newValue);
  }/*

  // Internal for testing purposes.
  internal*/ function initMetadata(metadataValueExpression/*:ValueExpression*/)/*:void*/ {
    // Reset local dependency mappings on preview reload.
    this.metadataIdsByBeanAndProperty$7v7w && (this.metadataIdsByBeanAndProperty$7v7w = {});
    this.dependencies$7v7w && (this.dependencies$7v7w = []);

    var metadataTree/*:MetadataTree*/ = metadataValueExpression.getValue();

    this.detachPropertyChangeListeners$7v7w();
    this.attachPropertyChangeListeners$7v7w(metadataTree.getRoot());
  }/*

  private*/ function detachPropertyChangeListeners()/*:void*/ {
    if (this.dependencies$7v7w) {
      for (var i/*:int*/ = 0; i<this.dependencies$7v7w.length; i++) {
        //noinspection JSUnfilteredForInLoop
        (AS3.as(this.dependencies$7v7w[i],  com.coremedia.ui.data.Bean)).removeValueChangeListener(AS3.bind(this,"dependencyChangedListener$7v7w"));
      }
      this.dependencies$7v7w = undefined;
    }
  }/*

  private*/ function attachPropertyChangeListeners(metadataNode/*:MetadataTreeNode*/)/*:void*/ {
    this.dependencies$7v7w || (this.dependencies$7v7w = []);
    this.metadataIdsByBeanAndProperty$7v7w || (this.metadataIdsByBeanAndProperty$7v7w = {});

    var metadataId/*:String*/ = metadataNode.getId();
    if (metadataId) {
      var values/*:Array*/ = com.coremedia.cms.editor.sdk.preview.MetadataHelper.extractBeanAndPropertyFromMetadataNode(metadataNode);
      values && this.registerDependencyFor$7v7w(values[0], values[1], metadataId);
    }
    metadataNode.getChildren().forEach(AS3.bind(this,"attachPropertyChangeListeners$7v7w"));
  }/*

  private*/ function registerDependencyFor(bean/*:Bean*/, property/*:String*/, id/*:String*/)/*:void*/ {
    var beanPropertyKey/*:String*/ = generateBeanPropertyKey$static(bean, property);
    if (beanPropertyKey in this.metadataIdsByBeanAndProperty$7v7w) {
      this.metadataIdsByBeanAndProperty$7v7w[beanPropertyKey].push(id);
    } else {
      this.metadataIdsByBeanAndProperty$7v7w[beanPropertyKey] = [id];
    }

    if (bean) {
      if (!this.hasDependencyFor(bean)) {
        if (this.initialBean$7v7w) {
          this.initialBean$7v7w.removeValueChangeListener(AS3.bind(this,"initialBeanValueChanged$7v7w"));
          this.initialBean$7v7w = null;
        }
        this.dependencies$7v7w.push(bean);
        bean.addValueChangeListener(AS3.bind(this,"dependencyChangedListener$7v7w"));
      }
    }
  }/*

  internal*/ function hasDependencyFor(bean/*:Bean*/)/*:Boolean*/ {
    return ! !this.dependencies$7v7w && this.dependencies$7v7w.indexOf(bean) !== -1;
  }/*

  private static*/ function generateBeanPropertyKey$static(bean/*:Bean*/, property/*:String*/)/*:String*/ {
    var keyObject/*:Object*/ = {
      bean: bean,
      property: property
    };
    return com.coremedia.ui.util.ObjectUtils.toJson(keyObject);
  }/*

  /**
   * Detaches all listeners. Should be called after the instance is not used anymore.
   * /
  public*/ function cleanup()/*:void*/ {
    this.initialBean$7v7w && this.initialBean$7v7w.removeValueChangeListener(AS3.bind(this,"initialBeanValueChanged$7v7w"));
    this.getMetadataValueExpression$7v7w().removeChangeListener(AS3.bind(this,"initMetadata"));
    this.detachPropertyChangeListeners$7v7w();
    this.destroy();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      metadata: {"": [
        "Event",
        [
          "name",
          "previewDepChanged"
        ]
      ]},
      dependencies$7v7w: null,
      metadataIdsByBeanAndProperty$7v7w: null,
      metadataValueExpression$7v7w: null,
      previewPanel$7v7w: null,
      initialBean$7v7w: null,
      constructor: PreviewDependencyManager$,
      super$7v7w: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      setup$7v7w: setup,
      getMetadataValueExpression$7v7w: getMetadataValueExpression,
      initialBeanValueChanged$7v7w: initialBeanValueChanged,
      getMetadataIdsForBeanProperty: getMetadataIdsForBeanProperty,
      dependencyChangedListener$7v7w: dependencyChangedListener,
      firePreviewDependencyChangedEvent$7v7w: firePreviewDependencyChangedEvent,
      initMetadata: initMetadata,
      detachPropertyChangeListeners$7v7w: detachPropertyChangeListeners,
      attachPropertyChangeListeners$7v7w: attachPropertyChangeListeners,
      registerDependencyFor$7v7w: registerDependencyFor,
      hasDependencyFor: hasDependencyFor,
      cleanup: cleanup,
      statics: {PREVIEW_DEPENDENCY_CHANGED_EVENT: "previewDepChanged"},
      requires: [
        "Ext.util.Observable",
        "com.coremedia.ui.data.Bean",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.impl.PropertyPathUtil",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: ["com.coremedia.cms.editor.sdk.preview.MetadataHelper"]
    };
});
