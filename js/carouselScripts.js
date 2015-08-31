$(document).ready(main);
function main() {
    //$('nav, main, footer').fadeIn(1000);
    bootstrapCarousel();
};
function bootstrapCarousel(){
    canvasID = ['carousel1','carousel2','carousel3'];
    ctxID = ['ctx1','ctx2','ctx3'];
    canvasBG = ['darkred','navy','darkgreen'];
    for (i=0; i < canvasID.length; i++){
        canvasID[i] = document.getElementById(canvasID[i]);
        ctxID[i] = canvasID[i].getContext('2d');
        ctxID[i].fillStyle = canvasBG[i];
        ctxID[i].fillRect(0,0,canvasID[i].width,canvasID[i].height);
    }
}