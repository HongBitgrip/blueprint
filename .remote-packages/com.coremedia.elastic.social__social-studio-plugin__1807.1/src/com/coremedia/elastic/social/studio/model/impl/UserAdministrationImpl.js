Ext.define("com.coremedia.elastic.social.studio.model.impl.UserAdministrationImpl", function(UserAdministrationImpl) {/*package com.coremedia.elastic.social.studio.model.impl {

import com.coremedia.elastic.social.studio.model.History;
import com.coremedia.elastic.social.studio.model.Moderation;
import com.coremedia.elastic.social.studio.model.ModerationEmail;
import com.coremedia.elastic.social.studio.model.User;
import com.coremedia.elastic.social.studio.model.UserAdministration;
import com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.impl.BeanImpl;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.logging.Logger;

import ext.util.Format;

public class UserAdministrationImpl extends BeanImpl implements UserAdministration {
  private var moderation:Moderation;
  private var editedValueExpression:ValueExpression;
  private static const*/var SEARCH_PATH_SEGMENT$static/*:String*/ = "/user/search";/*

  public*/ function UserAdministrationImpl$(moderation/*:Moderation*/) {this.super$BARi();
    if (!moderation) {
      throw "The user administration needs to know the moderation model.";
    }

    this.moderation$BARi = moderation;
    this.setSearchHistory$BARi(new com.coremedia.elastic.social.studio.model.impl.HistoryImpl());
    this.setSearchResult$BARi([]);
    this.editedValueExpression$BARi = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.EDITED, this);
    this.editedValueExpression$BARi.addChangeListener(AS3.bind(this,"loadUserNotes$BARi"));
  }/*

  public*/ function startEditing(user/*:User*/)/*:void*/ {var this$=this;
    this.set(com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.EDITED, user);
    if (user) {
      user.invalidate(function ()/*:void*/ {
        this$.loadEmails$BARi();
        this$.editedValueExpression$BARi.addChangeListener(AS3.bind(this$,"loadEmails$BARi"));
      });
    }
  }/*


  public*/ function cancelEditing(user/*:User = null*/, cancelled/*:Function = null*/, hasChanges/*:Boolean = true*/)/*:void*/ {var this$=this;switch(arguments.length){case 0:user=null;case 1:cancelled=null;case 2:hasChanges=true;}
    if (hasChanges) {
      var toBeCancelled/*:User*/ = user;
      if (!toBeCancelled) {
        toBeCancelled = this.getEdited();
      }

      if (toBeCancelled) {
        toBeCancelled.cancel(
                function ()/*:void*/ {
                  toBeCancelled.invalidate();
                  this$.editedValueExpression$BARi.removeChangeListener(AS3.bind(this$,"loadEmails$BARi"));
                  if (cancelled) {
                    cancelled();
                  }
                }
        );
      }
    }
  }/*

  public*/ function applyChanges(user/*:User = null*/, success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {var this$=this;switch(arguments.length){case 0:user=null;case 1:success=null;case 2:failure=null;}
    var toBeApplyed/*:User*/ = user;
    if (!toBeApplyed) {
      toBeApplyed = this.getEdited();
    }

    toBeApplyed.apply(
            this.getModerationEmails(),
            function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
              var messages/*:Object*/ = response.getResponseJSON();
              if (messages) {
                failure && failure(messages);
              } else {
                toBeApplyed.invalidate(function ()/*:void*/ {
                  this$.editedValueExpression$BARi.removeChangeListener(AS3.bind(this$,"loadEmails$BARi"));
                  success && success();
                });
              }
            },
            function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
              failure && failure(response);
            }
    );
  }/*

  public*/ function anonymize(user/*:User*/, email/*:ModerationEmail*/, anonymized/*:Function = null*/)/*:void*/ {var this$=this;if(arguments.length<=2)anonymized=null;
    if (user) {
      user.anonymize(
              email,
              function ()/*:void*/ {
                /**
                 * We need to invalidate the content here because the author name for anonymous user is saved
                 * as a property of a comment. And if we delete a user for example, that field will change.
                 */
                this$.moderation$BARi.getModerationContributionAdministration().invalidate();
                user.invalidate(function ()/*:void*/ {
                          if (anonymized) {
                            anonymized();
                          }
                        }
                );
              });
    }
  }/*

  public*/ function getEdited()/*:User*/ {
    return AS3.as( this.get(com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.EDITED),  com.coremedia.elastic.social.studio.model.User);
  }/*

  public*/ function hasEdited()/*:Boolean*/ {
    return this.getEdited();
  }/*

  public*/ function search(query/*:String*/, newSearch/*:Boolean = true*/, success/*:Function = null*/, failure/*:Function = null*/)/*:void*/ {var this$=this;switch(Math.max(arguments.length,1)){case 1:newSearch=true;case 2:success=null;case 3:failure=null;}
    if (query) {
      //noinspection JSUnusedGlobalSymbols
      this.getRemoteSearchServiceMethod$BARi().request({query: query},
              function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
                var result/*:Array*/ = response.getResponseJSON()["items"];
                this$.setSearchResult$BARi(result);
                if (!result || result.length == 0) {
                  com.coremedia.ui.logging.Logger.warn('No result. Did you select the appropriate prefererred site?');
                }
                if (newSearch) {
                  this$.getSearchHistory().add({queryString: query});
                }
                if (success) {
                  success(result);
                }
              },
              function (response/*:RemoteServiceMethodResponse*/)/*:void*/ {
                this$.setSearchResult$BARi(null);
                if (failure) {
                  failure(response.getError());
                }
              });
    }
  }/*

  public*/ function getSearchResult()/*:Array*/ {
    return AS3.as( this.get(com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.SEARCH_RESULT),  Array);
  }/*

  public*/ function hasSearchResult()/*:Boolean*/ {
    return this.getSearchResult() && this.getSearchResult().length > 0;
  }/*

  public*/ function removeFromSearchResult(remove/*:User*/)/*:void*/ {
    var currentHits/*:Array*/ = this.getSearchResult();
    var newHits/*:Array*/;
    if (currentHits) {
      newHits = currentHits.filter(function (user/*:User*/)/*:Boolean*/ {
        return (user && user !== remove);
      });
      this.setSearchResult$BARi(newHits);
    }
  }/*

  public*/ function clearSearchResult()/*:void*/ {
    this.setSearchResult$BARi([]);
  }/*

  public*/ function getSearchHistory()/*:History*/ {
    return AS3.as( this.get(com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.SEARCH_HISTORY),  com.coremedia.elastic.social.studio.model.History);
  }/*

  public*/ function getUserNotes()/*:NotesImpl*/ {
    return AS3.as( this.get(com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.NOTES),  com.coremedia.elastic.social.studio.model.impl.NotesImpl);
  }/*

  private*/ function setSearchResult(searchResult/*:Array*/)/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.SEARCH_RESULT, searchResult);
  }/*

  private*/ function setSearchHistory(history/*:History*/)/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.SEARCH_HISTORY, history);
  }/*

  private*/ function getRemoteSearchServiceMethod()/*:RemoteServiceMethod*/ {
    return new com.coremedia.ui.data.impl.RemoteServiceMethod((AS3.as(this.moderation$BARi,  com.coremedia.elastic.social.studio.model.impl.ModerationImpl)).getTenantAwareESUriPrefix() + SEARCH_PATH_SEGMENT$static, "GET");
  }/*

  public*/ function trimMail(email/*:String*/)/*:String*/ {
    return Ext.util.Format.trim(email);
  }/*

  public*/ function getModerationEmails()/*:Array*/ {
    return this.get(com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.MODERATION_EMAILS);
  }/*

  public*/ function setModerationEmails(emails/*:Array*/)/*:void*/ {
    this.set(com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.MODERATION_EMAILS, emails);
  }/*

  public*/ function getModerationEmail(mailType/*:String*/)/*:ModerationEmail*/ {
    var moderationEmails/*:Array*/ = this.getModerationEmails();
    if (mailType && moderationEmails) {
      for (var i/*:int*/ = 0; i < moderationEmails.length; i++) {
        if ((AS3.as(moderationEmails[i],  com.coremedia.elastic.social.studio.model.ModerationEmail)).getType() === mailType) {
          return moderationEmails[i];
        }
      }
    }

    return null;
  }/*

  private*/ function loadEmails()/*:void*/ {
    var editedUser/*:User*/ = this.getEdited();
    if (editedUser) {
      this.set(com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.MODERATION_EMAILS, editedUser.getDefaultModerationEmails());
    }
  }/*

  private*/ function loadUserNotes()/*:void*/ {var this$=this;
    var editedUser/*:User*/ = this.getEdited();
    if (editedUser) {
      editedUser.loadNotes(
              function (notes/*:NotesImpl*/)/*:void*/ {
                this$.set(com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.NOTES, notes);
              },
              com.coremedia.elastic.social.studio.model.impl.RemoteErrorHandler.handleRemoteErrorFromResponse
      );
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.BeanImpl",
      mixins: ["com.coremedia.elastic.social.studio.model.UserAdministration"],
      moderation$BARi: null,
      editedValueExpression$BARi: null,
      constructor: UserAdministrationImpl$,
      super$BARi: function() {
        com.coremedia.ui.data.impl.BeanImpl.prototype.constructor.apply(this, arguments);
      },
      startEditing: startEditing,
      cancelEditing: cancelEditing,
      applyChanges: applyChanges,
      anonymize: anonymize,
      getEdited: getEdited,
      hasEdited: hasEdited,
      search: search,
      getSearchResult: getSearchResult,
      hasSearchResult: hasSearchResult,
      removeFromSearchResult: removeFromSearchResult,
      clearSearchResult: clearSearchResult,
      getSearchHistory: getSearchHistory,
      getUserNotes: getUserNotes,
      setSearchResult$BARi: setSearchResult,
      setSearchHistory$BARi: setSearchHistory,
      getRemoteSearchServiceMethod$BARi: getRemoteSearchServiceMethod,
      trimMail: trimMail,
      getModerationEmails: getModerationEmails,
      setModerationEmails: setModerationEmails,
      getModerationEmail: getModerationEmail,
      loadEmails$BARi: loadEmails,
      loadUserNotes$BARi: loadUserNotes,
      requires: [
        "Ext.util.Format",
        "com.coremedia.elastic.social.studio.model.UserAdministration",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.impl.BeanImpl",
        "com.coremedia.ui.data.impl.RemoteServiceMethod",
        "com.coremedia.ui.logging.Logger"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.History",
        "com.coremedia.elastic.social.studio.model.ModerationEmail",
        "com.coremedia.elastic.social.studio.model.User",
        "com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.impl.HistoryImpl",
        "com.coremedia.elastic.social.studio.model.impl.ModerationImpl",
        "com.coremedia.elastic.social.studio.model.impl.NotesImpl",
        "com.coremedia.elastic.social.studio.model.impl.RemoteErrorHandler"
      ]
    };
});
