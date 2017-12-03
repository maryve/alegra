Ext.define('app.store.Sellers', {
    extend: 'Ext.data.Store',
    model: 'app.model.Seller',
    autoLoad: true,
    autoSync: true,
    autoDestroy: true,
    pageSize: 10,
    remoteSort: true,
    proxy: {
        type: 'rest',
        url : 'backend/public/seller',
        writer: {
                type: 'json'
            },
        reader: {
            type: 'json'
        }
    },

    alias: 'store.sellers',
});