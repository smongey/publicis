
<!-- text -->
<section class="<?php if($data->color()->isNotEmpty()) { echo 'grey'; } ?>">
  <div class="mesh">
    <div>
      <h3 class="t-header"><?php echo $data->header() ?></h3>
      <h2 class="t-title"><?php echo $data->title() ?></h2>
    </div>
    <div>
      <p><?php echo $data->text() ?></p>
    </div>
  </div>
</section>