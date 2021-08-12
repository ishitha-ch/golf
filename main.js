var canvas= new fabric.Canvas("myCanvas");

ball_y=10;
ball_x=10;
hole_y=400
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img() {
	fabric.image.fromURL("golf-h.png", function(Img) {
		hole_obj=Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image() {
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj=Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			top:ball_x
		});
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)) {
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You win!!!"
		document.getElementById("myCanvas").style.borderColor="green";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y>50)
		{
			ball_y=ball_y-block_image_height;
			console.log("block image height= "+ block_image_height);
			console.log("When up arrow key was pressed, x= " +ball_x+" , y= " +ball_y);
		}
	}

	function down()
	{
		if(ball_y<450)
		{
			ball_y=ball_y+block_image_height;
			console.log("block image height= "+ block_image_height);
			console.log("When down arrow key was pressed, x= " +ball_x+" , y= " +ball_y);
		}
	}

	function left()
	{
		if(ball_x>50)
		{
			ball_x=ball_x-block_image_height;
			console.log("block image height= "+ block_image_height);
			console.log("When left arrow key was pressed, x= " +ball_x+" , y= " +ball_y);
		}
	}

	function right()
	{
		if(ball_x<750)
		{
			ball_y=ball_y+block_image_height;
			console.log("block image height= "+ block_image_height);
			console.log("When right arrow key was pressed, x= " +ball_x+" , y= " +ball_y);
		}
	}	
	
}

