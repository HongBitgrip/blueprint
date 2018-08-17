Ext.define("com.coremedia.cms.editor.sdk.premular.DocumentPath", function(DocumentPath) {/*package com.coremedia.cms.editor.sdk.premular{
import ext.form.field.DisplayField;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction;
import com.coremedia.ui.plugins.BindPropertyPlugin;
/** Link button that shows the path of the given document. Clicking on the linkopens the library. * /
public class DocumentPath extends DisplayField{

    import com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.DisplayFieldSkin;
    import com.coremedia.ui.util.EncodingUtil;

    import ext.dom.Element;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.documentPath";

    public*/function DocumentPath$(config/*:DocumentPath = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    var defaults_$1/*:DocumentPath*/ =AS3.cast(DocumentPath,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.UNDERLINE.getSkin());
    var editor_ShowInRepositoryAction_42_5_$1/*:com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction,{});
    AS3.setBindable(editor_ShowInRepositoryAction_42_5_$1,"contentValueExpression" , AS3.getBindable(config,"bindTo"));
    AS3.setBindable(editor_ShowInRepositoryAction_42_5_$1,"treeModelId" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants.TREE_MODEL_ID));
    config_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction(editor_ShowInRepositoryAction_42_5_$1);
    var ui_BindPropertyPlugin_46_5_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_46_5_$1.componentProperty = "value";
    ui_BindPropertyPlugin_46_5_$1.bindTo = AS3.getBindable(config,"bindTo").extendBy('path');
    ui_BindPropertyPlugin_46_5_$1.transformer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    config_$1.plugins = [ui_BindPropertyPlugin_46_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$upC2(config_$1);
  }/*

    /**
     * The document object this button binds to.
     * /
    [Bindable]
    public var bindTo:ValueExpression;

    override protected*/ function afterRender()/*:void*/ {var this$=this;
      Ext.form.field.Display.prototype.afterRender.call(this);

      var el/*:Element*/ = this.getEl();
      el.setStyle("cursor", "pointer");
      el.on("click", function ()/*:void*/ {
        this$.baseAction.execute();
      });
    }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.form.field.Display",
      alias: "widget.com.coremedia.cms.editor.sdk.config.documentPath",
      constructor: DocumentPath$,
      super$upC2: function() {
        Ext.form.field.Display.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      config: {bindTo: null},
      requires: [
        "Ext.form.field.Display",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants"
      ]
    };
});
