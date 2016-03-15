<nav class="navbar yamm navbar-default navbar-top">
	<div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#<?php print $menu_name; ?>" aria-expanded="false">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <?php $logo = theme_get_setting('logo'); ?>
    <?php $image = theme('image', array('path' => $logo)); ?>
    <?php print l($image, '<front>', array('html' => TRUE, 'attributes' => array('class' => array('navbar-brand', 'logo') ))); ?>    
  </div>
  <div class="collapse navbar-collapse" id="<?php print $menu_name; ?>">
		<ul class="nav navbar-nav"><?php print $tree; ?></ul>
  </div>
</nav>
