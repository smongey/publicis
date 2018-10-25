<?php snippet('header') ?>

  <main class="about">

    <section>
      <h3 class="about_header"><?php echo $page->title() ?></h3>
      <h1 class="about_title"><?php echo $page->tagline(); ?></h1>
    </section>

    <section class="about_approach">
      <h4 class="t-header">Our approach</h4>
      <div class="mesh">
        <?php foreach($page->approach()->toStructure() as $a): ?>
          <div>
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
        <h4 class="t-header">Our Team</h4>
        <div>
          <?php echo $page->team()->kt(); ?>
        </div>

      </div>
      <div class="about_teamimages">
        <?php foreach($page->images() as $i): ?>
          
          <div>
            <?php echo thumb($i, array('width' => 600, 'height' => 400, 'crop' => true)); ?>
          </div>
          
        <?php endforeach ?>
      </div>
    </section>

    <section class="about_map">
      <div class="about_mapgraphic" id="map" data-lat="<?php echo $page->location()->yaml()['lat']; ?>" data-long="<?php echo $page->location()->yaml()['lng']; ?>">
       
      </div>
      <div class="about_mapinfo">
        <h4 class="t-header">Contact</h4>
        <?php echo $page->contact()->kt(); ?>
      </div>
    </section>


  </main>

<?php snippet('footer') ?>