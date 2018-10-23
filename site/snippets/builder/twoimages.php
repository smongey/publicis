<!-- twoimages -->
<section class="<?php if($data->color()->isNotEmpty()) { echo 'grey'; } ?>">
  
  <div class="mesh">
    <div>
      <?php if ($data->left()->isNotEmpty()): ?>
      <img src="<?php echo thumb($page->image($data->left()), array('width' => 800))->url() ?>" alt="">
      <?php endif ?>
    </div>
    <div>
        <?php if ($data->right()->isNotEmpty()): ?>
        <img src="<?php echo thumb($page->image($data->right()), array('width' => 800))->url() ?>" alt="">
        <?php endif ?>
    </div>
  </div>

  <div class="twoimages_caption">
    <p><?php echo $data->caption() ?></p>
  </div>

</section>