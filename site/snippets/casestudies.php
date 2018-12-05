<?php

$projects = page('work')->children()->visible();

if(isset($limit)) $projects = $projects->limit($limit);

?>


<section class="casestudies" id="casestudies">

  <div class="casestudies_intro anim">
    <p><?php echo $page->casestext()->kt(); ?></p>
  </div>


  <div class="mesh casestudies_thumbs">
    
  <?php foreach($projects as $case): ?>
    
    <div>
      <a href="<?= $case->url() ?>" onclick="site.load(event)">
        <?php if($image = $case->image($case->thumbnail())): $thumb = $image->crop(800, 580); ?>
          <div class="duo">
            <img src="<?= $thumb->url() ?>" alt="<?= $case->title()->html() ?>" data-gradient-map="#474b5a, #f73449" class="duotone" />
            <img src="<?= $thumb->url() ?>" alt="<?= $case->title()->html() ?>" class="showcase-image" />
          </div>
        <?php endif ?>
        
        <?php 
        $onenightonly = 0;
        foreach($case->sections()->toStructure() as $section):?>
           <?php if($section->_fieldset() == 'text'): ?>
              <?php if($onenightonly == 0) { $sectionTitle = $section->left(); } ?>
              <?php $onenightonly = 1; ?>
           <?php endif ?>

         <?php endforeach; ?>

        <h3 class="t-nav"><?php echo $case->description(); ?></h3>
        <h4 class="t-client"><?php echo $case->title()->html() ?></h4>
      </a>
    </div>

  <?php endforeach ?>

  <?php 
  $show = false;
  if($page->showreel()->isNotEmpty() && $page->showreelmob()->isNotEmpty()) {
      $show = true;
  }
  ?>
    <?php if($show === true): ?>
    <div>
      <a href="#" onclick="site.showreel(event)">
        <div class="showreelthumb">
          <div class="duo">
            <img src="//placehold.it/800x580" alt="<?= $case->title()->html() ?>" data-gradient-map="#474b5a, #f73449" class="duotone" />
            <img src="//placehold.it/800x580" alt="<?= $case->title()->html() ?>" class="showcase-image" />
          </div>
          <span class="playbutton"></span>
        </div>
        <h3 class="t-nav">Our Showreel</h3>
        <h4 class="t-client">Take a gander</h4>
      </a>
    </div>
    <?php endif; ?>
    </div>
  
</section>