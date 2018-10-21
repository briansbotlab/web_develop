var index = 0;
var myVar;

function draw_a(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    // Create gradient
    var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
}

function draw_b(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    // Create gradient
    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "blue");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
}


function circle(x, y, radius,color1,color2){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
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





