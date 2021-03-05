var bouncyblock



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  bouncyblock=new BlockBouncy(200,200,200,200)
}

function draw() {
  background(255,255,255);  

  bouncyblock.display();
  drawSprites();
}