Ext.define('app.controller.Contactos', {
    extend: 'Ext.app.Controller',
    stores: ['Contactos',/*'PriceLists','Sellers'*/],
    models: ['Contacto','PriceList','Seller'],
    views: [ 'contacto.Grid','contacto.FormAdd','contacto.FormEdit' ,'contacto.DetailContact'],

    refs: [{
            ref: 'contactoPanel',
            selector: 'panel'
        },{
            ref: 'contactogrid',
            selector: 'grid'
        },
        {
            ref: 'contactoformadd',
            selector: 'contactoformadd',
        },
        {
            ref: 'contactoformedit',
            selector: 'contactoformedit',
        },
        {
            ref: 'contactodetail',
            selector: 'contactodetail',
        }
    ],

    init: function() { 
      this.control({
        'contactogrid actioncolumn': {
             click: this.handleContactClickAction
          },
        'buttonscontacto button': {
             click: this.handleUserClickActionForm
          },
          'contactoformadd button':{
            click: this.addContact
          },
          'contactoformedit button':{
            click: this.editContact
          },
          'contactogrid button[action=agregar]':{
            click: this.formContact
          },
          'contactogrid button[action=eliminarvarios]':{
            click: this.onDeleteMultipleClick
          }
              
        });

    },


    /* Con esta función se muestra el formulario para crear un contacto */
    formContact: function(){
      Ext.create('app.view.contacto.FormAdd',{
        renderTo: 'addClientForm',
                
      });
      this.getContactogrid().hide();
     },

    /* Con esta función se realiza el registro de contacto */
    addContact: function(btn, e){
      var form = btn.up('form').getForm();
      var record = form.getRecord();
      var v_values = form.getValues();
      
      v_record = Ext.create('app.model.Contacto');
      
      v_record.set('name',v_values.name);
      v_record.set('identification',v_values.identification);
      v_record.set('email',v_values.email);
      v_record.set('phonePrimary',v_values.phonePrimary);
      v_record.set('phoneSecondary',v_values.phoneSecondary);
      v_record.set('fax',v_values.fax);
      v_record.set('mobile',v_values.mobile);
      v_record.set('observations',v_values.observations);
      /*v_record.set('type',null);
      v_record.set('address',null);
      v_record.set('seller',null);
      v_record.set('term',null);
      v_record.set('priceList',null);
      //v_record.set('internalContacts', []);*/
      
      v_record.setProxy(new Ext.data.proxy.Ajax({
        url: './backend/public/contact',
        reader: {
          type: 'json'
        }
      }));
      
      Ext.Msg.wait('Guardando contacto');
            window.setTimeout(function(){
              Ext.Msg.hide();
          },4000);              
    v_record.save({
        success: function() { 
          var redirect = './'; 
          window.location = redirect;          
        },
        failure: function() {
            Ext.Msg.alert('Error', 'Ocurrió un error al agregar este contacto, por favor, intenta nuevamente');
        }
    });
    this.getStore('Contactos').sync();              
   },

    /* Con esta función se editan los datos de un Contacto  */
    editContact: function(btn,e){
      var form = btn.up('form').getForm();
      var record = form.getRecord();
      var v_values = form.getValues();
      //record.set(v_values);
      record.set('name',v_values.name);
      record.set('identification',v_values.identification);
      record.set('email',v_values.email);
      record.set('phonePrimary',v_values.phonePrimary);
      record.set('phoneSecondary',v_values.phoneSecondary);
      record.set('fax',v_values.fax);
      record.set('mobile',v_values.mobile);
      record.set('observations',v_values.observations);

      Ext.Msg.wait('Guardando contacto');
        window.setTimeout(function(){
          Ext.Msg.hide();
          var redirect = './'; 
      window.location = redirect; 
      },4000);   
    },

    /* Con esta función se realiza la acción seleccionada por el usuario en la columna de acciones de la tabla de contactos */

    handleContactClickAction: function(view, cell, rowIndex, colIndex, e) {

       var m = e.getTarget().className.match(/\bact-(\w+)\b/);
       if (m === null || m === undefined) {
          return;
       }
       var action = m[1];
       switch (action) {
          case 'destroy':
            //Elimina un contacto, proviene de la acción delete de la tabla de contactos
            var store = this.getStore('Contactos');
            var record = store.getAt(rowIndex); 
           
            Ext.Msg.confirm('Eliminar cliente','¿Estás seguro de que deseas eliminar el cliente? Esta operación no se puede deshacer.',function(btn){
              if(btn === 'yes'){
                store.remove(record);
                store.sync();
                //Ext.Msg.alert('Eliminar', 'Este contacto se ha eliminado.');
                }
            });

            break;

          case 'edit':
            //Muestra el formulario para editar datos de un contacto registrado, proviene de la acción edit de la tabla de contactos
            var store = this.getStore('Contactos');
            var record = store.getAt(rowIndex); 
            var form = Ext.create('app.view.contacto.FormEdit');
            form.loadRecord(record);
            this.getContactogrid().hide();
   
          break;
          case 'view':
          //Muestra el detalle del registro del contacto, proviene de la acción view de la tabla de contactos
            var store = this.getStore('Contactos');
            var record = store.getAt(rowIndex); 
            var contacto = record.data;

            var detail = Ext.create('app.view.contacto.DetailContact',{
              renderTo: 'addClientForm', 
              html: '<div class="section-wrapper">'+
                      '<div class="header">'+
                          '<div class="title"><h1>'+contacto.name+'</h1></div>'+
                          '<div class="actions"><a class="button2 add" href="#">Crear factura de venta</a>'+
                                        '<a class="button2 add" href="#">Crear factura de compra</a>'+
                                          '<a class="button2 edit" href="#">Editar</a>'+
                                               '<div id="moreActionsButton" style ="display:inline-block"></div></div>'+
                      '</div>'+
                      '<div class="content"></div>'+
                  '</div>'+


                  '<div id="viewClientInfo" style="float: left; margin-bottom: 20px;">'+
                      '<table class="table-details-vertical gray-header">'+
                          '<tr>'+
                              '<th>Datos generales</th>'+
                              '<th></th>'+
                          '</tr>'+
                          '<tr>'+
                              '<td>Nombre</td>'+
                              '<td>'+contacto.name+'</td>'+
                          '</tr>'+
                          '<tr>'+
                              '<td>Identificación</td>'+
                              '<td>'+contacto.identification+'</td>'+
                          '</tr>'+
                          '<tr>'+
                              '<td>Teléfono</td>'+
                              '<td>'+contacto.phonePrimary+'</td>'+
                          '</tr>'+
                          '<tr>'+
                              '<td>Teléfono 2</td>'+
                              '<td>'+contacto.phoneSecondary+'</td>'+
                          '</tr>'+
                          '<tr>'+
                              '<td>Celular</td>'+
                              '<td>'+contacto.mobile+'</td>'+
                          '</tr>'+
                          '<tr>'+
                              '<td>Dirección</td>'+

                              '<td>'+ '</td>'+
                          '</tr>'+
                          '<tr>'+

                              '<td>Ciudad</td>'+
                              '<td>'+'</td>'+
                          '</tr>'+
                          '<tr>'+
                              '<td>Correo electrónico</td>'+
                              '<td>'+contacto.email+'</td>'+
                          '</tr>'+
                                           
                          '<tr>'+
                              '<td>Observaciones</td>'+
                              '<td>'+contacto.observations+'</td>'+
                          '</tr>'+
                          '<tr>'+
                              '<td>Archivos adjuntos</td>'+
                              '<td>'+
                                  '<a class="uploadFile" href="#" data-idType ="1" data-type="client" data-canUpload="yes">Adjuntar</a>'+

                              '</td>'+
                  '</tr>'+


                  '<tr>'+
                      '<td>Enlace estado de cuenta'+
                      '<div class="tooltip-wrapper" style="left:233px;position:relative;top:-6px;width: 18px;">'+
                          '<img class="tooltip" src="https://cdn1.alegra.com/images/icons/help.png">'+
                          '<div class="tooltip-text-container" style="top:5px;">'+
                              '<div class="tooltip-text-wrapper" style="padding:5px;width:388px;">'+
                                 '<div class="text">'+
                                  'Si necesitas ayuda para generar el enlace al estado de cuenta, haz <a target="_blank" href="https://ayuda.alegra.com/hc/es/articles/115000270906"><strong>clic aquí</strong></a>.'+
                                  '</div>'+
                              '</div>'+
                          '</div>'+
                      '</div>'+
                      '</td>'+
                      '<td id="statementLink">'+
                      '</td>'+
                  '</tr>'+
                  '</table>'+
              '</div>'+

              '<div id="viewClientInfoBalances" style="display: block; width: 470px; margin-bottom: 20px;">'+
              '<table class="table-details-vertical gray-header">'+
                  '<tr>'+
                      '<th>'+
                          'Saldos'+
                      '</th>'+
                      '<th></th>'+
                  '</tr>'+
                  '<tr>'+
                      '<td>Por cobrar</td>'+
                      '<td>Bs0.00</td>'+
                  '</tr>'+
                  '<tr>'+
                      '<td>Por cobrar vencido</td>'+
                      '<td>Bs0.00</td>'+
                  '</tr>'+
                  '<tr>'+
                      '<td>Por pagar</td>'+
                      '<td>Bs0.00</td>'+
                  '</tr>'+
                  '<tr>'+
                      '<td>Anticipos recibidos</td>'+
                      '<td>Bs0.00</td>'+
                 '</tr>'+
                  '<tr>'+
                      '<td>Anticipos entregados</td>'+
                      '<td>Bs0.00</td>'+
                  '</tr>'+
                  '<tr>'+
                      '<td>Notas crédito por aplicar</td>'+
                      '<td>Bs0.00</td>'+
                  '</tr>'+
                  '<tr>'+
                      '<td>Notas débito por aplicar</td>'+
                      '<td>Bs0.00</td>'+
                  '</tr>'+
              '</table>'+
          '</div>',

        });
        this.getContactogrid().hide();
      break;
      }
    },

    /* Con esta función se eliminan múltiples filas de la tabla de contactos */
    onDeleteMultipleClick:function(btn) {
        var selModel = btn.up('contactogrid').getSelectionModel();
        var sel = selModel.getSelection();
        var store= this.getStore('Contactos');
         Ext.Msg.confirm('Eliminar cliente','¿Estás seguro de que deseas eliminar estos clientes? Esta operación no se puede deshacer.',function(btn){
              if(btn === 'yes'){
                if(sel){
                    store.remove(sel);
                  }
              }
        });  
    },

});