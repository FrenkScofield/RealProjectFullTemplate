var searchBtn = document.querySelector('#search');
var mainContents = document.querySelector('main#contents');
var menuBtn = document.querySelector('button[id="menu"]');
var asideLeft = document.querySelector('aside#left');
var nav_spans = document.querySelectorAll('aside#left #nav li div div > i + span');
var simplify = document.getElementById('simplify');
var collapseOneCheckBoxes = document.querySelectorAll('#accordion #collapseOne input');
var collapseTwoCheckBoxes = document.querySelectorAll('#accordion #collapsTwo input');
var collapseThreeCheckBoxes = document.querySelectorAll('#accordion #collapsThree input');
var collapseFourCheckBoxes = document.querySelectorAll('#accordion #collapsFour input');
var collapseFiveCheckBoxes = document.querySelectorAll('#accordion #collapsFive input');
var collapseSixsCheckBoxes = document.querySelectorAll('#accordion #collapsSixs input');

var mainTitle = document.getElementById('addTitle');

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
// search input enable-disable
function SlideSearchInput() {
    var search_input = document.querySelector('input[name="search"]');
    if (search_input.classList.contains('d-inline-block')) {
        search_input.classList.remove('d-inline-block');
    } else {
        search_input.classList.add('d-inline-block');
    }
}

searchBtn.addEventListener('click', SlideSearchInput);
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

// user permissions related stuff
var main_notice_checkbox = document.getElementById('esas_qeydler_all');

function check_all() {
    var descendant_checkboxes = document.getElementsByName('esas_qeydler');
    if (this.checked) {
        for (var item of descendant_checkboxes) {
            item.checked = true;
        }
        this.parentNode.style.backgroundColor = '#00FF7F';
    } else {
        for (var item of descendant_checkboxes) {
            item.checked = false;
        }
        this.parentNode.style = '';
    }
}

main_notice_checkbox.addEventListener('click', check_all);

//hereketler

var movements = document.getElementById('hereketler-all');

function checkAlltwo() {
    var movements_checkboxes = document.getElementsByName('hereketler');
    if (this.checked) {
        for (var item of movements_checkboxes) {
            item.checked = true;
        }
        this.parentNode.style.backgroundColor = '#00FF7F';
    } else {
        for (var item of movements_checkboxes) {
            item.checked = false;
        }
        this.parentNode.style = '';
    }
}

movements.addEventListener('click', checkAlltwo);

//Hesabatlar

var reports = document.getElementById('hesabatlar-all');

function checkAllthree() {
    var reports_checkboxes = document.getElementsByName('hesabatlar');
    if (this.checked) {
        for (var item of reports_checkboxes) {
            item.checked = true;
        }
        this.parentNode.style.backgroundColor = '#00FF7F';
    } else {
        for (var item of reports_checkboxes) {
            item.checked = false;
        }
        this.parentNode.style = '';
    }
}

reports.addEventListener('click', checkAllthree);

//isdifadeciler

var users = document.getElementById('isdifadeciler-all');

function checkAllfour() {
    var users_checkboxes = document.getElementsByName('Isdifadeciler');
    if (this.checked) {
        for (var item of users_checkboxes) {
            item.checked = true;
        }
        this.parentNode.style.backgroundColor = '#00FF7F';
    } else {
        for (var item of users_checkboxes) {
            item.checked = false;
        }
        this.parentNode.style = '';
    }
}

users.addEventListener('click', checkAllfour);

//Tenzimleyiciler

var adjusting = document.getElementById('tenzimleyici-all');

function checkAllfive() {
    var adjusting_checkboxes = document.getElementsByName('tenzimleme');
    if (this.checked) {
        for (var item of adjusting_checkboxes) {
            item.checked = true;
        }
        this.parentNode.style.backgroundColor = '#00FF7F';
    } else {
        for (var item of adjusting_checkboxes) {
            item.checked = false;
        }
        this.parentNode.style = '';
    }
}

adjusting.addEventListener('click', checkAllfive);

//Rooms

var rooms = document.getElementById('otaqlar-all');

function checkAllSixs() {
    var room_checkboxes = document.getElementsByName('otaq');
    if (this.checked) {
        for (var item of room_checkboxes) {
            item.checked = true;
        }
        this.parentNode.style.backgroundColor = '#00FF7F';
    } else {
        for (var item of room_checkboxes) {
            item.checked = false;
        }
        this.parentNode.style = '';
    }
}

rooms.addEventListener('click', checkAllSixs);

//user name input orientation

var userTable = document.getElementById('userTable');

for (var i = 1; i < userTable.rows.length; i++) {
    userTable.rows[i].onclick = function () {
        //rIndex = this.rowIndex;
        document.getElementById("userName").value = this.cells[0].innerHTML;

    };
}

// permission to users by checkboxes start here
for (var box of collapseOneCheckBoxes) {
    box.onclick = function () {
        var trigger = false;
        var mainCheckBoxTrigger = false;
        var mainCheckBox = document.getElementById('esas_qeydler_all');

        for (var item of collapseOneCheckBoxes) {
            if (item.checked) {
                trigger = true;
                mainCheckBoxTrigger = true;
                break;
            }
        }

        if (trigger) {
            this.parentNode.parentNode.parentNode.parentNode.childNodes[1].style.backgroundColor = ' #dd33ff';
        } else {
            this.parentNode.parentNode.parentNode.parentNode.childNodes[1].style.backgroundColor = '';
        }

        if (mainCheckBoxTrigger) {
            mainCheckBox.checked = true;
        } else {
            mainCheckBox.checked = false;
        }
    }
}

for (var box of collapseTwoCheckBoxes) {
    box.onclick = function () {
        var trigger = false;
        var mainCheckBoxTrigger = false;
        var mainCheckBox = document.getElementById('hereketler-all');

        for (var item of collapseTwoCheckBoxes) {
            if (item.checked) {
                trigger = true;
                mainCheckBoxTrigger = true;
                break;
            }
        }

        if (trigger) {
            this.parentNode.parentNode.parentNode.parentNode.childNodes[1].style.backgroundColor = '#dd33ff';
        } else {
            this.parentNode.parentNode.parentNode.parentNode.childNodes[1].style.backgroundColor = '';
        }

        if (mainCheckBoxTrigger) {
            mainCheckBox.checked = true;
        } else {
            mainCheckBox.checked = false;
        }
    }
}

for (var box of collapseThreeCheckBoxes) {
    box.onclick = function () {
        var trigger = false;
        var mainCheckBoxTrigger = false;
        var mainCheckBox = document.getElementById('hesabatlar-all');

        for (var item of collapseThreeCheckBoxes) {
            if (item.checked) {
                trigger = true;
                mainCheckBoxTrigger = true;
                break;
            }
        }

        if (trigger) {
            this.parentNode.parentNode.parentNode.parentNode.childNodes[1].style.backgroundColor = '#dd33ff';
        } else {
            this.parentNode.parentNode.parentNode.parentNode.childNodes[1].style.backgroundColor = '';
        }
        /* This project is the frontend and the design software Frank Schofield code specific to forensic developer. Date year 2019. hours 13:28. */

        if (mainCheckBoxTrigger) {
            mainCheckBox.checked = true;
        } else {
            mainCheckBox.checked = false;
        }
    }
}

for (var box of collapseFourCheckBoxes) {
    box.onclick = function () {
        var trigger = false;
        var mainCheckBoxTrigger = false;
        var mainCheckBox = document.getElementById('isdifadeciler-all');

        for (var item of collapseFourCheckBoxes) {
            if (item.checked) {
                trigger = true;
                mainCheckBoxTrigger = true;
                break;
            }
        }

        if (trigger) {
            this.parentNode.parentNode.parentNode.parentNode.childNodes[1].style.backgroundColor = '#dd33ff';
        } else {
            this.parentNode.parentNode.parentNode.parentNode.childNodes[1].style.backgroundColor = '';
        }

        // if all inner checkboxes are checked main is checked also

        if (mainCheckBoxTrigger) {
            mainCheckBox.checked = true;
        } else {
            mainCheckBox.checked = false;
        }
    }
}

for (var box of collapseFiveCheckBoxes) {
    box.onclick = function () {
        var trigger = false;
        var mainCheckBoxTrigger = false;
        var mainCheckBox = document.getElementById('tenzimleyici-all');

        for (var item of collapseFiveCheckBoxes) {
            if (item.checked) {
                trigger = true;
                mainCheckBoxTrigger = true;
                break;
            }
        }

        if (trigger) {
            this.parentNode.parentNode.parentNode.parentNode.childNodes[1].style.backgroundColor = '#dd33ff';
        } else {
            this.parentNode.parentNode.parentNode.parentNode.childNodes[1].style.backgroundColor = '';
        }

        if (mainCheckBoxTrigger) {
            mainCheckBox.checked = true;
        } else {
            mainCheckBox.checked = false;
        }
    }
}

//Otaqlar
for (var box of collapseSixsCheckBoxes) {
    box.onclick = function () {
        var trigger = false;
        var mainCheckBoxTrigger=false;
        var mainCheckBox = document.getElementById('otaqlar-all');

        for (var item of collapseSixsCheckBoxes) {
            if (item.checked) {
                trigger = true;
                mainCheckBoxTrigger=true;
                break;
            }
        }

        if (trigger) {
            this.parentNode.parentNode.parentNode.parentNode.childNodes[1].style.backgroundColor = '#dd33ff';
        } else {
            this.parentNode.parentNode.parentNode.parentNode.childNodes[1].style.backgroundColor = '';
        }

        if (mainCheckBoxTrigger) {
            mainCheckBox.checked = true;
        } else {
            mainCheckBox.checked = false;
        }
    }
}
//header search icon onclick time run function
var searchTitle = document.getElementById('axtaris');
function iconlup(){
   
    $(searchTitle).css("width","200px");
}
searchTitle.addEventListener('mouseleave',iconBack);
function iconBack(){
    $(searchTitle).css("width",'');
}