/* Author: Luigi Vincent
functions on every page
*/

function pageIsTop() {
	return window.pageYOffset == 0;
}
function buttonInvisble() {
	return document.body.className.indexOf('at-top') >= 0;
}
function togglePageUpButton() {
    if (pageIsTop() != buttonInvisble()) {
        if (window.pageYOffset == 0) {
            document.body.className += ' at-top';
        } else {
            document.body.className = document.body.className.replace(/ *at-top/, '');
        }
    }
}

window.addEventListener('load', togglePageUpButton, false);
window.addEventListener('scroll', togglePageUpButton, false);

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