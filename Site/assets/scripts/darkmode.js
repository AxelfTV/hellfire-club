document.addEventListener("DOMContentLoaded", main);

let darkMode;

function main()
{
    if(window.localStorage.getItem("dark-mode") == null) 
        window.localStorage.setItem("dark-mode", 0);

    darkMode = window.localStorage.getItem("dark-mode");
    
    if(darkMode == 1) 
    {
        console.log("init", darkMode);
        
        var element = document.body;
        element.classList.toggle("dark-mode");
        document.getElementById("light-header").classList.toggle("hidden");
        document.getElementById("dark-header").classList.toggle("hidden");
        document.getElementById("particles-js1").classList.toggle("hidden");

        let contentSections = document.querySelectorAll(".content-section");
        contentSections.forEach(section => {
            section.style.backgroundColor = "#7f1700"; // Dark red for dark mode
        });
    }


    document.getElementsByClassName("dm-toggle")[0].addEventListener("click", toggleDarkMode);
    document.getElementsByClassName("dm-toggle")[1].addEventListener("click", toggleDarkMode);

}

function toggleDarkMode() 
{
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById("light-header").classList.toggle("hidden");
    document.getElementById("dark-header").classList.toggle("hidden");
    document.getElementById("particles-js1").classList.toggle("hidden");

    let contentSections = document.querySelectorAll(".content-section");
    contentSections.forEach(section => {
        if (element.classList.contains("dark-mode")) {
            section.style.backgroundColor = "#7f1700"; // Dark red in dark mode
        } else {
            section.style.backgroundColor = "#EEE9BF"; // Light mode color
        }
    });
    
    if(darkMode == 1) darkMode = 0;
    else darkMode = 1;
    window.localStorage.setItem("dark-mode", darkMode);

    console.log(window.localStorage.getItem("dark-mode"));
}
