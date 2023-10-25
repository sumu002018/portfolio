var a = "next";
function nextpage()
{
    location.href = a +".html";
}
var b = "next";
function nextpage1()
{
    location.href = b +".html";
}
var c = "next";
function nextpage2()
{
    location.href = c +".html";
}

var d = "next";
function nextpage3()
{
    location.href = d +".html";
}



// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

let tabs = document.querySelector(".tabs");
let tabHeader = tabs.querySelector(".tab-header");
let tabHeaderElements = tabs.querySelectorAll(".tab-header > div");
let tabBody = tabs.querySelector(".tab-body");
let tabBodyElements = tabs.querySelectorAll(".tab-body > div");
let tabIndicatior = tabs.querySelector(".tab-indicator >div");
 

for( let i=0;i<tabHeaderElements.length;i++)
{
    tabHeaderElements[i].addEventListener("click",function()
    {
        tabHeader.querySelector(".active").classList.remove("active");
        tabHeaderElements[i].classList.add("active");
        tabBody.querySelector(".active").classList.remove("active");
        tabBodyElements[i].classList.add("active");
        tabIndicatior.style.left = '${i*25}%';
    });
}
