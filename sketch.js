
let value = 0;
let threshold = 30;


let sound = [];
let totalSound = 4;


function preload() { //sounds to be played
  for (let i = 0; i < 4; i++){
    sound[i] = loadSound("assets/" + i + ".mp3");
  }
}
  
  function setup() {
    fill(value);
    createCanvas(400, 400);
    rectMode(CENTER);
  
    setShakeThreshold(threshold); 

  }


  function deviceShaken() {  
let rndm; //= random(sound)//this is supposed to be the randomizer





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
rndm = int(random(0,4));
sound[rndm].play();
}
