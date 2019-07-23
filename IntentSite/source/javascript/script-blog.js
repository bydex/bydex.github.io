var imgShow = document.getElementById('psd-slider');
var dots = document.querySelectorAll('.dot');



dots[0].style.backgroundColor = '#ea5a4b';
dots[0].onclick = function(e) {
	imgShow.setAttribute('src', 'source/images/dots-img' + 0 + '.jpg');
	dots[1].style.backgroundColor = '#ffffff';
	dots[2].style.backgroundColor = '#ffffff';
	dots[0].style.backgroundColor = '#ea5a4b';
}
dots[1].onclick = function() {
	imgShow.setAttribute('src', 'source/images/dots-img' + 1 + '.jpg');
	dots[0].style.backgroundColor = '#ffffff';
	dots[2].style.backgroundColor = '#ffffff';
	dots[1].style.backgroundColor = '#ea5a4b';
}
dots[2].onclick = function() {
	imgShow.setAttribute('src', 'source/images/dots-img' + 2 + '.jpg');
	dots[0].style.backgroundColor = '#ffffff';
	dots[1].style.backgroundColor = '#ffffff';
	dots[2].style.backgroundColor = '#ea5a4b';
}


var pageCount = document.querySelectorAll('.page-count');

pageCount[0].style.backgroundColor = '#ea5a4b';
pageCount[0].style.color = '#ffffff';

for (var i = 0; i < 3; i++) {
	pageCount[i].onclick = function (e) {
		for (var j = 0; j < 3; j++) {
			pageCount[j].style.backgroundColor = '#ffffff';
			pageCount[j].style.color = '#2d2d2d';
		}
		e.target.style.backgroundColor = '#ea5a4b';
		e.target.style.color = '#ffffff';
	}
}









