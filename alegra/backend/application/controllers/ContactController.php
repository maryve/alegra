<?php

class ContactController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
       $this->_helper->viewRenderer->setNoRender(true);
    }

    public function indexAction()
    {
        // action body
        $zclient = new Zend_Http_Client();
        $zclient->setUri(Zend_Registry::get('uri')."/contacts");
        $zclient->setAuth(Zend_Registry::get('email'), Zend_Registry::get('token'));
        $resp = $zclient->request('GET');
        $this->_helper->json(json_decode($resp->getBody()));
        //$this->render('index');
    }

    public function getAction()
    {
    	$id = $this->_getParam('id');
        $zclient = new Zend_Http_Client();
        $zclient->setUri(Zend_Registry::get('uri')."/contacts"."/".$id);
        $zclient->setAuth(Zend_Registry::get('email'), Zend_Registry::get('token'));
        $resp = $zclient->request('GET');
        $this->_helper->json(json_decode($resp->getBody()));
    }

    public function postAction()
      {
        //echo $this->getRequest()->getRawBody();
        $json = json_encode($this->getRequest()->getRawBody()); 
        $zclient = new Zend_Http_Client();
        $zclient->setUri(Zend_Registry::get('uri')."/contacts");
        $zclient->setAuth(Zend_Registry::get('email'), Zend_Registry::get('token'));
    
        $zclient->setHeaders('Content-type','application/json');
       // $zclient->setHeaders('Access-Control-Allow-Origin');
        $zclient->setRawData(json_decode($json), null);

        $resp = $zclient->request('POST');

        $this->_helper->json(json_decode($resp->getBody()));

      }

      public function putAction()
      {
        $json = json_encode($this->getRequest()->getRawBody());
        $id = $this->_getParam('id');
        $zclient = new Zend_Http_Client();
        $zclient->setUri(Zend_Registry::get('uri')."/contacts"."/".$id);
        $zclient->setAuth(Zend_Registry::get('email'), Zend_Registry::get('token'));
        
        
        $zclient->setHeaders('Content-type','application/json');
        $zclient->setRawData(json_decode($json), null);

        $resp = $zclient->request('PUT');

        $this->_helper->json(json_decode($resp->getBody()));
      }

      public function deleteAction()
      {
        $id = $this->_getParam('id');
        $zclient = new Zend_Http_Client();
        $zclient->setUri(Zend_Registry::get('uri')."/contacts"."/".$id);
        $zclient->setAuth(Zend_Registry::get('email'), Zend_Registry::get('token'));
        $zclient->setHeaders('Content-type','application/json');

        $resp = $zclient->request('DELETE');

        $this->_helper->json(json_decode($resp->getBody()));
      }


}

