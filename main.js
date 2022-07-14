var canvas = new fabric.Canvas('mycanvas');

block_img_width= 30;
block_img_height= 30;

player_x = 10;
player_y = 10;

var player_object="";

function playerupdate (){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_Img(getimage){
    fabric.Image.fromURL(getimage,function(Img){
        blockImage=Img;
        blockImage.scaleToHeight(block_img_height);
        blockImage.scaleToWidth(block_img_width);
        blockImage.set({
           top:player_y,
           left:player_x 
        });
        canvas.add(blockImage);
    })
}

window.addEventListener("keydown", my_keydown)
function my_keydown(e){
keypressed= e.keyCode;
console.log(keypressed);
if (e.shiftKey == true && keypressed=='80') 
{
   console.log("shift and p pressed together");
   block_img_width = block_img_width + 10;
   block_img_height = block_img_height + 10;    
document.getElementById("cwidth").innerHTML= block_img_width;
document.getElementById("cheight").innerHTML= block_img_height;
}

if (e.shiftKey == true && keypressed=='77') 
{
   console.log("shift and p pressed together");
   block_img_width = block_img_width - 10;
   block_img_height = block_img_height - 10;    
document.getElementById("cwidth").innerHTML= block_img_width;
document.getElementById("cheight").innerHTML= block_img_height;
}

if(keypressed== "38" ){
up()
console.log("up");
}


if(keypressed== "40" ){
down()
console.log("down");
}


if(keypressed== "37" ){
left()
console.log("left");
}

if(keypressed== "39" ){
right()
console.log("right");
}

if(keypressed== "87" ){
new_Img('wall.jpg')
console.log("w");
}

if(keypressed== "71" ){
    new_Img('ground.png')
    console.log("g");
    }

if(keypressed== "76" ){
        new_Img('light_green.png')
        console.log("l");
        }

if(keypressed== "84" ){
    new_Img('trunk.jpg')
    console.log("t");
            }


if(keypressed== "82" ){
    new_Img('roof.jpg')
    console.log("r");
    }

    if(keypressed== "89" ){
        new_Img('yellow_wall.png')
        console.log("y");
        }

 if(keypressed== "68" ){
            new_Img('dark_green.png')
            console.log("d");
            }

 if(keypressed== "85" ){
new_Img('unique.png')
 console.log("u");
                }

 if(keypressed== "67" ){
new_Img('cloud.jpg')
console.log("c");
            }

            
}

function up(){
    if (player_y>=0) {
        player_y= player_y-block_img_height;
        console.log("up pressed  x= "+player_x+" y= "+player_y);
        console.log("block img height = "+block_img_height);
        canvas.remove(player_object);
        playerupdate();
    }
}

function down(){
    if (player_y<=400) {
        player_y= player_y+block_img_height;
        console.log("down pressed  x= "+player_x+" y= "+player_y);
        console.log("block img height = "+block_img_height);
        canvas.remove(player_object);
        playerupdate();
    }
}

function left(){
    if (player_x>0) {
        player_x= player_x-block_img_width;
        console.log("left pressed  x= "+player_x+" y= "+player_y);
        console.log("block img width = "+block_img_width);
        canvas.remove(player_object);
        playerupdate();
    }
}

function right(){
    if (player_x<=850) {
        player_x= player_x+block_img_width;
        console.log("right pressed  x= "+player_x+" y= "+player_y);
        console.log("block img width = "+block_img_width);
        canvas.remove(player_object);
        playerupdate();
    }
}