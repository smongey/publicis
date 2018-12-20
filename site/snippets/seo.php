<?php 
    $seoTitle = $page->seoTitle()->isNotEmpty() ? $page->seoTitle() : $page->title()->html();
    $seoDesc = $page->seoDesc()->isNotEmpty() ? $page->seoDesc() : $site->description();
    $seoImage = $page->seoImage()->isNotEmpty() ? thumb($page->image($page->seoImage()), array('width'=> 1200, 'height'=> 630, 'crop'=>true))->url() : false;
?>

    <meta name="description" content="<?php echo $seoDesc; ?>">

    <!-- OG -->
    <meta property="og:site_name" content="<?php echo $site->title()->html() ?>">
    <meta property="og:title" content="<?php echo $seoTitle; ?>">
    <meta property="og:description" content="<?php echo $seoDesc; ?>">
    <meta property="og:url" content="<?php echo $page->url() ?>">
<?php if($seoImage): ?>
    <meta property="og:image" content="<?php echo $seoImage; ?>">
<?php endif; ?>
    <meta property="og:type" content="website">

    <!-- Twitter -->
    <meta name="twitter:title" content="<?php echo $seoTitle; ?>">
    <meta name="twitter:description" content="<?php echo $seoDesc; ?>">
    <meta name="twitter:url" content="<?php echo $page->url() ?>">
<?php if($seoImage): ?>
    <meta name="twitter:image" content="<?php echo $seoImage; ?>">
<?php endif; ?>
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="<?php echo $site->twitter()->html() ?>">
    <meta name="twitter:creator" content="<?php echo $site->twitter()->html() ?>">
