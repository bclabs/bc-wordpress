<?php
	$ajax = isset($_GET['ajax']) ? true : false;

	if (!$ajax)
		get_header(); 
?>

	<div class="grid">
		<div class="grid__item  lap-1-3">
			122333
		</div><!--
		--><div class="grid__item  lap-1-3">
			2
		</div><!--
		--><div class="grid__item  lap-1-3">
			3
		</div>
	</div>

	<?php
	// Start the loop.
	while ( have_posts() ) : the_post();

		the_content();

	// End the loop.
	endwhile;
	?>

<?php
	if (!$ajax)
		get_footer();
?>
