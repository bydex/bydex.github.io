/*******************SLIDER*******************/

const storagePhoto = document.querySelector('.photo-storage');
const prevPhoto = document.querySelector('.photo-prev');
const nextPhoto = document.querySelector('.photo-next');
const sliderPhoto = document.querySelector('.photo-slider');

for (let i = 1; i <= 10; i++) {
	let newDiv = document.createElement('div');

	newDiv.setAttribute('class', 'newDiv');
	storagePhoto.appendChild(newDiv);
	newDiv.style.backgroundImage = ('url(source/images/photo-galery-slider$' + i + '.jpg)');

	newDiv.onclick = function() {
		imageSrc = getComputedStyle(newDiv).backgroundImage;
		showImage(imageSrc);
	}
}

function showImage(imageSrc) {
	sliderPhoto.style.backgroundImage = imageSrc;
}


prevPhoto.onclick = function() {
	let imageSrc = getComputedStyle(sliderPhoto).backgroundImage;
	let imageCount = imageSrc.slice(imageSrc.indexOf('$') + 1, imageSrc.indexOf('$') + 2);
	let imageCount10 = imageSrc.slice(imageSrc.indexOf('$') + 1, imageSrc.indexOf('$') + 3);
	let imageSrcPhoto = imageSrc.slice(0, imageSrc.indexOf('$'));

	for (let i = 2; i <= 9; i++) {
		if (Number(imageCount) === i) {
			sliderPhoto.style.backgroundImage = imageSrcPhoto + '$' + (i -1) + '.jpg"';
		}	else if (Number(imageCount10) === 10) {
			sliderPhoto.style.backgroundImage = imageSrcPhoto + '$' + 9 + '.jpg"';
		}	else if (Number(imageCount) === 1) {
			sliderPhoto.style.backgroundImage = imageSrcPhoto + '$' + 10 + '.jpg"';
		}
}
}

nextPhoto.onclick = function() {
	let imageSrc = getComputedStyle(sliderPhoto).backgroundImage;
	let imageCount = imageSrc.slice(imageSrc.indexOf('$') + 1, imageSrc.indexOf('$') + 2);
	let imageCount10 = imageSrc.slice('80', '82');
	let imageSrcPhoto = imageSrc.slice(0, imageSrc.indexOf('$'));

	for (let i = 1; i <= 9; i++) {
		if (Number(imageCount) === i) {
			sliderPhoto.style.backgroundImage = imageSrcPhoto + '$' + (i + 1) + '.jpg"';
		}	else if (Number(imageCount10) === 10) {
			sliderPhoto.style.backgroundImage = imageSrcPhoto + '$' + 1 + '.jpg"';
		}
}
}


/*******************PHOTO-ALBUM*******************/
var albums = document.querySelectorAll('.photos-sort-all');

albums[0].style.backgroundColor = '#ea5a4b';
albums[0].style.color = '#fff';

for (var i = 0; i < albums.length; i++) {
	albums[i].onclick = function (e) {
		for (let j = 0; j < albums.length; j++) {
		albums[j].style.backgroundColor = '#fff';
		albums[j].style.color = '#000';
		albums[j].setAttribute('class', 'photos-sort-all');;
		}

		e.target.style.backgroundColor = '#ea5a4b';
		e.target.style.color = '#fff';
		e.target.setAttribute('class', 'album-pick');

		let albumPick = document.querySelector('.album-pick');
		let albumsReturn = document.querySelectorAll('.album');
		switch (albumPick) {
			case albums[0]:
			for (let j = 0; j <= albums.length; j++) {
				albumsReturn[j].style.display = 'block';
			}
			break;
			case albums[1]:
				for (let j = 0; j <= albums.length +1; j++) {
				albumsReturn[j].style.display = 'block';
				}
				albumsReturn[1].style.display = 'none';
				albumsReturn[3].style.display = 'none';
			break;
			case albums[2]:
				for (let j = 0; j <= albums.length +1; j++) {
				albumsReturn[j].style.display = 'block';
				}
				albumsReturn[4].style.display = 'none';
				albumsReturn[5].style.display = 'none';
				albumsReturn[2].style.display = 'none';
			break;
			case albums[3]:
				for (let j = 0; j <= albums.length +1; j++) {
				albumsReturn[j].style.display = 'block';
				}
				albumsReturn[4].style.display = 'none';
				albumsReturn[5].style.display = 'none';
				albumsReturn[2].style.display = 'none';
				albumsReturn[1].style.display = 'none';
				albumsReturn[3].style.display = 'none';
			break;
			case albums[4]:
				for (let j = 0; j <= albums.length +1; j++) {
				albumsReturn[j].style.display = 'block';
				}
				albumsReturn[4].style.display = 'none';
				albumsReturn[0].style.display = 'none';
				albumsReturn[1].style.display = 'none';
				albumsReturn[3].style.display = 'none';
			break;
		}
	}
}



let album = document.querySelectorAll('.album');
for (let i = 0; i < album.length; i++) {
	album[i].style.backgroundImage = 'url("source/images/album' + (i+1) + '.png")'
}









