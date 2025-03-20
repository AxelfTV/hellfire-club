document.addEventListener("DOMContentLoaded", main);

let darkMode;

function main()
{
    if(window.localStorage.getItem("dark-mode") == null) window.localStorage.setItem("dark-mode", 0);
    darkMode = window.localStorage.getItem("dark-mode");
    
    if(darkMode == 1) 
    {
        console.log("init", darkMode);
        
        var element = document.body;
        element.classList.toggle("dark-mode");
       document.getElementById("light-header").classList.toggle("hidden");
       document.getElementById("dark-header").classList.toggle("hidden");

    }


    document.getElementsByClassName("dm-toggle")[0].addEventListener("click", toggleDarkMode);
    document.getElementsByClassName("dm-toggle")[1].addEventListener("click", toggleDarkMode);



}

