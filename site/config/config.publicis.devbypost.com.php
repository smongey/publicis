<?php

/*

---------------------------------------
License Setup
---------------------------------------

Please add your license key, which you've received
via email after purchasing Kirby on http://getkirby.com/buy

It is not permitted to run a public website without a
valid license key. Please read the End User License Agreement
for more information: http://getkirby.com/license

*/

c::set('license', 'K2-PRO-23e8cd6988dd37be7311f122cfb62c94');
c::set('panel.install', true);
c::set('debug', true);
c::set('panel.stylesheet', 'assets/css/panel.css');
// c::set('cache', true);


// for map plugin
c::set('map.key', 'AIzaSyAejlVkvJTY813eXwYB8ERoCm5sxSDlPKo');
c::set('plugin.embed.video.lazyload', false);

c::set('ssl',true);


// CDN

c::set('cdn.assets', 'https://publicis-d95a.kxcdn.com/assets');
c::set('cdn.content', 'https://publicis-d95a.kxcdn.com/content');
c::set('cdn.thumbs','https://publicis-d95a.kxcdn.com/thumbs');

c::set('cachebuster', true);

/*
---------------------------------------
Kirby Configuration
---------------------------------------
By default you don't have to configure anything to
make Kirby work. For more fine-grained configuration
of the system, please check out http://getkirby.com/docs/advanced/options
*/

c::set('routes', array(
  array(
    'pattern' => '/',
    'action'  => function() {
      return site()->visit('work');
    }
  )
));