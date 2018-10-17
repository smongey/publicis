<?php snippet('header') ?>

  <main class="main" role="main">
    

    <?php foreach($page->sections()->toStructure() as $section): ?>
      <?php snippet('builder/' . $section->_fieldset(), array('data' => $section)) ?>
    <?php endforeach ?>


    <?php snippet('related') ?>

  </main>

<?php snippet('footer') ?>