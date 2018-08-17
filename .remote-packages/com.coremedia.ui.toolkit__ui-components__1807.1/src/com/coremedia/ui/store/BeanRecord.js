Ext.define("com.coremedia.ui.store.BeanRecord", function(BeanRecord) {/*package com.coremedia.ui.store {

import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.FunctionValueExpression;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.error.NotReadableError;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.EncodingUtil;
import com.coremedia.ui.util.EventUtil;

import ext.Ext;
import ext.data.Model;
import ext.data.Store;

/**
 * A special <b>ext.data.Record</b> for storing <b>com.coremedia.ui.data.Bean</b>s
 * BeanRecords provide the connecting link between an <b>ext.data.Store</b>
 * and <b>com.coremedia.ui.data.Bean</b>s.
 *
 * @see ext.data.Model
 * @see ext.data.Store
 * @see com.coremedia.ui.data.Bean
 * /
public class BeanRecord extends Model {

  /**
   * Used for generating store ids to implement a mapping store -> changed record list
   * /
  private static*/ var storeIdCounter$static/* :int*/ = 0;/*

  /**
   * The property where to store the id within a store.
   * /
  private static const*/var STORE_ID_PROP$static/* :String*/ = "$$id$$";/*

  private var bean:Bean;
  private var valueExpressionByFieldName:Object;
  internal var lazy:Boolean = false;
  private var beanRecordDirty:Boolean = false;

  /**
   * This constructor should not be used to create BeanRecord objects. Instead, use <b>#create</b> to
   * generate a subclass of <b>com.coremedia.ui.data.BeanRecord</b> configured with information about its constituent fields.
   *
   * @param data An object, the properties of which provide values for the new Record's
   * fields. If not specified the <code>ext.data.Field#defaultValue</code>
   * for each field will be assigned.
   * The bean to register with the BeanRecord is retrieved from the 'bean' property of the given data.
   * The BeanRecord is used by an <b>ext.data.Store</b> to store a bean and display it
   * in the view. Once the bean is registered, the BeanRecord is notified about
   * property changes of the bean and the store is updated accordingly.
   *
   * @see com.coremedia.ui.store.BeanRecord#create()
   * @see ext.data.field.DataField#defaultValue
   * @see ext.data.Store
   * /
  public*/ function BeanRecord$(data/*:Model*/) {
    this.super$1W0I(data);
    this.bean$1W0I = data && data['bean'];
  }/*

  private static*/ var changedRecords$static/* :Array*/;/* =*/function changedRecords$static_(){changedRecords$static=( []);};/*

  private*/ function beanChanged(valueExpression/*:ValueExpression*/)/*:void*/ {
    var changed/*:Boolean*/ = this.copyBeanPropertyToData$1W0I(valueExpression);
    if (changed && !this.beanRecordDirty$1W0I) {
      this.beanRecordDirty$1W0I = true;
      enqueueUpdate$static(this);
    }
  }/*

  private static*/ function enqueueUpdate$static(beanRecord/*:BeanRecord*/)/*:void*/ {
    if (changedRecords$static.length == 0) {
      com.coremedia.ui.util.EventUtil.invokeLater(fireUpdates$static);
    }
    changedRecords$static.push(beanRecord);
  }/*

  private static*/ function fireUpdates$static()/*:void*/ {
    var dirties/*:Array*/ = changedRecords$static;
    changedRecords$static = [];
    var recordsPerStore/* :Object*/ = {};
    dirties.forEach(function(beanRecord/* :BeanRecord*/)/*:void*/ {
      var store/*:Store*/ = beanRecord.store;
      // store can be null when bean has been removed from the list
      if (store) {
        var storeId/*:String*/ = store[STORE_ID_PROP$static];
        if (!storeId) {
          storeId = store[STORE_ID_PROP$static] = "store" + storeIdCounter$static++;
        }
        if (!recordsPerStore[storeId]) {
          recordsPerStore[storeId] = [];
        }
        recordsPerStore[storeId].push(beanRecord);
      }
    });
    for (var id/*:String*/ in recordsPerStore) {
      var records/*:Array*/ = recordsPerStore[id];
      var store/*:Store*/ = null;
      records.forEach(function(beanRecord/*:BeanRecord*/)/*:void*/ {
        store = beanRecord.store;
        beanRecord.beanRecordDirty$1W0I = false;
        var fieldNames/*:Array*/ = beanRecord.fields.map(function (field/*:DataField*/)/*:String*/ {
          return AS3.getBindable(field,"name","DUMMY");
        });
        store.fireEvent("update", store, beanRecord, Ext.data.Model.COMMIT, fieldNames);
      });
    }
  }/*

  override protected*/ function join(store/*:Store*/)/*:void*/ {
    Ext.data.Model.prototype.join.call(this,store);
    if (store) {
      if (!this.lazy) {
        this.startMonitoringBeanData();
      }
    } else {
      this.stopMonitoringBeanData$1W0I();
    }
  }/*

  override public*/ function unjoin(owner/*:Store*/)/*:void*/ {
    this.stopMonitoringBeanData$1W0I();
    Ext.data.Model.prototype.unjoin.call(this,owner);
  }/*

  // String values are expected to be HTML encoded
  //noinspection ReservedWordAsName
  override public*/ function set(fieldName/*:String*/, value/*:**/, options/*:Object = null*/)/*:Array*/ {if(arguments.length<=2)options=null;
    var valueExpression/*:ValueExpression*/ =AS3.as( this.valueExpressionByFieldName$1W0I[fieldName],  com.coremedia.ui.data.ValueExpression);
    if (!valueExpression ||AS3.is( valueExpression,  com.coremedia.ui.data.FunctionValueExpression)) {
      // Converter was specified for field. There is no reverse conversion so we don't do anything.
      return Ext.data.Model.prototype.set.call(this,fieldName, value);
    } else {
      var processedValue/*:**/ = value;
      var field/*:DataField*/ = this.getFieldsMap()[fieldName];
      // Decode the value unless encoding has been disabled explicitly.
      if (field.encode !== false) {
        processedValue = com.coremedia.ui.util.EncodingUtil.decodeFromHTML(processedValue);
      }
      valueExpression.setValue(processedValue);
      return Ext.data.Model.prototype.set.call(this,fieldName, value, {dirty : false});
    }
  }/*

  public*/ function getStore()/* :Store*/ {
    return this.store;
  }/*

  private*/ function copyBeanPropertyToData(valueExpression/*: ValueExpression*/)/*:Boolean*/ {
    // Find the field backed by the given value expression.
    for (var fieldName/*:String*/ in this.valueExpressionByFieldName$1W0I) {
      if (this.valueExpressionByFieldName$1W0I[fieldName] === valueExpression) {
        // although the fields are already instantiated to DataFields, we cast it to its config type dataField
        // in order to access the "applied" property "ifError" and "ifUnreadable":
        var field/*:DataField*/ = this.getFieldsMap()[fieldName];
        // Evaluate the expression and post-process the result according to the affected field.
        if (valueExpression.isReadable()) {
          try {
            var value/*:**/ = valueExpression.getValue();
          } catch (error/*:**/) {
            value = this.handleError$1W0I(error, field.ifError);
          }
        } else {
          value = this.handleUnreadable$1W0I(field.ifUnreadable, fieldName);
        }
        // Encode the value unless encoding has been disabled explicitly.
        if (field.encode !== false) {
          value = com.coremedia.ui.util.EncodingUtil.encodeForHTML(value);
        }

        // Store the new value, reporting any changes.
        var changed/*:Boolean*/ = this.data[fieldName] !== value;
        this.data[fieldName] = value;
        return changed;
      }
    }
    // The field was not found. That should not happen.
    com.coremedia.ui.logging.Logger.error("no field found for value expression: " + valueExpression);
    return false;
  }/*

  private*/ function handleUnreadable(ifUnreadable/*:**/, fieldName/*:String*/)/*:**/ {
    if (ifUnreadable === undefined) {
      throw new AS3.Error("field '" + fieldName + "' is unreadable, but ifUnreadable is not specified");
    } else if (AS3.is(ifUnreadable,  Function)) {
      return ifUnreadable(this);
    } else {
      return ifUnreadable;
    }
  }/*

  private*/ function handleError(error/*: Error*/, ifError/*:**/)/*:**/ {
    if (ifError === undefined) {
      throw error;
    } else if (AS3.is(ifError,  Function)) {
      return ifError(error, this);
    } else {
      return ifError;
    }
  }/*

  public*/ function startMonitoringBeanData()/*:void*/ {
    if (!this.valueExpressionByFieldName$1W0I) {
      this.valueExpressionByFieldName$1W0I = {};
      this.getFields().forEach(AS3.bind(this,"setUpValueExpression$1W0I"));
      if (this.lazy) {
        com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(this,"initAllFields$1W0I"));
      } else {
        this.initAllFields$1W0I();
      }
    }
  }/*

  private*/ function initAllFields()/*:void*/ {
    for (var fieldName/*:String*/ in this.valueExpressionByFieldName$1W0I) {
      var valueExpression/*:ValueExpression*/ = this.valueExpressionByFieldName$1W0I[fieldName];
      if (this.lazy) {
        // if lazy and thus invoked "later", do send events on initial filling of Record:
        this.beanChanged$1W0I(valueExpression);
      } else {
        // only copy data and do not send events on initial filling of Record:
        this.copyBeanPropertyToData$1W0I(valueExpression);
      }
    }

    // CMS-12211: Lazy Initialization of BeanRecords May Corrupt byValue Map of Stores
    // Wipe store.byValue map if it is corrupted. It will be re-initialized on next access.
    if (this.store && this.store['byValue'] && this.store['byValue'].get(undefined) !== undefined) {
      this.store['byValue'].clear();
    }
  }/*

  /**
   * Create a value expression for the given data field, register it in the
   * central registry <code>valueExpressionByFieldName</code> and
   * attach a change listener to the expression.
   *
   * @param field the field.
   * /
  private*/ function setUpValueExpression(field/*:DataField*/)/*:void*/ {
    var fieldName/*:String*/ = AS3.getBindable(field,"name","DUMMY");
    if (fieldName) {
      // If there's a mapping defined for the fields, store it in "propertyPathMappings"
      // for later use in the "beanChanged" listener.
      var mapping/*:String*/ = field.mapping;
      var propertyPath/*:String*/ = mapping === undefined || mapping === null ? fieldName : mapping;

      var convert/*:Function*/ = field['convert'];
      var propertyPathExpression/*:ValueExpression*/ = com.coremedia.ui.data.ValueExpressionFactory.create(propertyPath, this.bean$1W0I);
      var expression/*:ValueExpression*/;
      if (!convert) {
        // No conversion requested, the property path expression can be used as is.
        expression = propertyPathExpression;
      } else {
        // Wrap the conversion in a function value expression, so that dependency tracking is enabled.
        expression = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(evaluateValueExpressionAndConvert$static, propertyPathExpression, convert, this.bean$1W0I, this.getStore(), this);
      }
      this.valueExpressionByFieldName$1W0I[fieldName] = expression;
      expression.addChangeListener(AS3.bind(this,"beanChanged$1W0I"));
    }
  }/*

  private static*/ function evaluateValueExpressionAndConvert$static(valueExpression/*:ValueExpression*/, convert/*:Function*/, bean/*:Bean*/, store/*:Store*/, beanRecord/*:BeanRecord*/)/*:**/ {
    if(!valueExpression.isReadable()) {
      throw new com.coremedia.ui.data.error.NotReadableError(bean);
    }
    var value/*:**/ = valueExpression.getValue();
    return value === undefined ? undefined : convert(value, bean, store.indexOf(beanRecord));
  }/*

  private*/ function stopMonitoringBeanData()/*:void*/ {
    for (var fieldName/*:String*/ in this.valueExpressionByFieldName$1W0I) {
      var valueExpression/*:ValueExpression*/ = this.valueExpressionByFieldName$1W0I[fieldName];
      valueExpression.removeChangeListener(AS3.bind(this,"beanChanged$1W0I"));
    }
    // Forget the expressions, so that new expressions are created (and listened to)
    // when this record is reused.
    this.valueExpressionByFieldName$1W0I = null;
  }/*

  /**
   * Get the Bean registered with this BeanRecord
   * @return the bean
  * /
  public*/ function getBean()/*:Bean*/ {
    return this.bean$1W0I;
  }/*

  // TODO fix and clean up documentation
  /**
   * Generate a constructor for a specific Record layout.
   * @param o An Array of field definition objects which specify field names, and optionally,
   * data types, and a mapping for an <b class='link'>Ext.data.Reader</b> to extract the field's value from a data object.
   * Each field definition object may contain the following properties: <ul>
   * <li><b>name</b> : String<div class="sub-desc">The name by which the field is referenced within the Record. This is referenced by,
   * for example, the <em>dataIndex</em> property in column definition objects passed to <code>ext.grid.ColumnModel</code></div></li>
   * <li><b>mapping</b> : String<div class="sub-desc">(Optional) A path specification for use by the <code>ext.data.DataReader</code> implementation
   * that is creating the Record to access the data value from the data object. If an <code>ext.data.JsonReader</code>
   * is being used, then this is a string containing the javascript expression to reference the data relative to
   * the Record item's root. If an <b class='link'>Ext.data.XmlReader</b> is being used, this is an <b class='link'>Ext.DomQuery</b> path
   * to the data item relative to the Record element. If the mapping expression is the same as the field name,
   * this may be omitted.</div></li>
   * <li><b>type</b> : String<div class="sub-desc">(Optional) The data type for conversion to displayable value. Possible values are
   * <ul><li>auto (Default, implies no conversion)</li>
   * <li>string</li>
   * <li>int</li>
   * <li>float</li>
   * <li>boolean</li>
   * <li>date</li></ul></div></li>
   * <li><b>sortType</b> : Function<div class="sub-desc">(Optional) A function which converts a Field's value to a comparable value
   * in order to ensure correct sort ordering. Predefined functions are provided in <b class='link'>Ext.data.SortTypes</b>.</div></li>
   * <li><b>sortDir</b> : String<div class="sub-desc">(Optional) Initial direction to sort. "ASC" or "DESC"</div></li>
   * <li><b>convert</b> : Function<div class="sub-desc">(Optional) A function which converts the value provided
   * by the Reader into an object that will be stored in the Record. It is passed the
   * following parameters:<ul>
   * <li><b>v</b> : Mixed<div class="sub-desc">The value reachable from the record's bean by means of the mapping path.</div></li>
   * <li><b>bean</b> : Bean<div class="sub-desc">The bean.</div></li>
   * </ul></div></li>
   * <li><b>dateFormat</b> : String<div class="sub-desc">(Optional) A format string for the <b class='link'>Date#parse Date.parse</b> function,
   * or "timestamp" if the value provided by the Reader is a UNIX timestamp, or "time" if the value provided by the Reader is a
   * javascript millisecond timestamp.</div></li>
   * <li><b>defaultValue</b> : Mixed<div class="sub-desc">(Optional) The default value used <b>when a Record is being created by a
   * <b class='link'>Ext.data.Reader Reader}</b> when the item referenced by the <b><tt>mapping</tt></b> does not exist in the data object
   * (i.e. undefined). (defaults to "")</div></li>
   * </ul>
   * The constructor generated by this method may be used to create new Record instances. The data object must contain properties
   * named after the field <b>names</b>.
   * <br>usage:<br><pre><code>
var TopicRecord = Ext.data.Record.create([
   {name: 'title', mapping: 'topic_title'},
   {name: 'author', mapping: 'username'},
   {name: 'totalPosts', mapping: 'topic_replies', type: 'int'},
   {name: 'lastPost', mapping: 'post_time', type: 'date'},
   {name: 'lastPoster', mapping: 'user2'},
   {name: 'excerpt', mapping: 'post_text'}
]);

var myNewRecord = new TopicRecord({
   title: 'Do my job please',
   author: 'noobie',
   totalPosts: 1,
   lastPost: new Date(),
   lastPoster: 'Animal',
   excerpt: 'No way dude!'
});
myStore.add(myNewRecord);
   </code></pre>
   * <p>In the simplest case, if no properties other than <tt>name</tt> are required, a field definition
   * may consist of just a field name string.</p>
   * @param lazy
   * @return A constructor which is used to create new Records according
   * to the definition.
   * /
  public static*/ function create$static(o/*:Array*/, lazy/*:Boolean*/)/*:Class*/ {
    var clazz/*:Class*/ = AS3.cast(Class,Ext.define(null, {
      extend: Ext.getClassName(BeanRecord),
      fields: o,
      lazy: lazy
    }));

    // Not entirely sure about this. Without it, fields will be initialized before
    // join() method is called and thus before bean and record are linked. Leads to errors.
    clazz['initializeFn'] = Ext.emptyFn;

    return clazz;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.data.Model",
      bean$1W0I: null,
      valueExpressionByFieldName$1W0I: null,
      lazy: false,
      beanRecordDirty$1W0I: false,
      constructor: BeanRecord$,
      super$1W0I: function() {
        Ext.data.Model.prototype.constructor.apply(this, arguments);
      },
      beanChanged$1W0I: beanChanged,
      join: join,
      unjoin: unjoin,
      set: set,
      getStore: getStore,
      copyBeanPropertyToData$1W0I: copyBeanPropertyToData,
      handleUnreadable$1W0I: handleUnreadable,
      handleError$1W0I: handleError,
      startMonitoringBeanData: startMonitoringBeanData,
      initAllFields$1W0I: initAllFields,
      setUpValueExpression$1W0I: setUpValueExpression,
      stopMonitoringBeanData$1W0I: stopMonitoringBeanData,
      getBean: getBean,
      statics: {
        changedRecords: undefined,
        create: create$static,
        __initStatics__: function() {
          changedRecords$static_();
        }
      },
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.data.Model",
        "com.coremedia.ui.data.FunctionValueExpression",
        "com.coremedia.ui.data.ValueExpression",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.error.NotReadableError",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.EncodingUtil",
        "com.coremedia.ui.util.EventUtil"
      ]
    };
});
