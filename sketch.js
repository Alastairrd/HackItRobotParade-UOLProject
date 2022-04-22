function setup()
{
	//create a canvas for the robot
	createCanvas(1000, 700);

	speed = 2000;

	reverseLine = false;
	reverseLine2 = false;

	firstLineX = 0;
	firstLineY = 0;
	firstLineX2 = 0;
	
	secondLineX = 20;
	secondLineY = 35;
	secondLineX2 = -20;

	ellipseYSecondBot = 0;
	ellipseYSecondBot2 = 12;
	ellipseYSecondBot3 = 24; 
	ellipseYSecondBot4 = 36;
	ellipseYSecondBot5 = 48;
}

function draw()
{
	

	stroke(0);
	strokeWeight(2);
	//robot body 1 - delete this code and make your own robot body
	fill(200, 100, 100);
	rotate(100);
	ellipse(80, 360, 50, 200);
	
	rotate(-200);
	ellipse(185, 205, 50, 200);
	
	//rotations and colour for tire bars
	strokeWeight(3);
	fill(120);
	rotate(300);
	rect(-260, 202, 10, 120);
	rotate(-400);
	rect(400, -67, 10, 120);
	rotate(200);
	strokeWeight(2);
	//tire
	fill(150);
	ellipse(150, 365, 44, 83);
	


	// check for max width wanted on tire line
	if(firstLineX == 20) {
		reverseLine = true; //reverse line growth
	}

	if(secondLineX == 20) {
		reverseLine2 = true; //reverse line growth
	}
	//checks for line back to initial width
	if(firstLineX == 0) {
		reverseLine = false; //start growth cycle again
		firstLineY = 0; //sets lineY back to start position
	}

	if(secondLineX == 0) {
		reverseLine2 = false; //start growth cycle again
		secondLineY = 0; //sets lineY back to start position
	}

	//uses frame count to slowly grow line and move it downwards
	if (frameCount % 2 == 0) {

		if(!reverseLine) {
			firstLineX += 0.5;
			firstLineX2 -= 0.5;
			firstLineY++;
		}
		else {
			firstLineX -= 0.5; //when reverseLine is true, x decreases but y keeps increasing
			firstLineX2 += 0.5;
			firstLineY++;
		}

		if(!reverseLine2) {
			secondLineX += 0.5;
			secondLineX2 -= 0.5;
			secondLineY++;
		}
		else {
			secondLineX -= 0.5; //when reverseLine is true, x decreases but y keeps increasing
			secondLineX2 += 0.5;
			secondLineY++;
		}
	}

	
	line(150, firstLineY + 325, firstLineX + 150, firstLineY + 325);
	line(150, firstLineY + 325, firstLineX2 + 150, firstLineY + 325);

	line(150, secondLineY + 325, secondLineX + 150, secondLineY + 325);
	line(150, secondLineY + 325, secondLineX2 + 150, secondLineY + 325);

	


	

	
	// OLD WORKINGS USING SIN(MILLIS())

	// ellipse(200, 200, 200);
  	// stroke(0, 0, 0);
  	// line(150, lineY, sin(millis() / speed) * 17 + 150, lineY);
  	// line(150, lineY, sin(millis() / speed) * 17 + 150, lineY);

	// line(150, lineY, -sin(millis() / speed) * 17 + 150, lineY);
  	// stroke(0);
  	// line(200, 200, sin(millis() / speed) * 100 + 200, cos(millis() / speed) * 100 + 200);
	  
  	// line(sin(millis() / speed) * 100 + 200, cos(millis() / speed) * 100 + 200, sin(millis() / speed) * 100 + 200, 200);
	
	// text(sinSpeed * 10, 150, 450);
	
  	// text(reverse, 150, 480);
	// text(lineY, 150, 490);
	// text(millis(), 150, 500);

	// text(millis() / 10 % 30, 150, 550)

	// var sinSpeed = sin(millis() / speed);

	// var lineY = sinSpeed * 42 + 330;
	
	// if (sinSpeed >= 0.99) {
	// 	reverse = true;
	// }

	// if(reverse){
	// 	lineY = -sinSpeed * 42 + 413;
	// }

	// if(lineY >= 413) {
	// 	reverse = false;
	// 	lineY = sinSpeed * 42 + 330

	// }
	

	// if (millis() % 50){
	// 	if (pointY < 700) {
	// 		pointY++;
	// 	}
	// 	else {
	// 		pointY = 600;
	// 		pointX++;
	// 	}
	// }

	// point(pointX, pointY);


	

	




	//robot body 2 - delete this code and make your own robot body
	fill(255);
	noStroke();
	rect(355, 200, 170, 300); //white fill, noStroke rectangle to hide repainted ellipses

	fill(50, 120, 50);
	stroke(0);
	//for loop creates sine wave body with 50 ellipses
	for (i = 0; i < 50; i++) {
		ellipse(sin(i/4+millis() / speed)*30 + 440, (i * 4 + 400) % 400 + 180, 20, 20)
	  }

	  //bottom grey ellipse follows
	  fill(150)
	  ellipse(sin(51/4+millis() / speed)*30 + 440, (52 * 4 + 400) % 400 + 180, 80, 35)

	  //side of bottom dark grey ellipses
	  fill(100)
	  ellipse(sin(51/4+millis() / speed)*30 + 470, (52 * 4 + 400) % 400 + 180, 25, 55)
	  ellipse(sin(51/4+millis() / speed)*30 + 410, (52 * 4 + 400) % 400 + 180, 25, 55)


	
	  //when the blue rings have dropped 60 pixels, resets to 0
	  //otherwise slowly increases y value
	  if(frameCount % 10) {
		  if(ellipseYSecondBot >= 60) {
			  ellipseYSecondBot = 0;
		  }
		  ellipseYSecondBot++;
		  
	  }

	  if(frameCount % 10) {
		if(ellipseYSecondBot2 >= 60) {
			ellipseYSecondBot2 = 0;
		}
		ellipseYSecondBot2++;
		
	}

	if(frameCount % 10) {
		if(ellipseYSecondBot3 >= 60) {
			ellipseYSecondBot3 = 0;
		}
		ellipseYSecondBot3++;
		
	}

	if(frameCount % 10) {
		if(ellipseYSecondBot4 >= 60) {
			ellipseYSecondBot4 = 0;
		}
		ellipseYSecondBot4++;
		
	}

	
	if(frameCount % 10) {
		if(ellipseYSecondBot5 >= 60) {
			ellipseYSecondBot5 = 0;
		}
		ellipseYSecondBot5++;
		
	}

	//blue hover rings
	stroke(100, 150, 200);
	noFill();

	//derives starting position from above ellipses, varies Y using frameCount and constants
	ellipse(sin(51/4+millis() / speed)*30 + 440, (52 * 4 + 400) % 400 + ellipseYSecondBot + 205, 50*sin(millis() / speed*6 + 15), 8)
	ellipse(sin(51/4+millis() / speed)*30 + 440, (52 * 4 + 400) % 400 + ellipseYSecondBot2 + 205, 55*sin(millis() / speed*5 + 5), 6)
	ellipse(sin(51/4+millis() / speed)*30 + 440, (52 * 4 + 400) % 400 + ellipseYSecondBot3 + 205, 70*sin(millis() / speed*7 + 20), 10)
	ellipse(sin(51/4+millis() / speed)*30 + 440, (52 * 4 + 400) % 400 + ellipseYSecondBot4 + 205, 60*sin(millis() / speed*3), 10)
	ellipse(sin(51/4+millis() / speed)*30 + 440, (52 * 4 + 400) % 400 + ellipseYSecondBot5 + 205, 60*sin(millis() / speed*5 + 30), 10)

	
	  
	//robot body 3 - delete this code and make your own robot body
	stroke(0);
	fill(100);
	
	//main rocket body
	rect(690, 200, 120, 100, 70, 70, 0);

	fill(255);
	noStroke();
	rect(690, 300, 120, 200)
	//fire effect
	fill(255, 0, 0);

	for( f = 0; f < 100; f++) {
		fill(random(150, 255), random(20, 170), 0, random(0, 20));
		//stroke(random(100, 255), random(10, 50), 0);
		r = random(700, 800);
		r2 = random(740, 760);
		r3 = random(700, 800);
		h = random(300, 430);
		triangle(r, 300, r2, h, r3, 300);

	}
	fill(100);
	stroke(0);
	//rocket jets
	rect(700, 300, 20, 10, 0, 0, 7);
	rect(720, 300, 20, 10, 0, 0, 7);
	rect(740, 300, 20, 10, 0, 0, 10);
	rect(760, 300, 20, 10, 0, 0, 7);
	rect(780, 300, 20, 10, 0, 0, 7);

	//rocket fins
	fill(130)
	triangle(850, 290, 810, 300, 800, 220);
	triangle(650, 290, 690, 300, 700, 220);

	
	
	


	// !!! Draw the robot heads - You shouldn't need to change this code !!!

	//robot head 1
	fill(200);
	rect(100, 100, 100, 100, 10);
    //robot head 2
	rect(400, 100, 100, 100, 10);
    //robot head 3
	rect(700, 100, 100, 100, 10);

	//ears
	fill(255, 0, 0);

	//robot ears 1
	rect(93, 130, 10, 33);
	rect(197, 130, 10, 33);

	//robot ears 2
	rect(393, 130, 10, 33);
	rect(497, 130, 10, 33);

	//robot ears 3
	rect(693, 130, 10, 33);
	rect(797, 130, 10, 33);



	//robots' antennas
	fill(250, 250, 0);
    // robot antenna 1
	ellipse(150, 93, 10, 10);
    // robot antenna 1
	ellipse(450, 93, 10, 10);
    // robot antenna 1
	ellipse(750, 93, 10, 10);

    //robots' antennas
	fill(200, 0, 200);
    // robot antenna 1
	rect(140, 97, 20, 10);
    // robot antenna 2
	rect(440, 97, 20, 10);
    // robot antenna 3
	rect(740, 97, 20, 10);


	//robot 1's eyes
	fill(255);
	ellipse(125, 130, 26, 26);
	point(125, 130);
	ellipse(175, 130, 26, 26);
	point(175, 130);

	//robot 2's eyes
	ellipse(425, 130, 26, 26);
	point(425, 130);
	ellipse(475, 130, 26, 26);
	point(475, 130);

	//robot 3's eyes
	ellipse(725, 130, 26, 26);
	point(725, 130);
	ellipse(775, 130, 26, 26);
	point(775, 130);


	//robots' noses
	fill(255, 0, 0);
    //robot 1 nose
	triangle(150, 135, 135, 160, 165, 160);
    //robot 2 nose
	triangle(450, 135, 435, 160, 465, 160);
    //robot 3 nose
	triangle(750, 135, 735, 160, 765, 160);

	//robot 1 mouth
	noFill();
	beginShape();
	vertex(128, 175);
	vertex(136, 185);
	vertex(142, 175);
	vertex(150, 185);
	vertex(158, 175);
	vertex(166, 185);
	vertex(174, 175);
	endShape();

	//robot 2 mouth
	beginShape();
	vertex(428, 175);
	vertex(436, 185);
	vertex(442, 175);
	vertex(450, 185);
	vertex(458, 175);
	vertex(466, 185);
	vertex(474, 175);
	endShape();

	//robot 3 mouth
	beginShape();
	vertex(728, 175);
	vertex(736, 185);
	vertex(742, 175);
	vertex(750, 185);
	vertex(758, 175);
	vertex(766, 185);
	vertex(774, 175);
	endShape();
}