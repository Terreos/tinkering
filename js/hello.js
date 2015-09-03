$(document).ready(main);
function main() {
    $.getJSON('../json/hello.json', function(hello) {
        var out = '';
        out += '<heading><h1>'+ hello.title + '</h1></heading>';
        for(var i = 0; i < hello.content.length; i++) {
            out += '<p>' + hello.content[i] + '</p>';
        }
        document.getElementById("hello").innerHTML = out;
});
//alert('kaka');
//var xmlhttp = new XMLHttpRequest();
//var url = "../json/hello.json";
//
//xmlhttp.onreadystatechange = function() {
//    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
//        var myArr = JSON.parse(xmlhttp.responseText);
//        myFunction(myArr);
//        alert('kaka');
//    }
//};
//xmlhttp.open("GET", url, true);
//xmlhttp.send();
//
//function myFunction(arr) {
//    var out = "";
//    var i;
//    out += '<h1>'+ arr.title + '</h1>';
//    for(i = 0; i < arr.content.length; i++) {
//        out += '<p>' + arr[i].url + '</p>';
//    }
//    document.getElementById("hello").innerHTML = out;
//};
};