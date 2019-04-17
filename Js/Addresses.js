var searchBtn = document.querySelector('#search');
var mainContents = document.querySelector('main#contents');
var menuBtn = document.querySelector('button[id="menu"]');
var asideLeft = document.querySelector('aside#left');
var nav_spans;
var simplify = document.getElementById('simplify');
var mainTitle = document.getElementById('addTitle');
var rightTableBox = document.getElementById('rightClickBox');

var profile = document.getElementById('profile_picture');
var profileOverlay = document.getElementById("profile-overlay");
var profile_dropDown = document.getElementById('profile-dropdown');

profile.addEventListener('click', showProfileDropdown);

function showProfileDropdown() {
    var profile_dropDown = document.getElementById('profile-dropdown');
    if (!profile_dropDown.classList.contains('hide')) {
        profile_dropDown.classList.add('hide');
    } else {
        profile_dropDown.classList.remove('hide');
        profileOverlay.classList.remove("hide");
    }
}
$("#profile-overlay").click(function (e) {
    profile_dropDown.classList.add('hide');
    profileOverlay.classList.add("hide");
    
})
//NAVBAR CILCK HOVR LEFT RIGHT
$(document).ready(function () {
    nav_spans = document.querySelectorAll('aside#left #nav li div div > i + span');
})
// search input enable-disable
function SlideSearchInput() {
    var search_input = document.querySelector('input[name="search"]');
    if (search_input.classList.contains('d-inline-block')) {
        search_input.classList.remove('d-inline-block');
    } else {
        search_input.classList.add('d-inline-block');
    }
}

//searchBtn.addEventListener('click', SlideSearchInput);
asideLeft.addEventListener('mouseover', function () {
    for (const iterator of nav_spans) {

        iterator.style.display = "";
    }
    simplify.style.display = "";
    
   /*This project is the frontend and the design software Frank Schofield code specific to forensic developer. Date year 2018. hours 13:28. */
})
asideLeft.addEventListener('mouseleave', function () {
    if(window.innerWidth > 1200){
        if (asideLeft.classList.contains('shorten')) {
            for (const iterator of nav_spans) {
                iterator.style.display = "block";
            }
            simplify.style = 'display:none';
        }
    }

})

window.addEventListener("resize", function () {
    var menuBtnContainer = document.querySelector('main#contents header>div.left');

    if (window.innerWidth <= 1199 && window.innerWidth >= 992) {
        if (menuBtnContainer.style["transform"] == "translate(238px, 0px)") {
            menuBtnContainer.style = 'transform:translate(255px,0)';
        }
    } else if (window.innerWidth <= 991) {
        if (menuBtnContainer.style["transform"] == "translate(255px, 0px)") {
            menuBtnContainer.style = 'transform:translate(238px,0)';
        }
    } else {
        if (menuBtnContainer.style["transform"] != null) {
            menuBtnContainer.style = '';
            asideLeft.style ='';
        }
    }
})
function SlideAside() {
    var body = document.querySelector('body');
    var menuBtnContainer = document.querySelector('main#contents header>div.left');

    if (body.clientWidth <= 1199 && body.clientWidth >= 992) {
        if (asideLeft.offsetLeft === -255) {
            asideLeft.style = 'left:0;';
            menuBtnContainer.style = 'transform:translate(255px,0)';
        } else {
            asideLeft.style = '';
            menuBtnContainer.style = '';
        }
    } else if (body.clientWidth <= 991) {
        if (asideLeft.offsetLeft === -238) {
            asideLeft.style = 'left:0;';
            menuBtnContainer.style = 'transform:translate(238px,0)';
        } else {
            asideLeft.style = '';
            menuBtnContainer.style = '';
        }
    } else {
        if (asideLeft.classList.contains('shorten')) {
            asideLeft.classList.remove('shorten');
            mainContents.classList.remove('widen');
            for (const iterator of nav_spans) {
                iterator.style.display = "";
            }
            simplify.style = "";
        } else {
            asideLeft.classList.add('shorten');
            for (const iterator of nav_spans) {
                iterator.style.display = "none";
            }
            mainContents.classList.add('widen');
            simplify.style = 'display:none';
        }
    }
}

menuBtn.addEventListener('click', SlideAside);

//MAUS RIGHT BUTTON CILCK MENU FUNCTION START

let menu = document.querySelector('.rightmenu');
let box = document.getElementById('maintable');

function showmenu(ev) {
    //stop the real right click menu
    ev.preventDefault();
    //show the custom menu
    menu.style.top = `${ev.clientY - 20}px`;
    menu.style.left = `${ev.clientX - 20}px`;
    menu.classList.remove('off');
}
box.addEventListener('contextmenu', showmenu);

function hidemenu(ev) {
    menu.classList.add('off');
    menu.style.top = '-200%';
    menu.style.left = '-200%';
}
menu.addEventListener('mouseleave', hidemenu);

//Right-click the mouse, click on the date function in the window that opens

document.getElementById('historyBtn').addEventListener("click", function () {
    document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function () {
    document.querySelector('.bg-modal').style.display = "none";
});

document.getElementById('rightClickAddBtn').addEventListener("click", function () {
    document.querySelector('.AddWindow').style.display = "flex";
});

document.querySelector('.AddWindowClose').addEventListener("click", function () {
    document.querySelector('.AddWindow').style.display = "none";
});

document.getElementById('rightClickEditBtn').addEventListener("click", function () {
    document.querySelector('.EditWindow').style.display = "flex";
});

document.querySelector('.EditWindowClose').addEventListener("click", function () {
    document.querySelector('.EditWindow').style.display = "none";
});

//header search icon onclick time run function
var searchTitle = document.getElementById('axtaris');
function iconlup(){
   
    $(searchTitle).css("width","200px");
}
searchTitle.addEventListener('mouseleave',iconBack);
function iconBack(){
    $(searchTitle).css("width",'');
}