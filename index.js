/* Author: Luigi Vincent 
functions exclusive to index page
*/

var passions = [
	"Solving Problems",
	"Playing Piano",
	"Education",
	"Raspberry Pi",
	"Conquering Challenges",
	"Code Review",
	"Service"
];
var passionIterator = 1;
var projects = document.getElementsByClassName("projects");

window.addEventListener('load', init, false);

function init() {
	setInterval(iteratePassions, 4000);
	document.getElementById("overlay").addEventListener('click', projectExit, false);

	for (var i = 0; i < projects.length; i++) {
		projects[i].addEventListener('mouseover', projectHover, false);
		projects[i].addEventListener('mouseout', projectUnhover, false);
		projects[i].addEventListener('click', projectClick, false);
	}
}

function iteratePassions() {
	fadeOut(document.getElementById("passions"));
}

function projectHover() {
	for (var i = 0; i < projects.length; i++) {
		projects[i].style.opacity = 0.3;
	}
	this.style.opacity = 1;
}
function projectUnhover() {
	for (var i = 0; i < projects.length; i++) {
		projects[i].style.opacity = 1;
	}
}
function projectClick() {
	document.getElementById("project-info").style.display = "block";
	document.getElementById("overlay").style.zIndex = 0;
}
function projectExit() {
	document.getElementById("project-info").style.display = "none";
	document.getElementById("overlay").style.zIndex = -1;
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