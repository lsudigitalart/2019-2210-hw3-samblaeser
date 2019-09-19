function setup() {
  
    createCanvas(1200, 800);
        
var xD = 1
var yD = 12 
var x = 1
var y = 0

    background(60, 60, 60, 60);
   
    for (var xD = 1; xD < width; xD += 20){
      for (var yD = 12; yD < height; yD += 20){
    
     noFill();
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
      ellipse(x*6, y*6, x + 15, y + random(175));
    }
    } 

    for (var x = 10; x < 1100; x = x + 30){
      for (var y = 0; y < 800; y = y + 40){
     
        fill(0, 255, 255, 40); 
        stroke(200, 100 ,200)
        strokeWeight(2);
        ellipse(x*6, y*6, x + 45, y + 205);
      }
      } 

      for (var x = 10; x < 1100; x = x + 30){
        for (var y = 0; y < 800; y = y + 40){
       
          fill(255,255, 255, 30); 
          stroke(200, 100 ,200)
          strokeWeight(2);
          ellipse(x*6, y*6, x + 85, y + 245);
        }
        } 


  for (var x = 10; x < 1100; x = x + 30){
    for (var y = 0; y < 800; y = y + 40){
     
      fill(11, 250, 41, 30) 
      stroke(100, 100, 100, 40)
      strokeWeight(2);
      triangle(x*5, y*5, x + 70, y + 70, x + 80, y + 36);    
    }
    }


}


var yS = 700

function draw() {

fill(random(255),random(255),random(255));
stroke(random(255),random(255),random(255));
strokeWeight(2);
beginShape();
vertex(940, 760);
vertex(930, 770);
vertex(910, 760);
vertex(890, 770);
vertex(880, 760);
vertex(910, 700);
endShape(CLOSE);


fill(random(255),random(255),random(255));
stroke(random(255),random(255),random(255));
strokeWeight(2);
beginShape();
vertex(5, 50);
vertex(15, 40);
vertex(35, 50);
vertex(55, 40);
vertex(65, 50);
vertex(35, random(110));
endShape(CLOSE);

fill(random(255),random(255),random(255), 85);
strokeWeight(3);
stroke(250, 250, 250, 40);
circle(random(width*8), random(height/8), random(width/20));
   

 stroke(random(255),random(255),random(255));
 strokeWeight(random(13));
 point(910, yS);


 yS = yS - 20;

}

