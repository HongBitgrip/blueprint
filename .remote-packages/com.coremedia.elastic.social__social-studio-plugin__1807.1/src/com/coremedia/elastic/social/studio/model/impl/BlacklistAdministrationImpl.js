Ext.define("com.coremedia.elastic.social.studio.model.impl.BlacklistAdministrationImpl", function(BlacklistAdministrationImpl) {/*package com.coremedia.elastic.social.studio.model.impl {

import com.coremedia.elastic.social.studio.model.BlacklistAdministration;
import com.coremedia.elastic.social.studio.model.BlacklistAdministrationPropertyNames;
import com.coremedia.ui.data.impl.BeanImpl;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;

public class BlacklistAdministrationImpl extends BeanImpl implements BlacklistAdministration {

  private static const*/var PATH_SUFFIX$static/*:String*/ = "/blacklist";/*
  private var moderation:ModerationImpl;

  public*/ function BlacklistAdministrationImpl$(moderation/*:ModerationImpl*/) {this.super$HObO();
    this.moderation$HObO = moderation;
  }/*

  public*/ function getBlacklist(invalidate/*:Boolean = false*/, success/*:Function = null*/)/*:Array*/ {var this$=this;switch(arguments.length){case 0:invalidate=false;case 1:success=null;}
    if (invalidate) {
      (AS3.as(this.moderation$HObO,  com.coremedia.elastic.social.studio.model.impl.ModerationImpl)).ensureTenantAwareESUriPrefix(function ()/*:void*/ {
        var blacklistService/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this$.getUri$HObO(), "GET");
        blacklistService.request(null,
                function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
                  var blacklist/*:Array*/ =AS3.as( (AS3.as(response.getResponseJSON(),  Object)).items,  Array);
                  this$.set(com.coremedia.elastic.social.studio.model.BlacklistAdministrationPropertyNames.BLACKLIST, blacklist);
                  if (success) {
                    success(blacklist);
                  }
                },
                com.coremedia.elastic.social.studio.model.impl.RemoteErrorHandler.handleRemoteErrorFromResponse);
      });
    }
    return AS3.as( this.get(com.coremedia.elastic.social.studio.model.BlacklistAdministrationPropertyNames.BLACKLIST),  Array);
  }/*

  /**
   * Every time a client wants to highlight some text, we fetch a fresh version
   * of the blacklist from the server. Because freshness is not that important
   * we use the old blacklist, returned by getBlacklist(), thus increasing speed a little.
   * /
  public*/ function highlightBlacklisted(text/*:String*/, prefix/*:String*/, suffix/*:String*/, invalidate/*:Boolean = true*/)/*:String*/ {if(arguments.length<=3)invalidate=true;
    this.getBlacklist(invalidate);
/*    var regExp:RegExp = new RegExp("\\[blacklist\\]", "gi");
    var regExp2:RegExp = new RegExp("\\[\/blacklist\\]", "gi");
    var result:String = text.replace(regExp, "");
    result = result.replace(regExp2, "");*/

    var result/*:String*/ = text;
    if (result && prefix && suffix && this.hasBlacklist$HObO()) {
      var blacklist/*:Array*/ = this.getBlacklist();
      var regExp/*:RegExp*/ = new RegExp("(" + blacklist.join("|") + ")", "gi");
      var a/*:String*/ = result.replace(regExp, function (textA/*:String*/)/*:String*/ {
        return prefix + textA + suffix;
      });
      return a;
    }

    return result;
  }/*

  public*/ function addBlacklistedWord(word/*:String*/)/*:void*/ {var this$=this;
    if (word) {
      var oldBlacklist/*:Array*/ = this.getBlacklist(true);
      (AS3.as(this.moderation$HObO,  com.coremedia.elastic.social.studio.model.impl.ModerationImpl)).ensureTenantAwareESUriPrefix(function ()/*:void*/ {
        var blacklistService/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this$.getUri$HObO() + "/" + word.toLowerCase(), "POST");
        blacklistService.request(null, function ()/*:void*/ {
          var newBlacklist/*:Array*/ = oldBlacklist.concat(word.toLowerCase());
          this$.set(com.coremedia.elastic.social.studio.model.BlacklistAdministrationPropertyNames.BLACKLIST, sort$static(newBlacklist));
        });
      });
    }
  }/*

  public*/ function removeBlacklistedWord(word/*:String*/)/*:void*/ {var this$=this;
    if (word) {
      (AS3.as(this.moderation$HObO,  com.coremedia.elastic.social.studio.model.impl.ModerationImpl)).ensureTenantAwareESUriPrefix(function ()/*:void*/ {
        var blacklistService/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this$.getUri$HObO() + "/" + word.toLocaleLowerCase(), "DELETE");
        blacklistService.request(null, function ()/*:void*/ {
          var oldBlacklist/*:Array*/ = this$.getBlacklist();
          var newBlacklist/*:Array*/ = oldBlacklist.filter(function (filteredWord/*:String*/)/*:Boolean*/ {
            return word !== filteredWord;
          });
          this$.set(com.coremedia.elastic.social.studio.model.BlacklistAdministrationPropertyNames.BLACKLIST, newBlacklist);
        }, function ()/*:void*/ {
          AS3.trace("failed removing blacklist word from blacklist list");
        });
      });
    }
  }/*

  public*/ function isInBlacklist(word/*:String*/)/*:Boolean*/ {
    var result/*:Boolean*/ = false;

    var blacklist/*:Array*/ = this.getBlacklist();
    if (blacklist && word && blacklist.length > 0) {
      result = blacklist.indexOf(word.toLowerCase()) >= 0;
    }

    return result;
  }/*

  private*/ function getUri()/*:String*/ {
    return (AS3.as(this.moderation$HObO,  com.coremedia.elastic.social.studio.model.impl.ModerationImpl)).getTenantAwareESUriPrefix() + PATH_SUFFIX$static;
  }/*

  private*/ function hasBlacklist()/*:Array*/ {
    var blacklist/*:Array*/ = this.getBlacklist();
    return blacklist && blacklist.length > 0;
  }/*

  private static*/ function sort$static(blacklist/*:Array*/)/*:Array*/ {
    var sorted/*:Array*/ = blacklist;
    if (!sorted) {
      sorted = [];
    }
    if (sorted.length > 0) {
      sorted.sort(compareFN$static);
    }
    return sorted;
  }/*

  /**
   * We need to sort the array of blacklisted words from long to short values
   * in order to make the highlighting work for overlapping entries. Assume the
   * following text: "Hello world, worldwide!" If I want "world" and "worldwide"
   * to be blacklisted I have to make sure that first "worldwide" and afterwards
   * "world" will be surrounded by &lt;span&gt; elements. Otherwise "worldwide"
   * would never be found by the regexp and thus will not be highlighted.
   * /
  private static*/ function compareFN$static(first/*:String*/, second/*:String*/)/*:Boolean*/ {
    return first.length < second.length;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.BeanImpl",
      mixins: ["com.coremedia.elastic.social.studio.model.BlacklistAdministration"],
      moderation$HObO: null,
      constructor: BlacklistAdministrationImpl$,
      super$HObO: function() {
        com.coremedia.ui.data.impl.BeanImpl.prototype.constructor.apply(this, arguments);
      },
      getBlacklist: getBlacklist,
      highlightBlacklisted: highlightBlacklisted,
      addBlacklistedWord: addBlacklistedWord,
      removeBlacklistedWord: removeBlacklistedWord,
      isInBlacklist: isInBlacklist,
      getUri$HObO: getUri,
      hasBlacklist$HObO: hasBlacklist,
      requires: [
        "AS3.trace",
        "com.coremedia.elastic.social.studio.model.BlacklistAdministration",
        "com.coremedia.ui.data.impl.BeanImpl",
        "com.coremedia.ui.data.impl.RemoteServiceMethod"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.BlacklistAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.impl.ModerationImpl",
        "com.coremedia.elastic.social.studio.model.impl.RemoteErrorHandler"
      ]
    };
});
