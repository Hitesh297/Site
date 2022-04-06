var hamburger = document.getElementById("hamburger");
var rightmenu = document.getElementById("right-menu");
var rightmenuitems = document.querySelectorAll("#right-menu ol a");
var hamburgericon = document.getElementById('hamburger-icon');
var closeicon = document.getElementById('close-icon');
rightmenuitems.forEach(element => {
    element.onclick = toggleMenu;
});

hamburger.onclick = toggleMenu;

function toggleMenu() {
    rightmenu.classList.toggle('open');
    if (rightmenu.classList.contains('open')) {
        hamburgericon.style.display = 'none';
        closeicon.style.display = 'block';
    }
    else {
        hamburgericon.style.display = 'block';
        closeicon.style.display = 'none';
    }
}