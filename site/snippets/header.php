<!doctype html>
<html lang="<?= site()->language() ? site()->language()->code() : 'en' ?>">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1,user-scalable=no" />

  <title><?= $site->title()->html() ?> | <?= $page->title()->html() ?></title>
  <meta name="description" content="<?= $site->description()->html() ?>">

  <?= css('assets/css/app.css') ?>

</head>
<body class="<?php //if(!$site->user('admin')->isCurrent()) { echo 'wip'; } ?>">

  <header class="header">
    <div class="header_brand">
      <a href="/" class="header_emblem" onclick="site.load(event)">
        <?php snippet('emblem'); ?>
      </a>
    </div>
    <nav class="header_nav">
      <ul class="header_menu">
        <?php foreach($pages->visible() as $item): ?>
        <li class="header_menuitem <?= r($item->isOpen(), 'active') ?>">
          <a onclick="site.load(event)" href="<?= $item->url() ?>"><?= $item->title()->html() ?></a>
        </li>
        <?php endforeach ?>
      </ul>
    </nav>
  </header>