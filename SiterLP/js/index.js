$(document).ready(function(){
    $(".select__active").click(function(e){
        $active = this; // select
        $select = $(this)
        $select.toggleClass('cross'); // change icon
        $('.select__active').not($select).removeClass('cross');
        $element = $(this).parent().find(".select__list"); // optgroup
        $('.select__list').not($element).removeClass('d-block'); // hidden opened optgroup
        $element.toggleClass("d-block"); // show optgroup

        $element.find('.select__tariff').click(function(e) {
            $text = this.textContent; // option textContent
            $active.textContent = $text; // select text === option text
            $select.removeClass('cross'); // change icon
            $element.removeClass('d-block'); // hidden optgroup
            
        })
    });


    // slider
    $('.slider-1').slick({
        dots: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false,
            }
        },]
    });
    // slider 


    // add cloned buttons for slider
    $(".slick-arrow").clone().appendTo( ".slider-1" );

    $(".slick-prev:last").addClass("slick-prev_clonned slick-arrow_cloned");
    $(".slick-next:last").addClass("slick-next_clonned slick-arrow_cloned");

    $('.slick-prev_clonned').click(function(){
        $(".slider-1").slick('slickPrev');
    });
    $('.slick-next_clonned').click(function(){
        $(".slider-1").slick('slickNext');
    });

    // choose plan on click
        $(".plan__item").click(function(){
            $(this).parent().children().removeClass("plan__item_active");
            $(this).addClass("plan__item_active");
        });


    $( function() {
        $( ".select" ).selectmenu();
    } );



    // menu
    $(".hamburger").click(function(){
        $('.left-menu').addClass('left-menu_active');
    });



    // browsers notifications 
    var $buoop = { required: { e: -4, f: -3, o: -3, s: -1, c: -3 }, insecure: true, api: 2019.09 };
    function $buo_f() {
        var e = document.createElement("script");
        e.src = "//browser-update.org/update.min.js";
        document.body.appendChild(e);
    };
    try { document.addEventListener("DOMContentLoaded", $buo_f, false) }
    catch (e) { window.attachEvent("onload", $buo_f) }


    function clickOut(cont, contClass, parent = cont) {
        $(document).mouseup(function (e) {
            var container = cont;
            if (container.has(e.target).length === 0) {
                parent.removeClass(contClass);
            }
        });
    };



    menu();
    $(window).resize(function() {
        menu();
    });
    function menu() {
        clickOut($('.left-menu'), 'left-menu_active');
    }




    $('.pesontedan>input[type="checkbox"]'). click(function(){
        $title = $(this).parent().find($('.pesontedan__title'));

        ($(this).prop("checked")) ? $title.removeClass('text') :  $title.addClass('text');
    })


    $('.form__item').focus(function(){
        $parent = $(this).parent();
        $('.form__item-wrapper').removeClass('form__item_focus');
        $parent.addClass('form__item_focus');
    })



    $('#falseinput').click(function(){
        $("#fileinput").click();
    });
    $('#fileinput').change(function() {
        $('#selected_filename').text($('#fileinput]')[0].files[0].name);
    });



    $('.question').hover(function(){
        $(this).parent().parent().parent().children('.ctr__text-wrapper').toggleClass('d-block');
    })
});






