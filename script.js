

function openMenu() {
  document.getElementById("sideMenu").style.width = "250px";
  document.getElementById("menuOverlay").style.display = "block";
}

function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
    document.getElementById("menuOverlay").style.display = "none";
}

function openProductMenu(){
    document.getElementById("productsideMenu").style.width = "250px";
    document.getElementById("menuOverlay").style.display = "block";
}

function closeProductMenu(){
    document.getElementById("productsideMenu").style.width = "0";
    document.getElementById("menuOverlay").style.display = "none";
}

function openAboutMenu(){
    document.getElementById("aboutsideMenu").style.width = "250px";
    document.getElementById("menuOverlay").style.display = "block";
}

function closeAboutMenu(){
    document.getElementById("aboutsideMenu").style.width = "0";
    document.getElementById("menuOverlay").style.display = "none";
}

function openContactMenu(){
    document.getElementById("contactsideMenu").style.width = "250px";
     document.getElementById("menuOverlay").style.display = "block";
}

function closeContactMenu(){
    document.getElementById("contactsideMenu").style.width = "0";
    document.getElementById("menuOverlay").style.display = "none";
}


// Enable mouse wheel to scroll horizontally when hovering over image containers
document.querySelectorAll('.image-scroll').forEach(container => {
    container.addEventListener('wheel', function (e) {
        if (e.deltaY !== 0) {
            e.preventDefault(); // prevent vertical scroll
            container.scrollLeft += e.deltaY;
        }
    });
});