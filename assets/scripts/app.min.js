function l(m){console.log(m);}

const menuHeight = () => {

  l('menuHeight');
  let menuHeight = document.querySelector('header.header').clientHeight,
      main = document.querySelector('main');

  main.style = 'margin-top: ' + (menuHeight - 1) + 'px';

};



// on ready 
// router

  // home function
  // about function
  // clients function


// on resize



function home() {
  l('home');

  let menuHeight = document.querySelector('header.header').clientHeight;
  let intro = document.querySelector('.work_introvideo'),
      main = document.querySelector('main');

  main.style = 'margin-top: ' + (menuHeight - 1) + 'px';
  intro.style = 'height: ' + (window.innerHeight - menuHeight) + 'px';


}

function clients() {
  l('clients');
  menuHeight();
}

function about() {
  l('about')
  menuHeight();
}

function casestudy() {
  l('casestudy');
  menuHeight();
}



function router() {
  switch(window.location.pathname) {
    case '/':
      home();
      break;
    case '/work':
      home();
      break;
    case '/about':
      about();
      break;
    case '/clients':
      clients();
      break;
    default:
      if(window.location.pathname.indexOf('work/') > 0) {
        casestudy();
      } else {
        l('unassigned');
      }

  }
}


document.addEventListener('DOMContentLoaded', router());


// function(){
  

//   if(window.location.pathname == '/') {
//     l('DOM');
//   }

// }


window.addEventListener('resize', function(){
  
  l('resize')
  menuHeight();

})



// const loaded = () => {
//   l('loaded');
// } 


// if(window.location.pathname == '/') {
//   window.onload = loaded; 
// }
