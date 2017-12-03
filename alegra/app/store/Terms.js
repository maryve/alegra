Ext.define('app.store.Terms', {
    extend: 'Ext.data.Store',
    model: 'app.model.Term',
    pageSize: 10,
    data : [
         {id : 0, name: "Vencimiento manual", days : 0 },
         {id : 1, name: "De contado", days : 0 },
         {id : 2, name: "8 días", days : 8 },
         {id : 3, name: "15 días", days : 15 },
         {id : 4, name: "30 días", days : 30 },
         {id : 5, name: "60 días", days : 60 },
     ],

    alias: 'store.terms',
    
});