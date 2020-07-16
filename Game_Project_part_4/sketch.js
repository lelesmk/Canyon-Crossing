/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var mountains_x;
var trees_x;
var clouds;
var canyons_x;
var collectable;
var collectable_x;
//var sword_x;
var coin_x;
var coin_x_pos;
var obstacle;
var gameFont;

function preload() {
  gameFont = loadFont('yoster.ttf');
}

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    treePos_y = height/2;
    scale_size = 0.6;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
    trees_x = [200, 350, 400, 950, 1300];
    clouds = [
                {pos_x: 100,pos_y: 200},
                {pos_x: 250,pos_y: 200},
                {pos_x: 350,pos_y: 200},
                {pos_x: 650,pos_y: 200},
                {pos_x: 800,pos_y: 200}
    ];
    mountains_x = [50, 400, 350*3, 350*3+350, 350*6, 350*6+350, 350*9];
    canyons_x = [-1024, 0, 1024, 1024*2, 1024*3, 1024*4];
    
    obstacle = {
        // boxes
        size: 100,
        x_pos: [1600, 3600],
        floor_y: floorPos_y-200,
        air_y: floorPos_y-350 
    };
    
    collectable = {
        x_pos: [50, 350*3, 350*6, 350*9],
        isFound: false,
        width: 20*scale_size,
        height: 100*scale_size,
        grip_width: 10*scale_size,
        grip_height: 30*scale_size,
        cross_width: 40*scale_size,
        cross_height: 10*scale_size,
        point_height: 20*scale_size,
        
        
        // sword
        sword_y: floorPos_y-30,
        // coin
        coin_y: floorPos_y-100
        
    };
    
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
//	rect(0, floorPos_y, width, height/4); // draw some green ground
    
    
    
    push();
    translate(scrollPos, 0);
	// Draw clouds.
    for(let i = 0; i < clouds.length; i++)
    {
        fill(255);    
        ellipse(clouds[i].pos_x, clouds[i].pos_y, 50, 50);
        ellipse(clouds[i].pos_x-25, clouds[i].pos_y, 35, 35);
        ellipse(clouds[i].pos_x+25, clouds[i].pos_y, 35, 35);
    }

	// Draw mountains.
    for(let i = 0; i < mountains_x.length; i++)
    {
        
        // peak 2
        fill(0, 153, 153);
        triangle(mountains_x[i]-262+100, floorPos_y-232, 
                 mountains_x[i]-262+100, floorPos_y, 
                 mountains_x[i]-402+100, floorPos_y);
        fill(0, 51, 51);
        triangle(mountains_x[i]-262+100, floorPos_y-232, 
                 mountains_x[i]-262+100, floorPos_y, 
                 mountains_x[i]-122+100, floorPos_y);
        fill(255, 160);
        beginShape();
        vertex(mountains_x[i]-292+100, floorPos_y-182);
        vertex(mountains_x[i]-267+100, floorPos_y-187);
        vertex(mountains_x[i]-250+100, floorPos_y-177);
        vertex(mountains_x[i]-247+100, floorPos_y-187);
        vertex(mountains_x[i]-230+100, floorPos_y-180);
        vertex(mountains_x[i]-262+100, floorPos_y-232);
        vertex(mountains_x[i]-292+100, floorPos_y-182);
        endShape();
        
        // peak 1
        fill(0, 153, 153);
        triangle(mountains_x[i], floorPos_y-152, 
                 mountains_x[i], floorPos_y, 
                 mountains_x[i]-120, floorPos_y);
        fill(0, 51, 51);
        triangle(mountains_x[i], floorPos_y-152, 
                 mountains_x[i], floorPos_y, 
                 mountains_x[i]+120, floorPos_y);
        fill(255, 160);
        // ice
        beginShape();
        vertex(mountains_x[i], floorPos_y-152);
        vertex(mountains_x[i]-30, floorPos_y-112);
        vertex(mountains_x[i]-10, floorPos_y-118);
        vertex(mountains_x[i]+10, floorPos_y-108);
        vertex(mountains_x[i]+15, floorPos_y-124);
        vertex(mountains_x[i]+27, floorPos_y-117);
        vertex(mountains_x[i], floorPos_y-152);
        endShape();
        
    }

	// Draw trees.
    for(let i = 0; i < trees_x.length; i++)
    {
        // trunk
        fill(102, 51, 0);
        rect(trees_x[i], treePos_y+65, 18, 80);
        // branches
        fill(0, 153, 0);
        // bottom branch
        triangle(trees_x[i]+9, treePos_y+40, 
                 trees_x[i]-25, treePos_y+70, 
                 trees_x[i]+43, treePos_y+70);
        // middle branch
        triangle(trees_x[i]+9, treePos_y+20, 
                 trees_x[i]-25, treePos_y+50, 
                 trees_x[i]+43, treePos_y+50);
        // top branch
        triangle(trees_x[i]+9, treePos_y, 
                 trees_x[i]-25, treePos_y+30, 
                 trees_x[i]+43, treePos_y+30);
    }

	// Draw canyons
    
    for(let i = 0; i < canyons_x.length; i++)
    {
        // Green ground 1
        fill(0, 155, 0);
        rect(canyons_x[i], floorPos_y, 570, height/4); //draw some green ground
        
        // Green ground 2
        rect(canyons_x[i]+690, floorPos_y, 654, height/4);
        
        // dirt 1
        fill(55, 35, 20);
        rect(canyons_x[i], floorPos_y+8, 560, 140, 10);
        // dirt 2
        rect(canyons_x[i]+700, floorPos_y+8, 644, 140, 10);
        // cliff rocks 1
        fill(105, 110, 140);
        rect(canyons_x[i]+490, floorPos_y+18, 60, 50, 10);
        rect(canyons_x[i]+490, floorPos_y+78, 60, 70, 10);
        rect(canyons_x[i]+410, floorPos_y+78, 70, 70, 10);
        rect(canyons_x[i]+320, floorPos_y+78, 80, 70, 10);
        rect(canyons_x[i]+320, floorPos_y+18, 160, 50, 10);
        rect(canyons_x[i]+210, floorPos_y+18, 100, 130, 10);
        rect(canyons_x[i]+120, floorPos_y+78, 80, 70, 10);
        rect(canyons_x[i]+40, floorPos_y+18, 160, 50, 10);
        rect(canyons_x[i]+40, floorPos_y+78, 70, 70, 10);
        rect(canyons_x[i], floorPos_y+18, 30, 50, 10);
        rect(canyons_x[i], floorPos_y+78, 30, 70, 10);
        // ravine river
        fill(0, 255, 255);
        rect(canyons_x[i]+570, floorPos_y+68, 120, 50);
        // ravine rocks
        fill(105, 110, 140);
        rect(canyons_x[i]+560, floorPos_y+118, 140, 50, 10);
        // cliff rocks 2
        rect(canyons_x[i]+710, floorPos_y+18, 100, 130, 10);
        rect(canyons_x[i]+820, floorPos_y+18, 160, 50, 10);
        rect(canyons_x[i]+820, floorPos_y+78, 80, 75, 10);
        rect(canyons_x[i]+910, floorPos_y+78, 70, 75, 10);
        rect(canyons_x[i]+990, floorPos_y+18, 30, 50, 10);
        rect(canyons_x[i]+990, floorPos_y+78, 30, 70, 10);
        
    }
    
    // Obstacle
    for(let i = 0; i < canyons_x.length; i++)
    {
        // floor block
        fill(255, 0, 255);
        rect(obstacle.x_pos[i], obstacle.floor_y, 100, 100, 5);
        fill(204, 0, 204);
        rect(obstacle.x_pos[i]+10, obstacle.floor_y+10, 80, 80);
        
        // air block
        let next_block = obstacle.x_pos[i]+250;
        
        for(let i = 0; i < 3; i++){
            
            fill(255, 0, 255);
            rect(next_block, obstacle.air_y, 150, 100, 5);
            fill(204, 0, 204);
            rect(next_block+10, obstacle.air_y+10, 130, 80);
            next_block += 300;
            
            // coins
            stroke(204, 102, 0);
            textFont('Helvetica', 20);

            //coins
            fill(255, 215, 0);
            ellipse(next_block-220, obstacle.air_y-50, 30, 30);
            fill(180, 135, 0);
            text("$", next_block-220-5, obstacle.air_y-10-50, 50, 50);
            noStroke();
        }
        
        
    }

	// Draw collectable items
    for(let i = 0; i < canyons_x.length; i++)
    {
        // sword blade
    fill(255, 215, 0);
    rect(collectable.x_pos[i], collectable.sword_y, collectable.width, collectable.height);
    triangle(collectable.x_pos[i], collectable.sword_y+collectable.height, 
             collectable.x_pos[i]+collectable.width, collectable.sword_y+collectable.height, 
             collectable.x_pos[i]+collectable.width/2, collectable.sword_y+collectable.height+20);

    // sword grip
    fill(139, 69, 19);
    rect(collectable.x_pos[i]+collectable.grip_width/2, collectable.sword_y-collectable.grip_height, collectable.grip_width, collectable.grip_height);
    rect(collectable.x_pos[i]-collectable.width/2, collectable.sword_y, collectable.cross_width, collectable.cross_height);

    // coins
    stroke(204, 102, 0);
    textFont('Helvetica', 20);

    //coin1
    coin_x_pos = collectable.x_pos[i]+200;

    fill(255, 215, 0);
    ellipse(coin_x_pos, collectable.coin_y, 30, 30);
    fill(180, 135, 0);
    text("$", coin_x_pos-5, collectable.coin_y-10, 50, 50);

    //coin2
    let coin2 = coin_x_pos*1.25
    fill(255, 215, 0);
    ellipse(coin2, collectable.coin_y, 30, 30);
    fill(180, 135, 0);
    text("$", coin2-5, collectable.coin_y-10, 50, 50);

    //coin3
    let coin3 = coin_x_pos*1.5
    fill(255, 215, 0);
    ellipse(coin3, collectable.coin_y, 30, 30);
    fill(180, 135, 0);
    text("$", coin3-5, collectable.coin_y-10, 50, 50);

    console.log("coin 1: ", coin_x_pos);
    console.log("coin 2: ", coin2);
    console.log("coin 3: ", coin3);
    }
    
    
    
    pop();
    
	// Draw the game character - this must be last
     // head4
    fill(240, 195, 135);
    ellipse(gameChar_x, gameChar_y-50, 25, 25);
    // body4
    fill(255, 50, 50);
    rect(gameChar_x-5, gameChar_y-40, 10, 30);
    // arms4
    fill(0);
    rect(gameChar_x-5, gameChar_y-40, 5, 20);
    // feet4
    rect(gameChar_x-10, gameChar_y-7, 8, 8);
    rect(gameChar_x+5, gameChar_y-15, 8, 8);

	//////// Game character logic ///////
	// Logic to move

	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 25;
		}
		else
		{
			scrollPos += 25;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 25;
		}
		else
		{
			scrollPos -= 25; // negative for moving against the background
		}

	}
//    console.log("gameChar_x: ", gameChar_x);
//    console.log("canyons_x: ", canyons_x[canyons_x.length-1]);
    
    push();
    if(gameChar_x >= 500 && gameChar_x <= 800)
    {
        fill(150, 255, 10);
        stroke(0);
        textFont(gameFont, 80);
        text("GO!! GO!! GO!!", width/3, height*0.3);
    }
    pop();

//    grid();
//    displayMousePosition();
}

function grid() {
    stroke(1);
    for (var x = 0; x < width; x += 10) {
        line(x, 0, x, height);
        for (var y = 0; y < height; y += 10) {
            line(0, y, width, y);
        }
    }
}

function displayMousePosition() {
    fill(255, 255, 255);
    rect(0, 0, 60, 20);
    fill(0);
    text(mouseX + ',' + mouseY, 10, 15);
}

function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}
