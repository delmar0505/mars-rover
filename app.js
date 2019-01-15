
var grid = [
  [0,1,2,3,4,5,6,7,8,9], //a
  [0,1,2,3,4,5,6,7,8,9], //b
  [0,1,2,3,4,5,6,7,8,9], //c
  [0,1,2,3,4,5,6,7,8,9], //d
  [0,1,2,3,4,5,6,7,8,9], //e
  [0,1,2,3,4,5,6,7,8,9], //f
  [0,1,2,3,4,5,6,7,8,9], //g
  [0,1,2,3,4,5,6,7,8,9], //h
  [0,1,2,3,4,5,6,7,8,9], //i
  [0,1,2,3,4,5,6,7,8,9]  //j
];


// Rover Object Goes Here
// ======================

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
  currentLocation: ''
};
// ======================

function location1(rover){

        rover.currentLocation = rover.x + "," + rover.y;
       
       return rover.travelLog.push(rover.currentLocation); 
    };

function turnLeft(rover){
  switch(rover.direction){
    case "N":
    rover.direction = "W"; 
    break;
    case "W":
      rover.direction = "S";
    break;
    case "S":
      rover.direction = "E";
    break;
    case "E":
      rover.direction = "N";
    break;
    };
  console.log("turnLeft was called!");
}

function turnRight(rover){
    switch(rover.direction){    
      case "N":
      rover.direction = "E"; 
      break;     
      case "E":
      	rover.direction = "S";
      break;   
      case "S":
      	rover.direction = "W";
      break;
      case "W":
      	rover.direction = "N";
      break;
      };
    
  console.log("turnRight was called!");
}

function moveForward(rover){
  switch(rover.direction){
    case "N":
      rover.y -= 1 
    break;
    case "E":
      rover.x += 1 
    break;
    case "S":
      rover.y += 1 
    break;
    case "W":
      rover.x -= 1 
    break;
    };
  console.log("moveForward was called")
  location1(rover);
}


	function go(command){
    for(var i = 0; i < command.length; i++){ 
      switch(command[i]){ 
      case "f":
        moveForward(rover);
      break;
      case "r":
        turnRight(rover);
      break;
      case "l":
        turnLeft(rover);
      break;
      };
        
    };
    console.log(rover.travelLog);
  }







