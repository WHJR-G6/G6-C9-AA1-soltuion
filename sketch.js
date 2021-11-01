var box;
function setup()
{
 createCanvas(400,400)
 box = createSprite(40,40,40,40);
 box.shapeColor = "white";
 box.x=30;
 box.y=150;
 box.velocityX=5
 box.rotation=50
}

function draw()
{
 background(220);
 drawSprites();
}

