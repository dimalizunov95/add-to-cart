# add-to-cart

/home/dmitry/composer config repositories.mageplaza git https://github.com/dimalizunov95/add-to-cart.git
/home/dmitry/composer require mageplaza/module-helloworld:dev-master
/home/dmitry/composer update
php bin/magento setup:upgrade
у меня почему-то не всегда включался модуль, хотя после апгрейда обычно включался
php bin/magento module:enable Mageplaza_Helloworld
мб деплой нужно будет
php bin/magento setup:static-content:deploy -f
