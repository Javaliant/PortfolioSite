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

window.onload = function() {
	setInterval(iteratePassions, 4000);
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