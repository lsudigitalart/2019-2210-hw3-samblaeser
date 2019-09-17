function setup() {
    createCanvas(1900, 800);
        
    background(60, 60, 60, 60);
   
    for (xD = 1; xD < width; xD += 20){
      for (yD = 12; yD < height; yD += 20){
         stroke(220, 170, 0, 80);
        strokeWeight(8);
     triangle(xD/.25,yD*2, xD, yD, xD, yD);
     } 
     }
   
  for (var x = 0; x < 1100; x = x + 30){
    for (var y = 0; y < 800; y = y + 40){
      
      fill(6, 180, 135, 70); 
      stroke(200, 200, 250)
      strokeWeight(2);
      circle(500 - x, y, x/5);
      

      fill(255, 0, 255, 50); 
      stroke(200, 100 ,200)
      strokeWeight(2);
      ellipse(x*6, y*6, x + 15, y + 175);
     
      fill(11, 250, 41, 30) 
      stroke(100, 100, 100, 40)
      strokeWeight(2);
      triangle(x*5, y*5, x + 70, y + 70, x + 40, y + 36);    

    }
  }




fill("orange");
stroke("orange");
strokeWeight(2);
beginShape();
vertex(70, 40);
vertex(80, 30);
vertex(100, 40);
vertex(120, 30);
vertex(130, 40);
vertex(100, 100);
endShape(CLOSE);

fill("orange");
stroke("orange");
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

function draw() {


fill(250, 130, 130, 40);
strokeWeight(3);
stroke(250, 250, 250, 40);
circle(random(height*8), random(width/8), random(width/20));
   

}
