<?php snippet('header') ?>

  <main class="work">
  
    <div class="work_introvideo <?php if($page->whitetext() == '1') { echo 'work-white'; } ?>">
      <h3 class="work_welcome"><?php echo page('work')->welcome(); ?></h3>
      <h1 class="work_tagline"><?php echo page('work')->tagline(); ?></h1>

    <?php
    if (detect()->isMobile()) {
      if($page->introvideomob()->isEmpty()) { 
        $video = $page->introvideo();
      } else {
        $video = $page->introvideomob();
      }
    } else {
      $video = $page->introvideo();
    }
    ?>

      <video class="work_video out"
        muted
        autoplay
        playsinline 
        loop
        src="<?php echo $video; ?>">
      </video>

    </div>

    <?php snippet('casestudies') ?>

  </main>

    <?php snippet('showreel') ?>
  

<?php snippet('footer') ?>