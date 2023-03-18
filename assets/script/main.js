let btn = document.querySelector("#search-button");
let dataWrapper = document.querySelector(".data");

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let input = document.querySelector("input");
	window.location.href=`search.html?search=${input.value}`;
	input.value = "";
})
