function randomA(sumWith) {
    return new Promise(function(resolve) {
      var timeout = Math.random()*3000;
      setTimeout(function(){
        resolve(Math.random()*3 + sumWith);
    }, timeout)
  })
}
randomA(10)
.then(function(sumWith){
	console.log(sumWith * 3)
})
function randomB() {
    return new Promise(function(resolve) {
      var timeout = Math.random()*3000;
      setTimeout(function(){
        resolve(Math.random()*3);
    }, timeout)
  })
}
randomB()
.then(function(result){
	
})