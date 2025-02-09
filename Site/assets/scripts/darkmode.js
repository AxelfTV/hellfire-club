document.addEventListener("DOMContentLoaded", main);

let darkMode;

function main()
{
    if(window.localStorage.getItem("dark-mode") == null) window.localStorage.setItem("dark-mode", false);
    darkMode = window.localStorage.getItem("dark-mode");
    console.log("init", darkMode);
    if(darkMode == true) toggleDarkMode();

    document.getElementsByClassName("dm-toggle")[0].addEventListener("click", toggleDarkMode);
    document.getElementsByClassName("dm-toggle")[1].addEventListener("click", toggleDarkMode);

    
}
function toggleDarkMode() 
{
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById("light-header").classList.toggle("hidden");
    document.getElementById("dark-header").classList.toggle("hidden");

    darkMode = !darkMode;
    window.localStorage.setItem("dark-mode", darkMode);

    console.log(window.localStorage.getItem("dark-mode"));
}