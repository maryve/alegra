Ext.define('app.store.PriceLists', {
    extend: 'Ext.data.Store',
    model: 'app.model.PriceList',
    autoLoad: true,
    autoSync: true,
    autoDestroy: true,
    pageSize: 10,
    remoteSort: true,
    /*proxy: {
        type: 'rest',
        url : 'backend/public/priceList',
        writer: {
                type: 'json'
            },
        reader: {
            type: 'json'
        }

    },*/

    data: { items: [
        { "id":"1","name":"General","status":"active","type":"amount"},
       
    ]},


    alias: 'store.priceLists',

});