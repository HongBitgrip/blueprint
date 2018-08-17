Ext.define("com.coremedia.cms.editor.sdk.util.ContentExport", function(ContentExport) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.common.CapPropertyDescriptorType;
import com.coremedia.cap.common.IdHelper;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.common.impl.StructRemoteBeanImpl;
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentPropertyNames;
import com.coremedia.cap.struct.Struct;
import com.coremedia.ui.data.Blob;
import com.coremedia.ui.data.Calendar;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.DateUtil;

/**
 * Utility action to make a console export of the active content.
 * /
public class ContentExport {

  public static*/ function consoleExport$static(content/*:Content*/)/*:void*/ {
    if (content) {
      preloadExport$static(content, function ()/*:void*/ {
        var buffer/*:String*/ = "";
        var desc/*:Array*/ = content.getType().getDescriptors();
        buffer += "\n============================================================================================================\n";
        buffer += "Name:\t" + content.getName() + "\n";
        buffer += "Type:\t" + content.getType().getName() + "\n";
        buffer += "Path:\t" + content.getPath() + "\n";
        buffer += "Id:\t\t" + content.getId() + "\n";
        buffer += "============================================================================================================\n";
        buffer += com.coremedia.cap.content.ContentPropertyNames.LIFECYCLE_STATUS + ": " + content.get(com.coremedia.cap.content.ContentPropertyNames.LIFECYCLE_STATUS) + "\n";
        buffer += com.coremedia.cap.content.ContentPropertyNames.PREVIEW_URL + ":\t\t " + content.get(com.coremedia.cap.content.ContentPropertyNames.PREVIEW_URL) + "\n";
        buffer += "------------------------------------------------------------------------------------------------------------\n";
        for (var i/*:int*/ = 0; i < desc.length; i++) {
          var name/*:String*/ = desc[i].name;
          if (desc[i].type == com.coremedia.cap.common.CapPropertyDescriptorType.STRING ||
                  desc[i].type == com.coremedia.cap.common.CapPropertyDescriptorType.INTEGER ||
                  desc[i].type == com.coremedia.cap.common.CapPropertyDescriptorType.BOOLEAN) {
            buffer += name + ': ' + content.getProperties().get(name) + '\n';
          }
          else if (desc[i].type == com.coremedia.cap.common.CapPropertyDescriptorType.DATE) {
            var date/*:Object*/ = content.getProperties().get(name);
            var dateString/*:String*/ = toStringValue$static(date);
            buffer += name + ': ' + dateString + '\n';
          }
          else if (desc[i].type == com.coremedia.cap.common.CapPropertyDescriptorType.BLOB) {
            var blob/*:Blob*/ = content.getProperties().get(name);
            if (blob) {
              buffer += name + ':\n';
              buffer += "\t\tType: " + blob.getContentType() + "\n";
              buffer += "\t\tSize: " + blob.getSize() + " bytes\n";
            }
          }
          else if (desc[i].type == com.coremedia.cap.common.CapPropertyDescriptorType.MARKUP) {
            var markupBlob/*:Blob*/ = content.getProperties().get(name);
            if (markupBlob) {
              var markup/*:String*/ = markupBlob.getData();
              markup = formatXml$static(markup);
              buffer += name + ': \n' + markup + "\n";
            }
          }
          else if (desc[i].type == com.coremedia.cap.common.CapPropertyDescriptorType.STRUCT) {
            var struct/*:Struct*/ = content.getProperties().get(name);
            buffer += name + ':\n';
            var structExport/*:String*/ = exportStruct$static(struct);
            structExport = '<Struct xmlns="http://www.coremedia.com/2008/struct" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                    structExport +
                    '</Struct>';
            buffer += formatXml$static(structExport);
          }
          else if (desc[i].type == com.coremedia.cap.common.CapPropertyDescriptorType.LINK) {
            var links/*:Array*/ = content.getProperties().get(name);
            buffer += name + ': \n';
            for/* each*/(var $1=0;$1</* in*/ links.length;++$1) {var link/*:Content*/ =links[$1];
              buffer += "\t- '" + link.getName() + "' / " + com.coremedia.cap.common.IdHelper.parseContentId(link) + " (" + link.getPath() + ")\n";
            }
          }
        }
        buffer += "============================================================================================================\n";
        AS3.trace(buffer);
      });
    }
  }/*

  /**
   * Preload all content, e.g. path information
   * @param content the content to pre-load
   * @param f function to call when preloading is finished.
   * /
  private static*/ function preloadExport$static(content/*:Content*/, f/*:Function*/)/*:void*/ {
    AS3.trace("Loading required export data...");
    com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      if (!content.getPath()) {
        return undefined;
      }

      var descriptors/*:Array*/ = content.getType().getDescriptors();
      for/* each*/(var $2=0;$2</* in*/ descriptors.length;++$2) {var desc/*:CapPropertyDescriptor*/ =descriptors[$2];
        var name/*:String*/ = desc.name;
        if (desc.type == com.coremedia.cap.common.CapPropertyDescriptorType.BLOB) {
          var blob/*:Blob*/ = content.getProperties().get(name);
          if (blob && !blob.isLoaded()) {
            blob.loadData();
            return undefined;
          }
        }
        else if (desc.type == com.coremedia.cap.common.CapPropertyDescriptorType.MARKUP) {
          var markupBlob/*:Blob*/ = content.getProperties().get(name);
          if (markupBlob) {
            if (markupBlob && !markupBlob.isLoaded()) {
              markupBlob.loadData();
              return undefined;
            }
          }
        }
        else if (desc.type == com.coremedia.cap.common.CapPropertyDescriptorType.STRUCT) {
          var struct/*:Struct*/ = content.getProperties().get(name);
          if (AS3.as(struct,  com.coremedia.cap.common.impl.StructRemoteBeanImpl)) {
            var s/*:StructRemoteBeanImpl*/ =AS3.as( struct,  com.coremedia.cap.common.impl.StructRemoteBeanImpl);
            if (!s.isLoaded()) {
              s.load();
              return undefined;
            }
          }

          if(ContentExport.preloadStruct(struct) === undefined) {
            return undefined;
          }
        }
        else if (desc.type == com.coremedia.cap.common.CapPropertyDescriptorType.LINK) {
          var links/*:Array*/ = content.getProperties().get(name);
          for/* each*/(var $1=0;$1</* in*/ links.length;++$1) {var link/*:Content*/ =links[$1];
            if (!link.isLoaded()) {
              link.load();
              return undefined;
            }
            if (!link.getPath()) {
              return undefined;
            }
          }
        }
      }
      return true;
    }).loadValue(f);
  }/*

  public static*/ function preloadStruct$static(struct/*:Struct*/)/*:Boolean*/ {
    var descriptors/*:Array*/ = struct.getType().getDescriptors();

    for/* each*/(var $3=0;$3</* in*/ descriptors.length;++$3) {var desc/*:CapPropertyDescriptor*/ =descriptors[$3];
      var name/*:String*/ = desc.name;
      var typeName/*:String*/ = desc.type;
      var value/*:Object*/ = struct.get(name);

      if (typeName == com.coremedia.cap.common.CapPropertyDescriptorType.STRUCT) {
        if (AS3.as(value,  Array)) {
          var subStructs/*:Array*/ =AS3.as( value,  Array);
          for/* each*/(var $1=0;$1</* in*/ subStructs.length;++$1) {var subStr/*:Struct*/ =subStructs[$1];
            if(!ContentExport.preloadStruct(AS3.as(subStr,  com.coremedia.cap.struct.Struct))) {
              return undefined;
            }
          }
        }
        else if (AS3.as(value,  com.coremedia.cap.struct.Struct)) {
          if(!ContentExport.preloadStruct(AS3.as(value,  com.coremedia.cap.struct.Struct))) {
            return undefined;
          }
        }
      }
      else if (typeName == com.coremedia.cap.common.CapPropertyDescriptorType.LINK) {
        if (desc.collection) {
          var values/*:Array*/ =AS3.as( value,  Array);
          for/* each*/(var $2=0;$2</* in*/ values.length;++$2) {var item/*:Content*/ =values[$2];
            if(item.isDestroyed()) {
              continue;
            }
            if(com.coremedia.cms.editor.sdk.util.AccessControlUtil.isReadOnly(item)) {
              continue;
            }

            if (!item.isLoaded()) {
              item.load();
              return undefined;
            }

            if (item.getPath() === undefined) {
              return undefined;
            }
          }
        }
        else if(value) {
          var c/*:Content*/ =AS3.as( value,  com.coremedia.cap.content.Content);
          if (!c.isLoaded()) {
            c.load();
            return undefined;
          }

          if (c.getPath() === undefined) {
            return undefined;
          }
        }
      }
    }
    return true;
  }/*

  /**
   * Exports a Struct object to string
   * @param struct the struct to convert to string
   * /
  private static*/ function exportStruct$static(struct/*:Struct*/)/*:String*/ {
    var buffer/*:String*/ = '';
    var descriptors/*:Array*/ = struct.getType().getDescriptors();

    for/* each*/(var $6=0;$6</* in*/ descriptors.length;++$6) {var desc/*:CapPropertyDescriptor*/ =descriptors[$6];
      var name/*:String*/ = desc.name;
      var typeName/*:String*/ = desc.type;
      var el/*:String*/ = capitalizeFirstLetter$static(typeName.toLowerCase());
      var value/*:Object*/ = struct.get(name);

      if (typeName == com.coremedia.cap.common.CapPropertyDescriptorType.STRUCT) {
        var structElementName/*:String*/ = "StructProperty";
        if (desc.collection) {
          structElementName = "StructListProperty";
        }

        buffer += '<' + structElementName + ' Name="' + name + '">';
        if (AS3.as(value,  Array)) {
          var subStructs/*:Array*/ =AS3.as( value,  Array);
          for/* each*/(var $1=0;$1</* in*/ subStructs.length;++$1) {var subStr/*:Struct*/ =subStructs[$1];
            buffer += '<Struct>';
            buffer += exportStruct$static(AS3.as(subStr,  com.coremedia.cap.struct.Struct));
            buffer += '</Struct>';
          }
        }
        else if (AS3.as(value,  com.coremedia.cap.struct.Struct)) {
          buffer += '<Struct>';
          buffer += exportStruct$static(AS3.as(value,  com.coremedia.cap.struct.Struct));
          buffer += '</Struct>';
        }
        else {
          throw new AS3.Error("Unsupported struct format");
        }
        buffer += '</' + structElementName + '>';
      }
      else if (typeName == com.coremedia.cap.common.CapPropertyDescriptorType.LINK) {
        if (desc.collection) {
          buffer += '<LinkListProperty Name="' + name + '">';
          for/* each*/(var $2=0,$3=/* in*/ (AS3.as(value,  Array));$2<$3.length;++$2) {var item/*:Content*/ =$3[$2];
            buffer += exportLink$static("Link", item);
          }
          buffer += '</LinkListProperty>';
        }
        else {
          buffer += exportLink$static("LinkProperty",AS3.as( value,  com.coremedia.cap.content.Content));
        }
      }
      else { //all basic types
        if (desc.collection) {
          buffer += '<' + el + 'ListProperty Name="' + name + '">';
          for/* each*/(var $4=0,$5=/* in*/ (AS3.as(value,  Array));$4<$5.length;++$4) {var v/*:Object*/ =$5[$4];
            var stringValue/*:String*/ = toStringValue$static(v);
            buffer += '<' + el + '">' + stringValue + '</' + el + '>';
          }
          buffer += '</' + el + '>';
        }
        else {
          var s/*:String*/ = toStringValue$static(value);
          buffer += '<' + el + 'Property Name="' + name + '">' + s + '</' + el + 'Property>';
        }
      }
    }

    return buffer;
  }/*

  /**
   * Checks if the given value is in String format.
   * If not, tries to format it.
   * @param value
   * @return the formatted String value.
   * /
  private static*/ function toStringValue$static(value/*:Object*/)/*:String*/ {
    if (AS3.as(value,  com.coremedia.ui.data.Calendar)) {
      var cal/*:Calendar*/ =AS3.as( value,  com.coremedia.ui.data.Calendar);
      var date/*:Date*/ = cal['getDateWithoutOffset']();
      var format/*:String*/ = 'd-m-Y H:i';
      var dateString/*:String*/ = Ext.Date.format(date, format) + ' ' + cal.getTimeZone();
      return dateString;
    }
    return "" + value;
  }/*

  //---------------------- Export Helper -----------------------------------------------

  private static*/ function exportLink$static(el/*:String*/, content/*:Content*/)/*:String*/ {
    if (content) {
      return '<' + el + ' xlink:href="" LinkType="coremedia:///cap/contenttype/' + content.getType().getName() + '" cmexport:path="' + content.getPath() + '" />';
    }
    return '';
  }/*

  private static*/ function capitalizeFirstLetter$static(string/*:String*/)/*:String*/ {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }/*

  /**
   * Pretty format for the given XML string.
   * @param xml The xml to format.
   * @return The indented xml.
   * /
  private static*/ function formatXml$static(xml/*:String*/)/*:String*/ {
    var formatted/*:String*/ = '';
    var reg/*:**/ = /(>)(<)(\/*)/g;
    xml = xml.replace(reg, '$1\r\n$2$3');
    var pad/*:int*/ = 0;
    xml.split('\r\n').forEach(function (node/*:**/)/*:**/ {
      var indent/*:int*/ = 0;
      if (node.match(/.+<\/\w[^>]*>$/)) {
        indent = 0;
      } else if (node.match(/^<\/\w/)) {
        if (pad != 0) {
          pad -= 1;
        }
      } else if (node.match(/^<\w[^>]*[^\/]>.*$/)) {
        indent = 1;
      } else {
        indent = 0;
      }

      var padding/*:String*/ = '';
      for (var i/*:int*/ = 0; i < pad; i++) {
        padding += '  ';
      }

      formatted += padding + node + '\r\n';
      pad += indent;
    });

    return formatted;
  }/*
}*/function ContentExport$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ContentExport$,
      statics: {
        consoleExport: consoleExport$static,
        preloadStruct: preloadStruct$static
      },
      requires: [
        "AS3.Error",
        "AS3.trace",
        "Ext.Date",
        "com.coremedia.cap.common.CapPropertyDescriptorType",
        "com.coremedia.cap.common.IdHelper",
        "com.coremedia.cap.common.impl.StructRemoteBeanImpl",
        "com.coremedia.cap.content.Content",
        "com.coremedia.cap.content.ContentPropertyNames",
        "com.coremedia.cap.struct.Struct",
        "com.coremedia.ui.data.Calendar",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.sdk.util.AccessControlUtil"]
    };
});
