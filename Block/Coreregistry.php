<?php
namespace Mageplaza\Helloworld\Block;

use Magento\Framework\App\Config\ScopeConfigInterface;

class Coreregistry extends \Magento\Framework\View\Element\Template
{

    protected $_scopeConfig;

    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        ScopeConfigInterface $scopeConfigInterface
    )
    {
        $this->_scopeConfig = $scopeConfigInterface;
        parent::__construct($context);
    }

    public function getCoreConfigData($scope_config) {

        return $this->_scopeConfig->getValue(
            $scope_config,
            \Magento\Store\Model\ScopeInterface::SCOPE_STORE
        );

    }

    public function helloPublic() {
        return 'wq';
    }

}