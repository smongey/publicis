
  <footer class="footer">
      
    <a href="/" class="footer_wordmark">
      <?php snippet('wordmark') ?>
    </a>

    <p class="footer_copyright"><?php echo html::decode($site->copyright()->kirbytext()) ?></p>

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
      <li><a href="#">Twitter</a></li>
      <li><a href="#">Facebook</a></li>
      <li><a href="#">Instagram</a></li>
      <li><a href="#">LinkedIn</a></li>
    </ul>

  </footer>

  <?= js('assets/scripts/app.js') ?>


</body>
</html>
