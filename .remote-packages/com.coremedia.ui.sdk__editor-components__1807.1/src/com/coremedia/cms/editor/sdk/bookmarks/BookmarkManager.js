Ext.define("com.coremedia.cms.editor.sdk.bookmarks.BookmarkManager", function(BookmarkManager) {/*package com.coremedia.cms.editor.sdk.bookmarks {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.sdk.util.PreferencesUtil;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;

import ext.Ext;

/**
 * Management singleton to handle bookmark related actions.
 * /
public class BookmarkManager {

  private static const*/var PREFERENCE_BOOKMARKS$static/*:String*/ = "bookmarks";/*
  private static*/ var instance$static/*:BookmarkManager*/=null;/*
  private var bookmarkedContentExpression:ValueExpression;
  private var byUserNamedBookmarksBean:Bean;
  private var byUserNamedBookmarksExpression:ValueExpression;
  private var availableBookmarksExpression:ValueExpression;

  public static*/ function getInstance$static()/*:BookmarkManager*/ {
    if (!instance$static) {
      instance$static = new BookmarkManager();
      instance$static.loadBookmarks$Ma5C();
    }
    return instance$static;
  }/*

  public*/ function getBookmarkedContentExpression()/*:ValueExpression*/ {
    if (!this.bookmarkedContentExpression$Ma5C) {
      this.bookmarkedContentExpression$Ma5C = com.coremedia.ui.data.ValueExpressionFactory.create('bookmarks', com.coremedia.ui.data.beanFactory.createLocalBean());
    }
    return this.bookmarkedContentExpression$Ma5C;
  }/*

  public*/ function getByUserNamedBookmarksBean()/*:Bean*/ {
    if (!this.byUserNamedBookmarksBean$Ma5C) {
      this.byUserNamedBookmarksBean$Ma5C = com.coremedia.ui.data.beanFactory.createLocalBean();
    }
    return this.byUserNamedBookmarksBean$Ma5C;
  }/*

  public*/ function getByUserNamedBookmarksExpression()/*:ValueExpression*/ {
    if (!this.byUserNamedBookmarksExpression$Ma5C) {
      this.byUserNamedBookmarksExpression$Ma5C = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(this.getByUserNamedBookmarksBean());

    }
    return this.byUserNamedBookmarksExpression$Ma5C;
  }/*

  public*/ function contains(content/*:Content*/)/*:Boolean*/ {
    return (AS3.as(this.getBookmarkedContentExpression().getValue(),  Array)).indexOf(content) !== -1;
  }/*

  public*/ function getAvailableBookmarksExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.availableBookmarksExpression$Ma5C) {
      this.availableBookmarksExpression$Ma5C = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var result/*:Array*/ = [];
        var bmContent/*:Array*/ = this$.getBookmarkedContentExpression().getValue();
        var bmRenamed/*:Bean*/ = this$.getByUserNamedBookmarksExpression().getValue();
        if (bmContent) {
          Ext.each(bmContent, function (content/*:Content*/)/*:void*/ {
            try {
              var name/*:String*/ = content.getName();
              if (name && !(content.isDeleted() || content.isDestroyed())) {
                if (bmRenamed && bmRenamed.get(content.getUriPath())) {
                  name = bmRenamed.get(content.getUriPath());
                }
                result.push(new com.coremedia.cms.editor.sdk.bookmarks.Bookmark(name, content));
              }
            } catch(e){if(AS3.is (e,AS3.Error)) {
              AS3.trace('[ERROR]', 'Unreadable bookmark: ' + content);
            }else throw e;}
          });
        }
        return result;
      });
      this.availableBookmarksExpression$Ma5C.addChangeListener(AS3.bind(this,"saveBookmarks$Ma5C"));
    }
    return this.availableBookmarksExpression$Ma5C;
  }/*


  /**
   * Applies the content of the active tab as bookmark
   * to the bookmark list, if not already in it.
   * /
  public*/ function applyBookmark(name/*:String*/, content/*:Content*/)/*:void*/ {
    if (content) {
      var oldValue/*:Array*/ = this.getBookmarkedContentExpression().getValue();
      if (oldValue) {
        if (!oldValue.some(function (aContent/*:Content*/)/*:Boolean*/ {
          return content === aContent;
        })) {
          this.getBookmarkedContentExpression().setValue(oldValue.concat(content));
        }
      } else {
        this.getBookmarkedContentExpression().setValue([content]);
      }
    }
  }/*

  /**
   * Inserts some content into the list of bookmarks at the specified position, or moves it
   * to this position of the bookmarks if it is already bookmarked
   * @param index the position to insert the content at / move the content to
   * @param content the content
   * @return true if the action succeeded, false otherwise (on wrong index or undefined content, for example)
   * /
  public*/ function insertAtOrMoveTo(index/*:int*/, content/*:Content*/)/*:Boolean*/ {
    if (index < 0 || index > (AS3.as(this.getBookmarkedContentExpression().getValue(),  Array)).length + 1) {
      return false; //wrong index, do nothing
    }
    if (!content || !(AS3.is(content,  com.coremedia.cap.content.Content))) {
      return false; // content undefined or not actually pointing to content, do nothing;
    }

    var oldValue/*:Array*/ = this.getBookmarkedContentExpression().getValue();
    var newValue/*:Array*/ = [];
    for (var i/*:int*/ = 0; i < oldValue.length; i++) {
      if (index === i) {
        newValue.push(content);
      }
      if (!(content.getId() === (AS3.as(oldValue[i],  com.coremedia.cap.content.Content)).getId())) {
        newValue.push(oldValue[i]);
      }
    }
    if (index === oldValue.length) {
      newValue.push(content); // special case: content was moved to end of list
    }
    this.getBookmarkedContentExpression().setValue(newValue);
    return true;
  }/*

  /**
   * Removes the given content from the list of bookmarks.
   * @param content
   * /
  public*/ function removeBookmark(content/*:Content*/)/*:void*/ {
    var oldValue/*:Array*/ = this.getBookmarkedContentExpression().getValue();
    var newValue/*:Array*/ = [];
    for (var i/*:int*/ = 0; i < oldValue.length; i++) {
      if (!(content.getUriPath() === (AS3.as(oldValue[i],  com.coremedia.cap.content.Content)).getUriPath())) {
        newValue.push(oldValue[i]);
      }
    }
    this.getBookmarkedContentExpression().setValue(newValue);
    this.getByUserNamedBookmarksBean().set(content.getUriPath(), undefined);
  }/*

  /**
   * Rename the bookmark for the given content with the given name
   * @param content
   * @param name
   * /
  public*/ function renameBookmark(content/*:Content*/, name/*:String*/)/*:void*/ {
    var trimPattern/*:RegExp*/ = /^\s*|\s*$/gim; //pattern for removing leading and trailing whitespaces
    var bookmarkNames/*:Bean*/ = this.getByUserNamedBookmarksBean();
    if (name && name.replace(trimPattern, "") !== "") {
      if (content.getName() === name) {
        bookmarkNames.set(content.getUriPath(), undefined);
      } else {
        bookmarkNames.set(content.getUriPath(), name);
      }
    }
  }/*

  private*/ function saveBookmarks()/*:void*/ {
    com.coremedia.cms.editor.sdk.util.PreferencesUtil.updatePreferencesJSONProperty(serializeBookmarks$static(this.getAvailableBookmarksExpression().getValue()),/* BookmarkManager.*/PREFERENCE_BOOKMARKS$static);
  }/*

  private static*/ function serializeBookmarks$static(bookmarks/*:Array*/)/*:Array*/ {
    var result/*:Array*/ = [];
    for/* each*/(var $1=0;$1</* in*/ bookmarks.length;++$1) {var bookmark/*:Bookmark*/ =bookmarks[$1];
      var bm/*:Object*/ = {};
      bm.name = bookmark.getName();
      bm.content = bookmark.getContent();
      result.push(bm);
    }
    return result;
  }/*

  private static*/ function deserializeBookmarks$static(bookmarks/*:Array*/)/*:Array*/ {
    var result/*:Array*/ = [];
    if (!bookmarks) {
      return result;
    }
    for/* each*/(var $1=0;$1</* in*/ bookmarks.length;++$1) {var bm/*:Object*/ =bookmarks[$1];
      if (!isBookmark$static(bm)) {
        return [];
      }
      var bookmark/*:Bookmark*/ = new com.coremedia.cms.editor.sdk.bookmarks.Bookmark(bm.name, bm.content);
      result.push(bookmark);
    }
    return result;
  }/*

  private static*/ function isBookmark$static(o/*:Object*/)/*:Boolean*/ {
    return (o.name && o.content);
  }/*

  /**
   * Loads the bookmarks from the users preferences document,
   * refreshes the bookmark menu afterwards.
   * /
  private*/ function loadBookmarks()/*:void*/ {
    //new bookmark persistence format
    var bookmarkObjects/*:Array*/ = deserializeBookmarks$static(AS3.as((com.coremedia.cms.editor.sdk.util.PreferencesUtil.getPreferencesJSONProperty({},/* BookmarkManager.*/PREFERENCE_BOOKMARKS$static) || []),  Array));

    var bookmarkedContent/*:Array*/ = [];
    var renamedBookmarks/*:Object*/ = {};
    if (bookmarkObjects && bookmarkObjects.length > 0) {
      for/* each*/(var $1=0;$1</* in*/ bookmarkObjects.length;++$1) {var bm/*:Bookmark*/ =bookmarkObjects[$1];
        renamedBookmarks[bm.getContent().getUriPath()] = bm.getName();
        bookmarkedContent.push(bm.getContent());
      }
    } else {
      //load bookmarks in the old persistence string format
      bookmarkedContent =AS3.as( (com.coremedia.cms.editor.sdk.util.PreferencesUtil.getPreferencesJSONProperty(AS3.bind(this,"decodeBookmarks$Ma5C"),/* BookmarkManager.*/PREFERENCE_BOOKMARKS$static) || []),  Array);
    }

    this.getByUserNamedBookmarksBean().updateProperties(renamedBookmarks);
    this.getBookmarkedContentExpression().setValue(bookmarkedContent);
  }/*

  /**
   * Old versions of the bookmark manager used a string format for encoding bookmarks.
   * The set of bookmark used to be a space-separated string, where each part of the string
   * consisted of a numeric id of the content to bookmark, a separator dot,
   * and an ignored bookmark name in which spaces were escaped as a tilde and an underscore.
   *
   * @param value the stored value
   * @return an array of content if the given value was a string
   * /
  private*/ function decodeBookmarks(value/*:Object*/)/*:Array*/ {
    var valueString/*:String*/ =AS3.as( value,  String);
    if (!valueString) {
      // Only decode strings.
      return undefined;
    }
    var result/*:Array*/ = [];
    valueString.split(' ').forEach(function (item/*:String*/)/*:void*/ {
      var contentId/*:String*/ = item.substr(0, item.indexOf("."));
      if (contentId && contentId.length > 0) {
        var bookmarkContent/*:Content*/ =AS3.as( com.coremedia.ui.data.beanFactory.getRemoteBean('content/' + contentId),  com.coremedia.cap.content.Content);
        if (bookmarkContent) {
          result.push(bookmarkContent);
        }
      }
    });
    return result;
  }/*

}*/function BookmarkManager$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      bookmarkedContentExpression$Ma5C: null,
      byUserNamedBookmarksBean$Ma5C: null,
      byUserNamedBookmarksExpression$Ma5C: null,
      availableBookmarksExpression$Ma5C: null,
      getBookmarkedContentExpression: getBookmarkedContentExpression,
      getByUserNamedBookmarksBean: getByUserNamedBookmarksBean,
      getByUserNamedBookmarksExpression: getByUserNamedBookmarksExpression,
      contains: contains,
      getAvailableBookmarksExpression: getAvailableBookmarksExpression,
      applyBookmark: applyBookmark,
      insertAtOrMoveTo: insertAtOrMoveTo,
      removeBookmark: removeBookmark,
      renameBookmark: renameBookmark,
      saveBookmarks$Ma5C: saveBookmarks,
      loadBookmarks$Ma5C: loadBookmarks,
      decodeBookmarks$Ma5C: decodeBookmarks,
      constructor: BookmarkManager$,
      statics: {getInstance: getInstance$static},
      requires: [
        "AS3.Error",
        "AS3.trace",
        "Ext",
        "com.coremedia.cap.content.Content",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.bookmarks.Bookmark",
        "com.coremedia.cms.editor.sdk.util.PreferencesUtil"
      ]
    };
});
