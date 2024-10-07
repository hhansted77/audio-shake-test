
let value = 0;


let first;
let second;
let third;
let fourth;



function preload() { //sounds to be played
    first = loadSound("assets/0.mp3");
    //second = loadSound("assets/1.mp3");
    //third = loadSound("assets/2.mp3");
    //fourth = loadSound("assets/3.mp3");

   //let sound = [first, second, third, fourth];
 
  }

  
  function setup() {
    fill(value);
    createCanvas(400, 400);
    rectMode(CENTER);
  
    setShakeThreshold(50); 

  }


  function deviceShaken() {  
    //let rndm = random(sound.length);//this is supposed to be the randomizer

//i dont know what if statement to get it to read the shake -> then random
//rndm.play();




    //let rndm = random(1, 100);
    //if (rndm <= 25) {
      //first.play();
    //} else if (26 <= rndm <= 50){
      //second.play();
    //} else if (51 <= rndm <= 75){
      //third.play();
    //}else {
      //fourth.play();
    //}  

value = value + 5;
if (value > 255){
  value = 0;
}

  }





function draw() {
  background(value); //proves that shake function works because gradient changes

}

function keyPressed(){
  value = value + 5;
if (value > 255){
  value = 0;
}
}


//if(deviceShaken){
  //rndm.play();
//}
//}
