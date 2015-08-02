<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<link rel="stylesheet" type="text/css" href="<?php echo get_bloginfo('template_url'); ?>/resume/css/resume-style.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	<script type="text/javascript" src="<?php echo get_bloginfo('template_url'); ?>/resume/js/jquery.js" charset="UTF-8"></script>
	<script type="text/javascript" src="<?php echo get_bloginfo('template_url'); ?>/resume/js/runaway.js" charset="UTF-8"></script>
	<script type="text/javascript" src="<?php echo get_bloginfo('template_url'); ?>/resume/js/escAway.js" charset="UTF-8"></script>
	<script type="text/javascript">
		var clickYesBtn = function() {
			deleteWrapper();
			openWholeContent();
		}
		
		var clickNoBtn = function() {
			initEscape();
			deleteWrapper();
		}
		
		var deleteWrapper = function() {
			//$('#entry-question-bg').hide('normal');
			$('#entry-question-bg').fadeOut('slow');
		}
		
		var openWholeContent = function() {
			$('html, body').css('height', 'auto');
		}
		
		var initEscape = function() {
			//string
			escAwayDividing("header-name");
			escAwayDividing("header-job");
			escAwayDividing("header-address");
			escAwayDividing("contact-mail");
			escAwayDividing("contact-phone");
			escAwayDividing("contact-website");
			escAwayDividing("contact-skype");
			escAwayDividing("profile-block");
			escAwayDividing("skills-block");
			//btn & img
			$('#profile-img').jdtRunAway();
			$('.fa').jdtRunAway();
		}
	</script>
	<title>Hi, I'm Yuta.</title>
	<!--[if lt IE 9]>
	<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js"></script>
	<![endif]-->
	<?php wp_head(); ?>
</head>
<body class="scroll-fixed">
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-52546178-1', 'auto');
  ga('send', 'pageview');

</script>
	
	<div id="entry-question-bg">
		<div class="entry-question-wrapper">
			<h1>DO YOU WANNA HIRE ME?</h1>
			<button class="yes-btn" onClick="clickYesBtn();">Absolutely Yes</button>
			<button class="no-btn" onClick="clickNoBtn();">No, Just visited</button>
		</div>
	</div>
	
	<div id="resume-wrapper">
		<div id="resume-header">
			<div class="header-left">
				<div class="profile-img-wrapper">
					<img id="profile-img" src="<?php echo get_bloginfo("template_url"); ?>/resume/img/profile.jpg">
				</div>
				<div class="profile-discription">
					<p id="header-name" class="name">Yuta Nakagawa</p>
					<p id="header-job" class="job">FRONT END ENGINEER</p>
					<p class="address"><i class="fa fa-map-marker"></i><span id="header-address">Tokyo JP</span></p>
					<!-- <i class="fa fa-facebook-square"></i>
						<i class="fa fa-twitter-square"></i>
						<i class="fa fa-linkedin-square"></i>
						<i class="fa fa-github-square"></i> -->
				</div>
			</div>
			<div id="header-contact" class="header-right">
				<ul>
					<li><i class="fa fa-envelope"></i><span id="contact-mail">n.u0523[at]gmail.com</span></li>
					<li><i class="fa fa-phone"></i><span id="contact-phone">(+81) 070-2811-6841</span></li>
					<li><i class="fa fa-globe"></i><span id="contact-website"><a href="http://nakas.me" target="_blank">http://nakas.me</a></span></li>
					<li><i class="fa fa-skype"></i><span id="contact-skype">n.yuta0523</span></li>
				</ul>
			</div>
		</div><!-- #resume-header -->