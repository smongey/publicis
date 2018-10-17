
<!-- fullimage -->
<div class="intro">
  <?php if ($data->picture()->isNotEmpty()): ?>
  <img src="<?= $page->image($data->picture())->url() ?>" alt="">
  <?php endif ?>
</div>