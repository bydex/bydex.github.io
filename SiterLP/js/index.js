$(document).ready(function () {
function e(e, t, s) {
    $(document).mouseup(function (l) {
        s = e,
            0 === e.has(l.target).length && s.removeClass(t)
    })
}
function t() {
    e($(".left-menu"), "left-menu_active")
}
    $(".select__active").click(function (e) {
        $active = this,
            $select = $(this),
            $select.toggleClass("cross"),
            $(".select__active").not($select).removeClass("cross"),
            $element = $(this).parent().find(".select__list"),
            $(".select__list").not($element).removeClass("d-block"),
            $element.toggleClass("d-block"),
            $element.find(".select__tariff").click(function (e) {
                $text = this.textContent,
                    $active.textContent = $text,
                    $select.removeClass("cross"),
                    $element.removeClass("d-block")
            })
    }),
    $(".slider-1").slick({
        dots: !0,
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: !1
            }
        }]
    }),
    $(".slick-arrow").clone().appendTo(".slider-1"),
    $(".slick-prev:last").addClass("slick-prev_clonned slick-arrow_cloned"),
    $(".slick-next:last").addClass("slick-next_clonned slick-arrow_cloned"),
    $(".slick-prev_clonned").click(function () {
        $(".slider-1").slick("slickPrev")
    }),
    $(".slick-next_clonned").click(function () {
        $(".slider-1").slick("slickNext")
    }),
    $(".plan__item, .select__tariff").on("click", function () {
        var e = $(this);
        if (e.hasClass("plan__item_active"))
            return console.log(1),
                !1;
        e.siblings(".plan__item, .select__tariff").removeClass("plan__item_active"),
            e.addClass("plan__item_active").not(".text_xs").closest(".plan-tariff").find(".plan-tariff__tab").children().removeClass("d-block").eq($(this).index()).addClass("d-block"),
            console.log(22)
    }),
    $(function () {
        $(".select").selectmenu()
    }),
    $(".hamburger").click(function () {
        $(".left-menu").addClass("left-menu_active")
    }),
    t(),
    $(window).resize(function () {
        t()
    }),
    $('.pesontedan>input[type="checkbox"]').click(function () {
        $title = $(this).parent().find($(".pesontedan__title")),
            $(this).prop("checked") ? $title.removeClass("text") : $title.addClass("text")
    }),
    $(".form__item").focus(function () {
        $parent = $(this).parent(),
            $(".form__item-wrapper").removeClass("form__item_focus"),
            $parent.addClass("form__item_focus")
    }),
    $("#falseinput").click(function () {
        $("#fileinput").click()
    }),
    $("#fileinput").change(function () {
        $("#selected_filename").text($("#fileinput]")[0].files[0].name)
    }),
    $(".question").hover(function () {
        $(this).parent().parent().parent().children(".ctr__text-wrapper").toggleClass("d-block")
    })
});
