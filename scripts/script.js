/*
Group Name: Group 2
File Name: script.js
Date: 10/17/2024
*/

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
}

////Service description display funtion
//function basicBathBrush() {
//    var service = document.getElementById("basic-bath-brush");
//    if (service.style.display === none) {
//        service.style.display = block;
//    }
//    else {
//        service.style.display = none;
//    }
//    
//}