<?php snippet('header') ?>

<!--[if lte IE 8]>
    <div id="ie">Sorry, you’re not seeing us at our best. For the real experience, our site is best viewed in <a href="https://www.google.com/chrome/?brand=CHBD&gclid=EAIaIQobChMI3rrB6Mze3wIVw7ztCh2F2wD0EAAYASAAEgJYSPD_BwE&gclsrc=aw.ds">Chrome</a>.</div>
<![endif]-->

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