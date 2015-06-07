<?php
	$ajax = isset($_GET['ajax']) ? true : false;

	if (!$ajax)
		get_header(); 
?>
12
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
