$(document).ready(function () {
    $(".select__active").click(function (e) {
        $active = this; // select
        $select = $(this)
        $select.toggleClass('cross'); // change icon
        $('.select__active').not($select).removeClass('cross');
        $element = $(this).parent().find(".select__list"); // optgroup
        $('.select__list').not($element).removeClass('d-block'); // hidden opened optgroup
        $element.toggleClass("d-block"); // show optgroup

        $element.find('.select__tariff').click(function (e) {
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
    $(".slick-arrow").clone().appendTo(".slider-1");

    $(".slick-prev:last").addClass("slick-prev_clonned slick-arrow_cloned");
    $(".slick-next:last").addClass("slick-next_clonned slick-arrow_cloned");

    $('.slick-prev_clonned').click(function () {
        $(".slider-1").slick('slickPrev');
    });
    $('.slick-next_clonned').click(function () {
        $(".slider-1").slick('slickNext');
    });


    // choose plan on click
    $('.plan__item, .select__tariff').on('click', function () {
        var $this = $(this);
        if ($this.hasClass('plan__item_active')) {
            console.log(1)
            return false;
        } else {
            $this.siblings('.plan__item, .select__tariff').removeClass('plan__item_active');
            $this.addClass('plan__item_active').not('.text_xs').closest('.plan-tariff').find('.plan-tariff__tab').children().removeClass('d-block').eq($(this).index()).addClass('d-block');
            console.log(22)
        }
    });


    $(function () {
        $(".select").selectmenu();
    });



    // menu
    $(".hamburger").click(function () {
        $('.left-menu').addClass('left-menu_active');
    });




    function clickOut(cont, contClass, parent) {
        $(document).mouseup(function (e) {
            var container = cont;
            parent = cont;
            if (container.has(e.target).length === 0) {
                parent.removeClass(contClass);
            }
        });
    };



    menu();
    $(window).resize(function () {
        menu();
    });
    function menu() {
        clickOut($('.left-menu'), 'left-menu_active');
    }




    $('.pesontedan>input[type="checkbox"]').click(function () {
        $title = $(this).parent().find($('.pesontedan__title'));

        ($(this).prop("checked")) ? $title.removeClass('text') : $title.addClass('text');
    })


    $('.form__item').focus(function () {
        $parent = $(this).parent();
        $('.form__item-wrapper').removeClass('form__item_focus');
        $parent.addClass('form__item_focus');
    })



    $('#falseinput').click(function () {
        $("#fileinput").click();
    });
    $('#fileinput').change(function () {
        $('#selected_filename').text($('#fileinput]')[0].files[0].name);
    });



    $('.question').hover(function () {
        $(this).parent().parent().parent().children('.ctr__text-wrapper').toggleClass('d-block');
    })
});






