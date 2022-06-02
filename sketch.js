var canvas;
var music;
var block1,block2,block3,block4;
var box;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 block1 = createSprite(0,580,360,30);
 block1.shapeColor="blue";

 block2 = createSprite(329,580,200,30);
 block2.shapeColor="pink";

 block3 = createSprite(510,580,200,30);
 block3.shapeColor="yellow";

 block4 = createSprite(725,580,200,30);
 block4.shapeColor="red";



    //create box sprite and give velocity
box=createSprite(random(20,750),100,40,40)
box.shapeColor=rgb(255,255,255)
box.velocityX=-3
box.velocityY=6
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites()
box.bounceOff(edges)



    //add condition to check if box touching surface and make it box
    if(block1.isTouching(box)&& box.bounceOff(block1)){
        box.shapeColor="green"
        music.play()
    }

    if(block2.isTouching(box)&& box.bounceOff(block2)){
        box.shapeColor="green"
        music.play()
        box.velocityX=0
        box.velocityY=0
    }

    if(block3.isTouching(box)&& box.bounceOff(block3)){
        box.shapeColor="green"
        music.play()
    }

    if(block4.isTouching(box)&& box.bounceOff(block4)){
        box.shapeColor="green"
        music.play()
    }
    drawSprites()
}
