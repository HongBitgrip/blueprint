Ext.define("com.coremedia.cms.editor.sdk.collectionview.search.History", function(History) {/*package com.coremedia.cms.editor.sdk.collectionview.search {

import com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.util.ObjectUtils;

public class History
{
  private var all:int;
  private var current:int;
  private var history:Array;
  private var historyBean:Bean;
  private var collectionViewModel:CollectionViewModel;

  public*/ function History$(collectionViewModel/*:CollectionViewModel*/)  {
    this.all$Pr$$ = this.current$Pr$$ = 0;
    this.history$Pr$$ = [];
    this.historyBean$Pr$$ = com.coremedia.ui.data.beanFactory.createLocalBean({ enableBack: false, enableForward: false });
    this.collectionViewModel$Pr$$ = collectionViewModel;
    collectionViewModel.addListener(com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel.UPDATE_EVENT,AS3.bind( this,"stateUpdated"));
  }/*

  public*/ function getHistoryBean()/*:Bean*/ {
    return this.historyBean$Pr$$;
  }/*

  public*/ function getEntries()/*:Array*/ {
    return this.history$Pr$$;
  }/*

  public*/ function stateUpdated()/*:void*/ {
    var state/*:Object*/ = this.collectionViewModel$Pr$$.getCurrentState();
    var lastState/*:Object*/ = this.history$Pr$$[this.current$Pr$$];
    if(lastState && state) {
      if(this.stateIdentical$Pr$$(lastState, state)) {
        return;
      }
    }

    // TODO: there should be a maximum of history entries (memory leak).
    if (this.all$Pr$$ > this.current$Pr$$) {
      this.all$Pr$$ = this.current$Pr$$;
    }
    this.current$Pr$$ ++;
    this.all$Pr$$ ++;
    this.updateHistoryBean$Pr$$();

    this.history$Pr$$[this.current$Pr$$] = state;
  }/*

  private*/ function stateIdentical(states1/*:Object*/, states2/*:Object*/)/*:Boolean*/ {
    for (var stateId/*:String*/ in states1) {
      if (!com.coremedia.ui.util.ObjectUtils.compareObjectsWithEqual(states1[stateId], states2[stateId])) {
        return false;
      }
    }
    return true;
  }/*

  private*/ function updateHistoryBean()/*:void*/ {
    this.historyBean$Pr$$.set("enableBack", this.current$Pr$$ > 1);
    this.historyBean$Pr$$.set("enableForward", this.current$Pr$$ < this.all$Pr$$);
  }/*

  public*/ function back()/*:Boolean*/ {
    if (this.current$Pr$$ - 1 > 0) {
      this.current$Pr$$ --;
      this.updateHistoryBean$Pr$$();
      this.restore$Pr$$();
      return true;
    }
    return false;
  }/*

  public*/ function forward()/*:Boolean*/ {
    if (this.all$Pr$$ > this.current$Pr$$) {
      this.current$Pr$$ ++;
      this.updateHistoryBean$Pr$$();
      this.restore$Pr$$();
      return true;
    }
    return false;
  }/*

  private*/ function restore()/*:void*/ {
    // Determine state to be restored.
    var targetState/*:Object*/ = this.history$Pr$$[this.current$Pr$$];
    this.collectionViewModel$Pr$$.updateState(targetState);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      all$Pr$$: 0,
      current$Pr$$: 0,
      history$Pr$$: null,
      historyBean$Pr$$: null,
      collectionViewModel$Pr$$: null,
      constructor: History$,
      getHistoryBean: getHistoryBean,
      getEntries: getEntries,
      stateUpdated: stateUpdated,
      stateIdentical$Pr$$: stateIdentical,
      updateHistoryBean$Pr$$: updateHistoryBean,
      back: back,
      forward: forward,
      restore$Pr$$: restore,
      requires: [
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: ["com.coremedia.cms.editor.sdk.collectionview.CollectionViewModel"]
    };
});
