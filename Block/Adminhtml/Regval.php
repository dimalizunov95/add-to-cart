<?php
namespace Mageplaza\Helloworld\Block\Adminhtml;

//use \Magento\Backend\Block\Widget\Grid\Container;
use \Magento\Framework\View\Element\Template;

class Regval extends Template
{
    /*protected function _construct()
    {
        /**
         * @todo:
         * 1) set controller with proper path to grid block
         * 2) set blockGroup with proper module class prefix
         * 3) modify button label

        $this->_controller = 'adminhtml_question';
        $this->_blockGroup = 'Mageplaza_Helloworld';
        $this->_headerText = __('Weblog Questions');
        parent::_construct();
    }*/

    public function getDisplayText() {
        return '123';
    }

    public function getConfig() {
        return $this->_scopeConfig;
    }

    /*public function getConf() {
        $helper = $this->objectManager->create('Mageplaza\HelloWorld\Helper\Data');
        return $helper->getGeneralConfig('enable');
    }*/
}
