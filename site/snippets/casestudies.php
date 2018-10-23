<?php

$projects = page('work')->children()->visible();

if(isset($limit)) $projects = $projects->limit($limit);

?>


<section class="casestudies">

  <div class="casestudies_intro">
    <p><?php echo $page->casestext(); ?></p>
  </div>


  <div class="mesh casestudies_thumbs">
    
  <?php foreach($projects as $case): ?>
    
    <div>
      <a href="<?= $case->url() ?>">
        <?php if($image = $case->image($case->thumbnail())): $thumb = $image->crop(800, 580); ?>
          <img src="<?= $thumb->url() ?>" alt="<?= $case->title()->html() ?>" class="showcase-image" />
        <?php endif ?>
        
        <?php 

       $onenightonly = 0;
        foreach($case->sections()->toStructure() as $section):?>
           <?php //echo $section->_fieldset(); ?>
           <?php 
           if($section->_fieldset() == 'text'): ?>
              <?php if($onenightonly == 0) { $sectionTitle = $section->title(); } ?>
              <?php $onenightonly = 1; ?>
           <?php endif ?>

         <?php endforeach; ?>

        <h3 class="t-nav"><?php echo $sectionTitle; ?></h3>
        <h4 class="t-client"><?php echo $case->title()->html() ?></h4>
      </a>
    </div>

  <?php endforeach ?>
  </div>

</section>