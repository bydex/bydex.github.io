var sandwhich = document.querySelector('.nav-sandwhich');
var navList = document.querySelector('.nav-list');

sandwhich.onclick = function () {
	if (navList.style.display === 'block') {
		navList.style.display = 'none';
	}	else {
		navList.style.display = 'block';
	}
}


var navSearch = document.querySelector('.nav-search');
var inputSearch = document.querySelector('.search-input');

navSearch.onclick = function (e) {
	if (inputSearch.style.display === 'block') {
		inputSearch.style.display = 'none';
	}	else {
		inputSearch.style.display = 'block';
	}
}
