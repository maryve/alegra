<?php

class IndexController extends Zend_Controller_Action
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
        $zclient->setUri('uri');
        $zclient->setAuth('email','token');
        $resp = $zclient->request('GET');
        $this->_helper->json(json_decode($resp->getBody()));
        

    }

    public function getAction()
    {
    	echo Zend_Json::endcode($this->_todo);
    }


}

