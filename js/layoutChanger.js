//document.getElementById("statiNavigation").innerHTML =
//"<ul id='menu'>" +
//"<li><a href='index.html'>Home</a></li>" +
//"<li><a href='customers.html'>Data</a></li>" +
//"<li><a href='about.html'>About</a></li>" +
//"</ul>"; 

$(document).ready(main);
function main() {
    topNav.set(0);   
};

topNav = {
    nav: document.getElementById("topNav"),
    previous: document.getElementById("previous"),
    current: document.getElementById("current"),
    next: document.getElementById("next"),
    wrap: document.getElementById("wrap"),
    layout: ['layouts/layout1.html','layouts/layout2.html','layouts/layout3.html'],
    set: function(s){
        wrap.innerHTML = '<object type="text/html" data="'+this.layout[s]+'" ></object>';
        if (s === 0){
            previous.innerHTML = '<a onclick="topNav.set('+String(this.layout.length-1)+')">'+'Layout '+String(this.layout.length-1)+'</a>';
            current.innerHTML = '<a onclick="topNav.set('+String(s)+')">'+'Layout '+String(s)+'</a>';
            next.innerHTML = '<a onclick="topNav.set('+String(s+1)+')">'+'Layout '+String(s+1)+'</a>';
        } else if (s === (this.layout.length-1)){
            previous.innerHTML = '<a onclick="topNav.set('+String(s-1)+')">'+'Layout '+String(s-1)+'</a>';
            current.innerHTML = '<a onclick="topNav.set('+String(s)+')">'+'Layout '+String(s)+'</a>';
            next.innerHTML = '<a onclick="topNav.set(0)">'+'Layout 0'+'</a>';
        } else {
            previous.innerHTML = '<a onclick="topNav.set('+String(s-1)+')">'+'Layout '+String(s-1)+'</a>';
            current.innerHTML = '<a onclick="topNav.set('+String(s)+')">'+'Layout '+String(s)+'</a>';
            next.innerHTML = '<a onclick="topNav.set('+String(s+1)+')">'+'Layout '+String(s+1)+'</a>';
        }
    },
    toggle: function(){
        if ($(document).scrollTop() > 20){
            $("#topNav").hide(500);
            $("#wrap, #wrap object").css('margin-top', '0px');
            $("#navToggle").show(500);
        } else {
            $("#navToggle").click(function() {
                $("#navToggle").hide(500);
                $("#topNav").show(500);
                $("#wrap, #wrap object").css('margin-top', '60px');
            });
        }
        }
    };

