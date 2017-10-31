define([
    'jquery',
    'fancybox',
    'jquery.mousewheel',
    'jquery.fancybox.buttons'
], function ($) {
    return function(config)
    {
        /*alert("Look in your browser's console");
        console.log(config);*/
        //alert(config);



        var div_popup_btn = $("#for_popup a");

        var input_popup = $("#for_popup input[type='text']");

        input_popup.on('change', function() {
            $('#text_in_popup').text( input_popup.val() );
        });

        $('#change_color').on('click', function() {
            var to_do = 'encode';
            var shift = 15;
            var input_text = $('#text_in_popup').text();
            var place_to_output = 'id3';
            getShiftedString(to_do, shift, input_text, place_to_output);
        });

        div_popup_btn.on('click', function() {

            var popup_color = 'black';

            var search_substr = 'popup-overlay-color-';

            var body_classes = $('body').attr('class');
            body_classes = body_classes.split(' ');

            body_classes.forEach(function(item, i, arr) {
                if ( item.indexOf( search_substr ) + 1 ) {
                    popup_color = item.substr( search_substr.length );
                }
            });



            $('#id3').text('');

            div_popup_btn.fancybox({
                //content: x,
                autoSize : false,
                topRatio : 0,
                minWidth    : "30%",
                minHeight   : "20%",
                hideOnOverlayClick : false,
                hideOnContentClick : false,
                enableEscapeButton : false,
                showCloseButton : true,
                //modal : true,
                helpers : {
                    overlay : {
                        css : {
                            'background' : popup_color
                        },
                        closeClick: false
                    },
                    buttons: {
                        tpl: ''
                    }
                },
                tpl : {
                    closeBtn : '<a href="javascript:;">Закрыть</a>'
                },
                keys : {
                    close: []
                }

            });




        });

        function getShiftedString(to_do, shift, input_text, place_to_output) {

            var what_to_do = to_do; //encode=1 decode=2
            var a_shift = shift;  //shift value
            var a_input_text = input_text;    //message to code-decode
            var a_data = {}; //object with data to be send
            a_data["todo"] = what_to_do;
            a_data["shift"] = a_shift;
            a_data["a_input_text"] = a_input_text;
            //AJAX request
            $.ajax({
                type: "POST",
                url: "webinse_faq2/index/translate",
                dataType: "json",
                data: {
                    "catsays": JSON.stringify(a_data)
                },
                //function to be done in success case
                success: function(JSONObjectanswer) {
                    var $JSONObject = JSONObjectanswer;
                    document.getElementById( place_to_output ).innerHTML = $JSONObject.a_input_text;
                    //var data = JSON.stringify(JSONObject).evalJSON();
                    //b_data=JSON.parse(JSONObject);

                    //document.getElementById("output_text").value+="    " + $JSONObject.a_input_text;
                    //document.getElementById("output_text").value+="    " + $JSONObject.JSONChart;
                    //document.getElementById("prediction_text").value = "Predicted shift is " + JSON.stringify($JSONObject.PredictionShift) + "\nPredicted decocded message is: \n" + $JSONObject.Decoded_predict;
                }
                //error: function(jqXHR, textStatus, errorThrown) {
                //    document.getElementById("id3").value = errorThrown;}
            });

        }

    };


});


/*

require([
    'jquery',
    'fancybox',
    'jquery.mousewheel',
    'jquery.fancybox.buttons'
    //'domReady!'
], function($){

    var mageJsComponent = function()
    {
        alert("A simple magento component.");
    };

    return mageJsComponent;

    //alert(this.options);
    console.log('before;');

    return function(config) {
        alert('x');
        console.log(config);
    }

    var div_popup_btn = $("#for_popup a");

    var input_popup = $("#for_popup input[type='text']");

    input_popup.on('change', function() {
        $('#text_in_popup').text( input_popup.val() );
    });

    $('#change_color').on('click', function() {
        var to_do = 'encode';
        var shift = 15;
        var input_text = $('#text_in_popup').text();
        var place_to_output = 'id3';
        getShiftedString(to_do, shift, input_text, place_to_output);
    });

    div_popup_btn.on('click', function() {

        var popup_color = 'black';

        var search_substr = 'popup-overlay-color-';

        var body_classes = $('body').attr('class');
        body_classes = body_classes.split(' ');

        body_classes.forEach(function(item, i, arr) {
            if ( item.indexOf( search_substr ) + 1 ) {
                popup_color = item.substr( search_substr.length );
            }
        });



        $('#id3').text('');

        div_popup_btn.fancybox({
            //content: x,
            autoSize : false,
            topRatio : 0,
            minWidth    : "30%",
            minHeight   : "20%",
            hideOnOverlayClick : false,
            hideOnContentClick : false,
            enableEscapeButton : false,
            showCloseButton : true,
            //modal : true,
            helpers : {
                overlay : {
                    css : {
                        'background' : popup_color
                    },
                    closeClick: false
                },
                buttons: {
                    tpl: ''
                }
            },
            tpl : {
                closeBtn : '<a href="javascript:;">Закрыть</a>'
            },
            keys : {
                close: []
            }

        });




    });











    /!*$(document).ready(function(){


        var div_popup_btn = $("#for_popup a");

        var input_popup = $("#for_popup input[type='text']");

        input_popup.on('change', function() {
            //console.log(input_popup.val());
            $('#text_in_popup').text( input_popup.val() );
        });

        $('#change_color').on('click', function() {
            //$('#text_in_popup').css('color', 'green');
            var to_do = 'encode';
            var shift = 15;
            var input_text = $('#text_in_popup').text();
            var place_to_output = 'id3';
            getShiftedString(to_do, shift, input_text, place_to_output);
        });

        div_popup_btn.on('click', function() {

            var popup_color = 'black';

            var search_substr = 'popup-overlay-color-';

            //var popup_color = document.getElementsByTagName('body').classList;
            var body_classes = $('body').attr('class');
            body_classes = body_classes.split(' ');

            body_classes.forEach(function(item, i, arr) {
                if ( item.indexOf( search_substr ) + 1 ) {
                    //var slice = item.indexOf('popup-overlay-color-');
                    //console.log(slice);
                    popup_color = item.substr( search_substr.length );
                }
            });
            //console.log(body_classes);
            /!*if ( body_classes.indexOf('popup-overlay-color-') + 1 ) {
                console.log('true');
            } else {
                console.log('false');
            }*!/



            $('#id3').text('');

            div_popup_btn.fancybox({
                //content: x,
                autoSize : false,
                topRatio : 0,
                minWidth    : "30%",
                minHeight   : "20%",
                hideOnOverlayClick : false,
                hideOnContentClick : false,
                enableEscapeButton : false,
                showCloseButton : true,
                //modal : true,
                helpers : {
                    overlay : {
                        css : {
                            'background' : popup_color
                        },
                        closeClick: false
                    },
                    buttons: {
                        tpl: ''
                    }
                },
                tpl : {
                    closeBtn : '<a href="javascript:;">Закрыть</a>'
                },
                keys : {
                    close: []
                }
                /!*afterLoad   : function() {
                    this.inner.prepend( '<span id="color_to_change">' + x + '</span>' );
                    this.content = '<button id="change_color">Change color</button>' + this.content.html();
                }*!/

            });




        });

        //$('#change_color').on('click', function() {
        //    alert('123');
        //});

    });*!/


    function getShiftedString(to_do, shift, input_text, place_to_output) {

        var what_to_do = to_do; //encode=1 decode=2
        var a_shift = shift;  //shift value
        var a_input_text = input_text;    //message to code-decode
        var a_data = {}; //object with data to be send
        a_data["todo"] = what_to_do;
        a_data["shift"] = a_shift;
        a_data["a_input_text"] = a_input_text;
        //AJAX request
        $.ajax({
            type: "POST",
            url: "webinse_faq2/index/translate",
            dataType: "json",
            data: {
                "catsays": JSON.stringify(a_data)
            },
            //function to be done in success case
            success: function(JSONObjectanswer) {
                var $JSONObject = JSONObjectanswer;
                document.getElementById( place_to_output ).innerHTML = $JSONObject.a_input_text;
                //var data = JSON.stringify(JSONObject).evalJSON();
                //b_data=JSON.parse(JSONObject);

                //document.getElementById("output_text").value+="    " + $JSONObject.a_input_text;
                //document.getElementById("output_text").value+="    " + $JSONObject.JSONChart;
                //document.getElementById("prediction_text").value = "Predicted shift is " + JSON.stringify($JSONObject.PredictionShift) + "\nPredicted decocded message is: \n" + $JSONObject.Decoded_predict;
            }
            //error: function(jqXHR, textStatus, errorThrown) {
            //    document.getElementById("id3").value = errorThrown;}
        });

    }

});

*/
