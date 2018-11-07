//document.write('<script src="nipplejs.js" charset="utf-8"></script>'); //import file
//document.write('<script src="myscript.js"></script>'); //import file

var jot_x;
var jot_y;

var is_pressure = 0;

var joystick = nipplejs.create({
    
    mode: 'static',
    position: { left: '20%', top: '40%' },
    color: 'green',
    size: 110
});

//joystick event 

joystick.on('start end', function (evt, data) {
        is_pressure = 0;
        
        if (data.direction) {
            jot_x = data.direction.x;
            jot_y = data.direction.y;
        }
    
        if(String(jot_x)=="left"){
            go_left_act();
            console.log("left");
        }else if(String(jot_x)=="right"){
            go_right_act();
            console.log("right");
        }
        
        if(String(jot_y)=="up"){
            go_up_act();
            console.log("up");
        }else if(String(jot_y)=="down"){
            go_down_act();
            console.log("down");
        }
        
}).on('move', function (evt, data) {
        is_pressure = 1;
            
    if (data.direction) {
            jot_x = data.direction.x;
            jot_y = data.direction.y;
        }
    /*
    if(String(jot_x)=="left"){
        go_left_act();
        console.log("left");
    }else if(String(jot_x)=="right"){
        go_right_act();
        console.log("right");
    }
    
    if(String(jot_y)=="up"){
        go_up_act();
        console.log("up");
    }else if(String(jot_y)=="down"){
        go_down_act();
        console.log("down");
    }
    */
    
}).on('dir:up plain:up dir:left plain:left dir:down ' +
    'plain:down dir:right plain:right',
    function (evt, data) {
        is_pressure = 1;
        /*
        if (data.direction) {
            jot_x = data.direction.x;
            jot_y = data.direction.y;
        }
    
        if(String(jot_x)=="left"){
            go_left_act();
            console.log("left");
        }else if(String(jot_x)=="right"){
            go_right_act();
            console.log("right");
        }
        
        if(String(jot_y)=="up"){
            go_up_act();
            console.log("up");
        }else if(String(jot_y)=="down"){
            go_down_act();
            console.log("down");
        }
        */
}).on('pressure', function (evt, data) {

        console.log("pressure:" + "x:"+ jot_x+ ", y:" + jot_y);
        is_pressure = 1;
        

});

function check_joy_x(){
    if(String(jot_x)=="left"){
        go_left_act();
        console.log("left");
    }else if(String(jot_x)=="right"){
        go_right_act();
        console.log("right");
    }
}

function check_joy_y(){
    if(String(jot_y)=="up"){
        go_up_act();
        console.log("up");
    }else if(String(jot_y)=="down"){
        go_down_act();
        console.log("down");
    }
}

function check_is_pressure(){
    if(is_pressure == 1){
        check_joy_x();
        check_joy_y();
    }
    
}




function clean_canvas(){
    draw_many_balls();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    normal_ball.draw();
    for (i = 0; i < num_of_small_balls; i++) {
        if(small_balls[i] != null){
            small_balls[i].draw();
        }
    }
    check_crash();
    check_is_pressure();
    drawScore();
    
    if(real_ball_num == goal_ball_num){
        clearInterval(action_timer); //停止遊戲
        
    }
}

var action_timer = setInterval(clean_canvas, 1);
