Ext.define("com.coremedia.ui.util.DatePickerCustomizer", function(DatePickerCustomizer) {/*package com.coremedia.ui.util {

import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.models.bem.BEMDecorator;
import com.coremedia.ui.models.bem.BEMDecoratorBuilder;

import ext.Ext;
import ext.dom.Element;
import ext.event.Event;
import ext.picker.DatePicker;

import js.HTMLElement;

/**
 * A helper class to customize a date picker.
 * /
public class DatePickerCustomizer {

  private static const*/var DATEPICKER_FUNCTION_NAME_UPDATE$static/*:String*/ = "update";/*
  private static const*/var DATEPICKER_FUNCTION_NAME_HANDLE_DATE_CLICK$static/*:String*/ = "handleDateClick";/*
  private static const*/var DATEPICKER_FUNCTION_NAME_SELECT_TODAY$static/*:String*/ = "selectToday";/*

  public static const BLOCK_CALENDAR_CONTROL:String = "calendar-control";
  public static const BLOCK_CALENDAR_CONTROL_ELEMENT_MONTH_PICKER:String = "month-picker";

  public static const BLOCK_CALENDAR:String = "calendar";
  public static const BLOCK_CALENDER_DAY:String = "calendar-day";
  public static const BLOCK_CALENDAR_DAY_NAME:String = "calendar-day-name";

  private var datePicker:DatePicker;
  private var modifiersForDate:Function;
  private var selectedDateVE:ValueExpression;

  private var modifiers:Array =*/function modifiers_(){this.modifiers$oJ7p=( []);}/*;
  private var dependencyTracker:DependencyTracker;

  private var isManualSelection:Boolean;
  private var isAlreadyHandled:Boolean;
  private var originalUpdateFunction:Function;
  private var originalHandleDateClick:Function;
  private var originalSelectToday:Function;

  public*/ function DatePickerCustomizer$(datePicker/*:DatePicker*/, modifiersForDate/*:Function*/, selectedDateVE/*:ValueExpression = null*/) {modifiers_.call(this);if(arguments.length<=2)selectedDateVE=null;
    this.datePicker$oJ7p = datePicker;
    this.modifiersForDate$oJ7p = modifiersForDate;
    this.selectedDateVE$oJ7p = selectedDateVE;
  }/*

  /**
   * Change the date picker to apply customized styles.
   *
   * Destroy method needs to be triggered if component is destroyed or customization shall be removed.
   * /
  public*/ function init()/*:void*/ {
    this.getSelectedDateVE$oJ7p().addChangeListener(AS3.bind(this,"triggerUpdate$oJ7p"));
    this.datePicker$oJ7p.addListener("beforedestroy",AS3.bind( this,"destroy$oJ7p"));
    if (this.datePicker$oJ7p.rendered) {
      this.attachAdditionalClickListener();
    } else {
      this.datePicker$oJ7p.addListener("afterrender",AS3.bind( this,"attachAdditionalClickListener"));
    }
    if (!this.originalUpdateFunction$oJ7p) {
      this.originalUpdateFunction$oJ7p = this.datePicker$oJ7p[DATEPICKER_FUNCTION_NAME_UPDATE$static];
      this.datePicker$oJ7p[DATEPICKER_FUNCTION_NAME_UPDATE$static] =AS3.bind( this,"update$oJ7p");
    }
    if (!this.originalHandleDateClick$oJ7p) {
      this.originalHandleDateClick$oJ7p = this.datePicker$oJ7p[DATEPICKER_FUNCTION_NAME_HANDLE_DATE_CLICK$static];
      this.datePicker$oJ7p[DATEPICKER_FUNCTION_NAME_HANDLE_DATE_CLICK$static] =AS3.bind( this,"handleDateClick$oJ7p");
    }
    if (!this.originalSelectToday$oJ7p) {
      this.originalSelectToday$oJ7p = this.datePicker$oJ7p[DATEPICKER_FUNCTION_NAME_SELECT_TODAY$static];
      this.datePicker$oJ7p[DATEPICKER_FUNCTION_NAME_SELECT_TODAY$static] =AS3.bind( this,"selectToday$oJ7p");
    }
    this.applyCustomStyles$oJ7p();
  }/*

  private*/ function destroy()/*:void*/ {
    this.removeCustomStyles$oJ7p();
    // restore overridden private functions
    if (this.originalUpdateFunction$oJ7p) {
      this.datePicker$oJ7p[DATEPICKER_FUNCTION_NAME_UPDATE$static] = this.originalUpdateFunction$oJ7p;
      this.originalUpdateFunction$oJ7p = null;
    }
    if (this.originalHandleDateClick$oJ7p) {
      this.datePicker$oJ7p[DATEPICKER_FUNCTION_NAME_HANDLE_DATE_CLICK$static] = this.originalHandleDateClick$oJ7p;
      this.originalHandleDateClick$oJ7p = null;
    }
    if (this.originalSelectToday$oJ7p) {
      this.datePicker$oJ7p[DATEPICKER_FUNCTION_NAME_SELECT_TODAY$static] = this.originalSelectToday$oJ7p;
      this.originalSelectToday$oJ7p = null;
    }
    this.datePicker$oJ7p.removeListener("beforedestroy",AS3.bind( this,"destroy$oJ7p"));
    this.getSelectedDateVE$oJ7p().removeChangeListener(AS3.bind(this,"triggerUpdate$oJ7p"));
    this.dependencyTracker$oJ7p && this.dependencyTracker$oJ7p.discard();
  }/*

  private*/ function update(date/*:Date*/, forceRefresh/*:Boolean*/)/*:void*/ {
    if (this.isManualSelection$oJ7p) {
      if (this.getSelectedDateVE$oJ7p().getValue() && this.getSelectedDateVE$oJ7p().getValue().getTime() === date.getTime()) {
        this.getSelectedDateVE$oJ7p().setValue(undefined);
        return;
      } else {
        this.getSelectedDateVE$oJ7p().setValue(date);
      }
    }
    this.removeCustomStyles$oJ7p();
    this.originalUpdateFunction$oJ7p.apply(this.datePicker$oJ7p, [date, forceRefresh]);
    this.applyCustomStyles$oJ7p();
  }/*

  private*/ function handleDateClick()/*:void*/ {arguments=Array.prototype.slice.call(arguments);
    // If the x-datepicker-date (date number) gets clicked do handle.
    if (!this.isAlreadyHandled$oJ7p) {
      this.isManualSelection$oJ7p = true;
      this.originalHandleDateClick$oJ7p.apply(this.datePicker$oJ7p, arguments);
      this.isManualSelection$oJ7p = false;
    }

    this.isAlreadyHandled$oJ7p = false;
  }/*

  private*/ function selectToday()/*:void*/ {arguments=Array.prototype.slice.call(arguments);
    this.isManualSelection$oJ7p = true;
    this.originalSelectToday$oJ7p.apply(this.datePicker$oJ7p, arguments);
    this.isManualSelection$oJ7p = false;
  }/*

  private*/ function removeCustomStyles()/*:void*/ {
    var datePickerEl/*:Element*/ = this.datePicker$oJ7p.getEl();

    if (datePickerEl) {
      com.coremedia.ui.util.BEMUtils.undecorateBEM(getCalendarControlBlock$static(), datePickerEl);
      //noinspection JSUnresolvedVariable
      datePickerEl.select("." + DatePickerCustomizer.BLOCK_CALENDAR + "__days").elements.forEach(function (dom/*:HTMLElement*/)/*:void*/ {
        com.coremedia.ui.util.BEMUtils.undecorateBEM(getCalendarDayBlock$static(), Ext.get(dom));
      });
      //noinspection JSUnresolvedVariable
      datePickerEl.select("." + DatePickerCustomizer.BLOCK_CALENDAR + "__header").elements.forEach(function (dom/*:HTMLElement*/)/*:void*/ {
        com.coremedia.ui.util.BEMUtils.undecorateBEM(getCalendarDayNameBlock$static(), Ext.get(dom));
      });
      com.coremedia.ui.util.BEMUtils.undecorateBEM(getCalendarBlock$static(), datePickerEl);
    }
  }/*

  private*/ function applyCustomStyles()/*:void*/ {var this$=this;
    var datePickerEl/*:Element*/ = this.datePicker$oJ7p.getEl();
    if (datePickerEl) {
      // remove selection if selectedDateVE value does not exist
      var selectedDate/*:Date*/ =AS3.as( this.getSelectedDateVE$oJ7p().getValue(),  Date);
      if (!selectedDate) {
        datePickerEl.select(".x-datepicker-selected").removeCls("x-datepicker-selected");
      }

      com.coremedia.ui.util.BEMUtils.decorateBEM(getCalendarControlBlock$static(), datePickerEl);

      com.coremedia.ui.util.BEMUtils.decorateBEM(getCalendarBlock$static(), datePickerEl);
      //noinspection JSUnresolvedVariable
      datePickerEl.select("." + DatePickerCustomizer.BLOCK_CALENDAR + "__header").elements.forEach(function (dom/*:HTMLElement*/)/*:void*/ {
        com.coremedia.ui.util.BEMUtils.decorateBEM(getCalendarDayNameBlock$static(), Ext.get(dom));
      });
      //noinspection JSUnresolvedVariable
      datePickerEl.select("." + DatePickerCustomizer.BLOCK_CALENDAR + "__days").elements.forEach(function (dom/*:HTMLElement*/)/*:void*/ {
        var calendarDayBlock/*:BEMDecorator*/ = getCalendarDayBlock$static();
        var daysElement/*:Element*/ = Ext.get(dom);

        this$.fixSynchronizedState$oJ7p(calendarDayBlock, daysElement);
        com.coremedia.ui.util.BEMUtils.decorateBEM(calendarDayBlock, daysElement);
      });

      this.dependencyTracker$oJ7p && this.dependencyTracker$oJ7p.discard();
      this.dependencyTracker$oJ7p = new com.coremedia.ui.data.dependencies.DependencyTracker(AS3.bind(this,"triggerUpdate$oJ7p"));

      try {
        //noinspection JSUnresolvedVariable
        datePickerEl.select("." + DatePickerCustomizer.BLOCK_CALENDER_DAY).elements.forEach(function (dom/*:HTMLElement*/)/*:void*/ {
          var dateModifiers/*:Array*/ = this$.modifiersForDate$oJ7p(new Date(dom.firstChild["dateValue"]));
          var element/*:Element*/ = Ext.get(dom);
          this$.modifiers$oJ7p.forEach(function (modifier/*:String*/)/*:void*/ {
            element.removeCls(DatePickerCustomizer.BLOCK_CALENDER_DAY + "--" + modifier);
          });
          dateModifiers && dateModifiers.forEach(function (modifier/*:String*/)/*:void*/ {
            if (this$.modifiers$oJ7p.indexOf(modifier) === -1) {
              this$.modifiers$oJ7p.push(modifier);
            }
            element.addCls(DatePickerCustomizer.BLOCK_CALENDER_DAY + "--" + modifier);
          });
        });
      } finally {
        this.dependencyTracker$oJ7p.stop();
        // fix missing last row
        this.datePicker$oJ7p.updateLayout();
      }
    }
  }/*

  private*/ function fixSynchronizedState(bemDecorator/*:BEMDecorator*/, extElement/*:Element*/)/*:void*/ {
    var blockSelector/*:String*/ = bemDecorator.getBlock().getSelector();

    var targets/*:Array*/ = [extElement];
    if (blockSelector && blockSelector.length > 0) {
      targets = extElement.query(blockSelector, false);
    }
    targets.forEach(function (target/*:Element*/)/*:void*/ {
      var extData/*:Object*/ = target.dom && target.dom["_extData"];
      // force synchronization of cached _extData
      extData && (extData["isSynchronized"] = false);
    });
  }/*

  /**
   * Customize the date picker DOM.
   * /
  private*/ function triggerUpdate()/*:void*/ {
    // invokes our patched picker update method
    this.datePicker$oJ7p.setValue(this.datePicker$oJ7p.getValue());
  }/*

  private*/ function getSelectedDateVE()/*:ValueExpression*/ {
    if (!this.selectedDateVE$oJ7p) {
      this.selectedDateVE$oJ7p = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(this.datePicker$oJ7p.getValue());
    }
    return this.selectedDateVE$oJ7p;
  }/*

  private static*/ function getCalendarControlBlock$static()/*:BEMDecorator*/ {
    var builder/*:BEMDecoratorBuilder*/ = new com.coremedia.ui.models.bem.BEMDecoratorBuilder("", DatePickerCustomizer.BLOCK_CALENDAR_CONTROL);

    builder.addElement(".x-datepicker-header", DatePickerCustomizer.BLOCK_CALENDAR_CONTROL_ELEMENT_MONTH_PICKER);

    return builder.build();
  }/*

  private static*/ function getCalendarBlock$static()/*:BEMDecorator*/ {
    var builder/*:BEMDecoratorBuilder*/ = new com.coremedia.ui.models.bem.BEMDecoratorBuilder(".x-datepicker-inner", DatePickerCustomizer.BLOCK_CALENDAR);

    builder.addElement("thead:first-child", "header");
    builder.addElement("tbody:nth-child(2)", "days");

    return builder.build();
  }/*

  private static*/ function getCalendarDayNameBlock$static()/*:BEMDecorator*/ {
    var builder/*:BEMDecoratorBuilder*/ = new com.coremedia.ui.models.bem.BEMDecoratorBuilder("tr > th", DatePickerCustomizer.BLOCK_CALENDAR_DAY_NAME);
    builder.addElement("div", "text");
    return builder.build();
  }/*

  private static*/ function getCalendarDayBlock$static()/*:BEMDecorator*/ {
    var builder/*:BEMDecoratorBuilder*/ = new com.coremedia.ui.models.bem.BEMDecoratorBuilder("tr > td.x-datepicker-cell", DatePickerCustomizer.BLOCK_CALENDER_DAY);

    builder.addElement("div.x-datepicker-date", "number");

    builder.addDirectModifier(".x-datepicker-today", "today");
    builder.addDirectModifier(".x-datepicker-prevday", "prevday");
    builder.addDirectModifier(".x-datepicker-active", "active");
    builder.addDirectModifier(".x-datepicker-nextday", "nextday");
    builder.addDirectModifier(".x-datepicker-prevday:not(.x-datepicker-disabled)", "selectable");
    builder.addDirectModifier(".x-datepicker-active:not(.x-datepicker-disabled)", "selectable");
    builder.addDirectModifier(".x-datepicker-nextday:not(.x-datepicker-disabled)", "selectable");
    builder.addDirectModifier(".x-datepicker-selected", "selected");

    return builder.build();
  }/*

  /**
   * ClickListener also gets added to the x-datepicker-cell, that not only the x-datepicker-date (date number) is clickable.
   * /
  protected*/ function attachAdditionalClickListener()/*:void*/ {
    this.datePicker$oJ7p.mon(this.datePicker$oJ7p["eventEl"], {
      scope: this.datePicker$oJ7p,
      click: {
        fn:AS3.bind( this,"handleDateCellClick$oJ7p"),
        delegate: '.' + this.datePicker$oJ7p.baseCls + '-cell',
        // make sure this listener comes before other listeners without priority
        priority: 1
      }
    });
  }/*

  /**
   * When x-datepicker-cell gets clicked select the clicked date/cell.
   *
   * @param e the click event
   * @param t the target element
   * /
  private*/ function handleDateCellClick(e/*:Event*/, t/*:HTMLElement*/)/*:void*/ {
    this.isAlreadyHandled$oJ7p = true;

    if (!this.datePicker$oJ7p.disabled && t.childNodes && t.childNodes.length > 0) {
      var newValue/*:Number*/ = t.firstChild["dateValue"];
      if (newValue && !Ext.fly(t).hasCls(this.datePicker$oJ7p.disabledCellCls)) {
        this.isManualSelection$oJ7p = true;
        this.datePicker$oJ7p.setValue(new Date(newValue));
        this.isManualSelection$oJ7p = false;
      }
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      datePicker$oJ7p: null,
      modifiersForDate$oJ7p: null,
      selectedDateVE$oJ7p: null,
      dependencyTracker$oJ7p: null,
      isManualSelection$oJ7p: false,
      isAlreadyHandled$oJ7p: false,
      originalUpdateFunction$oJ7p: null,
      originalHandleDateClick$oJ7p: null,
      originalSelectToday$oJ7p: null,
      constructor: DatePickerCustomizer$,
      init: init,
      destroy$oJ7p: destroy,
      update$oJ7p: update,
      handleDateClick$oJ7p: handleDateClick,
      selectToday$oJ7p: selectToday,
      removeCustomStyles$oJ7p: removeCustomStyles,
      applyCustomStyles$oJ7p: applyCustomStyles,
      fixSynchronizedState$oJ7p: fixSynchronizedState,
      triggerUpdate$oJ7p: triggerUpdate,
      getSelectedDateVE$oJ7p: getSelectedDateVE,
      attachAdditionalClickListener: attachAdditionalClickListener,
      handleDateCellClick$oJ7p: handleDateCellClick,
      statics: {
        BLOCK_CALENDAR_CONTROL: "calendar-control",
        BLOCK_CALENDAR_CONTROL_ELEMENT_MONTH_PICKER: "month-picker",
        BLOCK_CALENDAR: "calendar",
        BLOCK_CALENDER_DAY: "calendar-day",
        BLOCK_CALENDAR_DAY_NAME: "calendar-day-name"
      },
      requires: [
        "Ext",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker"
      ],
      uses: [
        "com.coremedia.ui.models.bem.BEMDecoratorBuilder",
        "com.coremedia.ui.util.BEMUtils"
      ]
    };
});
