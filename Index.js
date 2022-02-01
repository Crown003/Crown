
let nav = document.getElementById("navUL");
function myFunction(){
  	if(nav.style.display === "block"){
  		nav.style.display = "none";
  	}
  	else{
  		nav.style.display = "block";
  	}
};
let fname = document.getElemenetById("UserName");
let femail = document.getElemenetById("UserName");
const scriptURL = 'https://script.google.com/macros/s/AKfycbxyyHjRUT-oRkaLGfRDTqikJu_lQFUcIEmvJa-peO20ZKGP0FCAXdZCaXspqXzFaEmtEg/exec' 
const form = document.forms['Contact me'] 
form.addEventListener('submit', e => { 
	e.preventDefault() 
	fetch(scriptURL, { method: 'POST', body: new FormData(form)}) 
	.then(response => alert("Thanks for Contacting Me. I will Contact you soon...") ) 
	.catch(error => console.error('Error!', error.message)) });
