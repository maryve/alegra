Ext.define('app.model.PriceList', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int', persist: false },
        { name: 'name', type: 'string' }
    ],

    validators: {
        name: [
            'presence',
            { type: 'length', max:90 },
        ]
    },
});