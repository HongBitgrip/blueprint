Ext.define("com.coremedia.cms.editor.sdk.preview.MetadataHelper", function(MetadataHelper) {/*package com.coremedia.cms.editor.sdk.preview {
import com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode;
import com.coremedia.ui.data.Bean;

import ext.Ext;

/**
 * Helper class to extract information from the metadata tree and the default
 * property values in particular.
 * /
public class MetadataHelper {
  public static const METADATA_DEFAULT_PROPERTY:String = '_';

  /**
   * Search up the metadata tree for the first bean-property pair.
   *
   * The implementation walks up the metadata tree collecting property metadata values
   * until it comes along a bean metadata value. It then returns the bean and the last
   * property value (if any).
   *
   * @param metadataNode Starting point
   * @return 2 element array containing a bean and property name (optional)
   * /
  public static*/ function extractBeanAndPropertyFromMetadataNode$static(metadataNode/*:MetadataTreeNode*/)/*:Array*/ {
    var propertyResult/*:String*/ = undefined;
    var beanResult/*:Bean*/ = undefined;

    var path/*:Array*/ = MetadataHelper.extractMetadataPathForMetadataNode(metadataNode);
    for (var i/*:int*/ = 0; i < path.length; i++) {
      var currentNode/*:MetadataTreeNode*/ =AS3.as( path[i],  com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode);
      if (MetadataHelper.isPropertyMetadataNode(currentNode)) {
        propertyResult = MetadataHelper.getPropertyMetadataValue(currentNode);
      }
      if (MetadataHelper.isBeanMetadataNode(currentNode)) {
        beanResult = MetadataHelper.getBeanMetadataValue(currentNode);
        return [beanResult, propertyResult];
      }
    }
    return null;
  }/*

  /**
   * Search up the metadata tree for the first bean metadata node. Returns undefined if
   * no matching tree node is found.
   *
   * @param metadataNode Start node
   * @param includeSelf Whether to search from the given node itself or from its parent. Default is true.
   * @return metadata node with bean default property or undefined
   * /
  public static*/ function getFirstBeanParentNode$static(metadataNode/*:MetadataTreeNode*/, includeSelf/*:Boolean = true*/)/*:MetadataTreeNode*/ {if(arguments.length<=1)includeSelf=true;
    return MetadataHelper.getFirstParentNodeMatching(metadataNode, MetadataHelper.isBeanMetadataNode, includeSelf);
  }/*

  /**
   * Search up the metadata tree for the first property metadata node. Returns undefined if
   * no matching tree node is found.
   *
   * @param metadataNode Start node
   * @param includeSelf Whether to search from the given node itself or from its parent. Default is true.
   * @return metadata node with property default property or undefined
   * /
  public static*/ function getFirstPropertyParentNode$static(metadataNode/*:MetadataTreeNode*/, includeSelf/*:Boolean = true*/)/*:MetadataTreeNode*/ {if(arguments.length<=1)includeSelf=true;
    return MetadataHelper.getFirstParentNodeMatching(metadataNode, MetadataHelper.isPropertyMetadataNode, includeSelf);
  }/*

  /**
   * Search up the metadata tree for the first index metadata node. Returns undefined if
   * no matching tree node is found.
   *
   * @param metadataNode Start node
   * @param includeSelf Whether to search from the given node itself or from its parent. Default is true.
   * @return metadata node with index default property or undefined
   * /
  public static*/ function getFirstIndexParentNode$static(metadataNode/*:MetadataTreeNode*/, includeSelf/*:Boolean = true*/)/*:MetadataTreeNode*/ {if(arguments.length<=1)includeSelf=true;
    return MetadataHelper.getFirstParentNodeMatching(metadataNode, MetadataHelper.isIndexMetadataNode, includeSelf);
  }/*

  /**
   * Search up the metadata tree for the first metadata node that makes the predicate function return true.
   * Returns undefined if no matching tree node is found.
   *
   * @param metadataNode Start node
   * @param predicate Function that returns true for matching metadata nodes
   * @param includeSelf Whether to search from the given node itself or from its parent. Default is true.
   * @return metadata node with index default property or undefined
   * /
  public static*/ function getFirstParentNodeMatching$static(metadataNode/*:MetadataTreeNode*/, predicate/*:Function*/, includeSelf/*:Boolean = true*/)/*:MetadataTreeNode*/ {if(arguments.length<=2)includeSelf=true;
    if (includeSelf && predicate(metadataNode)) {
      return metadataNode;
    }

    if (metadataNode && metadataNode.getParent()) {
      return MetadataHelper.getFirstParentNodeMatching(metadataNode.getParent(), predicate, true);
    } else {
      return undefined;
    }
  }/*

  /**
   * Returns the metadata path for the given metadata node. The returned array contains
   * all metadata nodes between the metadata root node and the given node starting
   * with the given node.
   *
   * @param metadataNode Starting point
   * @return array containing the metadata path
   * /
  public static*/ function extractMetadataPathForMetadataNode$static(metadataNode/*:MetadataTreeNode*/)/*:Array*/ {
    var result/*:Array*/ = [];
    if (metadataNode) {
      result.push(metadataNode);
      while (metadataNode.getParent()) {
        result.push(metadataNode.getParent());
        metadataNode = metadataNode.getParent();
      }
    }
    return result;
  }/*

  /**
   * Return the default property (_) of the given metadata node.
   *
   * @param metadataNode the node
   * @return the value of the default property
   * /
  public static*/ function getDefaultProperty$static(metadataNode/*:MetadataTreeNode*/)/*:**/ {
    return metadataNode && metadataNode.getProperty(MetadataHelper.METADATA_DEFAULT_PROPERTY);
  }/*

  /**
   * Returns true if the given metadata node's default property contains a bean value.
   * @param metadataNode The metadata node to check.
   * @return True if the default property references a bean
   * /
  public static*/ function isBeanMetadataNode$static(metadataNode/*:MetadataTreeNode*/)/*:Boolean*/ {
    var metadata/*:**/ = MetadataHelper.getDefaultProperty(metadataNode);
    return AS3.is( metadata,  com.coremedia.ui.data.Bean);
  }/*

  public static*/ function getBeanMetadataValue$static(metadataNode/*:MetadataTreeNode*/)/*:Bean*/ {
    return MetadataHelper.isBeanMetadataNode(metadataNode) ?AS3.as( metadataNode.getProperty(MetadataHelper.METADATA_DEFAULT_PROPERTY),  com.coremedia.ui.data.Bean) : undefined;
  }/*

  public static*/ function getAllProperties$static(metadataNode/*:MetadataTreeNode*/)/*:Object*/ {
    return Ext.apply({}, metadataNode['getProperties']());
  }/*

  /**
   * Returns true if the given metadata node's default property contains a property value (string).
   * @param metadataNode The metadata node to check.
   * @return True if the default property value is a string
   * /
  public static*/ function isPropertyMetadataNode$static(metadataNode/*:MetadataTreeNode*/)/*:Boolean*/ {
    var metadata/*:**/ = MetadataHelper.getDefaultProperty(metadataNode);
    return AS3.is( metadata,  String);
  }/*

  public static*/ function getPropertyMetadataValue$static(metadataNode/*:MetadataTreeNode*/)/*:String*/ {
    return MetadataHelper.isPropertyMetadataNode(metadataNode) ?AS3.as( metadataNode.getProperty(MetadataHelper.METADATA_DEFAULT_PROPERTY),  String) : undefined;
  }/*

  /**
   * Returns true if the given metadata node's default property contains an index (number).
   * @param metadataNode The metadata node to check.
   * @return True if the default property value is a number
   * /
  public static*/ function isIndexMetadataNode$static(metadataNode/*:MetadataTreeNode*/)/*:Boolean*/ {
    var metadata/*:**/ = MetadataHelper.getDefaultProperty(metadataNode);
    return AS3.is( metadata,  Number);
  }/*

  public static*/ function getIndexMetadataValue$static(metadataNode/*:MetadataTreeNode*/)/*:Number*/ {
    return MetadataHelper.isIndexMetadataNode(metadataNode) ?AS3.as( metadataNode.getProperty(MetadataHelper.METADATA_DEFAULT_PROPERTY),  Number) : undefined;
  }/*
}*/function MetadataHelper$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: MetadataHelper$,
      statics: {
        METADATA_DEFAULT_PROPERTY: '_',
        extractBeanAndPropertyFromMetadataNode: extractBeanAndPropertyFromMetadataNode$static,
        getFirstBeanParentNode: getFirstBeanParentNode$static,
        getFirstPropertyParentNode: getFirstPropertyParentNode$static,
        getFirstIndexParentNode: getFirstIndexParentNode$static,
        getFirstParentNodeMatching: getFirstParentNodeMatching$static,
        extractMetadataPathForMetadataNode: extractMetadataPathForMetadataNode$static,
        getDefaultProperty: getDefaultProperty$static,
        isBeanMetadataNode: isBeanMetadataNode$static,
        getBeanMetadataValue: getBeanMetadataValue$static,
        getAllProperties: getAllProperties$static,
        isPropertyMetadataNode: isPropertyMetadataNode$static,
        getPropertyMetadataValue: getPropertyMetadataValue$static,
        isIndexMetadataNode: isIndexMetadataNode$static,
        getIndexMetadataValue: getIndexMetadataValue$static
      },
      requires: [
        "Ext",
        "com.coremedia.ui.data.Bean"
      ],
      uses: ["com.coremedia.cms.editor.sdk.preview.metadata.MetadataTreeNode"]
    };
});
