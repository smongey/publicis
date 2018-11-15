
  <footer class="footer">
    
    <div class="footer_left">

      <a href="/" class="footer_wordmark anim">
        <?php snippet('wordmark') ?>
      </a>

      <p class="footer_copyright anim"><?php echo html::decode($site->copyright()->kirbytext()) ?></p>

    </div>

    <div class="footer_right">

      <ul class="footer_nav anim">
        <?php foreach($site->footerlinks()->toStructure() as $link): ?>
        <li>
          <a href="/<?php echo $link->page() ?>" alt="<?php echo $link->title() ?>">
            <?php echo $link->title() ?>
            <span><?php echo $link->tagline() ?></span>
          </a>
        </li>
        <?php endforeach; ?>
      </ul>

      <ul class="footer_social anim">
        <li><a href="#" alt="Twitter"><?php snippet('twitter') ?></a></li>
        <li><a href="#" alt="Facebook"><?php snippet('fb') ?></a></li>
        <li><a href="#" alt="Instagram"><?php snippet('insta') ?></a></li>
        <li><a href="#" alt="LinkedIn"><?php snippet('linkedin') ?></a></li>
      </ul>

    </div>

  </footer>

  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAejlVkvJTY813eXwYB8ERoCm5sxSDlPKo&center=53.34653234395884,-6.24379321083677"></script>
  <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
  
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

  <script src="https://unpkg.com/scrollreveal"></script>

  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/debug.addIndicators.min.js"></script> -->
  
  <!-- <?= js('assets/scripts/vendor/scrollmagic-gsap.js') ?> -->
  <?= js('assets/scripts/vendor/jquery.duotone.min.js') ?>
  <?= js('assets/scripts/app.js') ?>
  <?php // js('assets/scripts/app.min.js') ?>

</body>
</html>
