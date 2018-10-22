<?php snippet('header') ?>

  <main class="case">
    

    <?php foreach($page->sections()->toStructure() as $section): ?>
      <?php snippet('builder/' . $section->_fieldset(), array('data' => $section)) ?>
    <?php endforeach ?>

    <?php snippet('related') ?>

  </main>

<?php snippet('footer') ?>