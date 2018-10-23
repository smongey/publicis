function l(m){console.log(m);}


var site = new Site();





// <Site>
function Site() {

  // Vars
  this.main = document.querySelector('main');
  this.body = document.getElementsByTagName('body');
  this.emblem = document.querySelector('.header_emblem');
  this.header = document.querySelector('header.header');
  this.headerHeight = document.querySelector('header.header').clientHeight;

  // Methods
  
  // init 
  this.init = function() {
    l('site.init');
    TweenMax.from(this.body, 1, { opacity: 0, ease: Power4.easeInOut});
    TweenMax.from(this.emblem, 1, { opacity: 0, scale: .9, y: 20, ease: Power4.easeInOut, delay: 0.5  })

    var controller = new ScrollMagic.Controller();

    var scene = new 
      ScrollMagic.Scene({ offset: 200 })
      .setTween('.header', 0.3, {y: -this.headerHeight, ease: Power4.easeInOut })
      // .setTween('.header', 0.5, {y: 0, ease: Power4.easeIn })
      .addTo(controller);

    controller.addScene(scene);




  };

  this.update = function() {
    l('site.update');
  };

  this.resize = function() {
    l('site.resize')
    this.menuHeight();
  };
  
  // handle routing
  this.router = function(page) {
    l('site.router');

    this.init();

    switch(window.location.pathname) {
      case '/':
        this.home();
        break;
      case '/work':
        this.home();
        break;
      case '/about':
        this.about();
        break;
      case '/clients':
        this.clients();
        break;
      default:
        if(window.location.pathname.indexOf('work/') > 0) {
          this.casestudy();
        } else {
          l('unassigned');
        }
    }
  };

  // load page
  this.load = function(page) { 
    l('site.load');
  };

  // home
  this.home = function() {
    l('site.home');
    site.menuHeight();
  };

  // clients
  this.clients = function() {
    l('site.clients');
    site.menuHeight();
  };

  // about
  this.about = function() {
    l('site.about');
    site.menuHeight();
    site.map();
  };

  // casestudy
  this.casestudy = function() {
    l('site.casestudy');
    site.menuHeight();
  };


  // UI Elements

  // menu height
  this.menuHeight = function() {
    this.main.style = 'margin-top: ' + (this.headerHeight - 1) + 'px';
  };

  // map
  this.map = function() {
    l('site.map');
    var lat = document.getElementById('map').dataset.lat,
      long = document.getElementById('map').dataset.long,
      markerGraphic = 'https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png',
      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: new google.maps.LatLng(lat, long),
        mapTypeId: 'roadmap',
        zoomControl: false,
        disableDefaultUI: true,
        styles: [
          { "elementType": "geometry", "stylers": [   {     "color": "#e3e9ef"   } ]},
          { "elementType": "labels.icon", "stylers": [   {     "visibility": "off"   } ]},
          { "elementType": "labels.text.fill", "stylers": [   {     "color": "#474b5b"   } ]},
          { "elementType": "labels.text.stroke", "stylers": [   {     "color": "#f5f5f5"   } ]},
          { "featureType": "administrative", "elementType": "geometry", "stylers": [   {     "visibility": "off"   } ]},
          { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [   {     "color": "#474b5b"   } ]},
          { "featureType": "poi", "stylers": [   {     "visibility": "off"   } ]},
          { "featureType": "poi", "elementType": "geometry", "stylers": [   {     "color": "#eeeeee"   } ]},
          { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [   {     "color": "#757575"   } ]},
          { "featureType": "poi.park", "elementType": "geometry", "stylers": [   {     "color": "#e5e5e5"   } ]},
          { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [   {     "color": "#9e9e9e"   } ]},
          { "featureType": "road", "elementType": "geometry", "stylers": [   {     "color": "#ffffff"   } ]},
          { "featureType": "road", "elementType": "labels.icon", "stylers": [   {     "visibility": "off"   } ]},
          { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [   {     "color": "#474b5b"   } ]},
          { "featureType": "road.highway", "elementType": "geometry", "stylers": [   {     "color": "#dadada"   } ]},
          { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [   {     "color": "#474b5b"   } ]},
          { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [   {     "color": "#474b5b"   } ]},
          { "featureType": "transit", "stylers": [   {     "visibility": "off"   } ]},
          { "featureType": "transit.line", "elementType": "geometry", "stylers": [   {     "color": "#e5e5e5"   } ]},
          { "featureType": "transit.station", "elementType": "geometry", "stylers": [   {     "color": "#eeeeee"   } ]},
          { "featureType": "water", "elementType": "geometry", "stylers": [   {     "color": "#474b5b"   } ]},
          { "featureType": "water", "elementType": "labels.text.fill", "stylers": [   {     "color": "#ffffff"   } ]}
        ]
      });

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, long),
      icon: markerGraphic,
      map: map
    });

  };
} // </Site>

document.addEventListener('DOMContentLoaded', site.router());

window.addEventListener('resize', site.resize());




