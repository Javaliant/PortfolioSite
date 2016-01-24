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
	setInterval(iteratePassions, 5000);
}

function iteratePassions() {
	passion = document.getElementById("passions");
	fadeOut(passion);
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
	}, 100);
}

function fadeOut(passion) {
	passion.style.opacity = 1;
	var fadingOut = setInterval(function() {
		if ((passion.style.opacity -= .1) < 0) {
			clearInterval(fadingOut);
			passion.innerHTML = passions[passionIterator++];
			passion.style.opacity = 0;
			if (passionIterator == passions.length) {
				passionIterator = 0;
			}
			fadeIn(passion);
		}
	}, 100);
}