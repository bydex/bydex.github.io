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


    // add cloned buttons for slider
    $(".slick-prev").clone().appendTo( ".slider-1" );
    $(".slick-next").clone().appendTo( ".slider-1" );

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
        $('.left-menu').toggleClass('d-block');
    });






    $(document).ready(function() {
        menu();
    });
    $(window).resize(function() {
        menu();
    });
    function menu() {
        if ($(window).width() <= 1500) {
            $(document).mouseup(function (e) {
                var container = $(".left-menu");
                if (container.has(e.target).length === 0){
                    container.removeClass('d-block');
                }
            });
        }
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
});






