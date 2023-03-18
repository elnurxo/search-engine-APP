let mode = document.querySelector(".mode-wrapper");
let icon = document.querySelector(".fa-solid");
let nav = document.querySelector("nav");
let main = document.querySelector("main");
let input = document.querySelector("#search");
let dropDown = document.querySelector('.links-dropdown');

//get mode from local storage
let modeLocalStr = localStorage.getItem("dark");
var modeLocal = (String(modeLocalStr).toLowerCase() === 'true');

if (modeLocal) {
    icon.classList.replace("fa-moon","fa-sun");
    mode.classList.add("dark-mode-wrapper");
    nav.classList.add("dark-nav");
    main.classList.add("dark-main");
    main.classList.add("dark-main");
    input.classList.add('dark-input');
    dropDown.classList.add('dark-links-dropdown');
}
else{
    icon.classList.replace("fa-sun","fa-moon");
    mode.classList.remove("dark-mode-wrapper");
    mode.style.transition = '.3s';
    nav.classList.remove("dark-nav");
    main.classList.remove("dark-main");
    nav.style.transition = '.3s';
    input.classList.remove('dark-input');
    dropDown.classList.remove('dark-links-dropdown');
}
//mode click
mode.addEventListener('click',function(){

    //switching to dark mode
    if (icon.classList.contains("fa-moon")) {
        icon.classList.replace("fa-moon","fa-sun");
        mode.classList.add("dark-mode-wrapper");
        nav.classList.add("dark-nav");
        main.classList.add("dark-main");
        main.classList.add("dark-main");
        input.classList.add('dark-input');
        dropDown.classList.add('dark-links-dropdown');

        //set dark mode to local storage
        localStorage.setItem("dark", true);
    }
    //switching to light mode
    else{
        icon.classList.replace("fa-sun","fa-moon");
        mode.classList.remove("dark-mode-wrapper");
        mode.style.transition = '.3s';
        nav.classList.remove("dark-nav");
        main.classList.remove("dark-main");
        nav.style.transition = '.3s';
        input.classList.remove('dark-input');
        dropDown.classList.remove('dark-links-dropdown');
        
        //set dark mode to local storage
        localStorage.setItem("dark", false);
    }
});