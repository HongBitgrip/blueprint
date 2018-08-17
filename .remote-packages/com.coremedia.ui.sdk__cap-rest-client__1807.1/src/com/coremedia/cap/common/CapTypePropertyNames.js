Ext.define("com.coremedia.cap.common.CapTypePropertyNames", function(CapTypePropertyNames) {/*package com.coremedia.cap.common {

/**
 * CapTypePropertyNames is a container for static identifiers of type meta property names.
 * Use these if you want to access such properties in a generic way.
 * The property constants refer to the corresponding properties in the CapType interface.
 *
 * @see CapType
 * @see com.coremedia.ui.data.Bean#get()
 * /
[PublicApi]
public class CapTypePropertyNames {
  /**
   * @eventType parent
   * @see CapType#getParent()
   * /
  public static const PARENT:String = 'parent';

  /**
   * @eventType name
   * @see CapType#getName()
   * /
  public static const NAME:String = 'name';

  /**
   * @eventType abstract
   * @see CapType#getAbstract()
   * /
  public static const ABSTRACT:String = 'abstract';

  /**
   * @eventType concrete
   * @see CapType#getConcrete()
   * /
  public static const CONCRETE:String = 'concrete';

  /**
   * @eventType description
   * @see CapType#getDescription()
   * /
  public static const DESCRIPTION:String = 'description';

  /**
   * @eventType directDescriptors
   * @see CapType#getDirectDescriptors()
   * /
  public static const DIRECT_DESCRIPTORS:String = 'directDescriptors';

  /**
   * @eventType descriptors
   * @see CapType#getDescriptors()
   * /
  public static const DESCRIPTORS:String = 'descriptors';
}*/function CapTypePropertyNames$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: CapTypePropertyNames$,
      statics: {
        PARENT: 'parent',
        NAME: 'name',
        ABSTRACT: 'abstract',
        CONCRETE: 'concrete',
        DESCRIPTION: 'description',
        DIRECT_DESCRIPTORS: 'directDescriptors',
        DESCRIPTORS: 'descriptors'
      }
    };
});
