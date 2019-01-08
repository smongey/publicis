<?php snippet('header') ?>

  <main class="about">

    <section>
      <h3 class="about_header"><?php echo $page->title() ?></h3>
      <h1 class="about_title"><?php echo $page->tagline(); ?></h1>
    </section>

    <section class="about_help">
      <h4 class="t-header anim">How we can help you</h4>
      <div class="mesh">
        <?php foreach($page->help()->toStructure() as $a): ?>
          <div class="anim">
            <video 
              class="about_video"
              muted
              autoplay
              loop
              playsinline
              src="<?php echo $a->videolink() ?>">
            </video>
            <p><?php echo $a->text(); ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </section>

    <section class="about_services">
      <h4 class="t-header anim">Our Services</h4>
      <div class="mesh about_servicesbox">
        <?php $num = 1; ?>
        <?php foreach($page->services()->toStructure() as $s): ?>
          <div class="about_service anim">
            <div class="about_servicetitle">
              <h2>— <span><?php echo $num; $num++; ?></span> —</h2>
              <h3><?php echo $s->title(); ?></h3>
            </div>
            <div class="about_servicelist">
              <?php echo $s->text()->kt(); ?>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </section>

    <section class="about_culture">
      <div class="about_culturetext">
        <h4 class="anim">Our Culture</h4>
        <div class="anim">
          <?php echo $page->culture()->kt(); ?>
        </div>
      </div>

      <p class="about_imagearray"><?php $count = 0; $total = $page->images()->count() - 1; foreach($page->images() as $i): echo thumb($i, array('width' => 600, 'height' => 400, 'crop' => true))->url() . ', '; endforeach; ?></p>

      <div class="about_teamimages imagegrid">
          <div class="anim"></div>
          <div class="anim"></div>
          <div class="anim"></div>
          <div class="anim"></div>
      </div>
    </section>

    <section class="about_map">
      <div class="about_mapgraphic"  data-maplink="<?php echo $page->maplink() ?>" id="map" data-lat="<?php echo $page->location()->yaml()['lat']; ?>" data-long="<?php echo $page->location()->yaml()['lng']; ?>">
      </div>
      <div class="about_mapinfo anim">
        <h4 class="t-header">Contact</h4>
        <?php echo $page->contact()->kt(); ?>
      </div>
    </section>


  </main>

<?php snippet('footer') ?>