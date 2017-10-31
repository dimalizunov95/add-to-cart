var config = {
    "map": {
        "*": {
            catalogAddToCart: "Mageplaza_Helloworld/js/customCatalogAddToCart",
            custom: "Mageplaza_Helloworld/js/custom",
            'category.page.product.fancy': "Mageplaza_Helloworld/js/category.page.product.fancy"
            //'customCatalogAddToCart': "Mageplaza_Helloworld/js/customCatalogAddToCart"
        }
    },

    paths: {
        //custom: "Mageplaza_Helloworld/js/custom",
        'fancybox': 'Mageplaza_Helloworld/js/fancy/jquery.fancybox.pack',
        'jquery.mousewheel': 'Mageplaza_Helloworld/js/fancy/jquery.mousewheel.pack',
        'jquery.fancybox.buttons': 'Mageplaza_Helloworld/js/fancy/jquery.fancybox-buttons',
        'category.page.product.fancy': 'Mageplaza_Helloworld/js/category.page.product.fancy'
    },

    'shim': {
        'fancybox': ['jquery'],
        'jquery.mousewheel': ['jquery'],
        'jquery.fancybox.buttons': ['jquery', 'fancybox'],
        'category.page.product.fancy': ['jquery', 'fancybox']
    }
};

/*
require(['jquery'], function (jQuery) {
    'use strict';

    jQuery.noConflict();
});*/
