/* Dark mode will update the CSS of the site automatically and/or manually */

let hour = new Date().getHours();

if(hour < 8 || hour > 20) {
	darkMode();
}

function darkMode() {
	var element_body = document.body;
  	element_body.classList.toggle("dark-mode-body");

  	var links = document.querySelector("a");

  	/* returns first anchor tag within the document */

  	links.classList.toggle("dark-mode-anchor");
}