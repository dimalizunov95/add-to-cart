<?php
namespace Mageplaza\Helloworld\Controller\Index;

use Magento\Framework\View\Result\PageFactory;

class Index extends \Magento\Framework\App\Action\Action
{

    protected $_scopeConfig;

    protected $_resultPageFactory;


    public function __construct(
        \Magento\Framework\App\Action\Context $context,
        PageFactory $resultPageFactory,
        \Magento\Framework\App\Config\ScopeConfigInterface $scopeConfig
    ) {
        $this->_resultPageFactory = $resultPageFactory;
        $this->_scopeConfig = $scopeConfig;
        return parent::__construct($context);
    }

    public function execute()
    {
        $x = $this->_resultPageFactory->create();
        $x->getConfig()->addBodyClass('qwe');
        /*echo $this->_scopeConfig->getValue(
            'helloworld/general/overlay_color',
            \Magento\Store\Model\ScopeInterface::SCOPE_STORE
        );*/
        return $x;
    }

    /*public function afterExecute(
        \Magento\Catalog\Controller\Category\View $subject,
        \Magento\Framework\Controller\ResultInterface $result
    ) {
        $result->getConfig()->addBodyClass('pop-up-color-' . '123');
    }*/
}