/* Author: Luigi Vincent 
functions exclusive to index page
*/

var passions = [
	"Solving Problems",
	"Health",
	"Raspberry Pi",
	"Conquering Challenges",
	"Playing Piano",
	"Code Review",
	"Education",
	"Service"
];
var passionIterator = 1;
var projects = document.getElementsByClassName("projects");

function Project(title, breakdown, motivation, lessons, link) {
	this.title = title;
	this.breakdown = breakdown;
	this.motivation = motivation;
	this.lessons = lessons;
	this.link = "https://github.com/Javaliant/" + link;

	this.getBreakdown = function() {
		var result = "";
		for (var i = 0; i < breakdown.length; i++) {
			result += "<li>" + breakdown[i] + "</li>";
		}
		return result;
	}

	this.getMotivation = function() {
		var result = "";
		for (var i = 0; i < motivation.length; i++) {
			result += "<li>" + motivation[i] + "</li>";
		}
		return result;
	}

	this.getLessons = function() {
		var result = "";
		for (var i = 0; i < lessons.length; i++) {
			result += "<li>" + lessons[i] + "</li>";
		}
		return result;
	}

	this.showInformation = function() {
		document.getElementById("project-github").href = this.link;
		document.getElementById("project-title").innerHTML = this.title;
		document.getElementById("project-motivation").innerHTML = this.getMotivation();
		document.getElementById("project-lessons").innerHTML = this.getLessons();
		document.getElementById("project-breakdown").innerHTML = this.getBreakdown();
	}
}

var website = new Project(
	"This very website being showcased.", [
		"All functions personally designed with no dependencies.",
		"Independently hosted on a Raspberry Pi.",
		"Created utilizing HTML, CSS, and JavaScript"
	], [
		"To create a portfolio site that portrays one message above all: <span class=\"important\">I am a learner.</span>",
		"To illustrate my skills and commitment to goals."
	], [
		"How to recognize and overcome the idiosyncrasies of JavaScript.",
		"The impressive power of pure CSS.",
		"The pros and cons of myriad dynamic content delivery mediums."
	], "PortfolioSite"
);

var htmlSaver = new Project(
	"HTML Saver - A tool to locally save a site's source.", [
		"Creating utilizing Java, JavaFX, CSS and XML."
	], [
		"To facilitate the preservation of a site's source information for offline use or reference.",
		"Made for a friend who desired aforementioned utility."
	], [
		"Considerations in delivering meaningful progress bars with reasonable stipulations on their updating."
	], "HTML-Saver"
);

var simonSays = new Project(
	"A Simon Says Game.", [
		"Created using HTML, CSS, JavaScript."
	], [
		"For the sake of practice.",
		"To complete one of Code Review's Community Challenges."
	], [
		"How clever manipulation of CSS can eliminate the need for memory consuming images.",
		"How to recognize and overcome the idiosyncrasies of JavaScript."
	], "SimonSays"
);

var ticTactics = new Project(
	" Ultimate Tic Tac Toe A.K.A Tic Tactics.", [
		"An additional layer of complexity to a classic game.",
		"Created using Java, JavaFX and CSS."
	], [
		"For the sake of practice and learning.",
		"To complete one of Code Review's Community Challenges."
	], [
		"The process of exporting applications to jars and from jars to executables.",
		"Considerations on ergonomics of user interface."
	], "TicTactics"
);

var pokeEval = new Project(
	"PokeEval, a Pokemon type evaluator.", [
		"A way to assess Pokemon's type weaknesses and strengths.",
		"Created using Java, JavaFX."
	], [
		"For the sake of practice and learning.",
		"Eliminating the need to memorize over 700+ pokemon, and the specifics of types and types combinations."
	], [
		"The values of Enumeration, for-each looping, and well-designed data structures.",
		"The complexity in rendering useful and dynamic auto-completion."
	], "PokEvaluator"
);

var piTime = new Project(
	"PiTime, a party button.", [
		"Button that communicates with another computer to run a routine, visual feedback in terms of LED.",
		"Created using Python and Java with a Raspberry Pi."
	], [
		"To introduce self to computer and electronic engineering.",
		"Served as presentation material for a personally led ACM meeting at Kean University."
	], [
		"The methods of creating and supporting socket communications via Python.",
		"The intricacies of how hardware interacts with software."
	], "PiTime"
);

var chatter = new Project(
	"Crew Chatter, a chat application.", [
		"A Client and Server application.",
		"Created using Java, JavaFX."
	], [
		"To learn how to communicate between two computers.",
		"To create something that could communicate over the web to potentially be shared with friends."
	], [
		"Specifics of creating and supporting socket connections.",
		"Distinctions between IPv4 nd IPv6 connections.",
		"The use of ports and port forwarding.",
		"Security concerns inherent in communication technologies."
	], "ChatApp"
);

var violinTuner = new Project(
	"A violin tuning application.", [
		"Emits the keys to facilitate violin tuning, features different instrument's sounds.",
		"Powerered by Java."
	], [
		"To facilitate violin tuning.",
		"For the sake of practice and learning."
	], [
		"How to use media I/O, explicitly employing sounds with Java.",
		"The pros and cons of different audio delivery mediums."
	], "ViolinTuner"
);

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
	projectDescribe(this.id);
	document.getElementById("project-description").checked = true;
	document.getElementById("project-info").style.display = "block";
	document.getElementById("overlay").style.zIndex = 0;	
}
function projectExit() {
	document.getElementById("project-info").style.display = "none";
	document.getElementById("overlay").style.zIndex = -1;
}

function projectDescribe(project) {
	switch(project) {
		case "this":
			website.showInformation();
		break;
		case "html-saver":
			htmlSaver.showInformation();
		break;
		case "simon-says":
			simonSays.showInformation();
		break;
		case "tic-tactics":
			ticTactics.showInformation();
		break;
		case "poke-eval":
			pokeEval.showInformation();
		break;
		case "pi-time":
			piTime.showInformation();
		break;
		case "chater":
			chater.showInformation();
		break;
		case "violin-tuner":
			violinTuner.showInformation();
		break;
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