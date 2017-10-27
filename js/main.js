//запускаем видео по нажатию кнопки

var frame = document.getElementById('frame');
var video = document.getElementById('video');
var btn = document.getElementById('play-btn');


window.onload =	function() {
		document.getElementById('play-btn').onclick = function() {
			video.style.display = 'none';
			frame.style.display = 'block';
			btn.style.display = 'none';
			frame.src = 'https://www.youtube.com/embed/ng07h-xhx-w?autoplay=1';
		}
}	

//плавный скроллинг

$(document).ready(function(){

		$("#menu").on("click","a", function (event) {
				event.preventDefault();
				var id  = $(this).attr('href'),
						top = $(id).offset().top;
				$('body,html').animate({scrollTop: top}, 700);
		});
});
