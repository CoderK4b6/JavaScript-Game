///Base Game Engine (In short Game without the story)
///Run Below Player.js


//Side Scroller Engine
Engine2D = {
	bgReady: false,
	bgImage: new Image(),
	gravity: physics.gravity[0],
	m1: physics.pLeft[0],
	m2: physics.pRight[0],
	m3: physics.pUp[0],
	m4: physics.pDown[0]
	}
//Creates the Game Window
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 575;
canvas.height = 425;
document.body.appendChild(canvas);

//Sets Background
Engine2D.bgImage.onload = function () {
	Engine2D.bgReady = true;
	};

//Src For Background
Engine2D.bgImage.src = "images/background.png";



var reset = function () {
	//resets Player Pos
	player.x = player.startX;
	player.y = player.startY;
	
	//resets Baddies Pos
	for(){
		baddies.x[i] = baddies.startX[i];
		baddies.y[i] = baddies.startY[i];
		};
	//resets Item Pos
	for(){
		items.x[i] = items.startX[i];
		items.y[i] = items.startY[i];
		};
	//resets pushables
	for(){
		pushable.x[i] = pushable.startX[i];
		pushable.y[i] = pushable.startY[i];
		}
	//resets elevators
	for(){
		elevators.x[i] = elevators.startX[i];
		elevators.y[i] = elevators.startY[i];
		}
	};
	


//Key activation!
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    //left
    if (e.keyCode == '37') {
    
    //right   
    }else if (e.keyCode == '39') {
     
     
		//up
		}else if (e.keyCode == '38'){
		
			//down
			}else if(e.keyCode == '40'){
			
				}

}

