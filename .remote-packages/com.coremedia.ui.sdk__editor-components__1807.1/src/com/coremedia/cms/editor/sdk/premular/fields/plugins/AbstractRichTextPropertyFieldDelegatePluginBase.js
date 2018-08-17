Ext.define("com.coremedia.cms.editor.sdk.premular.fields.plugins.AbstractRichTextPropertyFieldDelegatePluginBase", function(AbstractRichTextPropertyFieldDelegatePluginBase) {/*package com.coremedia.cms.editor.sdk.premular.fields.plugins {

import com.coremedia.cms.editor.sdk.util.RichTextPlainTextTransformer;
import com.coremedia.ui.data.Blob;

/**
 * A plugin, which is used as a base class for text areas or rich textareas to track
 * changes of the delegated content, when the content of this field is empty;
 * /
public class AbstractRichTextPropertyFieldDelegatePluginBase extends PropertyFieldDelegatePlugin {


  public*/ function AbstractRichTextPropertyFieldDelegatePluginBase$(config/*:AbstractRichTextPropertyFieldDelegatePluginBase = null*/) {if(arguments.length<=0)config=null;
    this.super$tw42(config);
  }/*

  override protected*/ function onFieldBlur()/*:void*/ {var this$=this;
    window.setTimeout(
            function ()/*:void*/ {
              var blob/*:Blob*/ = (AS3.as(this$.myFieldValueExpression.getValue(),  com.coremedia.ui.data.Blob));
              if (!blob) {
                this$.applyDelegating(null);
                return;
              }
              var rawRichText/*:**/ = blob.getData();
              //convert to plain text since we have to determine if the text is not empty
              var value/*:String*/ = com.coremedia.cms.editor.sdk.util.RichTextPlainTextTransformer.convertToPlainText(rawRichText);
              this$.applyDelegating(value);
            },
            this.getChangeBuffer()); // wait for the propertyEditor to save its changes before applying delegation
  }/*

  /**
   * This will be called once the propertyfield has been loaded.
   * /
  protected*/ function onInstanceReady()/*:void*/ {var this$=this;
    if (this.delegateFieldValueExpression) { //maybe not set when master delegation applies
      //somehow the style applying fails for the first load (when Studio is opened).
      //reloading the content fixes the problem (like opening another tab)
      this.bindTo.getValue().invalidate(function ()/*:void*/ {
        this$.checkForDelegating();
        this$.delegateFieldValueExpression.addChangeListener(AS3.bind(this$,"checkForDelegating"));
      });
    }
  }/*

  /**
   * checks, if delegating is active, when text is empty
   * /
  override protected*/ function checkForDelegating()/*:void*/ {
    var blob/*:Blob*/ = this.myFieldValueExpression ? (AS3.as(this.myFieldValueExpression.getValue(),  com.coremedia.ui.data.Blob)) : null;
    if (!blob) {
      this.applyDelegating(null);
    } else {
      blob.loadData(AS3.bind(this,"checkForDelegatingBlobLoaded$tw42"));
    }
  }/*

  private*/ function checkForDelegatingBlobLoaded(blob/*:Blob*/)/*:void*/ {
    var rawRichText/*:**/ = blob.getData();
    var value/*:String*/ = com.coremedia.cms.editor.sdk.util.RichTextPlainTextTransformer.convertToPlainText(rawRichText);
    this.applyDelegating(value);
  }/*

  override protected*/ function applyDelegatedValue()/*:void*/ {var this$=this;
    if (this.delegateFieldValueExpression) {
      var rawDelegateValue/*:**/ = this.delegateFieldValueExpression.getValue();
      if (AS3.is(rawDelegateValue,  String)) {
        this.setDelegationValue(rawDelegateValue);
      } else {
        var delegateBlob/*:Blob*/ = (AS3.as(rawDelegateValue,  com.coremedia.ui.data.Blob));
        if (delegateBlob) {
          delegateBlob.loadData(function ()/*:void*/ {
            var delegateValue/*:String*/ = delegateBlob.getData();
            this$.setDelegationValue(delegateValue);
          });
        }
      }
    }
  }/*

  protected*/ function setDelegationValue(value/*:String*/)/*:void*/ {
    throw new AS3.Error("Abstract Method: setDelegateValue");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.fields.plugins.PropertyFieldDelegatePlugin",
      constructor: AbstractRichTextPropertyFieldDelegatePluginBase$,
      super$tw42: function() {
        com.coremedia.cms.editor.sdk.premular.fields.plugins.PropertyFieldDelegatePlugin.prototype.constructor.apply(this, arguments);
      },
      onFieldBlur: onFieldBlur,
      onInstanceReady: onInstanceReady,
      checkForDelegating: checkForDelegating,
      checkForDelegatingBlobLoaded$tw42: checkForDelegatingBlobLoaded,
      applyDelegatedValue: applyDelegatedValue,
      setDelegationValue: setDelegationValue,
      requires: [
        "AS3.Error",
        "com.coremedia.cms.editor.sdk.premular.fields.plugins.PropertyFieldDelegatePlugin",
        "com.coremedia.ui.data.Blob"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.RichTextPlainTextTransformer"]
    };
});
