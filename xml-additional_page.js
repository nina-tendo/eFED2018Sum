let request = fetch('api.openweathermap.org/data/2.5/forecast?appid=e33262cd6a432b1c3dc5181a736dbc41&q=tokyo') 
  .then(function () { 

    if (this.readyState != 4) return; 

    if (this.status != 200) {
      alert('ошибка: ' + (this.status ? this.statusText : 'запрос не удался')); 
      return; 
    }
    parseData(response);

  }); 
function parseData (response){
  newArray = JSON.parse(response);
  newObj = newArray;
  render(renderData);
}
var renderData = {
	city:"Tokyo",
	
};
function render(obj){

}
var input = document.querySelector('input');
input.onkeydown = function (event){
if (event.keyCode === 13){
  event.preventDefault();
}
}