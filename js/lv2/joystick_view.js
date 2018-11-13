//document.write('<script src="nipplejs.js" charset="utf-8"></script>'); //import file
//document.write('<script src="myscript.js"></script>'); //import file

var jot_x;
var jot_y;

var is_pressure = 0;

var joystick = nipplejs.create({
    
    mode: 'static',
    position: { left: '15%', top: '45%' },
    color: 'red',
    size: 110
});

//joystick event 

joystick.on('start end', function (evt, data) {
        is_pressure = 0;
        //反向操作
		
        if (data.direction) {
            jot_x = data.direction.x;
            jot_y = data.direction.y;
        }
    
        if(String(jot_x)=="left"){
            go_right_act();
            console.log("right");
        }else if(String(jot_x)=="right"){
            go_left_act();
            console.log("left");
        }
        
        if(String(jot_y)=="up"){
            go_down_act();
            console.log("down");
        }else if(String(jot_y)=="down"){
            go_up_act();
            console.log("up");
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

//反向操作
function check_joy_x(){
    if(String(jot_x)=="left"){
        go_right_act();
        console.log("right");
    }else if(String(jot_x)=="right"){
        go_left_act();
        console.log("left");
    }
}

function check_joy_y(){
    if(String(jot_y)=="up"){
        go_down_act();
        console.log("down");
    }else if(String(jot_y)=="down"){
        go_up_act();
        console.log("up");
    }
}

function check_is_pressure(){
    if(is_pressure == 1){
        check_joy_x();
        check_joy_y();
    }
    
}

function show_end_button(){
	//單一元素
	/*
    var end_btn = document.getElementById("end_btn");
    end_btn.style.visibility="visible";
	*/
	
	//多個元素
	var list = document.getElementsByClassName("game_end");
	for (var i = 0; i < list.length; i++) {
    // list[i] is a node with the desired class name
	list[i].style.visibility="visible";
	}
	
} 



function reload_game(){
    document.location.href="main_2.html";
}

function go_to_game_lv(lv_num){
    document.location.href="main_"+lv_num+".html";
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
    
    if(real_ball_num >= goal_ball_num){
        clearInterval(action_timer); //停止遊戲
        show_end_button(); //顯示按鈕
        
    }
}

var action_timer = setInterval(clean_canvas, 1);
