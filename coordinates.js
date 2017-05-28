//objects

var multiplayer = false;

var avatar = {
  x: width/2,
  y: height/2,
  w: 10,
  h: 10,
  color: color(255,0,0),
  right: false,
  left: false,
  up: false,
  down: false
};

var avatar2 = Object.create(avatar);
avatar2.x = 100; 
avatar2.y = 100;
avatar2.color = color(0,255,0);



var graphColor = color(112, 224, 255);
var font = loadFont("Barrio-Regular.ttf");



var setup = function(){
  background(255,255,255);
};

var draw = function (){

  drawGrid();
  drawAvatars(avatar);
  moveAvatars(avatar);
  if (multiplayer){
    moveAvatars(avatar2);
    drawAvatars(avatar2);
  }
  
  
  drawTitle();
  
};

//other functions
var drawGrid = function(){
  background(255,255,255);
  for(var i = 0; i <= width; i++){
    if(i % 10 === 0){
      stroke(graphColor);
      strokeWeight(1);
      if (i % 100 === 0){
        strokeWeight(3);
      }
      line(i, 0, i, height);
      line(0, i, width, i);
    }
  }
};

var drawTitle = function(){
  fill(255, 255, 255);
  rect(130, 20, 240, 60);
  
  var title = "COPY COORDINATES";
  fill(0, 0, 255);
  textFont(font, 22);
  text(title, 135, 60);
  
};


var drawAvatarCoords = function(){
  fill(255,255,255);
  stroke(graphColor);
  strokeWeight(3);
  rect(30, 430, 200, 50);
  rect(260, 430, 200, 50);
  
  fill(avatar.color);
  textFont(font, 24);
  text("X: " + str(avatar.x) + "  Y: " + str(avatar.y), 50, 465);

  if(multiplayer){
   var message = "X: " + str(avatar2.x) + "  Y: " + str(avatar2.y);
  }else{
    message = "Press [ P ] ";
  }
  fill(avatar2.color);
  text(message, 280, 465);
}

var drawAvatars = function(a){
  noStroke();
  fill(a.color);
  ellipse(a.x, a.y, a.w, a.h);
  drawAvatarCoords();
};

var moveAvatars = function(a){
  if (a.right && a.x + a.w < width){
    a.x += 10;
  }
  if (a.left && a.x > 0 ){
    a.x -= 10;
  }
  if (a.up && a.y > 0){
    a.y -= 10;
  }
  if (a.down && a.y  < height){
    a.y += 10;
  }
};

var copyCoords = function() {
  var text = "( " + avatar.x +", " + avatar.y ;
  if(multiplayer){
    text += ", " + avatar2.x + ", " + avatar2.y
  }
  text +=  " )";
  window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
};

var keyPressed = function(){
  switch(keyCode){
    case 39:
      avatar.right = true;
      break;
    case 37:
      avatar.left = true;      
      break;
    case 38:
      avatar.up = true;
      break;
    case 40:
      avatar.down = true;
      break;
    case 68:
      avatar2.right = true;
      break;
    case 65:
      avatar2.left = true;      
      break;
    case 87:
      avatar2.up = true;
      break;
    case 83:
      avatar2.down = true;
      break;      
    case 32:
      copyCoords();
      break;
    case 80:
      multiplayer = !multiplayer
      break;
  }
};

var keyReleased = function(){
    switch(keyCode){
    case 39:
      avatar.right = false;
      break;
    case 37:
      avatar.left = false;      
      break;
    case 38:
      avatar.up = false;
      break;
    case 40:
      avatar.down = false;
      break;
    case 68:
      avatar2.right = false;
      break;
    case 65:
      avatar2.left = false;      
      break;
    case 87:
      avatar2.up = false;
      break;
    case 83:
      avatar2.down = false;
      break;
  }
};
