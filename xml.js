var xhr = new XMLHttpRequest(); 

  xhr.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?appid=e33262cd6a432b1c3dc5181a736dbc41&q=tokyo', true); 
 
  xhr.send(); 

  xhr.onload = function () { 

    if (this.readyState != 4) return; 

    if (this.status != 200) {
      alert('ошибка: ' + (this.status ? this.statusText : 'запрос не удался')); 
      return; 
    }
    parseData(xhr.responseText);

  }; 
function parseData (response){
 
  newArray = JSON.parse(response);
  newObj = newArray;
 

  render(renderData);
}
// var renderData = {
// 	city:
// 	average-max:
// 	average-min:
// 	all-max:
// 	all-min:
// };
function render(obj){
 var current = document.getElementsByTagName('td');
}
// отображение по мокам
var date = new Date(2016, 0);
var city = 'London';
load(city,date);
function load (city,date) {
	var year = date.getFullYear();
	var data = ;
}
var td = document.querySelectorAll('table tr:nth-child(2)')[0].children;
// td.slice(1);
console.log([].slice.call(td, 1));