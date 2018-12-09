<?php snippet('header') ?>

  <main class="clients">
    <section>
      
      <!-- <h3 class="clients_title">Our clients</h3> -->

      <!-- <?php //echo $page->clients()->kt(); ?> -->
    
    <ul class="clients_logos">
    <?php foreach($page->images() as $i): ?>
        <li><img src="<?php echo $i->url(); ?>" alt=""></li>
    <?php endforeach; ?>
    </ul>
    </section>
  </main>

<?php snippet('footer') ?>