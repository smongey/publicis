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

// c::set('panel.install', true);

c::set('debug', true);


c::set('panel.stylesheet', 'assets/css/panel.css');


// for map plugin

c::set('map.key', 'AIzaSyAejlVkvJTY813eXwYB8ERoCm5sxSDlPKo');


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