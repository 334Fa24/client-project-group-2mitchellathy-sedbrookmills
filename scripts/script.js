/*
Group Name: Group 2
File Name: script.js
Date: 10/17/2024
*/

//Functions for navigation

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

//Functions for Service Page

//Basic bath and brush function
function bathBrush() {
    var info = document.getElementById("bath-and-brush");
    var title = document.getElementById("service1-title");
    if (info.style.display === "none") {
        info.style.display = "block";
        title.style.display = "none";
    }
    else {
        info.style.display = "none";
        title.style.display = "block";
    }
}

//Full grooming function
function fullGrooming() {
    var info = document.getElementById("full-grooming");
    var title = document.getElementById("service2-title");
    if (info.style.display === "none") {
        info.style.display = "block";
        title.style.display = "none";
    }
    else {
        info.style.display = "none";
        title.style.display = "block";
    }
}

//Puppy's first groom function
function firstGroom() {
    var info = document.getElementById("first-groom");
    var title = document.getElementById("service3-title");
    if (info.style.display === "none") {
        info.style.display = "block";
        title.style.display = "none";
    }
    else {
        info.style.display = "none";
        title.style.display = "block";
    }
}

//Deshedding treatment function
function deshedding() {
    var info = document.getElementById("deshedding");
    var title = document.getElementById("service4-title");
    if (info.style.display === "none") {
        info.style.display = "block";
        title.style.display = "none";
    }
    else {
        info.style.display = "none";
        title.style.display = "block";
    }
}

//Deluxe spa package function
function deluxeSpa() {
    var info = document.getElementById("deluxe-spa");
    var title = document.getElementById("service5-title");
    if (info.style.display === "none") {
        info.style.display = "block";
        title.style.display = "none";
    }
    else {
        info.style.display = "none";
        title.style.display = "block";
    }
}

//Add-on services function
function addOns() {
    var info = document.getElementById("add-ons");
    var title = document.getElementById("service6-title");
    if (info.style.display === "none") {
        info.style.display = "block";
        title.style.display = "none";
    }
    else {
        info.style.display = "none";
        title.style.display = "block";
    }
}

//Pet bakery function
function petBakery() {
    var info = document.getElementById("pet-bakery");
    var title = document.getElementById("service7-title");
    if (info.style.display === "none") {
        info.style.display = "block";
        title.style.display = "none";
    }
    else {
        info.style.display = "none";
        title.style.display = "block";
    }
}

//Grooming boutique function
function groomingBoutique() {
    var info = document.getElementById("grooming-boutique");
    var title = document.getElementById("service8-title");
    if (info.style.display === "none") {
        info.style.display = "block";
        title.style.display = "none";
    }
    else {
        info.style.display = "none";
        title.style.display = "block";
    }
}

//Doggie daycare function
function doggieDaycare() {
    var info = document.getElementById("doggie-daycare");
    var title = document.getElementById("service9-title");
    if (info.style.display === "none") {
        info.style.display = "block";
        title.style.display = "none";
    }
    else {
        info.style.display = "none";
        title.style.display = "block";
    }
}

//function for tabs on resources page
function loadContent(evt, contentSection) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(contentSection).style.display = "block";
  evt.currentTarget.className += " active";
}

function bookNow() {
  window.location.href = "book.html";

}
