<?php snippet('header') ?>

  <main class="about">

    <section>
      
      <h3 class="t-header">
        <?php echo $page->title() ?>
      </h3>

      <h1 class="t-big">
        <?php echo $page->tagline()->kt(); ?>
      </h1>

    </section>

    <section>
      
      <h4 class="t-header">Our approach</h4>
      <div class="mesh">
        <?php foreach($page->approach()->toStructure() as $a): ?>
          <?php $vidId = explode('vimeo.com/', $a->videolink())[1]; ?>
          
        <div>
          <iframe src="https://player.vimeo.com/video/<?php echo $vidId; ?>" width="100%" height="600" frameborder="0" allowfullscreen></iframe>
          <p><?php echo $a->text(); ?></p>
        </div>
        <?php endforeach; ?>
      </div>
    </section>

  </main>

<?php snippet('footer') ?>