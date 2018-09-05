
				var buttons = document.getElementsByClassName('buttons');
			var buttonsBlock = document.querySelector('#buttons');
			var button = document.querySelectorAll('.button');
			buttonsBlock.onclick = function(event) {	
				if (event.target.classList.contains('button')) {		
					showDay(event.target.dataset.index);	
				}
			}
				buttons[0].addEventListener('click', function (event){ 
				buttons[0].classList.add('active');
					 if (this.classList.contains('active')){
						this.classList.remove('active');
						event.target.classList.toggle('active');
				}
			});
		buttonsBlock.onclick = function(event) {
		if (event.target.classList.contains('button')) {
			showDay(event.target.dataset.index);	
		}
	}
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
function showDay(index) {	
for (var i = 0; i < todayBlocks.length; i++) {		
	if (todayBlocks[i].classList.contains('activeDay')) {			
		todayBlocks[i].classList.remove('activeDay');			
		// TODO: change nav button style			
		todayBlocks[index].classList.add('activeDay');			
		break;		
		}
	}
}	
function showNext() {
	for (var i = 0; i < todayBlocks.length; i++) {
		if (todayBlocks[i].classList.contains('activeDay')) {
			todayBlocks[i].classList.remove('activeDay');

			if (i === todayBlocks.length - 1) {
				todayBlocks[0].classList.add('activeDay');
				button[0].classList.add('active');	
				break;
			}
			
			todayBlocks[i].nextElementSibling.classList.add('activeDay');			
				button[i].nextElementSibling.classList.add('active');	
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
				button[4].classList.add('active');	
				break;
			}
			
			todayBlocks[i].previousElementSibling.classList.add('activeDay');
			button[i].previousElementSibling.classList.add('active');	break;
		}
	}
}
