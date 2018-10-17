
<!-- quote -->
<section classs="<?php if($data->color()->isNotEmpty()) { echo 'grey'; } ?>">
  

<div class="mesh">
  <div>
    <h2><?= $data->quote() ?></h2>
  </div>
  <div>
    <?= $data->text() ?>
  </div>
</div>


</section>
