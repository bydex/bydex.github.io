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