function compare(arg1,arg2){
    if (arg1<arg2)
        return -1;
    else if (arg1==arg2)
        return 0;
    else if (arg1>arg2)
        return 1;
}
function comparePromise(arg1,arg2){
return new Promise(function(resolve,reject){
setTimeout(function()  {

    resolve(compare(arg1,arg2));
});
}, 1000);
};
comparePromise(3,2)
.then
(
function(result){
    console.log(result);
} 
)