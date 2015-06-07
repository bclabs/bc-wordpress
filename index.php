<?php
	$ajax = isset($_GET['ajax']) ? true : false;
	if (!$ajax)
		get_header(); 
?>



<?php 
	if (!$ajax)
		get_footer(); 
?>