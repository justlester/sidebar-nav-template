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

$(document).ready(function(){
    $('.nav-dropdown-item label').click(function(){
        if(document.getElementById("checkbox-main-nav-toggler").checked){
            $(this).next().css({"top": $(this).position().top});
        } 
    });

    $('.main-nav-menu').scroll(function(){
        // if(document.getElementById("checkbox-main-nav-toggler").checked){
            var dropdownContents = $(this).find('.nav-dropdown-item ul');
            for(var a=0; a < dropdownContents.length; a++){
                if($(dropdownContents[a]).innerHeight() != 0){
                    $(dropdownContents[a]).css({"top": $(dropdownContents[a]).prev().position().top});
                }
            }
        // }
    });
});

