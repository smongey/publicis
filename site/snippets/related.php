
<!-- related -->
<section class="related">
  
  <div class="related_header">
  
    <h3>Experience More.</h3>
  
  </div>
  
  <div class="related_cols">

  


    <?php foreach($page->related()->toStructure() as $r): ?>
    <div>
      <a href="<?php echo page($r)->url(); ?>">
      <?php echo page($r)->image(page($r)->thumbnail()); ?>
  

        <?php $onenightonly = 0;
        foreach(page($r)->sections()->toStructure() as $section):?>
           <?php //echo $section->_fieldset(); ?>
           <?php 
           if($section->_fieldset() == 'text'): ?>
              <?php if($onenightonly == 0) { $sectionTitle = $section->title(); } ?>
              <?php $onenightonly = 1; ?>
           <?php endif ?>

         <?php endforeach; ?>

        <h3 class="t-nav"><?php echo page($r)->description(); ?></h3>
        <h4 class="t-client"><?php echo page($r)->title()->html() ?></h4>

      </a>
    </div>
    <?php endforeach; ?>
  </div>

</section>
