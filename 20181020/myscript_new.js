var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = 2;

var x1 = canvas.width/2;
var y1 = canvas.height-30;
var dx1 = 1;
var dy1 = 1;

var button_state = 0;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}


function drawBall_2() {
    ctx.beginPath();
    ctx.arc(x1, y1, 3, 0, Math.PI*2);
    ctx.fillStyle = "#AA00FF";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    //ctx.clearRect(10, 10, canvas.width, canvas.height);
    //drawBall_2();
    /*
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    */
    //if(x1 + dx1 > canvas.width-3 || x1 + dx1 < 3) {
    //    dx1 = -dx1;
    //}
    //if(y + dy > canvas.height-3 || y1 + dy1 < 3) {
    //    dy1 = -dy1;
    //}
    
    //x += dx;
    //y += dy;
    
    //x1 += dx1;
    //y1 += dy1;
}

function go_up_act(){
    if( y < 10){
        y=y;
    }else{
        y = y - dy;
    }
    draw();
}

function go_up(){
    console.log(button_state);
    set_button_state();
    if(button_state == 1){
        go_up_act();
        console.log(button_state);
        //var u = setInterval(go_up_act,10);
    }else{
        //clearInterval(u);
        console.log(button_state);
        go_up_act();
    }
    
}


function go_left_act(){
    if( x < 10){
        x=x;
    }else{
        x = x - dx;
    }
    draw();
    
}

function go_left(){
    set_button_state();
    if(button_state == 1){
        window.alert(button_state);
        var u = setInterval(go_left_act,1);
    }else{
        window.alert(button_state);
        clearInterval(u);
    }
    
}

function go_right_act(){
    if( x > canvas.width-10){
        x=x;
    }else{
        x = x + dx;
    }
    draw();
    
}

function go_right(){
    set_button_state();
    if(button_state == 1){
        var u = setInterval(go_right_act,10);
    }else{
        clearInterval(u);
    }
    
}

function go_down_act(){
    if( y > canvas.height-10){
        y=y;
    }else{
        y = y + dy;
    }
    draw();
    
}

function go_down(){
    set_button_state();
    if(button_state == 1){
        var u = setInterval(go_down_act,10);
    }else{
        clearInterval(u);
    }
    
}

function set_button_state(){
    if(button_state == 0){
        button_state = 1;
    }else{
        button_state = 0;
    }
}
//setInterval(draw, 10);