define([
    "jquery",
    "fancybox",
    "jquery.mousewheel",
    "jquery.fancybox.buttons",
    "jquery/ui"
], function($) {
    return function(config) {

        $('li.item.product.product-item').on('click', function(event) {

            var target = event.target;

            // цикл двигается вверх от target к родителям до li
            while (target.tagName != "LI") {
                if (target.tagName == 'A' || target.tagName == 'BUTTON') {
                    // нашли элемент, который нас интересует!
                    return;
                }
                target = target.parentNode;
            }

            var a = this.getElementsByClassName('product_view')[0];
            var href = a.href;

            /*$(".product-item").fancybox({
                openEffect	: 'none',
                closeEffect	: 'none'
            });*/

            $('li.item.product.product-item').fancybox({
                href: href,
                type: "iframe"
            });

        });

    }
});