var bkg = document.getElementsByClassName('button');
function setBackground(event){
    bkg.classList.add('active');
    return;
}
bkg.addEventListener('click',setBackground,false)