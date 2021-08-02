var bg, archer, archerwalk, archery;

function preload()
{
    bg = loadImage("bg.jpg");
    archerwalk = loadAnimation("girl/0.png", "girl/1.png", "girl/2.png", "girl/25.png", "girl/26.png", "girl/27.png", "girl/28.png", "girl/29.png", "girl/30.png", "girl/31.png");
    archery = loadAnimation("girl/0.png", "girl/1.png", "girl/2.png", "girl/25.png", "girl/26.png", "girl/27.png", "girl/28.png", "girl/29.png", "girl/30.png", "girl/31.png");
}
function setup()
{
    createCanvas(1400,800);

    archer=createSprite(200,650,40,20);
    archer.addAnimation("walk", archerwalk);
    archer.scale = 0.5;
}

function draw()
{
    background(bg);

    drawSprites();
}
