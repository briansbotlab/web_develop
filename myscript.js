var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//var ctx2 =canvas.getContext("2d");
var ballRadius = 20;
var x = 125;
var y = 125;
var dx = 2;
var dy = 2;
var u;
/*
var x1 = 20;
var y1 = 30;
var dx1 = 1;
var dy1 = -1;
*/
var button_state = 0;

function small_ball(x1, y1, size, color,dx1,dy1) {
		this.x1=x1;
		this.y1=y1;
		this.size=size;
		this.color=color;
		this.dx1 = dx1;
		this.dy1 = dy1;
        }
        //画方块的方法
        small_ball.prototype.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x1, this.y1, this.size, 0, Math.PI*2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }
var small_ball = new small_ball(90,90,5,"#ff95DD",1,-1);
        
function normal_ball() {
        }
        //画方块的方法
        normal_ball.prototype.draw = function() {
            ctx.beginPath();
            ctx.arc(x, y, ballRadius, 0, Math.PI*2);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
var normal_ball = new normal_ball();
        
/*        
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
*/

function getAt(){
	console.log(small_ball.x1);
	small_ball.x1 += 5;
}

function draw2() {
	x1 = small_ball.x1;
	dx1 = small_ball.dx1;
	y1 = small_ball.y1;
	dy1 =  small_ball.dy1;

	var random_int = Math.round(Math.random()*5)+1;
    //ctx.clearRect(x1, y1, 5, 5);
    
    //ctx.clearRect(x1-5, y1-5, 10, 10);
    small_ball.draw();

    if(x1 + dx1 > canvas.width-10 || (x1 + dx1) < 10) {
		if(random_int>3 && Math.abs(dx1 + dy1)< 10){
			dx1 = -1*(dx1*random_int);
			//dy1 = (dy1/random_int);
			console.log("a");
		}else{
			dx1 = -1*(dx1/random_int);
			
			console.log("b");
		}
    }
    if(y1 + dy1 > canvas.height-5 || (y1 + dy1) < 10) {
		if(random_int>3 && Math.abs(dx1 + dy1)< 15){
			dx1 = (dx/random_int);
			dy1 = -1*(dy1*random_int);
			console.log("c");
		}else{
			
			dy1 = -1*(dy1/random_int);
			console.log("d");
		}
    }

    x1 += dx1;
    y1 += dy1;
	
	small_ball.x1 = x1;
	small_ball.dx1 = dx1;
	small_ball.y1 = y1;
	small_ball.dy1 = dy1;
	
}

function check_crash(){
    if(200 < Math.abs(x+10) && Math.abs(y+10) > 50){
        console.log("crash");
    }
    
}

function clean_canvas(){
    draw2();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    normal_ball.draw();
    small_ball.draw();
    check_crash();
}



function draw() {
    //ctx.clearRect(x, y, 5, 5);
    
    //ctx.clearRect(x-5, y-5, 10, 10);
    normal_ball.draw();

    
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
        //y=y;
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
        console.log(x +","+y);
        u = setInterval(go_up_act,10);
    }else{
        clearInterval(u);
        console.log(button_state);
        console.log(x +","+y);
        go_up_act();
    }
    
}


function go_left_act(){
    if( x < 10){
       // x=x;
    }else{
        x = x - dx;
    }
    draw();
    
}

function go_left(){
    set_button_state();
    if(button_state == 1){
        console.log(button_state);
        console.log(x +","+y);
        u = setInterval(go_left_act,10);
    }else{
       console.log(button_state);
       console.log(x +","+y);
        clearInterval(u);
    }
    
}

function go_right_act(){
    if( x > canvas.width-10){
      //  x=x;
    }else{
        x = x + dx;
    }
    draw();
    
}

function go_right(){
    set_button_state();
    if(button_state == 1){
        console.log(button_state);
        console.log(x +","+y);
        u = setInterval(go_right_act,10);
    }else{
        console.log(button_state);
        console.log(x +","+y);
        clearInterval(u);
    }
    
}

function go_down_act(){
    if( y > canvas.height-10){
       // y=y;
    }else{
        y = y + dy;
    }
    draw();
    
}

function go_down(){
    set_button_state();
    if(button_state == 1){
        console.log(button_state);
        console.log(x +","+y);
        u = setInterval(go_down_act,10);
    }else{
        console.log(button_state);
        console.log(x +","+y);
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


//使用addEventListener監聽器，監聽mousemove滑鼠移動，並觸發後面的function
//window.addEventListener('mousemove',(event) => {
  /*在function內會傳入我們監聽的滑鼠物件，
    我們可以從這個物件中取得我們要的資料：
    x座標 event.pageX 及y座標 event.pageY
    並把它印在console中*/
//  console.log(`${event.pageX},${event.pageY}`)
//})

setInterval(clean_canvas, 10);