/*SELECT-dropdown*/
const selectList 	= document.getElementById('select__list');
const selectActive 	= document.getElementById('select__active');
const selectItem 	= document.querySelectorAll('.select__item');
const selectCity	= document.querySelectorAll('.select__city');

function getClass(argument) {
	return argument.getAttribute('class');
}

selectActive.onclick = function () {
	if (getClass(selectList) === 'select__hidden') {
		selectList.setAttribute('class', 'select__show');
	}	else {
		selectList.setAttribute('class', 'select__hidden');
	}
}

for (var i = 0; i < selectItem.length; i++) {
	selectItem[i].onclick = function (e) {
		selectActive.textContent = this.textContent.slice(0, this.textContent.indexOf('('));
		selectList.setAttribute('class', 'select__hidden');
	}
}






/*DROPDOWN-menu*/
const toggler 		= document.getElementById('toggler');
const dropdownNav 	= document.getElementById('dropdown-navbar');
const linkHeader 	= document.querySelectorAll('.link-header-dropdown');

toggler.onclick = function () {
	if (getClass(dropdownNav) === 'dropdown__hidden') {
		dropdownNav.setAttribute('class', 'dropdown__show');
	}	else {
		dropdownNav.setAttribute('class', 'dropdown__hidden');
	}

	for (var i = 0; i < linkHeader.length; i++) {
	linkHeader[i].onclick = function () {
		dropdownNav.setAttribute('class', 'dropdown__hidden');
	}
}
}