var temp = document.getElementsByClassName('graph_container');
var rainFall = document.getElementsByClassName('rainfall_expectancy');
var wind = document.getElementsByClassName('wind-and-time');
var buttonTemp = document.getElementsByClassName('temperature');
var buttonRain = document.getElementsByClassName('rainfall');
var buttonWind = document.getElementsByClassName('wind');
var buttonsBlock = document.querySelector('#buttons');
var diag = document.getElementsByClassName('diag');
// buttonTemp[0].addEventListener('click', temperature);
// buttonRain[0].addEventListener('click', rain);
// buttonWind[0].addEventListener('click', windy);
// function temperature (event){
//         buttonTemp[0].classList.add('activeButton')
//     if (buttonTemp[0].classList.contains('activeButton')) {
//          temp[0].classList.remove('active');
//     }
// 	if (event.target.dataset.index == 0){
//             // rainfall[0].classList.remove('active');
//             // wind[0].classList.remove('active');
//             temp[0].classList.add('active');
//     }
// }
// function rain (event){
//         buttonRain[0].classList.add('activeButton')
//     if (buttonRain[0].classList.contains('activeButton')) {
//          rainfall[0].classList.remove('active');
//     }
//     if (event.target.dataset.index == 1){
//             // temp[0].classList.remove('active');
//             // wind[0].classList.remove('active');
//            rainFall[0].classList.add('active');
//     }
// }
// function windy (event){
//         buttonWind[0].classList.add('activeButton')
//     if (buttonWind[0].classList.contains('activeButton')) {
//          wind[0].classList.remove('active');
//     }
//     if (event.target.dataset.index == 2){
//             // temp[0].classList.remove('active');
//             // rainfall[0].classList.remove('active');
//             wind[0].classList.add('active');
//     }
// }
buttonsBlock.onclick = function(event) {
    if (event.target.classList.contains('button')) {
        showDiag(event.target.dataset.index);	
    }
}
function showDiag(index) {	
    for (var i = 0; i < diag.length; i++) {		
        if (diag[i].classList.contains('active')) {			
            diag[i].classList.remove('active');						
            diag[index].classList.add('active');			
            break;		
            }
        }
    }	