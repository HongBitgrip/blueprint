Ext.define("com.coremedia.ui.util.Enum", function(Enum) {/*package com.coremedia.ui.util {

/**
 * Base class for enums.
 *
 * <p>In order to create a new enum class, create a <code>final</code> subclass of <code>Enum</code>.
 * Let your subclass declare several constants that are instances of itself. After that, call the
 * static utility function <code>collectValues()</code> with your subclass as
 * the sole parameter. This takes cares of setting each constant value's <code>name</code> property
 * to the name under which the constant has been declared and thus saves your from error-prone and
 * redundant repeating of the enum names as string parameters.
 * The <code>ordinal</code> property of each enum value is also set automatically.
 * </p>
 * <p>Optionally, you can publish the array of all enumeration values by assigning the result of
 * <code>collectValues()</code> to a public static constant that should be called
 * <code>values</code> and annotated with <code>[ArrayElementType("mypackage.MyEnum")]</code>.
 * </p>
 * <p>Optionally, you can declare a <code>named()</code> method that converts a string
 * to an enum constant of your class, delegating to the utility function <code>namedIn()</code>.
 * </p>
 * 
 * <p>Since for each enum value, a single instance is created, enums can and should be compared using <code>===</code>.
 * They work in <code>switch</code> statements as expected.</p>
 *
 * <p>The following example shows a typical enum class and some usage examples.</p>
 *
 * <pre>
 * package acme {
 * 
 * import joo.Enum;
 * 
 * public class Switch extends Enum {
 * 
 *   public static const ON:Switch = new Switch(true);
 *   public static const OFF:Switch = new Switch(false);
 *
 *   [ArrayElementType("acme.Switch")]
 *   public static const values:Array = collectValues(Switch);
 * 
 *   public static function named(name:String):Switch {
 *     return namedIn(name, Switch);
 *   }
 * 
 *   private var _on:Boolean;
 * 
 *   function Switch(on:Boolean) {
 *     this._on = on;
 *   }
 * 
 *   public function get on():Boolean {
 *     return _on;
 *   }
 * 
 * }
 * }
 *
 * trace(Switch.values);                        // ON,OFF
 * trace(Switch.ON);                            // ON
 * trace(Switch.OFF);                           // OFF
 * trace(Switch.ON['constructor']);             // [class Switch]
 * trace(Switch.named("ON"));                 // ON
 * for each (var s:Switch in Switch.values) {
 *   trace(s.ordinal + 1 + ". " + s.name + " is on: " + s.on); // 1. ON is on: true
 * }                                                           // 2. OFF is on: false
 * </pre>
 * /
[PublicApi]
public class Enum {

  /**
   * Only call from subclasses.
   * For each subclass, collects all instances and immediately assigns a consecutive <code>ordinal</code>.
   * The <code>name</code> is added later when <code>collectValues()</code> is invoked by the subclass.
   * @see Enum.collectValues()
   * /
  public*/ function Enum$() {
    var enumClass/*:Class*/ = this['self'];
    //noinspection JSMismatchedCollectionQueryUpdate
    var values/*:**/ = enumClass._values;
    if (!values) {
      values = enumClass._values = [];
    }
    this['ordinal'] = values.length;
    values.push(this);
  }/*

  /**
   * The name of this enumeration value.
   * It is the same as the name of the constant that refers to this enumeration value.
   * /
  public native function get name():String;

  /**
   * The ordinal position of this enumeration value.
   * For each Enum subclass, oridinals start with 0 (zero) and are increased by one for each created instance.
   * The oridinal is also the index of this enumeration value in the array of all <code>values</code>.
   * /
  public native function get ordinal():uint;

  /**
   * Return the name of this enumeration value.
   *
   * @return the name
   * @see #name
   * /
  public*/ function toString()/*:String*/ {
    return this.name;
  }/*

  /**
   * This utility method should typically be used by subclasses, but for very generic code handling different
   * types of enums, it might be useful, too.
   * <p>In your enum subclass <code>MyEnum</code>, delegate your <code>named()</code> method to this method like so:</p>
   * <pre>
   *   public static function named(name:String):MyEnum {
   *     return namedIn(name, MyEnum);
   *   }
   * </pre>
   * 
   * @param name the name of the enum value to return
   * @param enumClass the enum subclass in which to look for the value
   * @return the enum value with the given name, always an instance of the given <code>enumClass</code>
   * @throws ArgumentError if <code>enumClass</code> is not an <code>Enum</code> subclass
   * @throws ReferenceError if an enum value with the given <code>name</code> does not exist in the given <code>enumClass</code>
   * /
  public static*/ function namedIn$static(name/*:String*/, enumClass/*:Class*/)/*:**/ {
    if (!Enum.isEnumType(enumClass)) {
      throw new ArgumentError("First parameter to Enum.namedIn() must be an Enum subclass, not '" + enumClass + "'.");
    }
    var value/*:**/ =AS3.as( enumClass[name],  enumClass);
    if (!value) {
      throw new ReferenceError("'" + name + "' is not an enum value of " + enumClass + ".");
    }
    return value;
  }/*

  /**
   * In your enum subclass <code>com.acme.MyEnum</code>, call this method after all enum constants have been defined
   * and assign the result to a public static constant named <code>values</code>, like so:
   * <pre>
   *   [ArrayElementType("com.acme.MyEnum")]
   *   public static const values:Array = collectValues(MyEnum);
   * </pre>
   *
   * The optional annotation improves IDE support when using the constant. 
   *
   * @param enumClass your <code>Enum</code> subclass
   * @return an array of all previously defined enum values, in order of their ordinal
   * @throws ArgumentError if <code>enumClass</code> is not an <code>Enum</code> subclass
   * @throws Error if any instance of <code>enumClass</code> has not been declared as a public static constant
   * /
  protected static*/ function collectValues$static(enumClass/*:Class*/)/*:Array*/ {
    if (!Enum.isEnumType(enumClass)) {
      throw new ArgumentError("Parameter to Enum.collectValues() must be an Enum subclass, not '" + enumClass + "'.");
    }
    // original AS3:
    // flash.utils.describeType(enumClass).constant.(@type == getQualifiedClassName(enumClass)).(Enum(enumClass[@name])._name = @name.toString());
    // Jangaroo version: static variables are enumerable properties of the class object:
    for (var property/*:String*/ in enumClass) {
      if (enumClass.hasOwnProperty(property)) {
        var enumValue/*:Enum*/ =AS3.as( enumClass[property],  enumClass);
        if (enumValue) {
          enumValue['name'] = property;
        }
      }
    }

    // sanity check:
    var values/*:Array*/ = enumClass._values;
    for/* each*/ (var $2=0;$2</* in*/  values.length;++$2) {var value/*:Enum*/ =values[$2];
      if (!value.name) {
        throw new AS3.Error("Instance " + value.ordinal + " of Enum " + enumClass.$class.fullClassName + " not assigned to a public static const.");
      }
    }
    return values;
  }/*

  /**
   * Utility method to check whether a class is an enum type, i.e. whether it extends <code>Enum</code>.
   *
   * @param clazz the class to check
   * @return whether the given class is not <code>null</code> and is a subclass of <code>Enum</code>.
   * /
  public static*/ function isEnumType$static(clazz/*:Class*/)/*:Boolean*/ {
    return ! !clazz && clazz.prototype instanceof Enum && clazz !== Enum;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: Enum$,
      toString: toString,
      statics: {
        namedIn: namedIn$static,
        collectValues: collectValues$static,
        isEnumType: isEnumType$static
      },
      requires: [
        "AS3.Error",
        "ArgumentError"
      ]
    };
});
