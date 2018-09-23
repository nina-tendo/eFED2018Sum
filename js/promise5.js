var timer = setInterval(function() {
    console.log('пук');
}, 2000);
    setTimeout(function() {
        clearInterval(timer);
}, 10000);