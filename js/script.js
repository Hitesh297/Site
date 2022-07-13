//handle events for right menu
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

//hide navbar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;

  // slide and show section
  var reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i< reveals.length; i++) {
    
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 100;

      if (revealtop < windowheight - revealpoint) {
          reveals[i].classList.add('activescroll');
      }else{
        reveals[i].classList.remove('activescroll');
      }
     
    }
}


// show tab selector movement in experience section
const tabs = document.getElementsByClassName('tabs');
console.log(tabs.length);
for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', e => handleClick(e));
}

function handleClick(e) {
    console.log("clicked");
    const target = e.target;
    const tabNum = target.dataset.tab;
    const activeTab = document.querySelector('.tabs.active');
    const activeContent = document.querySelector(
      '.content__section.visible'
    );
    const currentContent = document.querySelector(
      `.content__section[data-tab='${tabNum}']`
    );
    
    if (!tabNum) {
      return;
    }
    
    activeTab.classList.remove('active');
    target.classList.add('active');
    activeContent.classList.remove('visible');
    currentContent.classList.add('visible');


    var selector = document.getElementById('company-selector');
    var selectorLocation = (tabNum * 42) - 42;
    console.log("location:",selectorLocation);
    selector.style.transform = "translateY("+ selectorLocation + "px)";
  }
  


  // window.addEventListener('scroll', reveal);

  // function reveal() {
    
  // }