<!-- Images -->

<?php 
  $numImages = $data->pics()->toStructure()->count();
  $pics = $data->pics()->toStructure(); 
?>


<?php if($numImages == 0): ?>

  <section>

    <h1>You forgot to select an image</h1>
  
  </section>

<?php elseif($numImages == 1): ?>

  <section class="images <?php if($data->color()->isNotEmpty()) { echo 'grey'; } ?>">
    <div class="mesh">
      
      <?php foreach($pics as $p): ?>
        <div>
          <?php echo $page->image($p) ?>
        </div>
      <?php endforeach; ?>

    </div>
    <div class="images_caption">
      <p><?php echo $data->caption() ?></p>
    </div>
  </section>

<?php elseif ($numImages == 2): ?>

  <section class="images <?php if($data->color()->isNotEmpty()) { echo 'grey'; } ?>">
    <div class="mesh">
      
      <?php foreach($pics as $p): ?>
        <div>
          <img src="<?php echo thumb($page->image($p), array('width' => 800))->url() ?>" alt="">
        </div>
      <?php endforeach; ?>

    </div>
    <div class="images_caption">
      <p><?php echo $data->caption() ?></p>
    </div>
  </section>

<?php else: ?>

  <section class="slider <?php if($data->color()->isNotEmpty()) { echo 'grey'; } ?>">

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
          <?php echo thumb($page->image($p), array('height' => 360)); ?>
        </div>
      <?php endforeach; ?>
    </div>
  </section>

<?php endif; ?>


