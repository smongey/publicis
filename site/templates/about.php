<?php snippet('header') ?>

  <main class="about">

    <section>
      <h3 class="about_header"><?php echo $page->title() ?></h3>
      <h1 class="about_title"><?php echo $page->tagline(); ?></h1>
    </section>

    <section class="about_approach">
      <h4 class="t-header anim">Our approach</h4>
      <div class="mesh">
        <?php foreach($page->approach()->toStructure() as $a): ?>
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

    <section class="about_team">
      <div class="about_teamtext">
        <h4 class="t-header anim">Our Team</h4>
        <div class="anim">
          <?php echo $page->team()->kt(); ?>
        </div>
      </div>
      <script>
      var imagegrid = [
      <?php  $count = 0; $total = $page->images()->count() - 1;
      foreach($page->images() as $i): ?>
        <?php $end = ($count === $total ? '"' : '",'); ?>
        <?php echo '"' . thumb($i, array('width' => 600, 'height' => 400, 'crop' => true))->url() . $end; ?>
        <?php $count++; ?>
      <?php endforeach ?>
      ];
      </script>
      <div class="about_teamimages imagegrid">
          <div class="anim"></div>
          <div class="anim"></div>
          <div class="anim"></div>
          <div class="anim"></div>
      </div>
    </section>

    <section class="about_map">
      <div class="about_mapgraphic" id="map" data-lat="<?php echo $page->location()->yaml()['lat']; ?>" data-long="<?php echo $page->location()->yaml()['lng']; ?>">
      </div>
      <div class="about_mapinfo anim">
        <h4 class="t-header">Contact</h4>
        <?php echo $page->contact()->kt(); ?>
      </div>
    </section>


  </main>

<?php snippet('footer') ?>