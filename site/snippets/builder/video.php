<!-- video -->
<section class="video <?php if($data->color()->isNotEmpty()) { echo 'grey'; } ?>">
  
  <?php if($data->ambient()->isNotEmpty()): ?>

    <video 
      class="video_bgvid"
      muted
      autoplay
      playsinline
      loop
      src="<?php echo $data->vid() ?>">
      </video>

  <?php else: ?>
    
    <?php $vidFile = explode('/', $data->vid())[4]; 
      $id = explode('.', $vidFile)[0]; ?>

    <div class="video_vid">
      <iframe 
        src="https://player.vimeo.com/video/<?php echo $id; ?>" 
        style="position: absolute; top: 0; left: 0; width:100%; height:100%;"  frameborder="0" 
        webkitallowfullscreen mozallowfullscreen allowfullscreen>
      </iframe>
    </div>
    <script src="https://player.vimeo.com/api/player.js"></script>

  <?php endif; ?>

  <div class="video_caption">
    <?php echo $data->caption()->kt(); ?>
  </div>
</section>
