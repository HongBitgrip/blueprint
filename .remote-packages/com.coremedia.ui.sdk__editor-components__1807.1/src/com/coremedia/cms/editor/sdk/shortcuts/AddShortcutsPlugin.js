Ext.define("com.coremedia.cms.editor.sdk.shortcuts.AddShortcutsPlugin", function(AddShortcutsPlugin) {/*package com.coremedia.cms.editor.sdk.shortcuts{
import com.coremedia.cms.editor.configuration.StudioPlugin;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut;
import com.coremedia.cms.editor.sdk.util.OpenHomepageAction;
import com.coremedia.cms.editor.sdk.desktop.SelectTabAction;
import com.coremedia.cms.editor.sdk.desktop.CloseTabsAction;
import com.coremedia.cms.editor.sdk.util.RegionShortcutAction;
[ResourceBundle('com.coremedia.cms.editor.sdk.shortcuts.Shortcut')]
public class AddShortcutsPlugin extends StudioPlugin{

    import com.coremedia.cms.editor.sdk.actions.ApproveAction;
    import com.coremedia.cms.editor.sdk.actions.CheckInAction;
    import com.coremedia.cms.editor.sdk.actions.DeleteAction;
    import com.coremedia.cms.editor.sdk.actions.MoveAction;
    import com.coremedia.cms.editor.sdk.actions.PublishAction;
    import com.coremedia.cms.editor.sdk.actions.RevertAction;
    import com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction;
    import com.coremedia.cms.editor.sdk.actions.ToggleFloatingWindowAction;
    import com.coremedia.cms.editor.sdk.actions.WithdrawAction;
    import com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction;
    import com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction;
    import com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction;
    import com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction;
    import com.coremedia.cms.editor.sdk.collectionview.ToggleCollectionViewAction;
    import com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardAction;
    import com.coremedia.cms.editor.sdk.util.ContentExportAction;

    public*/function AddShortcutsPlugin$(config/*:AddShortcutsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:com.coremedia.cms.editor.configuration.StudioPlugin*/ =AS3.cast(com.coremedia.cms.editor.configuration.StudioPlugin,{});
    var defaults_$1/*:AddShortcutsPlugin*/ =AS3.cast(AddShortcutsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_AddKeyboardShortcut_33_5_$1/*:com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_33_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_toggleDashboard_key'));
    editor_AddKeyboardShortcut_33_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_toggleDashboard_description'));
    editor_AddKeyboardShortcut_33_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardAction.ACTION_ID);
    editor_AddKeyboardShortcut_33_5_$1.defaultEventAction = "stopEvent";
    var editor_AddKeyboardShortcut_38_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_38_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_toggleLibrary_key'));
    editor_AddKeyboardShortcut_38_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_toggleLibrary_description'));
    editor_AddKeyboardShortcut_38_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.ToggleCollectionViewAction.ACTION_ID);
    editor_AddKeyboardShortcut_38_5_$1.defaultEventAction = "stopEvent";
    var editor_AddKeyboardShortcut_43_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_43_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_openHomepage_key'));
    editor_AddKeyboardShortcut_43_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_openHomepage_description'));
    editor_AddKeyboardShortcut_43_5_$1.defaultEventAction = "stopEvent";
    var editor_OpenHomepageAction_47_9_$1/*:com.coremedia.cms.editor.sdk.util.OpenHomepageAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.util.OpenHomepageAction,{});
    editor_AddKeyboardShortcut_43_5_$1.action = new com.coremedia.cms.editor.sdk.util.OpenHomepageAction(editor_OpenHomepageAction_47_9_$1);
    var editor_AddKeyboardShortcut_55_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_55_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_closeWindow_key'));
    editor_AddKeyboardShortcut_55_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_closeWindow_description'));
    editor_AddKeyboardShortcut_55_5_$1.actionId = "for-documentation-only";
    var editor_AddKeyboardShortcut_59_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_59_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_selectNext_key'));
    editor_AddKeyboardShortcut_59_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_selectNext_description'));
    editor_AddKeyboardShortcut_59_5_$1.actionId = "for-documentation-only";
    var editor_AddKeyboardShortcut_63_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_63_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_selectPrevious_key'));
    editor_AddKeyboardShortcut_63_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_selectPrevious_description'));
    editor_AddKeyboardShortcut_63_5_$1.actionId = "for-documentation-only";
    var editor_AddKeyboardShortcut_69_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_69_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_moveUp_key'));
    editor_AddKeyboardShortcut_69_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_moveUp_description'));
    editor_AddKeyboardShortcut_69_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveAction.UP);
    editor_AddKeyboardShortcut_69_5_$1.defaultEventAction = "stopEvent";
    var editor_AddKeyboardShortcut_74_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_74_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_moveDown_key'));
    editor_AddKeyboardShortcut_74_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_moveDown_description'));
    editor_AddKeyboardShortcut_74_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveAction.DOWN);
    editor_AddKeyboardShortcut_74_5_$1.defaultEventAction = "stopEvent";
    var editor_AddKeyboardShortcut_79_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_79_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_moveLeft_key'));
    editor_AddKeyboardShortcut_79_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_moveLeft_description'));
    editor_AddKeyboardShortcut_79_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveAction.LEFT);
    editor_AddKeyboardShortcut_79_5_$1.defaultEventAction = "stopEvent";
    var editor_AddKeyboardShortcut_84_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_84_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_moveRight_key'));
    editor_AddKeyboardShortcut_84_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_moveRight_description'));
    editor_AddKeyboardShortcut_84_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveAction.RIGHT);
    editor_AddKeyboardShortcut_84_5_$1.defaultEventAction = "stopEvent";
    var editor_AddKeyboardShortcut_89_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_89_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_toggle_key'));
    editor_AddKeyboardShortcut_89_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_toggle_description'));
    editor_AddKeyboardShortcut_89_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.ToggleFloatingWindowAction.ACTION_ID);
    editor_AddKeyboardShortcut_89_5_$1.defaultEventAction = "stopEvent";
    var editor_AddKeyboardShortcut_94_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_94_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_cut_key'));
    editor_AddKeyboardShortcut_94_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_cut_description'));
    editor_AddKeyboardShortcut_94_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction.ACTION_ID);
    var editor_AddKeyboardShortcut_98_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_98_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_copy_key'));
    editor_AddKeyboardShortcut_98_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_copy_description'));
    editor_AddKeyboardShortcut_98_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction.ACTION_ID);
    var editor_AddKeyboardShortcut_102_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_102_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_paste_key'));
    editor_AddKeyboardShortcut_102_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_paste_description'));
    editor_AddKeyboardShortcut_102_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction.ACTION_ID);
    var editor_AddKeyboardShortcut_106_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_106_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_remove_key'));
    editor_AddKeyboardShortcut_106_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_remove_description'));
    editor_AddKeyboardShortcut_106_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.DeleteAction.ACTION_ID);
    var editor_AddKeyboardShortcut_110_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_110_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_export_key'));
    editor_AddKeyboardShortcut_110_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.util.ContentExportAction.ACTION_ID);
    editor_AddKeyboardShortcut_110_5_$1.defaultEventAction = "stopEvent";
    var editor_AddKeyboardShortcut_114_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_114_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_bookmark_key'));
    editor_AddKeyboardShortcut_114_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_bookmark_description'));
    editor_AddKeyboardShortcut_114_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction.ACTION_ID);
    editor_AddKeyboardShortcut_114_5_$1.defaultEventAction = "stopEvent";
    var editor_AddKeyboardShortcut_119_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_119_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_show_key'));
    editor_AddKeyboardShortcut_119_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_show_description'));
    editor_AddKeyboardShortcut_119_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction.ACTION_ID);
    editor_AddKeyboardShortcut_119_5_$1.defaultEventAction = "stopEvent";
    var editor_AddKeyboardShortcut_124_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_124_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_checkin_key'));
    editor_AddKeyboardShortcut_124_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_checkin_description'));
    editor_AddKeyboardShortcut_124_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.CheckInAction.ACTION_ID);
    editor_AddKeyboardShortcut_124_5_$1.defaultEventAction = "stopEvent";
    var editor_AddKeyboardShortcut_129_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_129_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_approve_key'));
    editor_AddKeyboardShortcut_129_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_approve_description'));
    editor_AddKeyboardShortcut_129_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.ApproveAction.ACTION_ID);
    editor_AddKeyboardShortcut_129_5_$1.defaultEventAction = "stopEvent";
    var editor_AddKeyboardShortcut_134_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_134_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_publish_key'));
    editor_AddKeyboardShortcut_134_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_publish_description'));
    editor_AddKeyboardShortcut_134_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.PublishAction.ACTION_ID);
    editor_AddKeyboardShortcut_134_5_$1.defaultEventAction = "stopEvent";
    var editor_AddKeyboardShortcut_139_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_139_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_withdraw_key'));
    editor_AddKeyboardShortcut_139_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_withdraw_description'));
    editor_AddKeyboardShortcut_139_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.WithdrawAction.ACTION_ID);
    editor_AddKeyboardShortcut_139_5_$1.defaultEventAction = "stopEvent";
    var editor_AddKeyboardShortcut_144_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_144_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_revert_key'));
    editor_AddKeyboardShortcut_144_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_revert_description'));
    editor_AddKeyboardShortcut_144_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.RevertAction.ACTION_ID);
    editor_AddKeyboardShortcut_144_5_$1.defaultEventAction = "stopEvent";
    var editor_AddKeyboardShortcut_149_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_149_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_increase_key'));
    editor_AddKeyboardShortcut_149_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_increase_description'));
    editor_AddKeyboardShortcut_149_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveAction.INCREASE);
    editor_AddKeyboardShortcut_149_5_$1.defaultEventAction = "stopEvent";
    var editor_AddKeyboardShortcut_154_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_154_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_decrease_key'));
    editor_AddKeyboardShortcut_154_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_decrease_description'));
    editor_AddKeyboardShortcut_154_5_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.MoveAction.DECREASE);
    editor_AddKeyboardShortcut_154_5_$1.defaultEventAction = "stopEvent";
    var editor_AddKeyboardShortcut_160_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_160_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_select_next_tab_key'));
    editor_AddKeyboardShortcut_160_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_select_next_tab_description'));
    editor_AddKeyboardShortcut_160_5_$1.defaultEventAction = "stopEvent";
    var editor_SelectTabAction_164_9_$1/*:com.coremedia.cms.editor.sdk.desktop.SelectTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.SelectTabAction,{});
    AS3.setBindable(editor_SelectTabAction_164_9_$1,"direction" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.SelectTabAction.DIRECTION_NEXT));
    editor_AddKeyboardShortcut_160_5_$1.action = new com.coremedia.cms.editor.sdk.desktop.SelectTabAction(editor_SelectTabAction_164_9_$1);
    var editor_AddKeyboardShortcut_168_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_168_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_select_previous_tab_key'));
    editor_AddKeyboardShortcut_168_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_select_previous_tab_description'));
    editor_AddKeyboardShortcut_168_5_$1.defaultEventAction = "stopEvent";
    var editor_SelectTabAction_172_9_$1/*: com.coremedia.cms.editor.sdk.desktop.SelectTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.SelectTabAction,{});
    AS3.setBindable(editor_SelectTabAction_172_9_$1,"direction" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.SelectTabAction.DIRECTION_PREVIOUS));
    editor_AddKeyboardShortcut_168_5_$1.action = new com.coremedia.cms.editor.sdk.desktop.SelectTabAction(editor_SelectTabAction_172_9_$1);
    var editor_AddKeyboardShortcut_176_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_176_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_close_current_tab_key'));
    editor_AddKeyboardShortcut_176_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_close_current_tab_description'));
    editor_AddKeyboardShortcut_176_5_$1.defaultEventAction = "stopEvent";
    var editor_CloseTabsAction_180_9_$1/*:com.coremedia.cms.editor.sdk.desktop.CloseTabsAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.CloseTabsAction,{});
    AS3.setBindable(editor_CloseTabsAction_180_9_$1,"mode" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.CloseTabsAction.CLOSE_TAB_MODE));
    AS3.setBindable(editor_CloseTabsAction_180_9_$1,"asShortcut" , true);
    editor_AddKeyboardShortcut_176_5_$1.action = new com.coremedia.cms.editor.sdk.desktop.CloseTabsAction(editor_CloseTabsAction_180_9_$1);
    var editor_AddKeyboardShortcut_184_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_184_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_close_all_tabs_key'));
    editor_AddKeyboardShortcut_184_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_close_all_tabs_description'));
    editor_AddKeyboardShortcut_184_5_$1.defaultEventAction = "stopEvent";
    var editor_CloseTabsAction_188_9_$1/*: com.coremedia.cms.editor.sdk.desktop.CloseTabsAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.CloseTabsAction,{});
    AS3.setBindable(editor_CloseTabsAction_188_9_$1,"mode" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.CloseTabsAction.CLOSE_ALL_TABS_MODE));
    AS3.setBindable(editor_CloseTabsAction_188_9_$1,"asShortcut" , true);
    editor_AddKeyboardShortcut_184_5_$1.action = new com.coremedia.cms.editor.sdk.desktop.CloseTabsAction(editor_CloseTabsAction_188_9_$1);
    var editor_AddKeyboardShortcut_193_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_193_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_nextRegion_key'));
    editor_AddKeyboardShortcut_193_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_nextRegion_description'));
    editor_AddKeyboardShortcut_193_5_$1.defaultEventAction = "stopEvent";
    var editor_RegionShortcutAction_197_9_$1/*:com.coremedia.cms.editor.sdk.util.RegionShortcutAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.util.RegionShortcutAction,{});
    AS3.setBindable(editor_RegionShortcutAction_197_9_$1,"direction" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.util.RegionShortcutAction.DIRECTION_FORWARDS));
    editor_AddKeyboardShortcut_193_5_$1.action = new com.coremedia.cms.editor.sdk.util.RegionShortcutAction(editor_RegionShortcutAction_197_9_$1);
    var editor_AddKeyboardShortcut_201_5_$1/*: com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut*/ =AS3.cast(com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut,{});
    editor_AddKeyboardShortcut_201_5_$1.shortcut =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_previousRegion_key'));
    editor_AddKeyboardShortcut_201_5_$1.description =net.jangaroo.ext.Exml.asString( com.coremedia.ui.PluginRulesBase.resourceManager.getString('com.coremedia.cms.editor.sdk.shortcuts.Shortcut', 'Shortcut_previousRegion_description'));
    editor_AddKeyboardShortcut_201_5_$1.defaultEventAction = "stopEvent";
    var editor_RegionShortcutAction_205_9_$1/*: com.coremedia.cms.editor.sdk.util.RegionShortcutAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.util.RegionShortcutAction,{});
    AS3.setBindable(editor_RegionShortcutAction_205_9_$1,"direction" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.util.RegionShortcutAction.DIRECTION_BACKWARDS));
    editor_AddKeyboardShortcut_201_5_$1.action = new com.coremedia.cms.editor.sdk.util.RegionShortcutAction(editor_RegionShortcutAction_205_9_$1);
    AS3.setBindable(config_$1,"configuration" , [new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_33_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_38_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_43_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_55_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_59_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_63_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_69_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_74_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_79_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_84_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_89_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_94_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_98_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_102_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_106_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_110_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_114_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_119_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_124_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_129_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_134_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_139_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_144_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_149_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_154_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_160_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_168_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_176_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_184_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_193_5_$1), new com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut(editor_AddKeyboardShortcut_201_5_$1)]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$uJhQ(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.StudioPlugin",
      constructor: AddShortcutsPlugin$,
      super$uJhQ: function() {
        com.coremedia.cms.editor.configuration.StudioPlugin.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.cms.editor.configuration.StudioPlugin",
        "com.coremedia.cms.editor.sdk.shortcuts.Shortcut_properties",
        "com.coremedia.ui.PluginRulesBase",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ApproveAction",
        "com.coremedia.cms.editor.sdk.actions.CheckInAction",
        "com.coremedia.cms.editor.sdk.actions.DeleteAction",
        "com.coremedia.cms.editor.sdk.actions.MoveAction",
        "com.coremedia.cms.editor.sdk.actions.PublishAction",
        "com.coremedia.cms.editor.sdk.actions.RevertAction",
        "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction",
        "com.coremedia.cms.editor.sdk.actions.ToggleFloatingWindowAction",
        "com.coremedia.cms.editor.sdk.actions.WithdrawAction",
        "com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction",
        "com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction",
        "com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction",
        "com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction",
        "com.coremedia.cms.editor.sdk.collectionview.ToggleCollectionViewAction",
        "com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardAction",
        "com.coremedia.cms.editor.sdk.desktop.CloseTabsAction",
        "com.coremedia.cms.editor.sdk.desktop.SelectTabAction",
        "com.coremedia.cms.editor.sdk.shortcuts.AddKeyboardShortcut",
        "com.coremedia.cms.editor.sdk.util.ContentExportAction",
        "com.coremedia.cms.editor.sdk.util.OpenHomepageAction",
        "com.coremedia.cms.editor.sdk.util.RegionShortcutAction"
      ]
    };
});
