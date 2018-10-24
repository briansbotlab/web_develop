/*
class a{
    var jj = "aaaa";
    function a_a(){
        var Today=new Date();
　       alert("今天日期是 " + Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + Today.getDate() + " 日");
    }
    function a_b(){
        alert(jj);
    }
}
*/
var index = 0;
var myVar;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 200;
var y = 200;
var dx = 2;
var dy = -2;

function draw_ball(){
    //var canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
}

function draw_new_posotion() {
    //var canvas = document.getElementById("myCanvas");
    //ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 250, 250);
    draw_ball();
    x += dx;
    y += dy;
}


function draw_a(){
    //var canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // Create gradient
    var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
}

function draw_b(){
    //var canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // Create gradient
    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "blue");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
}


function circle(x, y, radius,color1,color2){
    //var canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, radius,0,2*Math.PI);
    ctx.fillStyle = color2;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.stroke();
}

function time_action(){
    var x=Math.floor(Math.random() * 250);
    var y=Math.floor(Math.random() * 250);
    var r=5;
    var color1='#334455';
    var color2='#aa00cc';
    circle(x,y,r,color1,color2);
    //window.setTimeout(circle(x,y,r,color1,color2), 10);
    //setInterval(circle(x,y,r,color1,color2), 1000);
}

function time_controller(){
    if(index==0){
        myVar = setInterval(time_action, 10);
        index=1;
    }else{
        clearInterval(myVar);
        index=0;
    }
    
}




