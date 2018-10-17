<?php snippet('header') ?>

  <main class="about">

    <section>
      
      <h3 class="t-header">
        <?php echo $page->title() ?>
      </h3>

      <h1 class="t-big">
        <?php echo $page->tagline() ?>
      </h1>

    </section>

    <section>
      <div class="mesh">
        <?php foreach($page->approach()->toStructure() as $a): ?>
        <div>
          <?php echo $a->videolink(); ?>
          <?php echo $a->text(); ?>
        </div>
        <?php endforeach; ?>
      </div>
    </section>

  </main>

<?php snippet('footer') ?>