Ext.define("com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl", function(CapListRepositoryImpl) {/*package com.coremedia.collaboration.controlroom.rest {
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.common.impl.CapConnectionImpl;
import com.coremedia.cap.content.Content;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.impl.BeanFactoryImpl;
import com.coremedia.ui.data.impl.RemoteBeanImpl;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.util.ExecuteEventually;

import ext.Ext;
import ext.JSON;

[RestResource(uriTemplate="caplist")]
public class CapListRepositoryImpl extends RemoteBeanImpl implements CapListRepository {

  private var editedContentsFilterFnsVE:ValueExpression;
  private var filteredEditedContentsVE:ValueExpression;

  public*/ function CapListRepositoryImpl$(path/*:String*/) {
    this.super$hu7r(path);

    this.editedContentsFilterFnsVE$hu7r = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);

    this.filteredEditedContentsVE$hu7r = this.getFilteredEditedContentsVE$hu7r();
  }/*

  private*/ function getFilteredEditedContentsVE()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
      var filteredEditedContents/*:Array*/ = [];
      var editedContentsCapList/*:CapList*/ = this$.getEditedContents();
      var editedContents/*:Array*/ = editedContentsCapList.get(com.coremedia.collaboration.controlroom.rest.CapListPropertyNames.ITEMS);
      editedContents && editedContents.forEach(function (content/*:Content*/)/*:void*/ {
        var filteredOut/*:Boolean*/ = this$.editedContentsFilterFnsVE$hu7r.getValue().some(function (filterFn/*:Function*/)/*:Boolean*/ {
          return filterFn(content);
        });
        if (!filteredOut) {
          filteredEditedContents.push(content);
        }
      });

      return filteredEditedContents;
    });
  }/*

  public*/ function registerEditedContentsFilterFn(filterFn/*:Function*/)/*:void*/ {
    var editedContentsFilterFns/*:Array*/ = this.editedContentsFilterFnsVE$hu7r.getValue();
    if (editedContentsFilterFns.indexOf(filterFn) === -1) {
      editedContentsFilterFns = editedContentsFilterFns.concat([filterFn]);
      this.editedContentsFilterFnsVE$hu7r.setValue(editedContentsFilterFns);
    }

  }/*

  public static*/ function getInstance$static()/*:CapListRepository*/ {
    if (undefined === CapListRepositoryImpl['INSTANCE']) {
      /**
       * CapListRepository is loaded as property of CapConnection - unfortunately it is not
       * possible to register non-core classes as remote beans so early. So the first
       * remote bean will be a plain RemoteBeanImpl and we'll get a CapListRepositoryImpl
       * only after disposing this first remote bean instance.
       */
      var connectionImpl/*:CapConnectionImpl*/ = com.coremedia.cap.common.impl.CapConnectionImpl.getInstance();
      var capListRepository/*:RemoteBean*/ = connectionImpl.get('capListRepository');
      if (capListRepository && !(AS3.is(capListRepository,  com.coremedia.collaboration.controlroom.rest.CapListRepository))) {
        com.coremedia.ui.data.beanFactory.dispose(capListRepository);
        AS3.cast(com.coremedia.ui.data.impl.BeanFactoryImpl,com.coremedia.ui.data.beanFactory).registerRemoteBeanClass(CapListRepositoryImpl);
        capListRepository = com.coremedia.ui.data.beanFactory.getRemoteBean(capListRepository.getUriPath());
      }
      CapListRepositoryImpl['INSTANCE'] = capListRepository;
    }
    return CapListRepositoryImpl['INSTANCE'];
  }/*

  internal static*/ function getUserSpecificCapList$static(key/*:String*/)/*:RemoteBean*/ {
    var capListRepository/*:CapListRepository*/ = CapListRepositoryImpl.getInstance();
    var numericId/*:**/ = com.coremedia.cap.common.SESSION.getUser().get('numericId');
    return com.coremedia.ui.data.beanFactory.getRemoteBean(capListRepository.getUriPath() + '/' + key + '-' + numericId);
  }/*

  internal static*/ function getCapListRemoteServiceMethod$static(method/*:String = 'GET'*/, writeJson/*:Boolean = false*/)/*:RemoteServiceMethod*/ {switch(arguments.length){case 0:method='GET';case 1:writeJson=false;}
    return new com.coremedia.ui.data.impl.RemoteServiceMethod(CapListRepositoryImpl.getInstance().getUriPath(), method, writeJson);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getEditedContents()/*:CapList*/ {
    var capList/*:CapList*/ = AS3.cast(com.coremedia.collaboration.controlroom.rest.CapList,CapListRepositoryImpl.getUserSpecificCapList('EditedContents'));
    capList.getItems =AS3.bind( this,"getEditedContentsItems$hu7r");
    return capList;
  }/*

  private*/ function getEditedContentsItems()/*:Array*/ {
    return this.filteredEditedContentsVE$hu7r.getValue();
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getContentSetList()/*:CapList*/ {
    return AS3.cast(com.coremedia.collaboration.controlroom.rest.CapList,CapListRepositoryImpl.getUserSpecificCapList('ContentSetList'));
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getCompletedProcesses()/*:CapList*/ {
    return AS3.cast(com.coremedia.collaboration.controlroom.rest.CapList,CapListRepositoryImpl.getUserSpecificCapList('CompletedProcesses'));
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function getPendingProcesses()/*:CapList*/ {
    return AS3.cast(com.coremedia.collaboration.controlroom.rest.CapList,CapListRepositoryImpl.getUserSpecificCapList('PendingProcesses'));
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function createContentSet(name/*:String*/, contents/*:Array*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=2)callback=null;
    this.createCapList$hu7r({type: "ContentSet", name: name, items: contents}, callback);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function createWorkflowSet(name/*:String*/, contents/*:Array*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=2)callback=null;
    this.createCapList$hu7r({type: "WorkflowSet", name: name, items: contents}, callback);
  }/*

  private*/ function createCapList(params/*:Object*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    var createCapListMethod/*:RemoteServiceMethod*/ = CapListRepositoryImpl.getCapListRemoteServiceMethod('POST', true);
    createCapListMethod.request(params, function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
      var capList/*:CapList*/ =AS3.as( com.coremedia.ui.data.impl.BeanFactoryImpl.resolveBeans(Ext.JSON.decode(rsmr.response.responseText)),  com.coremedia.collaboration.controlroom.rest.CapList);
      capList.load(function ()/*:void*/ {
        callback(capList);
      });
    }, callback);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function deleteContentSets(capLists/*:Array*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    this.deleteCapLists$hu7r({capLists: capLists}, callback);
  }/*

  public*/ function deletePublicationSet(capList/*:CapList*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    this.deleteCapLists$hu7r({capLists: new Array(capList)}, callback);
  }/*

  private*/ function deleteCapLists(capLists/*:Object*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    var deleteCapListsMethod/*:RemoteServiceMethod*/ = CapListRepositoryImpl.getCapListRemoteServiceMethod('DELETE', true);
    // TODO: change back after fix to RemoteServiceMethod
    deleteCapListsMethod.request(capLists, callback ? callback : Ext.emptyFn, callback ? callback : Ext.emptyFn);
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function shareContentSets(contentSets/*:Array*/, members/*:Array*/, isPublic/*:Boolean = true*/, callback/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,2)){case 2:isPublic=true;case 3:callback=null;}
    members = members || [];
    // Only call callback after all content sets are shared.
    var latch/*:ExecuteEventually*/ = new com.coremedia.ui.util.ExecuteEventually(callback);
    contentSets.forEach(function (capList/*:CapList*/)/*:void*/ {
      capList.share(members, isPublic, latch.delay());
    });
    latch.proceed();
  }/*

  public*/ function addSharedContentSets(capLists/*:Array*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    var addSharedContentSetsMethod/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this.getContentSetList().getUriPath() + "/add", 'POST', true);
    addSharedContentSetsMethod.request({items: capLists}, callback ? callback : Ext.emptyFn, callback ? callback : Ext.emptyFn);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.RemoteBeanImpl",
      mixins: ["com.coremedia.collaboration.controlroom.rest.CapListRepository"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "caplist"
        ]
      ]},
      editedContentsFilterFnsVE$hu7r: null,
      filteredEditedContentsVE$hu7r: null,
      constructor: CapListRepositoryImpl$,
      super$hu7r: function() {
        com.coremedia.ui.data.impl.RemoteBeanImpl.prototype.constructor.apply(this, arguments);
      },
      getFilteredEditedContentsVE$hu7r: getFilteredEditedContentsVE,
      registerEditedContentsFilterFn: registerEditedContentsFilterFn,
      getEditedContents: getEditedContents,
      getEditedContentsItems$hu7r: getEditedContentsItems,
      getContentSetList: getContentSetList,
      getCompletedProcesses: getCompletedProcesses,
      getPendingProcesses: getPendingProcesses,
      createContentSet: createContentSet,
      createWorkflowSet: createWorkflowSet,
      createCapList$hu7r: createCapList,
      deleteContentSets: deleteContentSets,
      deletePublicationSet: deletePublicationSet,
      deleteCapLists$hu7r: deleteCapLists,
      shareContentSets: shareContentSets,
      addSharedContentSets: addSharedContentSets,
      statics: {
        getInstance: getInstance$static,
        getUserSpecificCapList: getUserSpecificCapList$static,
        getCapListRemoteServiceMethod: getCapListRemoteServiceMethod$static
      },
      requires: [
        "Ext",
        "Ext.JSON",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.common.impl.CapConnectionImpl",
        "com.coremedia.collaboration.controlroom.rest.CapListRepository",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.impl.BeanFactoryImpl",
        "com.coremedia.ui.data.impl.RemoteBeanImpl",
        "com.coremedia.ui.data.impl.RemoteServiceMethod",
        "com.coremedia.ui.util.ExecuteEventually"
      ],
      uses: [
        "com.coremedia.collaboration.controlroom.rest.CapList",
        "com.coremedia.collaboration.controlroom.rest.CapListPropertyNames"
      ]
    };
});
