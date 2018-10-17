
<!-- quote -->
<section classs="<?php if($data->color()->isNotEmpty()) { echo 'grey'; } ?>">
  

<div class="mesh">
  <div>
    <h2><?php echo $data->quote() ?></h2>
  </div>
  <div>
    <?php echo $data->text() ?>
  </div>
</div>


</section>
