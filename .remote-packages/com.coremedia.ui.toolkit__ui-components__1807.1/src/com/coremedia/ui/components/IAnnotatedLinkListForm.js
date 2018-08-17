Ext.define("com.coremedia.ui.components.IAnnotatedLinkListForm", function(IAnnotatedLinkListForm) {/*package com.coremedia.ui.components {
import com.coremedia.ui.data.ValueExpression;

/**
 * Specifies that the form can be used inside an {@link AnnotatedLinkListWidget} to operate on a given
 * {@link #settingsVE}. The {@link ValueExpression} can then be used using {@link ValueExpression#extendBy} to define
 * new annotations.
 *
 * While you can rely on the fact that the {@link ValueExpression} representing by the {@link #settingsVE} will always
 * be provided with the initial configuration of the form and will not be changed to a different {@link ValueExpression}
 * no assumptions about the actual bean the settings are stored in should be made. The form also needs to handle that
 * its overlying widget may be detached and reused for a different item (e.g. when reordering the overlying link list)
 * as this changes the bean the settings are stored in. This also means that the bean the settings are stored in might
 * be undefined.
 * /
[PublicApi]
public interface IAnnotatedLinkListForm {

  /**
   * @param settingsVE a {@link ValueExpression} pointing to the bean where annotations are stored. While being
   *                   initialized or if the overlying widget is detached the bean might also be undefined.
   * /
  [Bindable]
  function set settingsVE(settingsVE:ValueExpression):void;

  /**
   * @private
   * /
  [Bindable]
  function get settingsVE():ValueExpression;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
