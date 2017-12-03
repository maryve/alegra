Ext.define('app.model.Term', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int', persist: false },
        { name: 'name', type: 'string' },
        { name: 'days', type: 'int' }

    ],

    validators: {
        name: [
            'presence',
            { type: 'length', max:90 },
        ]
    },
    

});