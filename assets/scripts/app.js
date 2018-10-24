function l(m){console.log(m);}
function d(m){console.dir(m);}

var site = new Site();

// <Site>
function Site() {

  // Vars
  this.isMobile = false;

  this.main = document.querySelector('main');
  this.body = document.getElementsByTagName('body');
  this.emblem = document.querySelector('.header_emblem');
  this.header = document.querySelector('header.header');
  this.headerHeight = document.querySelector('header.header').clientHeight;
  this.menuItems = document.querySelectorAll('.header_menuitem');
  this.work = document.querySelector('.work');
  this.workVid = document.querySelector('.work_introvideo');
  this.welcome = document.querySelector('.work_welcome');
  this.tagline = document.querySelector('.work_tagline');


  // Methods
  
  // init 
  this.init = function() {

    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
      this.isMobile = true;
    }

    l('site.init');
    TweenMax.from(this.body, 1, { opacity: 0, ease: Power4.easeInOut});
    

    TweenMax.from(this.header, 1, { y: -this.headerHeight, ease: Power4.easeInOut, delay: 1  });
    
    TweenMax.from(this.emblem, 1, { opacity: 0, y: -20, ease: Power4.easeOut, delay: 2  });
    TweenMax.staggerFrom(this.menuItems, 1, { opacity: 0, y: -10, ease: Power4.easeOut, delay: 2.25 }, 0.2);

    
    if(!this.isMobile) {
      var controller = new ScrollMagic.Controller();
      var scene = new 
        ScrollMagic.Scene({ offset: 120 })
        .setTween('.header', 0.6, {y: -this.headerHeight, ease: Power4.easeInOut })
        // .setTween('.header', 0.5, {y: 0, ease: Power4.easeIn })
        .addTo(controller)
        .on('update', function(event) {
          l(event);
        });

      controller.addScene(scene);

    }
  };

  this.update = function() {
    l('site.update');
  };

  this.resize = function() {
    l('site.resize');
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

    TweenMax.from(this.work, 1, { y: -this.headerHeight, ease: Power4.easeInOut, delay: 0.25  });
    TweenMax.from(this.workVid, 1, { height: window.innerHeight + this.headerHeight, ease: Power4.easeInOut, delay: 0.25  });

    var tagline = this.spanify(this.tagline);
    TweenMax.staggerFrom(tagline, 1, { opacity: 0, y: -10, ease: Power4.easeOut, delay: 1.5  }, 0.15);

    TweenMax.from(this.welcome, 1, { opacity: 0, y: 15, ease: Power4.easeOut, delay: 3  });


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
  this.spanify = function(element) {

    var withSpans = '';
    var words = element.innerHTML.split(/[\n\r\s]+/);
    words.forEach(function(word){
      withSpans += '<span>' + word + '</span> ';
    });

    element.innerHTML = withSpans;

    return document.querySelectorAll('.' + element.className + ' span');
    // l(document.querySelectorAll(element));

  }

  // menu height
  this.menuHeight = function() {
    // l('site.menuHeight')
    // this.main.style = 'margin-top: ' + (this.headerHeight - 1) + 'px';
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




