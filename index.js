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