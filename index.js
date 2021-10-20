document.getElementById("frontend").onclick = function (){

    document.getElementById("frontend").style.backgroundColor = "#E7E9EB";
    document.getElementById("backend").style.backgroundColor = "#F1F1F1";
    document.getElementById("frontend_img").style.display = "block";
    document.getElementById("backend_img").style.display = "none";
}

document.getElementById("backend").onclick = function (){

    document.getElementById("backend").style.backgroundColor = "#E7E9EB";
    document.getElementById("frontend").style.backgroundColor = "#F1F1F1";
    document.getElementById("backend_img").style.display = "block";
    document.getElementById("frontend_img").style.display = "none";
}

// Image Slider Section Code

// Slider Section Script

var imageno = 1;
displayimage(imageno);

function plusSlides(n){

    displayimage (imageno += n);
}

function currentSlides(n){

    displayimage (imageno = n);
}

function displayimage(n){

    var i;
    var slideImage = document.getElementsByClassName("slideImage");
    var dot = document.getElementsByClassName("dots");

    if (n > slideImage.length){
        imageno = 1;
    }

    if(n < 1){
        imageno = slideImage.length;
    }

    for(i=0; i < slideImage.length; i++){
        slideImage[i].style.display = "none"; 
    }
    for(i=0; i < dot.length; i++){
        dot[i].className = dot[i].className.replace("active", " ");
    }

    slideImage[imageno  - 1].style.display = "block";
    dot[imageno - 1].className += " active ";
}