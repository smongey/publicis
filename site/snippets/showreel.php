<?php

    $show = false;
    if($page->showreel()->isNotEmpty() && $page->showreelmob()->isNotEmpty()) {
        $show = true;
    }

    if (detect()->isMobile()) {
      if($page->showreelmob()->isEmpty()) { 
        $showreel = $page->showreel();
      } else {
        $showreel = $page->showreelmob();
      }
    } else {
      $showreel = $page->showreel();
    }
?>

    <?php if($show === true): ?>
    <div class="showreelmodal">
        <a href="#" class="showreelmodal_close" onclick="site.closereel(event)">Close</a>
        <video id="showreel"
            paused
            playsinline 
            loop
            src="<?php echo $showreel; ?>"></video>
        <!-- <video src="https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/3372/11/291864850/1107099765.mp4?token=1543952181-0x73aabfaa0aa8230cefda6400455e37287ccdc44f"></video> -->
    </div>
    <?php endif; ?>
