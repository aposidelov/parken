<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<div class="container">
	<div class="row partners">
		<div class="b-service centered">
			<?php foreach ($rows as $id => $row): ?>
			  <div class="col-md-3">
			    <?php print $row; ?>
			  </div>
			<?php endforeach; ?>
		</div>
	</div>
</div>
