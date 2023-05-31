var ironman;
var ironmanImg;
var citybackgroundImg;
var stone1, stone2, stone3, stone4, stone5, stone6;
var stone1Img, stone2Img, stone3Img, stone4Img, stone5Img, stone6Img;
var alien, alien2, alien3, alien4;
var alienImg;
var invisble_block1, invisble_block2, invisble_block3, invisble_block4;

function preload(){
    citybackgroundImg = loadImage("city_background.jpeg");
    ironmanImg = loadImage("ironman.png");
    stone1Img = loadImage("1.png");
    stone2Img = loadImage("2.png");
    stone3Img = loadImage("3.png");
    stone4Img = loadImage("4.png");
    stone5Img = loadImage("5.png");
    stone6Img = loadImage("6.png");
    alienImg = loadImage("alien.png");
}

function setup() {
    createCanvas(1200,800);
    edges = createEdgeSprites();

    ironman = createSprite(640,750,10,10);
    ironman.addImage(ironmanImg);
    ironman.scale = 0.2;

    stone1 = createSprite(990, 720, 10, 10);
    stone1.addImage(stone1Img);
    stone1.scale = 0.2;

    stone2 = createSprite(20, 670, 10, 10);
    stone2.addImage(stone2Img);
    stone2.scale = 0.2;

    stone3 = createSprite(292, 180, 10, 10);
    stone3.addImage(stone3Img);
    stone3.scale = 0.2;

    stone4 = createSprite(995, 180, 10, 10);
    stone4.addImage(stone4Img);
    stone4.scale = 0.3;

    stone5 = createSprite(640, 30, 10, 10);
    stone5.addImage(stone5Img);
    stone5.scale = 0.15;

    stone6 = createSprite(640, 420, 10, 10);
    stone6.addImage(stone6Img);
    stone6.scale = 0.15;

    alien = createSprite(200,670,10,10);
    alien.addImage(alienImg);
    alien.scale = 0.17;
    alien.velocityX = 6;

    alien2 = createSprite(290,200,10,10);
    alien2.addImage(alienImg);
    alien2.scale = 0.17;
    alien2.velocityY = 6;

    alien3 = createSprite(990,40,10,10);
    alien3.addImage(alienImg);
    alien3.scale = 0.17;
    alien3.velocityY = 6;

    alien4 = createSprite(990,800,10,10);
    alien4.addImage(alienImg);
    alien4.scale = 0.17;
    alien4.velocityY = 6;
    
    alien5 = createSprite(140,125,10,10);
    alien5.addImage(alienImg);
    alien5.scale = 0.17;
    alien5.velocityX = 6;

    invisble_block1 = createSprite(300,100, 600, 10);
    invisble_block1.visible = false;

    invisble_block2 = createSprite(300,460, 600, 10);
    invisble_block2.visible = false;

    //invisble_block3 = createSprite(1100,100, 100, 10);
    //invisble_block3.visible = true;
}

function draw() {
    background(citybackgroundImg);
    if(keyDown("right_arrow")){
        ironman.x += 5;
    }
    if(keyDown("up_arrow")){
        ironman.y -= 5;
    }
    if(keyDown("down_arrow")){
        ironman.y += 5;
    }
    if(keyDown("left_arrow")){
        ironman.x -= 5;
    }

   
    alien.bounceOff(edges);
    alien2.bounceOff(invisble_block1);
    alien2.bounceOff(invisble_block2);
    alien3.bounceOff(edges);
    alien4.bounceOff(edges);
    alien5.bounceOff(edges);



    drawSprites();
}