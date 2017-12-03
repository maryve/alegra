Ext.define('app.view.contacto.FormEdit', {
    extend: 'Ext.form.Panel',
    alias : 'widget.contactoformedit',
    requires: ['Ext.form.Panel','Ext.form.field.Text','app.model.Contacto',],
    xtype: 'form',
    layout: 'column',
    defaults: {
        bodyPadding: '20 50 20 50',
    },
    renderTo:'addClientForm',
   
    initComponent: function() {   
       var contacto = new app.model.Contacto();
       var prices = [ "General"];
       var sellers = ["Ninguno"];
       var terms = ["Vencimiento manual",'De contado','8 días','15 días','30 días','60 días'];
            this.items = [
                {
                    columnWidth: 0.5,
                    border: false,
                    items: [
                        {border:false,
                            xtype: 'fieldset',
                            defaultType: 'textfield',
                            defaults: {
                                anchor: '95%',
                            },

                            items: [{
                            fieldLabel: 'Nombre',
                                    emptyText: 'Nombre',
                                   allowBlank:false,
                                    name: 'name',
                                    bind: '{contacto.name}'
                                }
                            , {
                                fieldLabel: 'Identificación',
                                emptyText: 'Identificación',
                                bind: '{contacto.identification}',
                                name: 'identification'
                            }, {
                                fieldLabel: 'Dirección',
                                emptyText: 'Dirección',
                                name:'{contacto.address}',
                            },{
                                fieldLabel: 'Ciudad',
                                emptyText: 'Ciudad',
                                name:'{contacto.city}',
                            }, {
                                fieldLabel: 'Email',
                                emptyText: 'Email',
                                bind: '{contacto.email}',
                                vtype: 'email',
                                name: 'email'
                            }, {
                                fieldLabel: 'Teléfono 1',
                                emptyText: 'Teléfono 1',
                                bind: '{contacto.phonePrimary}',
                                name: 'phonePrimary'
                            },
                            {
                                fieldLabel: 'Teléfono 2',
                                emptyText: 'Teléfono 2',
                                bind: '{contacto.phoneSecondary}',
                                name: 'phoneSecondary'
                            },
                            {
                                fieldLabel: 'Fax',
                                emptyText: 'Fax',
                                bind: '{contacto.fax}',
                                name: 'fax'
                            },{
                                fieldLabel: 'Celular',
                                emptyText: 'Celular',
                                bind: '{contacto.mobile}',
                                name: 'mobile'
                            },]
                        }
                    ]
                },
                {
                    columnWidth: 0.5,
                    border:false,
                    items: [
                        {
                            border:false,
                            xtype: 'fieldset',
                            defaultType: 'textfield',
                            defaults: {
                                anchor: '100%'
                            },
                            items: [{
                                xtype: 'combobox',
                                fieldLabel: 'Lista de precios',
                                name: 'priceListId',
                                /*valueField: 'id',
                                displayField: 'name',*/
                                store: prices,
                                typeAhead: true,
                                emptyText: 'Seleccione una lista de precios...',
                                bind: '{contacto.priceList}'
                            }, {
                                xtype: 'combobox',
                                fieldLabel: 'Vendedor',
                                name: 'seller',
                                store: sellers,
                                /*valueField: 'id',
                                displayField: 'name',*/
                                typeAhead: true,
                                emptyText: 'Seleccione un vendedor...',
                                bind: '{contacto.seller}'
                            }, {
                                xtype: 'combobox',
                                fieldLabel: 'Términos de pago',
                                name: 'term',
                                store: terms,
                                /*valueField: 'id',
                                displayField: 'name',*/
                                typeAhead: true,
                                emptyText: 'Seleccione un término de pago...',
                                bind: {
                                    selection: '{contacto.term}'
                                }
                            },{
                                xtype:'checkbox',
                                fieldLabel: 'Cliente',
                                name: 'cliente',
                            }, {
                                xtype:'checkbox',
                                fieldLabel: 'Proveedor',
                                name: 'proveedor',
                            }, {
                                 xtype: 'textareafield',
                                fieldLabel: 'Observaciones',
                                bind: '{contacto.observations}',
                                name: 'observations'
                            },
                            {
                                xtype:'checkbox',
                                fieldLabel: 'Incluir estado de cuenta',
                                name: 'account',
                            }]
                        },
                    ]
                },
                
            ],
           
            this.buttons = [
                       
            {
                text: 'Guardar',
                iconCls:'act-save',
                disabled: false,
                width: 30,
                height: 30,
            }],
          
        this.callParent(arguments);
    },    
});