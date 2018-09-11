
var date = new Date(2018, 0);
var city = "London";
var input = document.querySelector('input');
 input.onkeydown = function (event){
 	if (event.keyCode === 13){
	  load(city,date);
	}
}
function load (city,date) {
	var year = date.getFullYear();
	var data = historicalReviewMock[city][year];
	render(data);
}
function render (data) {
	var td = document.querySelectorAll('table tr:nth-child(2)')[0].children;
	td = [].slice.call(td, 1);
		for (var i = 0; i < td.length; i++){
			td[i].innerText = data[i].average;
	}
}
