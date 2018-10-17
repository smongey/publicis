<?php snippet('header') ?>

  <main class="work">

    <div class="work_introvideo">
      <h3 class="work_welcome"><?php echo page('work')->welcome(); ?></h3>
      <h1 class="work_tagline"><?php echo page('work')->tagline()->kt(); ?></h1>
    </div>

    <div class="work_casestudies">
      <?php snippet('work') ?>
    </div>

  </main>

<?php snippet('footer') ?>