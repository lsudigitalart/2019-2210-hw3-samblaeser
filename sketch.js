function setup() {
    createCanvas(windowWidth, windowHeight);
        
var xD = 1
var yD = 12 
var x = 1
var y = 0

    background(60, 60, 60, 60);
   
    for (var xD = 1; xD < width; xD += 20){
      for (var yD = 12; yD < height; yD += 20){
         stroke(220, 170, 0, 80);
        strokeWeight(8);
     triangle(xD/.25,yD*2, xD, yD, xD, yD);
     } 
     }
   
  for (var x = 1; x < 1100; x = x + 20){
    for (var y = 0; y < 800; y = y + 30){
      
      fill(6, 180, 135, 60); 
      stroke(200, 200, 250)
      strokeWeight(2);
      rect(x, y*1.2, x+2, y+2, 20);
    }
  }
  for (var x = 10; x < 1100; x = x + 30){
    for (var y = 0; y < 800; y = y + 40){
   
  fill(255, 0, 255, 50); 
      stroke(200, 100 ,200)
      strokeWeight(2);
      ellipse(x*6, y*6, x + 15, y + 175);
    }
  }
  for (var x = 10; x < 1100; x = x + 30){
    for (var y = 0; y < 800; y = y + 40){
     
      fill(11, 250, 41, 30) 
      stroke(100, 100, 100, 40)
      strokeWeight(2);
      triangle(x*5, y*5, x + 70, y + 70, x + 40, y + 36);    

    }
  }


fill(random(255),random(255),random(255));
stroke(random(255),random(255),random(255));
strokeWeight(2);
beginShape();
vertex(70, 40);
vertex(80, 30);
vertex(100, 40);
vertex(120, 30);
vertex(130, 40);
vertex(100, 100);
endShape(CLOSE);




}


var yS = 700

function draw() {


fill(random(255),random(255),random(255), 85);
strokeWeight(3);
stroke(250, 250, 250, 40);
circle(random(width*8), random(height/8), random(width/20));
   

 stroke(random(255),random(255),random(255));
 strokeWeight(6);
 point(1710, yS);


 yS = yS - 20;

 


fill(random(255),random(255),random(255));
stroke(random(255),random(255),random(255));
strokeWeight(2);
beginShape();
vertex(1740, 760);
vertex(1730, 770);
vertex(1710, 760);
vertex(1690, 770);
vertex(1680, 760);
vertex(1710, 700);
endShape(CLOSE);


}
