//document.getElementById("statiNavigation").innerHTML =
//"<ul id='menu'>" +
//"<li><a href='index.html'>Home</a></li>" +
//"<li><a href='customers.html'>Data</a></li>" +
//"<li><a href='about.html'>About</a></li>" +
//"</ul>"; 
$(window).ready(main);
function main() {
    topNav.set(0);   
};

topNav = {
    nav: document.getElementById("topNav"),
    previous: document.getElementById("previous"),
    current: document.getElementById("current"),
    next: document.getElementById("next"),
    wrap: document.getElementById("wrap"),
    layout: [
        {url: 'layouts/layout1.html',
        title: 'Layout 1'},
        {url: 'layouts/layout2.html',
        title: 'Layout 2'},
        {url: 'layouts/text-editor.html',
        title: 'Text editor'},
        {url:'angularStore/angular-store.html',
        title: 'Angular store front'}
    ],
    set: function(s){
        wrap.innerHTML = '<object type="text/html" data="'+this.layout[s].url+'" ></object>';
        if (s === 0){
            previous.innerHTML = '<a onclick="topNav.set('+String(this.layout.length-1)+')">'+this.layout[String(this.layout.length-1)].title+'</a>';
            current.innerHTML = '<a onclick="topNav.set('+String(s)+')">'+this.layout[s].title+'</a>';
            next.innerHTML = '<a onclick="topNav.set('+String(s+1)+')">'+this.layout[s+1].title+'</a>';
        } else if (s === (this.layout.length-1)){
            previous.innerHTML = '<a onclick="topNav.set('+String(s-1)+')">'+this.layout[s-1].title+'</a>';
            current.innerHTML = '<a onclick="topNav.set('+String(s)+')">'+this.layout[s].title+'</a>';
            next.innerHTML = '<a onclick="topNav.set(0)">'+this.layout[0].title+'</a>';
        } else {
            previous.innerHTML = '<a onclick="topNav.set('+String(s-1)+')">'+this.layout[s-1].title+'</a>';
            current.innerHTML = '<a onclick="topNav.set('+String(s)+')">'+this.layout[s].title+'</a>';
            next.innerHTML = '<a onclick="topNav.set('+String(s+1)+')">'+this.layout[s+1].title+'</a>';
        }
    },
    toggle: function(){
        if (($(document).scrollTop() > 20)){
            $("#topNav").hide(500);
            $("#wrap, #wrap object").css('margin-top', '0px');
            $("#navToggle").show(500);
        } else {
            $("#navToggle").click(function() {
                $("#navToggle").hide(500);
                $("#topNav").show(500);
                $("#wrap, #wrap object").css('margin-top', '40px');
            });
        }
        }
    };

