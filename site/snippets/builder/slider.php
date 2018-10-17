<!-- slider -->

<section class="slider <?php if($data->color()->isNotEmpty()) { echo 'grey'; } ?>">
  Slider:<br/>
  <?php echo $data->images(); ?>

</section>