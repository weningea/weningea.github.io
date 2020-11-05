// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
function checkConsentCookie() {
	if (retrieveCookieByName(".AspNet.Consent")) {
		return true;
	}
	return false;
}
/*function preloadDarkMode() {
	if (!checkConsentCookie()) {
		console.log("Failed to retrieve consent cookie in function preloadDarkMode()");
	}
	var chocochip = retrieveCookieByName("darkModeOn");
	if (!chocochip) {
		console.log("Failed to retrieve cookie in function preloadDarkMode");
	}
	else {
		if (chocochip == '1') {
			var docBody = document.body;
			if (!docBody.classList.contains("dark-mode")) {
				docBody.classList.toggle("dark-mode");
				var nav = document.getElementById("navBar");
				nav.classList.toggle("navbar-dark");
				nav.classList.toggle("bg-white");

				document.getElementById("darkModeButton").checked = true;
			}
		}
	}
}*/
function DarkModeSwitch() {
	/*if (!checkConsentCookie()) {
		console.log("Failed to retrieve consent cookie in function DarkModeSwitch");
		swapModes();
		return;
	}
	var chocochip = retrieveCookieByName("darkModeOn");
	if (!chocochip) {
		console.log("Failed to retrieve cookie in function DarkModeSwitch");
	}
	else {
		var docBody = document.body;
		if (chocochip == '1') {
			document.cookie = "darkModeOn=0";
		}
		else {
			document.cookie = "darkModeOn=1";
		}

	}*/
	swapModes();
}
function swapModes() {
	var element = document.body;
	console.log(element.style.getPropertyValue("--bg-color"));
}
function retrieveCookieByName(name) {
	//Adapted from answer on StackOverflow from John S.
	//https://stackoverflow.com/questions/10730362/get-cookie-by-name
	//https://stackoverflow.com/a/25346429
	function escape(s) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
	var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
	return match ? match[1] : null;
}