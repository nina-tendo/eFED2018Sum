var bkg = document.getElementsByClassName('buttons');
bkg[0].addEventListener('click', function setBackground(event){ 
	if (event.target.id === 'button'){
	for (var i = 0; i < bkg.length; i++){
		bkg[i].childNodes.classList.add('active');
		break;
		}
	}
});
var leftArrow = document.getElementById('left_arrow');
var rightArrow = document.getElementById('right_arrow');
var blockListener = document.getElementsByClassName('js_media');
var todayBlocks = document.getElementsByClassName('today_block');
blockListener[0].addEventListener('click',function(event) {
	if (event.target.id === 'left_arrow') {
		showPrev()
	} else if (event.target.id === 'right_arrow') {
		showNext();	
	}
});

function showNext() {
	for (var i = 0; i < todayBlocks.length; i++) {
		if (todayBlocks[i].classList.contains('activeDay')) {
			todayBlocks[i].classList.remove('activeDay');

			if (i === todayBlocks.length - 1) {
				todayBlocks[0].classList.add('activeDay');
				break;
			}
			
			todayBlocks[i].nextElementSibling.classList.add('activeDay');
			break;
		}
	}
}
function showPrev() {
	for (var i = 0; i < todayBlocks.length; i++) {
	 	if(todayBlocks[i].classList.contains('activeDay')) {
			todayBlocks[i].classList.remove('activeDay');

			if (i === todayBlocks.length - 5) {
				todayBlocks[4].classList.add('activeDay');
				break;
			}
			
			todayBlocks[i].previousElementSibling.classList.add('activeDay');
			break;
		}
	}
}
