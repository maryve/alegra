Ext.define('app.store.Contactos', {
    extend: 'Ext.data.Store',
    model: 'app.model.Contacto',
    alias: 'store.contactos',
    autoLoad: true,
    autoSync: true,
    pageSize: 20,
    autoLoad: {start: 0, limit: 35},
 
    proxy: {
        type: 'rest',
        url : 'backend/public/contact',
        writer: {
                type: 'json'
            },
        reader: {
            type: 'json'
        }

    },


});