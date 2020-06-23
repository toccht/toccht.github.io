/* Dark mode will update the CSS of the site automatically and/or manually */

let hour = new Date().getHours();

if(hour < 15 || hour > 20) {
	darkMode();
}

function darkMode() {
	var element_body = document.body;
  	element_body.classList.toggle("dark-mode-body");

  	var links = document.querySelector("a");

  	/* returns first anchor tag within the document */

  	links.classList.toggle("dark-mode-anchor");

  	/* change theme of project cards */ 

  	var cards = document.getElementsByClassName("card bg-light");

  	for(var i = 0; i < cards.length; i++) {
  		cards[i].classList.add("bg-dark");
  	}

  	var btns = document.querySelectorAll(".card a.btn");

	btns.forEach(btn=>{
    	btn.classList.remove("btn-dark");
    	btn.classList.add("btn-light");
	});

}