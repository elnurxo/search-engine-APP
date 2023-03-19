let mode = document.querySelector(".mode-wrapper");
let icon = document.querySelector(".fa-solid");
let nav = document.querySelector("nav");
let main = document.querySelector("main");
let dropDown = document.querySelector(".links-dropdown");
let articleTitle = document.querySelector("article");
let dataRow = document.querySelector(".data-row");

//get mode from local storage
let modeLocalStr = localStorage.getItem("dark");
var modeLocal = String(modeLocalStr).toLowerCase() === "true";

if (modeLocal) {
  icon.classList.replace("fa-moon", "fa-sun");
  mode.classList.add("dark-mode-wrapper");
  nav.classList.add("dark-nav");
  main.classList.add("dark-main");
  main.classList.add("dark-main");
  dropDown.classList.add("dark-links-dropdown");
  articleTitle.classList.add("dark-title");

  //card-data
  for (let i = 0; i < dataRow.children.length; i++) {
    dataRow.children[i].children[1].children[0].children[0].style.color =
      "white";
  }
} else {
  icon.classList.replace("fa-sun", "fa-moon");
  mode.classList.remove("dark-mode-wrapper");
  mode.style.transition = ".3s";
  nav.classList.remove("dark-nav");
  main.classList.remove("dark-main");
  nav.style.transition = ".3s";
  dropDown.classList.remove("dark-links-dropdown");
  articleTitle.classList.remove("dark-title");
  articleTitle.style.transition = ".3s";

  //card-data
  for (let i = 0; i < dataRow.children.length; i++) {
    dataRow.children[i].children[1].children[0].children[0].style.color =
      "black";
  }
}

//mode click
mode.addEventListener("click", function () {
  //switching to dark mode
  if (icon.classList.contains("fa-moon")) {
    icon.classList.replace("fa-moon", "fa-sun");
    mode.classList.add("dark-mode-wrapper");
    nav.classList.add("dark-nav");
    main.classList.add("dark-main");
    main.classList.add("dark-main");
    dropDown.classList.add("dark-links-dropdown");
    articleTitle.classList.add("dark-title");

    //set dark mode to local storage
    localStorage.setItem("dark", true);

    //card-data
    for (let i = 0; i < dataRow.children.length; i++) {
      dataRow.children[i].children[1].children[0].children[0].style.color =
        "white";
    }
  }
  //switching to light mode
  else {
    icon.classList.replace("fa-sun", "fa-moon");
    mode.classList.remove("dark-mode-wrapper");
    mode.style.transition = ".3s";
    nav.classList.remove("dark-nav");
    main.classList.remove("dark-main");
    nav.style.transition = ".3s";
    dropDown.classList.remove("dark-links-dropdown");
    articleTitle.classList.remove("dark-title");
    articleTitle.style.transition = ".3s";

    //set dark mode to local storage
    localStorage.setItem("dark", false);

    //card-data
    for (let i = 0; i < dataRow.children.length; i++) {
      dataRow.children[i].children[1].children[0].children[0].style.color =
        "black";
    }
  }
});
