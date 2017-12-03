<?php

class PriceListController extends Zend_Controller_Action
{

    public function init()
    {
        $this->_helper->viewRenderer->setNoRender(true);
    }

    public function indexAction()
    {
        $client = new Zend_Http_Client();
        $client->setUri(Zend_Registry::get('uri')."/price-lists");
        $client->setAuth(Zend_Registry::get('email'), Zend_Registry::get('token'));
        $response = $client->request('GET');
        $this->_helper->json(json_decode($response->getBody()));
    }


}

