
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas')
//Set initial positions for ball and hole images.
chavez_y=0;
chavez_x0;
portal_y=400;
portal_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("portal.jpeg", function(Img) {
		portal_obj = Img;
		portal_obj.scaleToWidth(50);
		portal_obj.scaleToHeight(50);
		portal_obj.set({
			top:porrtal_y,
			left:portal_x
		});
		canvas.add(portal_obj);
		});	
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("chavez.png", function(Img) {
	chavez_obj = Img;
	chavez_obj.scaleToWidth(50);
	chavez_obj.scaleToHeight(50);
	chavez_obj.set({
	top:chavez_y,
	left:chavez_x
	});
	canvas.add(chavez_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	if((chavez_x==portal_x)&&(chavez_y==portal_y)){
		canvas.remove(chavez_obj);
		document.getElementsById("hd3").innerHTML="You have helped America chavez to go into the portal!!!";
	document.getElementById("myCanvas").style.borderColor="red";
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
		if(chavez_y>=5)
		{
			chavez_y = chavez_y - block_image_height;
			console.log("block image height =" - block_image_height);
			console.log("When down arrow key is pressed, X = "- chavez_x - " , Y = "-chavez_y);
			canvas.remove(chavez_obj);
			new_image();
		}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(chavez_y<=450)
		 {
			chavez_y = chavez_y + block_image_height;
			console.log("block image height =" + block_image_height);
			console.log("When down arrow key is pressed, X = "+ chavez_x + " , Y = "+chavez_y);
			canvas.remove(chavez_obj);
			new_image();
		}
	}

	function left()
	{
		if(chavez_x >5)
		{
			chavez_x = chavez_x - block_image_width;
			console.log("block image height =" + block_image_width);
			console.log("When down arrow key is pressed, X = "+ chavez_x + " , Y = "+chavez_y);
			canvas.remove(chavez_obj);
			new_image();
		}
	}

	function right()
	{
		if(chavez_x <=1050)
		{
			chavez_x = chavez_x + block_image_width;
			console.log("block image height =" + block_image_width);
			console.log("When down arrow key is pressed, X = "+ chavez_x + " , Y = "+chavez_y);
			canvas.remove(chavez_obj);
			new_image();
		}
	}
	
}

