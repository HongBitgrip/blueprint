Ext.define("com.coremedia.cap.content.publication.impl.PublicationServiceImpl", function(PublicationServiceImpl) {/*package com.coremedia.cap.content.publication.impl {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.impl.*;
import com.coremedia.cap.content.publication.PublicationService;

public class PublicationServiceImpl implements PublicationService {
  private var contentRepositoryImpl:ContentRepositoryImpl;

  public*/ function PublicationServiceImpl$(contentRepositoryImpl/*:ContentRepositoryImpl*/) {
    this.contentRepositoryImpl$3PME = contentRepositoryImpl;
  }/*

  public*/ function approveWithPath(content/*:Content*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    this.approveAllWithPath([content], callback);
  }/*

  public*/ function approveAllWithPath(contents/*:Array*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    new com.coremedia.cap.content.publication.impl.BulkApproveMethod(this.contentRepositoryImpl$3PME, contents,  callback).execute();
  }/*

  public*/ function disapprove(content/*:Content*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    this.disapproveAll([content], callback);
  }/*

  public*/ function disapproveAll(contents/*:Array*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    new com.coremedia.cap.content.publication.impl.BulkDisapproveMethod(this.contentRepositoryImpl$3PME, contents,  callback).execute();
  }/*

  public*/ function publish(content/*:Content*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    this.publishAll([content], callback);
  }/*

  public*/ function publishAll(contents/*:Array*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    new com.coremedia.cap.content.publication.impl.BulkPublishMethod(this.contentRepositoryImpl$3PME, contents, callback).execute();
  }/*

  public*/ function approveWithPathAndPublish(content/*:Content*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    this.approveWithPathAndPublishAll([content], callback);
  }/*

  public*/ function approveWithPathAndPublishAll(contents/*:Array*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    new com.coremedia.cap.content.publication.impl.BulkApprovePublishMethod(this.contentRepositoryImpl$3PME, contents, callback).execute();
  }/*

  public*/ function withdraw(content/*:Content*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    this.withdrawAll([content], callback);
  }/*

  public*/ function withdrawAll(contents/*:Array*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=1)callback=null;
    new com.coremedia.cap.content.publication.impl.BulkWithdrawMethod(this.contentRepositoryImpl$3PME, contents,  callback).execute();
  }/*

  public*/ function withdrawAllFromTree(contents/*:Array*/, nodeContentType/*:String*/, childNodesProperty/*:String*/, callback/*:Function = null*/)/*:void*/ {if(arguments.length<=3)callback=null;
    new com.coremedia.cap.content.publication.impl.BulkWithdrawFromTreeMethod(this.contentRepositoryImpl$3PME, contents,  nodeContentType, childNodesProperty, callback).execute();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.content.publication.PublicationService"],
      contentRepositoryImpl$3PME: null,
      constructor: PublicationServiceImpl$,
      approveWithPath: approveWithPath,
      approveAllWithPath: approveAllWithPath,
      disapprove: disapprove,
      disapproveAll: disapproveAll,
      publish: publish,
      publishAll: publishAll,
      approveWithPathAndPublish: approveWithPathAndPublish,
      approveWithPathAndPublishAll: approveWithPathAndPublishAll,
      withdraw: withdraw,
      withdrawAll: withdrawAll,
      withdrawAllFromTree: withdrawAllFromTree,
      requires: ["com.coremedia.cap.content.publication.PublicationService"],
      uses: [
        "com.coremedia.cap.content.publication.impl.BulkApproveMethod",
        "com.coremedia.cap.content.publication.impl.BulkApprovePublishMethod",
        "com.coremedia.cap.content.publication.impl.BulkDisapproveMethod",
        "com.coremedia.cap.content.publication.impl.BulkPublishMethod",
        "com.coremedia.cap.content.publication.impl.BulkWithdrawFromTreeMethod",
        "com.coremedia.cap.content.publication.impl.BulkWithdrawMethod"
      ]
    };
});
