Ext.define('app.view.contacto.Formulario', {
    requires: ['Ext.form.*',
            'Ext.data.*',
            'Ext.tip.QuickTipManager'],


initComponent: function() {
    Ext.QuickTips.init();

    Ext.define('Contacto', {
        extend: 'Ext.data.Model',
        models: 'Contacto',
        /*fields: [
            {name: 'email',     type: 'string'},
            {name: 'title',     type: 'string'},
            {name: 'firstName', type: 'string'},
            {name: 'lastName',  type: 'string'},
            {name: 'phone-1',   type: 'string'},
            {name: 'phone-2',   type: 'string'},
            {name: 'phone-3',   type: 'string'},
            {name: 'hours',     type: 'number'},
            {name: 'minutes',   type: 'number'},
            {name: 'startDate', type: 'date'},
            {name: 'endDate',   type: 'date'}
        ]*/
    });

    var form = Ext.create('Ext.form.Panel', {
        renderTo: 'addContact',
        title   : '',
        autoHeight: true,
        width   : 600,
        bodyPadding: 10,
        defaults: {
            anchor: '100%',
            labelWidth: 100
        },
        items   : [
            {
                xtype     : 'textfield',
                name      : 'name',
                fieldLabel: 'Nombre',
                /*vtype: 'email',*/
                msgTarget: 'side',
                allowBlank: false
            },
            {
                xtype     : 'textfield',
                name      : 'identification',
                fieldLabel: 'Identificación',
                /*vtype: 'email',*/
                msgTarget: 'side',
                allowBlank: false
            },
            {
                xtype     : 'textfield',
                name      : 'adress',
                fieldLabel: 'Dirección',
                /*vtype: 'email',*/
                msgTarget: 'side',
                allowBlank: false
            },
            {
                xtype     : 'textfield',
                name      : 'city',
                /*fieldLabel: 'Identificación',*/
                /*vtype: 'email',*/
                msgTarget: 'side',
                allowBlank: false
            },
            {
                xtype     : 'textfield',
                name      : 'email',
                fieldLabel: 'Correo electrónico',
                vtype: 'email',
                msgTarget: 'side',
                allowBlank: false
            },
            
            {
                //the width of this field in the HBox layout is set directly
                //the other 2 items are given flex: 1, so will share the rest of the space
                width:          65,

                xtype:          'combo',
                queryMode:      'local',
                /*value:          'mrs',*/
                triggerAction:  'all',
                forceSelection: true,
                editable:       false,
                fieldLabel:     'Lista de precios',
                name:           'priceList',
                displayField:   'name',
                valueField:     'value',
                store:          Ext.create('Ext.data.Store', {
                    fields : ['name', 'value'],
                    data   : [
                        {name : 'General',   value: '1'},
                        {name : 'Ninguna',  value: 'null'},
                    ]
                })
            },       
        ],
        
    });
}
       
});
