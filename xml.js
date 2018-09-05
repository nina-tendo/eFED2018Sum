var xhr = new XMLHttpRequest(); 

  xhr.open('GET', 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22', true); 
 
  xhr.send(); 

  xhr.onreadystatechange = function() { 

    if (this.readyState != 4) return; 

    if (this.status != 200) {
      alert('ошибка: ' + (this.status ? this.statusText : 'запрос не удался')); 
      return; 
    }

    alert(xhr.responseText);

  }; 
