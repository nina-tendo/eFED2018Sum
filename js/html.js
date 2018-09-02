var temp = document.getElementsByClassName('graph_container');
var rainFall = document.getElementsByClassName('rainfall_expectancy');
var wind = document.getElementsByClassName('wind-and-time');
var buttonTemp = document.getElementsByClassName('temperature');
var buttonRain = document.getElementsByClassName('rainfall');
var buttonWind = document.getElementsByClassName('wind');
buttonTemp[0].addEventListener('click', temperature);
buttonRain[0].addEventListener('click', rainFall);
buttonWind[0].addEventListener('click', windy);
function temperature (event){
    if (temp[0].classList.contains('active')) {
        temp[0].classList.remove('active');
    }
	if (event.target.id === 'temperature'){
            rainfall[0].classList.remove('acive');
            wind[0].classList.remove('acive');
            temp[0].classList.add('active');
    }
}
function rainfall (event){
    if (rainfall[0].classList.contains('active')) {
        rainfall[0].classList.remove('active');
    }
    if (event.target.id === 'rainfall'){
            wind[0].classList.remove('acive');
            temp[0].classList.remove('active');
            rainFall[0].classList.add('active');
    }
}
function windy (event){
    if (wind[0].classList.contains('active')) {
        wind[0].classList.remove('active');
    }
    if (event.target.id === 'wind'){
            temp[0].classList.remove('active');
            rainfall[0].classList.remove('acive');
            wind[0].classList.add('active');
    }
}