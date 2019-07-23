//*DIFFERENCES-slider-start*//
$('.differences__button').click(function () {
	if($(this).hasClass("button-active")){
		
	}else{
		//ПЕРЕМЕННЫЕ
		var page = $(this).attr("rel");

		//ТЕСТ
		console.log(page);

		//ОЧИСТКА
		$(".page").removeClass('slider-active');
		$(".differences__button").removeClass('button-active');

		//Добавление
		$(this).addClass('button-active');
		$(this).add('button-active');


		$(`.page[data-slider-num="${page}"]`).addClass('slider-active');
	}
});






//*ANIMATION-toggle*//
$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});