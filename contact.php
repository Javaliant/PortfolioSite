<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="keywords" content="Computer Science, Kean University, Luigi Vincent, Software Development, Code"/>
		<meta name="robots" content="index, follow"/>
		<meta name="author" content="Luigi Vincent"/>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Contact / Luigi Vincent</title>
		<script src="base.js"></script>
		<link rel="stylesheet" href="base.css"/>
		<link rel="shortcut icon" href="assets/icon.ico"/>
	</head>

	<body>
		<header>
			<span id="name">Luigi Vincent / Software Architect</span>
			<span><a href="index.html">
				<img id="home" src="assets/home.png" onmouseover="hover(this);" onmouseout="unhover(this);" alt="Home">
			</a></span>
			<ul class="navigation">
				<li><a class="navitrast" href="about.html">ABOUT</a></li>
				<li><a href="contact.php">CONTACT</a></li>
			</ul>
			<input type="image" id="scrollbutton" src="assets/scroll_arrow.png" onmouseover="scrollHover(this);" onmouseout="scrollUnhover(this);" onclick="scrollUp();"/>
			<hr color=#666664>
		</header>	
	
		<form style="text-align: center;" method="post" action="contact.php">
			<div><span class="label">Subject</span><br><input class="input" name="subject" type="text" required="required" autocorrect="off" autocapitalize="sentences"></div>
			<div><span class="label">Email</span><br><input class="input" name="email" type="email" required="required" autocorrect="off" autocapitalize="words"></div>
			<div><span class="label">Message</span><br><textarea class="input" name="message" rows="10" cols="80" autocorrect=off autocapitalize="sentences"></textarea></div>
			<div><input type="submit"  id="submit" name="submit" value="Submit"></div>
		</form>
		
		<?php
			if (isset($_POST["submit"])) {
				$subject = $_POST['subject'];
				$email = $_POST['email'];
				$message = $_POST['message'];
				$to = '8628231747@messaging.sprintpcs.com';
				$body = "From: $email\n Message:\n $message";
				 if (mail($to, $subject, $body)) {
			        echo '<span class="important">Thank you. I will be in touch.</span>';
			    } else {
			        echo '<span class="notify">Sorry, there was an error. Please try again later.</span>';
			    }
			}
		?>

		<footer>
			<hr color=#666664>
			<div id="contacts">
			<a title="Code Review Profile" target="_blank" href="http://codereview.stackexchange.com/users/49181/legato"><img src="assets/codereview_icon.png"></a>
			<a title="Github Profile" target="_blank" href="https://github.com/Javaliant"><img src="assets/github_icon.png"></a>
			<a title="Hacker Rank Profile" target="_blank" href="https://www.hackerrank.com/Legato"><img src="assets/hacker_rank_icon.png"/></a>
			<a title="Codeeval Profile" target="_blank" href="https://www.codeeval.com/profile/Javaliant/"><img src="assets/codeeval_icon.png"></a>
			<a title="LinkedIn Profile" target="_blank" href="https://www.linkedin.com/in/luigi-vincent-b82254103"><img src="assets/linked_in_icon.png"></a>
			</div>
			<div id="copyright">© 2016 Luigi Vincent</div>
		</footer>
	</body>
</html>