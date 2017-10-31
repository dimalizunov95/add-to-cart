<?php
/**
 * Webinse
 *
 * PHP Version 5.6.23
 *
 * @category    Webinse
 * @package     Webinse_FAQ6
 * @author      Webinse Team <info@webinse.com>
 * @copyright   2017 Webinse Ltd. (https://www.webinse.com)
 * @license     http://opensource.org/licenses/OSL-3.0 The Open Software License 3.0
 */
/**
 * Backend Action frontName/question/index
 *
 * @category    Webinse
 * @package     Webinse_FAQ6
 * @author      Webinse Team <info@webinse.com>
 * @copyright   2017 Webinse Ltd. (https://www.webinse.com)
 * @license     http://opensource.org/licenses/OSL-3.0 The Open Software License 3.0
 */
namespace Mageplaza\Helloworld\Controller\Adminhtml\Index;

use Magento\Backend\Model\View\Result\Page;
use Webinse\FAQ6\Controller\Adminhtml\Question;
use Magento\Backend\App\Action;
use Magento\Backend\App\Action\Context;
use Magento\Framework\Registry;
use Magento\Framework\View\Result\PageFactory;
use Magento\Backend\Model\Auth\Session;
use Magento\User\Model\User;

class Notindex extends Action
{
    /**
     * Authorization level of a basic admin session
     *
     * @see _isAllowed()
     */
    const ADMIN_RESOURCE = 'Webinse_FAQ6::questions';

    /**
     * @var Registry
     */
    protected $_coreRegistry;

    /**
     * @var PageFactory
     */
    protected $_resultPageFactory;


    public function __construct(
        Context $context,
        Registry $coreRegistry,
        PageFactory $resultPageFactory
    ) {
        $this->_coreRegistry = $coreRegistry;
        $this->_resultPageFactory = $resultPageFactory;
        parent::__construct($context);
    }
    /**
     * @return Page
     */
    public function execute()
    {
        /** @var Page $resultPage */
        $resultPage = $this->_resultPageFactory->create();

        $resultPage->setActiveMenu('Mageplaza::submenu');

        $resultPage->getConfig()->getTitle()->prepend(__('Notindex'));

        

        return $resultPage;
    }
}
