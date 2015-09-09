$(document).ready(main);
function main() {
    changeLayout();
    bold();
    alert('Only first icon on the top bar works somewhat properly(changes layout of the page). The "B" on the left bar works not really as it should - makes an alert with the selected text, but does not make it bold.');
};

$maxwidth = 1654;
$maxheight = 2339;
$minwidth = 595;
$minheight = 842;
$scale = 0.1;
$fontsize = 15;

$marginvertical = '2em';
$marginhorizontal = '1.5em';

$marginvertical2 = $marginhorizontal;
$marginhorizontal2 = $marginvertical;

function calcem($targetpx) {
  return $targetpx * $scale;
}

$width = (String(calcem($minwidth)))+'em';
$height = (String(calcem($minheight)))+'em';

$width2 = $height;
$height2 = $width;

function changeLayout() {
    $('.glyphicon-share-alt').click(function(){ 
        if ($('.a4').css('width') === Math.round($minwidth*$scale*$fontsize)+'px') {
            $('.a4').css('width', $width2);
            $('.a4').css('height', $height2);
            $('.a4').css('padding', $marginvertical2+' '+$marginhorizontal2);
        } else {
            $('.a4').css('width', $width);
            $('.a4').css('height', $height);
            $('.a4').css('padding', $marginvertical+' '+$marginhorizontal);
        }
    });
}

function bold() {
    $('.glyphicon-bold').click(function(){
        var selObj = window.getSelection(); 
        alert(selObj);
        var selRange = selObj.getRangeAt(0);
        // do stuff with the range
    });
}