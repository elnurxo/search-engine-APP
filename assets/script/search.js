let API_KEY = "9b3f6b59e0mshe67fc6d498289c4p1eb518jsn5f44e63e8857";
let API_HOST = "contextualwebsearch-websearch-v1.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": API_HOST,
  },
};

//BING WEB SEARCH API via Rapid API
let searchQuery = new URLSearchParams(location.search).get("search");
let pageSize = 15;
let pageNumber = 2;
let errorMsg = 'You have exceeded the DAILY quota for requests on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/contextualwebsearch/api/web-search';
//100 REQUESTS PER DAY
let API_URL = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${searchQuery}&pageNumber=${pageNumber}&pageSize=${pageSize}&autoCorrect=true`;

//title
let title = document.querySelector("title");
title.textContent = `Booble | ${searchQuery.toUpperCase()}`;

//search query
let query = document.querySelector(".search-query");
query.textContent = searchQuery;
let dataWrapper = document.querySelector(".data-row");

//Fetching Data | Web Search API by Rio Krakovski
var images = [];
async function fetchData(){
const response = await fetch(API_URL, options);
const data = await response.json();
return data;
}

fetchData().then(data => {
	console.log(data.message);
	if (data?.message === errorMsg) {
		console.log('error');
		dataWrapper.innerHTML = `<div class="col-12 d-flex align-items-center justify-content-center mt-5">
		<h3 class="text-center text-danger" title="this API allows 100 request per day" style="cursor:pointer;">You reached the limit!</h3>
	</div>`
	}
	data.value.forEach((data) => {
		dataWrapper.innerHTML += `<div class="col-lg-12 data-column d-flex align-items-center">
		  <div class="data-column-img d-flex align-items-center justify-content-center">
			  <img id="myImg" src="${data.thumbnail}"
				  alt="${data.title}" data-src="${data.url}">
		  </div>
		  <div class="data-column-title">
			  <h5><a href="${data.webpageUrl}">${data.title}</a></h5>
		  </div>
	  </div>`;
	});
	for (let i = 0; i < dataWrapper.children.length; i++) {
		images.push(dataWrapper.children[i].children[0].children[0]);
	}
	console.log(images);
	//Open Modal Image Click
	for (let i = 0; i < images.length; i++) {
		images[i].addEventListener("click", function () {
 			modal.style.display = "block";
			let source = images[i].getAttribute('data-src');
			modalImg.src = source;
			captionText.innerHTML = images[i].alt;
		});
	}
})






//Modal
var modal = document.querySelector("#myModal");
var modalImg = document.querySelector(".modal-content");
var captionText = document.querySelector("#caption");
var closeModal = document.querySelector(".close");

//Close Modal X button Click
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
