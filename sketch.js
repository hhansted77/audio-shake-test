
let value = 0;
let threshold = 30;

let first;
let second;
let third;
let fourth;
let sound = [];


function preload() { //sounds to be played
  first = loadSound("assets/stop-that.mp3");
  second = loadSound("assets/stop-it.mp3");
  third = loadSound("assets/put-me-down.mp3");
  fourth = loadSound("assets/nonono.mp3");

  sound = [first, second, third, fourth];
  }
  
  function setup() {
    fill(value);
    createCanvas(400, 400);
    rectMode(CENTER);
  
    setShakeThreshold(threshold); 
    noLoop();
  }


  function deviceShaken() {  //this is supposed to be the randomizer

let rndm = random(sound)
if (deviceShaken){
  rndm.play();
}



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
  background(value);

}
