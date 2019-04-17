var menuBtn = document.querySelector('button[id="menu"]');
var asideLeft = document.querySelector('aside#left');
var mainContents = document.querySelector('main#contents');
var nav_spans = document.querySelectorAll('aside#left #nav li div div > i + span');;
var select = document.getElementById('select-privateCode');
var selectType = document.getElementById('select-type');
var selectBrand = document.getElementById('select-brand');
var selectprivateCode = document.getElementsByClassName("buttonInputs-privateCode");
var selectTypeCode = document.getElementsByClassName("buttonInputs-typeCode");
var selectMarkaCode = document.getElementsByClassName('buttonInputs-brendCode');
var privateCode = document.getElementById('privateCode');
var typeCode = document.getElementById('typeCode');
var BrandCode = document.getElementById('BrandCode');
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
for(var i = 1; i < privateCode.rows.length; i++)
{
    privateCode.rows[i].onclick = function()
    {
         //rIndex = this.rowIndex;
         document.getElementById("ozelcod").value = this.cells[1].innerHTML;
         $(selectprivateCode).css("display","none");
         
    };
}

select.onclick = function()
{
   /*This project is the frontend and the design software Frank Schofield code specific to forensic developer. Date year 2018. hours 13:28. */
    event.preventDefault()
    $(selectprivateCode).css("display","block")
}

for(var i = 1; i < typeCode.rows.length; i++)
{
    typeCode.rows[i].onclick = function()
    {
         //rIndex = this.rowIndex;
         document.getElementById("tip").value = this.cells[1].innerHTML;
         $(selectTypeCode).css("display","none");
         
    };
}

selectType.onclick = function()
{
    event.preventDefault()
    $(selectTypeCode).css("display","block")

}

for(var i = 1; i < BrandCode.rows.length; i++)
{
    BrandCode.rows[i].onclick = function()
    {
         //rIndex = this.rowIndex;
         document.getElementById("marka").value = this.cells[1].innerHTML;
         $(selectMarkaCode).css("display","none");
         
    };
}

selectBrand.onclick = function()
{
    event.preventDefault()
    $(selectMarkaCode).css("display","block")
}

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

//header search icon onclick time run function
var searchTitle = document.getElementById('axtaris');
function iconlup(){
   
    $(searchTitle).css("width","200px");
}
searchTitle.addEventListener('mouseleave',iconBack);
function iconBack(){
    $(searchTitle).css("width",'');
}