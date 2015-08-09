$(document).ready(main);
function main() {
    $('nav, main, footer').fadeIn('slow');
    logo();
};

function logo() {
    canvas = document.getElementById("logo");
    ctx = canvas.getContext('2d');
    ctx.font = '80px Impact, Charcoal, sans-serif';
    ctx.fillStyle = 'olivedrab';
    ctx.textAlign = 'center';
    ctx.fillText('Tinkering',500,80);
    bigGearAngle = 0;
    smallGearAngle = 0;
    requestId = requestAnimationFrame(logoAnimation);
};

function logoAnimation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'olivedrab';
    ctx.fillText('Tinkering',500,80);
    ctx.fillStyle = 'rgba(30, 2, 46, 1)';
    ctx.strokeStyle = 'rgba(30, 2, 46, 1)';
    ctx.lineWidth = 10;
    bigGear();
    smallGear();    
    requestId = requestAnimationFrame(logoAnimation);
};

function bigGear() {
    ctx.save();
    ctx.translate(25, 25);
    ctx.rotate(bigGearAngle); 
    ctx.beginPath();
    ctx.arc(0,0,5,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(0,0,50,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    for (i = 0; i < 20; i++) {
        ctx.save();
        ctx.rotate(i/10*Math.PI);
        ctx.fillRect(-5,50,10,10);
        ctx.restore();
    }
    for (i = 0; i < 8; i++) {
        ctx.save();
        ctx.rotate(i/4*Math.PI);
        ctx.fillRect(-5,-5,55,10);
        ctx.restore();
    }
    bigGearAngle +=0.01;
    ctx.restore();
}
function smallGear() {
    ctx.save();
    ctx.translate(75, 100);
    ctx.rotate(smallGearAngle-0.2); 
    ctx.beginPath();
    ctx.arc(0,0,5,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(0,0,25,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
    for (i = 0; i < 10; i++) {
        ctx.save();
        ctx.rotate(i/5*Math.PI);
        ctx.fillRect(-5,25,10,10);
        ctx.restore();
    }
    for (i = 0; i < 4; i++) {
        ctx.save();
        ctx.rotate(i/2*Math.PI);
        ctx.fillRect(-5,-5,30,10);
        ctx.restore();
    }
    smallGearAngle -=0.02;
    ctx.restore();
}