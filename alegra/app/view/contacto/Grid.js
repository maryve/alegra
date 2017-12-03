Ext.define('app.view.contacto.Grid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.contactogrid',
    requires: ['Ext.grid.column.Action','Ext.toolbar.Paging',],
    controllers: ['Contactos',],
    title: 'Contactos',
    store: 'Contactos',
    frame:true,
    sortable: true,
    columnLines: true,
    selType: 'checkboxmodel',
    iconCls: 'icon-user',
    emptyText: ['¡Aún no has creado tu primer contacto!'],
      
        columns: [
        {
            text: 'Nombre',
            width: 220,
            sortable: true,
            dataIndex: 'name',
            /*field: {
                xtype: 'textfield'
            },
            filter: {
                type: 'string',
                itemDefaults: {
                    emptyText: 'Nombre...'
                }
            }*/
        }, {
            header: 'Identificación',
            width: 200,
            sortable: true,
            dataIndex: 'identification',
            /*field: {
                xtype: 'textfield',
            },
            filter: {
                type: 'string',
                itemDefaults: {
                    emptyText: 'Identificación...'
                }
            }*/
        }, {
            text: 'Teléfono 1',
            width: 200,
            sortable: true,
            dataIndex: 'phonePrimary',
            /*field: {
                xtype: 'textfield'
            },
            filter: {
                type: 'string',
                itemDefaults: {
                    emptyText: 'Teléfono...'
                }
            }*/
        },{
            text: 'Observaciones',
            width: 200,
            sortable: true,
            dataIndex: 'observations',
            /*field: {
                xtype: 'textfield'
            },
            filter: {
                type: 'string',
                itemDefaults: {
                    emptyText: 'Observaciones...'
                }
            }*/
        }, {
            text: 'Acciones',
            menuDisabled: true,
            sortable: false,
            xtype: 'actioncolumn',
             align:'center',
            width: 170,
            items: [
                    {
                        icon: 'https://cdn1.alegra.com/images/icons/zoom.png', 
                        tooltip: 'Ver',
                        action: 'view',
                        iconCls:'act-view',
                },
                {
                    icon:'https://cdn1.alegra.com/images/icons/page_edit.png',
                    tooltip: 'Editar', 
                    action: 'edit',
                    iconCls:'act-edit',
                   
                },
                {   
                    icon: 'https://cdn1.alegra.com/images/icons/delete.png',
                    tooltip: 'Eliminar', 
                    action: 'delete',
                    iconCls:'act-destroy',
                }],
        }],
        
    initComponent: function() {
    	this.dockedItems = [{

            xtype: 'toolbar',
            items: [{
                iconCls: 'icon-agregar',
                text: 'Agregar',
                action: 'agregar',
            },{
                iconCls: 'icon-eliminarvarios',
                text: 'Eliminar',
                action: 'eliminarvarios', 
                itemId: 'eliminarvarios',
                disabled: true,
            }]
        },
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            store: 'Contactos',
            displayInfo: true,
            displayMsg: 'Mostrando contactos {0} - {1} de {2}',
            emptyMsg: "Ning\u00FAn contacto encontrado."
        }];
        this.callParent(arguments);
    }

});