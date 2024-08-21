let h1;

function setup() {
  createCanvas(600, 400);
  h1 = createElement('h1', `${keyCode}`)
  h1.position(300, 200)
  h1.style('text-align', 'center')
}

function draw() {
  background(220);
  keyDetect()
  //keyText()
}

function keyDetect(){
    if(keyIsPressed === true){
    h1.html(`${keyCode}`)
    }
}

function keyText(){
  createElement('h1', keyCode)
}
