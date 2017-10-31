<?php

namespace Mageplaza\Helloworld\Plugin;

use Magento\Catalog\Controller\Category\View;
use Magento\Framework\App\Config\ScopeConfigInterface;
use Magento\Framework\Registry;
use Mageplaza\Helloworld\Helper\Data;

class CoreCategoryPlugin
{

    protected $_scope_config;

    protected $_registry;

    public function __construct(
        ScopeConfigInterface $scopeConfigInterface,
        Registry $registry
    ) {
        $this->_scope_config = $scopeConfigInterface;
        $this->_registry = $registry;
    }

    public function afterExecute(View $page, $result)
    {
        $category_page = $result;


        $curr_categ = $this->_registry->registry('current_category')->getName();

        if ($curr_categ == 'cat. en1') {
            $color = $this
                ->_scope_config
                ->getValue(
                    'helloworld/general/overlay_color',
                    \Magento\Store\Model\ScopeInterface::SCOPE_STORE
                );

            $category_page->getConfig()->addBodyClass('popup-overlay-color-' . $color);
        }

        return $category_page;
    }

    public function beforeExecute(View $page)
    {
        return $page;
    }

}