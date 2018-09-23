var Count = 0;
function createCounter(){
    return {
    next: function(){
        return Count++;
    },
    prev: function(){
        return Count--;
    }
  }
};
      createCounter().next();
      createCounter().next();
      createCounter().next();
      createCounter().prev();
    console.log(Count);
      