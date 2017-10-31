<?php

namespace Mageplaza\Helloworld\Plugin;

use Mageplaza\Helloworld\Controller\Index\Index;

class PostPlugin
{

    public function afterExecute(Index $page, $result)
    {
        return $result;
    }

}