<!-- slider -->

<section class="slider <?php if($data->color()->isNotEmpty()) { echo 'grey'; } ?>">
  
  <?php $pictures = explode('- ', $data->pics()->value()); ?>
  <?php //echo var_dump($pictures); ?>
  <?php //$count = ; 
    //echo var_dump($pictures);
  
    $pics = $data->pics()->yaml();

  ?>

  <div class="slider_carousel" 
    data-flickity='{ 
    "cellAlign": "left", 
    "imagesLoaded": true,
    "cellSelector": ".slider_slide",
    "percentPosition": false,
    "prevNextButtons": false,
    "pageDots": false,
    "freeScroll": true
   }'>
  
    <?php foreach($pics as $p): ?>
      <div class="slider_slide">
      <?php $imagoObj = $page->image($p); ?>
      <?php echo $page->image($p); ?>
      <?php // echo thumb($imageObj, array('height' => 350, 'crop' => true))->url(); ?>
      </div>
    <?php endforeach; ?>

  </div>


</section>