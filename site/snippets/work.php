<?php

$projects = page('work')->children()->visible();

if(isset($limit)) $projects = $projects->limit($limit);

?>
<section>
  
  <div class="mesh">
  <?php foreach($projects as $case): ?>

    <div>
      <a href="<?= $case->url() ?>">
        <?php if($image = $case->image($case->thumbnail())): $thumb = $image->crop(800, 600); ?>
          <img src="<?= $thumb->url() ?>" alt="<?= $case->title()->html() ?>" class="showcase-image" />
        <?php endif ?>
        <div class="showcase-caption">
          <h3 class="showcase-title"><?= $case->title()->html() ?></h3>
        </div>
      </a>
    </div>

  <?php endforeach ?>
  </div>

</section>
