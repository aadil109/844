var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    var width = screen.width;

    var nwidth = screen.width - 300;
    var nheight = screen.height - 70;

    if (screen.width < 992){

        document.getElementById("myCanvas").height=nheight;
        document.getElementById("myCanvas").width=nwidth;

    }
    
    color = "black";
    width_of_line = 1;
    canvas.addEventListener("touchstart", my_mousedown);
    function my_mousedown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends
        console.log("touchstart")
        mouseEvent = "touchstart";
         
        ctx.beginPath();
        ctx.strokeStyle=color;
        
        ctx.arc(e.touches[0].clientX - canvas.offsetLeft,e.touches[0].clientY - canvas.offsetTop,1,0,2*Math.PI);
        ctx.stroke();
    }

    canvas.addEventListener("touchmove", my_mousemove);
    function my_mousemove(e)
    {
        console.log("touchmove")
        current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        if (mouseEvent == "touchstart") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }


   

//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}