// Toggle icon show/hide sidebar
document.getElementById("toggle-right-sidebar").onclick = function () {
	$("#toggle-right-sidebar i").toggleClass(
		"fa-angle-double-left fa-angle-double-right"
	);
	// Show/hide sidebar on click
	$("#right-sidebar").toggleClass("hide-sidebar");
};

// Add class "search-active" when search btn clicked
document.getElementById("icon-search").onclick = function () {
	$("body").addClass("search-active");
};
// Remove class "search-active" when close btn clicked
document.getElementById("icon-close").onclick = function () {
	$("body").removeClass("search-active");
};

// Dark/light mode
const toggleSwitch = document.querySelector(
	'.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
	document.documentElement.setAttribute("data-theme", currentTheme);

	if (currentTheme === "dark") {
		toggleSwitch.checked = true;
	}
}
function switchTheme(e) {
	if (e.target.checked) {
		document.documentElement.setAttribute("data-theme", "dark");
		localStorage.setItem("theme", "dark");
	} else {
		document.documentElement.setAttribute("data-theme", "light");
		localStorage.setItem("theme", "light");
	}
}
toggleSwitch.addEventListener("change", switchTheme, false);

// Toggle "display: none" for dark/light mode icon
document.getElementById("mode-switch").onclick = function () {
	$("#mode-switch i").toggleClass("d-none");
};

document.getElementById("btnTogglerIcon").onclick = function () {
	$("#btnTogglerIcon span").toggleClass("d-none");
};

document.getElementById("btnTogglerIcon").onclick = function () {
	$("#site-header").toggleClass("active");
	$("body").toggleClass("noscroll");
};
