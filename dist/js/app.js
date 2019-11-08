window.addEventListener("resize", listenResize);

function listenResize() {
    if(window.innerWidth < 768){
        document.getElementById("checkbox-main-nav-toggler").checked = false;
    }
    if(window.innerWidth >= 768 && window.innerWidth <= 991){
        document.getElementById("checkbox-main-nav-toggler").checked = true;
    } else {
        document.getElementById("checkbox-main-nav-toggler").checked = false;
    }
}
