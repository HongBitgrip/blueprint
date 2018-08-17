Ext.define('com.coremedia.ui.theme.window.MessageBox', {
    override: 'Ext.window.MessageBox',
    setIcon: function (icon, width, height) {
        var me = this,
            iconCmp = me.iconComponent,
            cls = me.messageIconCls;
        if (cls) {
            iconCmp.removeCls(cls);
        }
        if (icon) {
            switch (icon) {
                case "x-message-box-error":
                case "x-message-box-warning":
                case "x-message-box-info":
                case "x-message-box-question":
                case 1:
                case 2:
                case 4:
                case 6:
                case 8:
                case 9:
                case 14:
                    return iconCmp.hide();
                default:
                    iconCmp.show();
                    if (width || height) {
                        iconCmp.setSize(width || iconCmp.getWidth(), height || iconCmp.getHeight());
                    }
                    iconCmp.addCls(Ext.baseCSSPrefix + 'dlg-icon');
                    iconCmp.addCls(me.messageIconCls = icon);
            }
        } else {
            iconCmp.removeCls(Ext.baseCSSPrefix + 'dlg-icon');
            iconCmp.hide();
        }
        return me;
    }
});
