
function l(m){console.log(m);}



const menuHeight = () => {
  l('menuHeight');
  let menuHeight = document.querySelector('header.header').clientHeight,
      main = document.querySelector('main');
  
  main.style = 'margin-top: ' + (menuHeight - 1) + 'px';

};




document.addEventListener("DOMContentLoaded",function(){
  
  l('DOM');
  menuHeight();

});



const loaded = () => {
  l('loaded');
} 


window.onload = loaded; 
