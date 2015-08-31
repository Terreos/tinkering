$(document).ready(main);
function main() {
    $('nav, main, footer').fadeIn(1000);
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
    spark = 0;
    sparkCheck = -1;
    x = 0;
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
    fire();
    cauldron();
    requestId = requestAnimationFrame(logoAnimation);
};

function bigGear() {
    ctx.save();
    ctx.translate(25, 25);
    ctx.rotate(bigGearAngle); 
    ctx.beginPath();
    ctx.arc(0,0,5,0,2*Math.PI);
    ctx.beginPath();
    ctx.arc(0,0,50,0,2*Math.PI);
    ctx.stroke();
    for (i = 0; i < 18; i++) {
        ctx.save();
        ctx.rotate(i/9*Math.PI);
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
    ctx.rotate(smallGearAngle-0.08); 
    ctx.beginPath();
    ctx.arc(0,0,5,0,2*Math.PI);
    ctx.beginPath();
    ctx.arc(0,0,25,0,2*Math.PI);
    ctx.stroke();
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
    smallGearAngle -=0.018;
    ctx.restore();
}
function flame(x,y){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(0.5,0.5);
    ctx.rotate(Math.PI);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(30-spark, 20, -15+spark, 40, -10-spark/2, 70);
    ctx.bezierCurveTo(-30+spark, 50, -40-spark, 20, -10, 0);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();
}
function fire() {
    ctx.lineWidth = 5;
    flame(850,110);
    ctx.lineWidth = 2;
    flame(880,115);
    ctx.lineWidth = 10;
    flame(865,105);
    if (spark < 20 && sparkCheck < spark){
        sparkCheck = spark;
        spark += Math.random()*2;
    } else if (spark > -10 && sparkCheck > spark) {
        sparkCheck = spark;
        spark -= Math.random()*2;
    } else if (spark >= 20) {
        sparkCheck = 21;
        spark = 20;
    } else if (spark <= -10) {
        sparkCheck = -11;
        spark = -10;
    }
}
function cauldron() {
    ctx.save();
    ctx.lineWidth = 5;
    ctx.translate(845, 45);
    ctx.beginPath();
    ctx.arc(0,0,25,0.5*Math.PI,1.5*Math.PI);
    ctx.arc(50,0,25,-0.5*Math.PI,-1.5*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = 'rgba(75, 29, 101, 1)';
    ctx.arc(10,-5,10,0.5*Math.PI,1.5*Math.PI);
    ctx.arc(20,-5,10,-0.5*Math.PI,-1.5*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = 'rgba(30, 2, 46, 1)';
    ctx.lineWidth = 10;
    ctx.rotate(0);
    ctx.translate(0,0);
    ctx.beginPath();
    var y = Math.sin(x/40);
    var y2 = Math.cos(x/40);
    var y3 = Math.sin(x/40);
    var y4 = Math.cos(x/40);
    ctx.moveTo(0,10);
    ctx.lineTo(0,2*y3);
    ctx.bezierCurveTo(10, 5*y2, 20, 5*y, 30, 2*y4);
    ctx.lineTo(30,10);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    x++;
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(75, 29, 101, 1)';
    ctx.arc(10,-5,10,0.5*Math.PI,1.5*Math.PI);
    ctx.arc(20,-5,10,-0.5*Math.PI,-1.5*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(10,-5,14,0.5*Math.PI,1.5*Math.PI);
    ctx.arc(20,-5,14,-0.5*Math.PI,-1.5*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fillRect(0,-25,10,-20);
    ctx.fillRect(75,-10,80,10);
    ctx.restore();
}