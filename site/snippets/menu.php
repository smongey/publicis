<nav class="nav">
  <ul class="nav_menu">
    <?php foreach($pages->visible() as $item): ?>
    <li class="nav_item <?= r($item->isOpen(), 'nav-active') ?>">
      <a href="<?= $item->url() ?>"><?= $item->title()->html() ?></a>
    </li>
    <?php endforeach ?>
  </ul>
</nav>