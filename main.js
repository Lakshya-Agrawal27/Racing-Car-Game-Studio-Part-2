canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

car1_width-120;
car1_height-70;
car1_image-"Iron-Car-013.jpg";
car1_x-10;
car1_y-10;

car2_width-120;
car2_height-70;
car2_image-"car1.jpg";
car2_x-10;
car2_y-100;

function add(){
    background_imageTag=new Image();
    background_imageTag.onload=uploadBackground();
    background_imageTag.src=background_image;

    rover_imageTag=new Image();
    rover_imageTag.onload=uploadRover();
    rover_imageTag.src=car1_image;
}

function uploadBackground(){
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imageTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        up();
        console.log("up");
    }

    if(keyPressed == '40'){
        down();
        console.log("down");
    }

    if(keyPressed == '37'){
        left();
        console.log("left");
    }

    if(keyPressed == '39'){
         right();
        console.log("right");
    }
    
    if(keyPressed == '87'){
        car1up();
       console.log("car1up");
   }

    if(keyPressed == '65'){
     car1left();
     console.log("car1left");
   }

   if(keyPressed == '83'){
     car1down();
     console.log("car1down");
   }

   if(keyPressed == '68'){
    car1right();
   console.log("car1right");
}

//////////

}
function right(){
    if (car_x<=700){
        car1_x= car1_x+10;
        console.log("when right arrow's pressed, x=" + car1_x +" | y = " + car1_y);
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if (car1_x>=0){
        car1_x= car1_x-10;
        console.log("when right arrow's pressed, x=" + car1_x +" | y = " + car1_y);
        uploadBackground();
        uploadRover();
    }
}

function up(){
    if (car1_y>=0){
        car1_y= car1_y-10;
        console.log("when right arrow's pressed, x=" + car1_x +" | y = " + car1_y);
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if (car1_y<=500){
        car1_y= car1_y+10;
        console.log("when right arrow's pressed, x=" + car1_x +" | y = " + car1_y);
        uploadBackground();
        uploadRover();
    }
}

//!!//
function car1right(){
    if (car2_x<=700){
        car2_x= car2_x+10;
        console.log("when right arrow's pressed, x=" + car2_x +" | y = " + car2_y);
        uploadBackground();
        uploadRover();
    }
}

function car1left(){
    if (car2_x>=0){
        car2_x= car2_x-10;
        console.log("when right arrow's pressed, x=" + car2_x +" | y = " + car2_y);
        uploadBackground();
        uploadRover();
    }
}

function car1up(){
    if (car2_y>=0){
        car2_y= car2_y-10;
        console.log("when right arrow's pressed, x=" + car2_x +" | y = " + car2_y);
        uploadBackground();
        uploadRover();
    }
}

function car1down(){
    if (car2_y<=500){
        car2_y= car2_y+10;
        console.log("when right arrow's pressed, x=" + car2_x +" | y = " + car2_y);
        uploadBackground();
        uploadRover();
    }
}
