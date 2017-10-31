define([
    'jquery',
    'jquery/ui',
    'Magento_Catalog/js/catalog-add-to-cart'
    //'domReady!'
], function($){


    $.widget('Mageplaza.catalogAddToCart', $.mage.catalogAddToCart, {

    options: {
        bindSubmit: window.add_to_cart_ajax
    },

    ajaxSubmit: function (form) {
        var self = this;

        $(self.options.minicartSelector).trigger('contentLoading');
        self.disableAddToCartButton(form);

        $.ajax({
            url: form.attr('action'),
            data: form.serialize(),
            type: 'post',
            dataType: 'json',

            /** @inheritdoc */
            beforeSend: function () {
                if (self.isLoaderEnabled()) {
                    $('body').trigger(self.options.processStart);
                }
            },

            /** @inheritdoc */
            success: function(res) {

                if (self.isLoaderEnabled()) {
                    $('body').trigger(self.options.processStop);
                }

                if (res.backUrl) {
                    window.location = res.backUrl;
                    return;
                }
                if (res.messages) {
                    $(self.options.messagesSelector).html(res.messages);
                }
                if (res.minicart) {
                    $(self.options.minicartSelector).replaceWith(res.minicart);
                    $(self.options.minicartSelector).trigger('contentUpdated');
                }
                if (res.product && res.product.statusText) {
                    $(self.options.productStatusSelector)
                        .removeClass('available')
                        .addClass('unavailable')
                        .find('span')
                        .html(res.product.statusText);
                }


                var popup = $('<div class="themecafe-free-popup"/>').html('<h1>Product was added To Successfully in Your Cart</h1>').modal({
                    modalClass: 'changelog',
                    title: $.mage.__("Configuration Message"),
                    buttons: [{
                        text: 'Continue Shopping',
                        click: function () {
                            this.closeModal();
                        }
                    }]
                });
                if (window.add_to_cart_popup) {
                    popup.modal('openModal');
                }

                /*setTimeout(function() { popup.modal('closeModal');
                }, 2000);*/

                self.enableAddToCartButton(form);
            }
        });
    },

});

return $.Mageplaza.catalogAddToCart;


});


/*
define([
    'jquery',
    'jquery/ui',
    'Magento_Catalog/js/catalog-add-to-cart'
    //'domReady!'
], function($){


    $.widget('Mageplaza.catalogAddToCart', $.mage.catalogAddToCart, {
        /!*_create: function () {
            console.log('from cart create: ' + this.options.coreturned);
            //my	code	here
        },*!/


        ajaxSubmit: function (form) {

            //alert(123);

            console.log('from cart subm: ' + this.options.myVar1);

            return this._super(form);
        }
    });

    return $.Mageplaza.catalogAddToCart;


});*/
