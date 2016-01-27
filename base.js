/* Author: Luigi Vincent
functions I want on every page
*/

var scrollVisible = false;
var userScrolled = false;

window.addEventListener('load', init, false);

function init() {
	window.addEventListener('scroll', function() {
		userScrolled = true;
	}, false);
	
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

function scrollUp() {
	scrollTo(0, 0);
}

function hover(element) {
	element.setAttribute('src', 'assets/hover_home.png');
}
function unhover(element) {
    element.setAttribute('src', 'assets/home.png');
}

function scrollHover(element) {
	element.setAttribute('src', 'assets/scroll_arrow_hover.png');
}
function scrollUnhover(element) {
	element.setAttribute('src', 'assets/scroll_arrow.png');
}