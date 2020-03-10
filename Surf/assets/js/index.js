$(document).ready(function() {
    $('.nav-links__item, .scroll-arrow-js').on('click', 'a', function(event) {
        event.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 1500)
    })

    $('.main-slider').slick({
        prevArrow:
            '<span class="icon-arrow-left main-slider_prev main-slider__arrows"></span>',
        nextArrow:
            '<span class="icon-arrow-right main-slider_next main-slider__arrows"></span>',
        draggable: false,
        autoplay: true,
        autoplaySpeed: 10000,
        infinite: true,
        asNavFor: '.main-slider-dots',
    })
    $('.surf-slider').slick({
        prevArrow:
            '<span class="icon-arrow-left main-slider_prev main-slider__arrows"></span>',
        nextArrow:
            '<span class="icon-arrow-right main-slider_next main-slider__arrows"></span>',
        // autoplay: true,
        // autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 4,
        arrows: true,
        asNavFor: '.surf-dots',
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    })
    $('.travel-slider').slick({
        prevArrow:
            '<span class="icon-arrow-left main-slider_prev main-slider__arrows"></span>',
        nextArrow:
            '<span class="icon-arrow-right main-slider_next main-slider__arrows"></span>',
        draggable: false,
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true,
    })
    $('.main-slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.main-slider',
    })
    $('.surf-dots').slick({
        slidesToShow: 8,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
    })

    function sliderCount(element) {
        $(element)
            .eq($('header .slick-track .slick-active').data('slick-index'))
            .addClass('active')
            .siblings()
            .removeClass('active')
    }

    $('.main-slider').on('afterChange', function(
        event,
        slick,
        currentSlide,
        nextSlide
    ) {
        $('.main-slider-dots .slick-slide').removeClass('slick-active')
    })
    $('.main-slider').on('afterChange', function() {
        sliderCount('.main-slider-dots .dot')
        sliderCount('.line-road')
        sliderCount('.shore-name')
    })

    function marginSurfSlider() {
        let i = 1
        $('.surf-slider .slick-active').each(function() {
            $('.surf-slider .slick-slide').removeClass('slick-active-' + i)
            $(this).addClass('slick-active-' + i)
            i++
        })
    }
    marginSurfSlider()

    function number_to(element, from, to, duration) {
        var start = new Date().getTime()
        setTimeout(function() {
            var now = new Date().getTime() - start
            var progress = now / duration
            var result = Math.floor((to - from) * progress + from)
            element.innerHTML = progress < 1 ? result : to
            if (progress < 1) setTimeout(arguments.callee, 10)
        }, 10)
    }
    let latitude = document.querySelector('.coordinates__latitude'),
        longitude = document.querySelector('.coordinates__longitude')

    function setCoordinates() {
        let coordinate = $('.surf-dot.slick-current').position()
        number_to(
            latitude,
            parseInt(latitude.innerText, 16),
            parseInt(coordinate.left, 16),
            2000
        )
        number_to(
            longitude,
            parseInt(longitude.innerText, 16),
            parseInt(coordinate.top, 16),
            2000
        )
    }
    setCoordinates()
    $('.surf-slider').on('afterChange', function() {
        marginSurfSlider()
        setCoordinates()
    })

    function parseNumber(el) {
        var numEl = ''
        for (var index in el) {
            if (parseInt(el[index]) || el[index] == 0) {
                numEl += el[index]
            }
        }
        return parseInt(numEl, 10)
    }
    function writeTextByJS(ele, text, speed, interval) {
        ele.innerText = ''
        clearInterval(interval)
        let txt = text.join('').split('')

        interval = setInterval(
            function() {
                if (!txt[0]) {
                    return clearInterval(interval)
                }

                ele.innerHTML += txt.shift()
            },
            speed != undefined ? speed : 100
        )

        return false
    }

    function setTravelOptions() {
        let slide = $('.travel .travel-slider .slick-current'),
            city = document.querySelector('.travel .city'),
            miles = document.querySelector('.travel .miles'),
            hours = document.querySelector('.travel .time-hours'),
            minutes = document.querySelector('.travel .time-minutes'),
            price = document.querySelector('.travel .price'),
            sliderInfo = {
                city: slide.data('city'),
                miles: slide.data('miles'),
                hours: slide.data('hours'),
                minutes: slide.data('minutes'),
                price: slide.data('price'),
            }
        let interval
        clearInterval(interval)
        writeTextByJS(city, [sliderInfo.city], interval)
        number_to(
            miles,
            parseNumber(miles.innerText),
            parseNumber(sliderInfo.miles.toString()),
            2000
        )
        number_to(
            hours,
            parseNumber(hours.innerText),
            parseNumber(sliderInfo.hours.toString()),
            2000
        )
        number_to(
            minutes,
            parseNumber(minutes.innerText),
            parseNumber(sliderInfo.minutes.toString()),
            2000
        )
        number_to(
            price,
            parseNumber(price.innerText),
            parseNumber(sliderInfo.price.toString()),
            2000
        )
    }
    setTravelOptions()
    $('.travel .travel-slider').on('afterChange', function() {
        setTravelOptions()
    })

    function setSleepOptions() {
        let slide = $('.sleep .travel-slider .slick-current'),
            city = document.querySelector('.sleep .city'),
            sliderInfo = {
                city: slide.data('city'),
            }
        writeTextByJS(city, [sliderInfo.city])
        scoreSleepOptions()
    }
    function scoreSleepOptions() {
        let slide = $('.sleep .travel-slider .slick-current'),
            price = document.querySelector('.sleep .price'),
            nights = $('.count-nights'),
            guests = $('.count-guests')
        ;(sliderInfo = {
            nightsIncrease: slide.data('nights'),
        }),
            (total =
                +nights.text() * +guests.text() * sliderInfo.nightsIncrease)
        number_to(
            price,
            parseNumber(price.innerText),
            parseNumber(total.toString()),
            2000
        )
    }
    $('.count-button').click(function() {
        let countEl = $(this)
                .closest('.table__title')
                .find('.count'),
            count = +countEl.html()

        $(this).hasClass('plus-minus__minus')
            ? countEl.html(() => {
                  if (count > 0) {
                      return --count
                  }
              })
            : countEl.html(++count)
        scoreSleepOptions()
    })

    setSleepOptions()
    $('.sleep .travel-slider').on('afterChange', function() {
        setSleepOptions()
    })
})
