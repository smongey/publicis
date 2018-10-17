
  <footer class="footer">
      
    <a href="/" class="footer_logo">
      Publicis Logo
    </a>

    <p class="footer_copyright"><?php echo html::decode($site->copyright()->kirbytext()) ?></p>

    <ul class="footer_nav">
      <li>
        See who we work with.
        <span>Our clients are kind of a big deal.</span>
      </li>
      <li>
        Find out who we are.
        <span>Read more about us and get in touch.</span>
      </li>
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
