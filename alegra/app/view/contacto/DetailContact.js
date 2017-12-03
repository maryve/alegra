Ext.define('app.view.contacto.DetailContact', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.contactodetail',
    requires: ['Ext.form.Panel','Ext.form.field.Text','app.model.Contacto',],
    controllers: ['Contactos',],
    border: false,
    renderTo: Ext.getBody(),  
});