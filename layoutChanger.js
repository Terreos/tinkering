//document.getElementById("nav01").innerHTML =
//"<ul id='menu'>" +
//"<li><a href='index.html'>Home</a></li>" +
//"<li><a href='customers.html'>Data</a></li>" +
//"<li><a href='about.html'>About</a></li>" +
//"</ul>"; 

$(document).ready(main);
function main() {
var mainColors = array('rgba(75, 29, 101, 1)','rgba(107,142,35,1)','rgba(139,0,0,1)','rgb(0,0,0,1)');
var complementaryColors = array('rgba(30, 2, 46, 1)','rgba(51,51,51,1)');

};

function transitionOut(){
    $('body').hide(500);
};
function transitionIn(){
    $('body').delay(500).show(500);
};

function first() {
    transitionOut();
    $("input[name*='man']").val("has man in it!");
    transitionIn();
};
function second() {
    transitionOut();
    
    transitionIn();
};


