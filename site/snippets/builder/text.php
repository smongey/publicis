
<!-- text -->
<section class="<?php if($data->color()->isNotEmpty()) { echo 'grey'; } ?>">
  <div class="mesh">
    <div>
      <h3 class="t-header"><?= $data->header() ?></h3>
      <h2 class="t-title"><?= $data->title() ?></h2>
    </div>
    <div>
      <p><?= $data->text() ?></p>
    </div>
  </div>
</section>