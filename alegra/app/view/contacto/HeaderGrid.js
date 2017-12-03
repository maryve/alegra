Ext.define('app.view.contacto.DetailContact', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.contactodetail',
    requires: ['Ext.form.Panel','Ext.form.field.Text','app.model.Contacto',],
    controllers: ['Contactos',],
    border: false,
    html: '<div class="section-wrapper">'+
                        '<div class="header">'+
                            '<div class="title">'+
                                '<h1>Contactos</h1>'+
                            '</div>'+
                            '<div class="actions">'+
                                '<a href= class="button green"><span class="plus"></span>Nuevo contacto</a>'+
                                '<a style="margin-left:20px" href="#">Importar desde excel</a>'+
                            '<style>.section-wrapper .header { position: relative }</style>'+
                                '<a id=downloadClients style="position: absolute;right: 14px;bottom: 13px;color: rgb(167, 164, 164);" href="#">Exportar</a>'+
                            '</div>'+
                        '</div>'+
                        '<div class="content"></div>'+
                    '</div>',

    renderTo: Ext.getBody(),

});