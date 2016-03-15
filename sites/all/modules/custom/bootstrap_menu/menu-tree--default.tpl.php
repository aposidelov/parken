<nav class="navbar yamm navbar-default navbar-top">
	<div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#<?php print $menu_name; ?>" aria-expanded="false">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
      
    <a class="navbar-brand logo" href="#"><img src="<?php print theme_get_setting('logo'); ?>" alt=""></a>
  </div>
  <div class="collapse navbar-collapse" id="<?php print $menu_name; ?>">
		<ul class="nav navbar-nav"><?php print $tree; ?></ul>
  </div>
</nav>
