
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

  <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
  <?= js('assets/scripts/app.js') ?>

</body>
</html>
