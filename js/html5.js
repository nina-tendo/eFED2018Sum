var buttons = document.getElementsByClassName('buttons');
var button = document.querySelectorAll('button');
buttons[0].addEventListener('click', function (event){ 
		buttons[0].classList.add('active');
			var oldActiveElement = document.querySelector('.active');
			oldActiveElement.classList.remove('active');
			var newActiveElement = event.target;
				newActiveElement.classList.add('active');
			if (event.target.classList.contains('active')) {      
				showDay(event.target.dataset.index);      
				for (let i = 0; i < buttons.length; i++) {        
					if (buttons[i].classList.contains('activeDay')) {          
						buttons[i].classList.remove('activeDay');
					  buttons[event.target.dataset.index].classList.add('activeDay');          
					  break;        
						}	  
					}    
				}  
			});
			// var newActiveElement = event.target;
			// 	newActiveElement.classList.toggle('active');
			// 	for (var i = 0; i < todayBlocks.length; i++) {
			// 		if (todayBlocks[i].classList.contains('activeDay')) {
			// 			todayBlocks[i].classList.remove('activeDay');
			
			// 			if (i === button[0].dataset.index) {
			// 				todayBlocks[i].classList.add('activeDay');
			// 				break;
			// 			}
						
						// todayBlocks[i].classList.add('activeDay');
						// break;
// 					}
// 				}
// });

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
function showDay() {
	for (var i = 0; i < todayBlocks.length; i++) {
		if (todayBlocks[i].classList.contains('activeDay')) {
			todayBlocks[i].classList.remove('activeDay');

			if (event.target.id === 'button') {
				todayBlocks[i].classList.add('activeDay');
				break;
			}
		}
	}
}
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
