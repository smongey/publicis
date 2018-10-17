<!-- video -->
<section class="video <?php if($data->color()->isNotEmpty()) { echo 'grey'; } ?>">
  

  <?php if($data->ambient()->isNotEmpty()): ?>

    <h1>Background Video</h1>

  <?php else: ?>

    <h1>Vimeo Video</h1>

  <?php endif; ?>

  <?= $data->video()->embed()->title() ?>

  Caption: <?php echo $data->caption() ?>


</section>
