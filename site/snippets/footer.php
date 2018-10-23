
  <footer class="footer <?php if($page->slug() == 'work') { echo 'footer-home'; } ?>">
    
    <div class="footer_left">

      <a href="/" class="footer_wordmark">
        <?php snippet('wordmark') ?>
      </a>

      <p class="footer_copyright"><?php echo html::decode($site->copyright()->kirbytext()) ?></p>

    </div>

    <div class="footer_right">

      <ul class="footer_nav">
        <?php foreach($site->footerlinks()->toStructure() as $link): ?>
        <li>
          <a href="<?php echo $link->link() ?>">
            <?php echo $link->title() ?>
            <span><?php echo $link->tagline() ?></span>
          </a>
        </li>
        <?php endforeach; ?>
      </ul>

      <ul class="footer_social">
        <li><a href="#"><?php snippet('twitter') ?></a></li>
        <li><a href="#"><?php snippet('fb') ?></a></li>
        <li><a href="#"><?php snippet('insta') ?></a></li>
        <li><a href="#"><?php snippet('linkedin') ?></a></li>
      </ul>

    </div>

  </footer>

  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAejlVkvJTY813eXwYB8ERoCm5sxSDlPKo&center=53.34653234395884,-6.24379321083677"></script>
  <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>

  <script src="http://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js"></script>
  <script src="http://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/debug.addIndicators.min.js"></script>
  
  <?= js('assets/scripts/vendor/scrollmagic-gsap.js') ?>
  <?= js('assets/scripts/app.js') ?>
  <?php // js('assets/scripts/app.min.js') ?>

</body>
</html>
