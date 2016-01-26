/* Author: Luigi Vincent */

var passions = [
	"Solving Problems",
	"Playing Piano",
	"Code Review",
	"Service",
	"Raspberry Pi",
	"Conquering Challenges",
	"Education"
];
var passionIterator = 1;
var projects = document.getElementsByClassName("projects");
var scrollVisible = false;
var userScrolled = false;

window.onload = function() {
	setInterval(iteratePassions, 4000);

	window.onscroll = function() {
		userScrolled = true;
	}
	
	setInterval(function() {
	    if(userScrolled) {
	    	if (window.pageYOffset == 0 && scrollVisible) {
	    		document.getElementById("scrollbutton").style.visibility = 'hidden';
	    		scrollVisible = false;
	    	} else if (!scrollVisible) {
	    		document.getElementById("scrollbutton").style.visibility = 'visible';
	    		scrollVisible = true;
	    	}
	        userScrolled = false;
	    }
	}, 100);
}

function iteratePassions() {
	fadeOut(document.getElementById("passions"));
}

function hover(element) {
	element.setAttribute('src', 'assets/hover_home.png');
}
function unhover(element) {
    element.setAttribute('src', 'assets/home.png');
}

function projectHover(element) {
	for (var i = 0; i < projects.length; i++) {
		projects[i].style.opacity = 0.3;
	}
	element.style.opacity = 1;
}
function projectUnhover() {
	for (var i = 0; i < projects.length; i++) {
		projects[i].style.opacity = 1;
	}
}

function scrollHover(element) {
	element.setAttribute('src', 'assets/scroll_arrow_hover.png');
}
function scrollUnhover(element) {
	element.setAttribute('src', 'assets/scroll_arrow.png');
}

function fadeIn(passion) {
	var fadingIn = setInterval(function() {
		val = parseFloat(passion.style.opacity);
		if (val > 1) {
			clearInterval(fadingIn);
		} else {
			passion.style.opacity = val += 0.1;
		}
	}, 75);
}
function fadeOut(passion) {
	passion.style.opacity = 1;
	var fadingOut = setInterval(function() {
		if ((passion.style.opacity -= .1) < 0) {
			clearInterval(fadingOut);
			iterate(passion);
			fadeIn(passion);
		}
	}, 75);
}

function iterate(passion) {
	passion.innerHTML = passions[passionIterator++];
	if (passionIterator == passions.length) {
		passionIterator = 0;
	}
}

function scrollUp() {
	scrollTo(0, 0);
}