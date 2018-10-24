
<!-- text -->
<section class="text <?php if($data->color()->isNotEmpty()) { echo 'grey'; } ?>">
  <div class="mesh">
    <div>
      <?php echo $data->left()->kt(); ?>
    </div>
    <div>
      <?php echo $data->right()->kt(); ?>
    </div>
  </div>
</section>