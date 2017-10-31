<?php

namespace Mageplaza\Helloworld\Model;

class Customselect implements \Magento\Framework\Option\ArrayInterface
{
    /**
     * @return array
     */
    public function toOptionArray()
    {

        return [
            ['value' => 'blue', 'label' => __('Blue')],
            ['value' => 'white', 'label' => __('White')],
            ['value' => 'green', 'label' => __('Green')]
        ];
    }
}