<!-- twoimages -->
<section class="<?php if($data->color()->isNotEmpty()) { echo 'grey'; } ?>">
  
  <div class="mesh">
    <div>
      <?php if ($data->left()->isNotEmpty()): ?>
      <img src="<?php echo $page->image($data->left())->url() ?>" alt="">
      <?php endif ?>
    </div>
    <div>
        <?php if ($data->right()->isNotEmpty()): ?>
        <img src="<?php echo $page->image($data->right())->url() ?>" alt="">
        <?php endif ?>
    </div>
  </div>

  <div style="text-align: right;">
    <p><?php echo $data->caption() ?></p>
  </div>

</section>