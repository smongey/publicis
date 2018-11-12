<?php snippet('header') ?>

  <main class="work">

    <div class="work_introvideo">
      <h3 class="work_welcome"><?php echo page('work')->welcome(); ?></h3>
      <h1 class="work_tagline"><?php echo page('work')->tagline(); ?></h1>

     <video class="work_video out"
        muted
        paused
        playsinline 
        src="<?php echo $page->introvideo(); ?>">
      </video>

<!-- https://player.vimeo.com/external/268801085.hd.mp4?s=940808a36a960177a368954fda4f6f9946f901b7&profile_id=175 -->

    </div>

    <?php snippet('casestudies') ?>

  </main>

<?php snippet('footer') ?>