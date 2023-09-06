canvas = document.getElementById("meuCanvas");
caneta = canvas.getContext("2d");

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencar_width = 75;
greencar_height = 100;
greencar_x = 5;
greencar_y = 225;
function add() {
    imgBackground = new Image();
    imgBackground.onload = uploadBackground;
    imgBackground.src = background_image;
    imgRover = new Image();
    imgRover.onload = uploadGreenCar;
    imgRover.src = greencar_image;
}

function uploadBackground() {
	 
    caneta.drawImage(imgBackground, 0 , 0, canvas.width, canvas.height);

}

function uploadGreenCar() {
    caneta.drawImage(imgRover, greencar_x, greencar_y       , greencar_width, greencar_height);

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
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
    if(greencar_y>=0){
     greencar_y =  greencar_y - 10;
     upLoadBackground();
     uploadGreenCar();
    }
}

function down()
{    if(greencar_y<=500){
     greencar_y =  greencar_y + 10;
     upLoadBackground();
     uploadGreenCar();
    }
}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
     if(greencar_x>=0){
     greencar_x =  greencar_x- 10;
     upLoadBackground();
     uploadGreenCar();

}

function right()
{
     if(greencar_x<=900){
     greencar_x =  greencar_x + 10;
     upLoadBackground();
     uploadGreenCar();
     

}
