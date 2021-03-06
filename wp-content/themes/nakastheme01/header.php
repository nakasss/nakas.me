<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="shortcut icon" href="<?php echo get_bloginfo('template_url'); ?>/favicon.ico" >
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	<!--[if lt IE 9]>
	<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js"></script>
	<![endif]-->
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php include_once("analytics/trackingcode.php") ?>

<div id="page" class="hfeed site">
	<header id="masthead" class="site-header" role="banner">
		<div id="header-menu" class="<?php if (is_user_logged_in()) { echo 'logged-in'; } ?>">
			<?php wp_nav_menu('primary'); ?>
		</div>
		
		<div id="header-logo">
			<a href="<?php echo home_url(); ?>">
				<img src="<?php echo get_template_directory_uri() ?>/images/top-logo.png" srcset="<?php echo get_template_directory_uri() ?>/images/top-logo@2x.png 2x" alt="nakas.me">
			</a>
		</div>
	</header><!-- .site-header -->

	<div id="content" class="site-content">
