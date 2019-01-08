
    <footer class="footer">
    
        <div class="footer_left">

            <a href="/" class="footer_wordmark anim">
                <?php snippet('wordmark') ?>
            </a>

            <p class="footer_copyright anim"><?php echo html::decode($site->copyright()->kirbytext()) ?></p>

        </div>

        <div class="footer_right">

            <ul class="footer_nav anim">
            <?php foreach($site->footerlinks()->toStructure() as $link): ?>
            <li class="footer_<?php echo $link->page(); ?>link">
            <a href="/<?php echo $link->page() ?>" alt="<?php echo $link->title() ?>" onclick="site.load(event)">
            <?php echo $link->title() ?>
            <span><?php echo $link->tagline() ?></span>
            </a>
            </li>
            <?php endforeach; ?>
            </ul>

            <ul class="footer_social anim">
            <?php foreach($site->sociallinks()->toStructure() as $social): ?>
            <?php if($social->title() == 'Twitter'): ?>
            <li><a href="<?php echo $social->page(); ?>" alt="Twitter"><?php snippet('twitter') ?></a></li>
            <?php elseif($social->title() == 'Facebook'):  ?>
            <li><a href="<?php echo $social->page(); ?>" alt="Facebook"><?php snippet('fb') ?></a></li>
            <?php elseif($social->title() == 'Instagram'):  ?>
            <li><a href="<?php echo $social->page(); ?>" alt="Instagram"><?php snippet('insta') ?></a></li>
            <?php elseif($social->title() == 'LinkedIn'):  ?>
            <li><a href="<?php echo $social->page(); ?>" alt="LinkedIn"><?php snippet('linkedin') ?></a></li>
            <?php else: ?>
            <li><a href="#"><?php echo $social->title(); ?></a></li>
            <?php endif; ?>

            <?php endforeach; ?>
            </ul>

        </div>

    </footer>

    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAejlVkvJTY813eXwYB8ERoCm5sxSDlPKo&center=53.34653234395884,-6.24379321083677"></script>

    <?= js('assets/build/all.js') ?>
    <?= js('assets/build/app.js') ?>
    <?php // js('assets/scripts/app.min.js') ?>

    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-72690519-3"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '<?php echo $site->analytics() ?>');
    </script>


</body>
</html>
