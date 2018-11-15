<?php if (strpos($page->url(), 'work/') > 0)  {

$title = $site->title()->html() . ' | ' . $page->title()->html();
$image = $page->thumbnail()->url();
$desc = substr($page->text()->html(), 0, 150) . '...';

} else {

$title = $site->title()->html() . ' | ' . $page->title();
if($site->socialimage()->isNotEmpty()) {
  $image =  $site->image($site->socialimage())->url();
} else {
  $image = '';
}
$desc = substr($site->meta()->html(), 0, 150);

} ?>

<title><?php echo $site->title()->html() ?></title>
<meta name="description" content="<?php echo $desc; ?>">

<meta property="og:site_name" content="<?php echo $site->title()->html() ?>">
<meta property="og:title" content="<?php echo $title; ?>">
<meta property="og:description" content="<?php echo $desc; ?>">
<meta property="og:url" content="<?php echo $page->url() ?>">
<meta property="og:image" content="<?php echo $image; ?>">
<meta property="og:type" content="website">

<meta name="twitter:title" content="<?php echo $title; ?>">
<meta name="twitter:description" content="<?php echo $desc; ?>">
<meta name="twitter:url" content="<?php echo $page->url() ?>">
<meta name="twitter:image" content="<?php echo $image; ?>">
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@<?php echo $site->twitter()->html() ?>">
<meta name="twitter:creator" content="@<?php echo $site->twitter()->html() ?>">

<meta name="apple-mobile-web-app-capable" content="yes">

