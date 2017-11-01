# add-to-cart

Задачи модуля разработаны для страницы продуктов в категории
-Успешное сообщение о добавлении товара в корзину: в админке выбрать - через обычный success message или через pop-up.
-Добавление товара в корзину ajax-ом, тоже можно выбрать в админке.
-Добавлена кнопка просмотра товара
-При клике на товар страница открывается во всплывающем окне
-В админке можно выбрать цвет оверлея, который появляется при клике на кнопку в категории "cat. en1" (мне лень переделывать для всех, ненужная вещь)

Installation
/home/dmitry/composer config repositories.mageplaza git https://github.com/dimalizunov95/add-to-cart.git
/home/dmitry/composer require mageplaza/module-helloworld:dev-master
/home/dmitry/composer update
php bin/magento setup:upgrade
у меня почему-то не всегда включался модуль, хотя после апгрейда обычно включался
php bin/magento module:enable Mageplaza_Helloworld
мб деплой нужно будет
php bin/magento setup:static-content:deploy -f
