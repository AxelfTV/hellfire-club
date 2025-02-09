document.addEventListener("DOMContentLoaded", main);

function main()
{
    document.getElementById("dm-toggle").addEventListener("click", toggleDarkMode);
}
function toggleDarkMode() 
{
    var element = document.body;
    element.classList.toggle("dark-mode");
}