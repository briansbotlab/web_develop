

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


var ballRadius = 20;
var x = 225;
var y = 225;
var dx = 1;
var dy = 1;
var u;
var normal_ball_color = "#ffaa00";

var button_state = 0;

var num_of_small_balls =1;
var real_ball_num = 1;
var small_balls= new Array(num_of_small_balls);

var enemy_ball_color = "#b69eff";
var friend_ball_color = "#e0e809";

var goal_ball_num = Math.round(Math.random()*3)+2;

function small_ball(x1, y1, size, color, dx1, dy1) {
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

        
        

        

var small_ball_01 = new small_ball(300,300,50,"#f91189",1,-1);
small_balls[0]=small_ball_01;

        
function create_small_balls(){
    
    if((num_of_small_balls%2) == 1){
    var small_ball_tmp = new small_ball(120,60,15,enemy_ball_color,1,-1);
    }else if ((num_of_small_balls%2) == 0){
    var small_ball_tmp = new small_ball(300,360,15,friend_ball_color,1,-1);
    }
    
    small_balls.push(small_ball_tmp);
    
    num_of_small_balls += 1;
}

function normal_ball() {
        }
        //画方块的方法
        normal_ball.prototype.draw = function() {
            ctx.beginPath();
            ctx.arc(x, y, ballRadius, 0, Math.PI*2);
            ctx.fillStyle = normal_ball_color;
            ctx.fill();
            ctx.closePath();
        }
var normal_ball = new normal_ball();
        


function draw_many_balls() {
    for (i = 0; i < num_of_small_balls; i++) {
        if(small_balls[i] != null){
            x1 = small_balls[i].x1;
            dx1 = small_balls[i].dx1;
            y1 = small_balls[i].y1;
            dy1 =  small_balls[i].dy1;
            
            var random_int = Math.round(Math.random()*2)+1;
            
            small_balls[i].draw();
            
            if(x1 + dx1 > canvas.width-5 || x1 + dx1 < 10) {
                if(Math.abs(dx1)<10){
                    dx1 = -dx1 * random_int;
                
                    console.log("a");
                }else{
                    dx1 = -dx1 / random_int;
                }

                //console.log(x1+","+y1 +"   "+ canvas.width +","+ canvas.height +"    "+random_int);
            }
            if(y1 + dy1 > canvas.height-5 || y1 + dy1 < 10) {
                    if(Math.abs(dy1)<10){
                    dy1 = -dy1 * random_int;
                    
                    console.log("c");
                    }else{
                        dy1 = -dy1 / random_int;
                    }

                //console.log(x1+","+y1 +"   "+ canvas.width +","+ canvas.height +"    "+random_int +"   "+ i );
            }

            x1 += dx1;
            y1 += dy1;
            
            small_balls[i].x1 = x1;
            small_balls[i].dx1 = dx1;
            small_balls[i].y1 = y1;
            small_balls[i].dy1 = dy1;
        }
    }
}

function check_crash(){
    var random_color_1 = Math.round(Math.random()*234)+20;
    var random_color_2 = Math.round(Math.random()*234)+20;
    var random_color_3 = Math.round(Math.random()*234)+20;
    
    var random_create_chance = Math.round(Math.random()*10);
    
    for (i = 0; i < num_of_small_balls; i++) {
        if(small_balls[i] != null){
            if(small_balls[i].x1 > x-ballRadius && small_balls[i].x1 < x +ballRadius  ){
                if(small_balls[i].y1 > y-ballRadius && small_balls[i].y1 < y +ballRadius){
                    if(small_balls[i].color == friend_ball_color){
                        small_balls[i] = null;
                        num_of_small_balls--;
                    }
                        
                    if(ballRadius < 30){
                    ballRadius ++;

                    }
                    if(num_of_small_balls <10){
                        if(random_create_chance > 7){
                        create_small_balls();
                        }
                    }
                    normal_ball_color = "#"+fullColorHex(random_color_1, random_color_2, random_color_3);
                    //console.log("crash" + ballRadius +"  "+fullColorHex(random_color_1, random_color_2, random_color_3));
                }
            }
        }    
    }
}

function sleep(miliseconds) {  //虛度時間
        var currentTime = new Date().getTime();
        while (currentTime + miliseconds >= new Date().getTime()) {
        }
    }


function draw() {

    normal_ball.draw();

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


var rgbToHex = function (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

var fullColorHex = function(r,g,b) {   
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red+green+blue;
};

canvas.addEventListener("touchmove", end_handler, false);
canvas.addEventListener("touchstart", start_handler, false);
canvas.addEventListener("touchend", action_handler, false);


var start_t_x = 0;
var start_t_y = 0;
var end_t_x = 0;
var end_t_y = 0;

function start_handler(event){
    start_t_x = event.touches[0].clientX;
    start_t_y = event.touches[0].clientY;
}

function end_handler(event){
    end_t_x = event.touches[0].clientX;
    end_t_y = event.touches[0].clientY;
    
}

function check_t_x(){
    if(end_t_x > x ){
      //console.log("to right");
      go_right_act();
      
  }else{
      //console.log("to left");
      go_left_act();
      
  }
}

function check_t_y(){
    if(end_t_y > y){
      //console.log("to down");
      go_down_act();
      
  }else{
      //console.log("to up");
      go_up_act();
  }
}

function count_not_null_ball_array(){
    real_ball_num = 1;
    for (i = 1; i < num_of_small_balls; i++) {
        if(small_balls[i] != null){
            real_ball_num++;
        }
    }
}


function drawScore() { //顯示球的數量
    
    count_not_null_ball_array();
    ctx.font = "50px Arial";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Number of balls: "+real_ball_num, 20, 60);
    ctx.fillStyle = "#ffff00";
    ctx.fillText("Number of goal balls: "+goal_ball_num, 720, 60);
}


function action_handler() {
  //var t_x = event.touches[0].clientX;
  //var t_y = event.touches[0].clientY;
  
  
  if(start_t_x - end_t_x < 0){
      //console.log("to right");
      go_right_act();
      
  }else{
      //console.log("to left");
      go_left_act();
      
  }
  
  if(start_t_y - end_t_y < 0){
      //console.log("to down");
      go_down_act();
      
  }else{
      //console.log("to up");
      go_up_act();
  }
  
  //console.log("touch" +t_x+", "+t_y);
}


