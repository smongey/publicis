

<?php if ($data->picture()->isNotEmpty()): ?>
<!-- fullimage -->
<?php // echo $page->image($data->picture())->height(); ?>
<div class="intro anim">
  <img src="<?php echo $page->image($data->picture())->url() ?>" alt="">
</div>
<?php endif ?>