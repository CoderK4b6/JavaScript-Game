///Base Call Class place on top of HTML Page
///varibles called to run the Game



var Player = {
	//Location on field
	x: 0,
	y: 0,
	//start Location on Level
	startX: 0,
	startY: 0,
	//Impassible Objects on Plane
	wall: [],
	//Animations pjc, pwlc, pwrc, pcc, and psc are all used for for loops
	pjc: 0,
	jump: [],
	pwlc: 0,
	walkL: [],
	pwrc: 0,
	walkR: [],
	pcc: 0,
	crouch: [],
	//Default Sprite
	psc: 0,
	static: [],
	}

var physics = {
	//Speed!!!
	pps: 256,
	//sets desent
	gravity: 0,
	//sets Defualt Movement for all dynamic objects. exludes lights
	pLeft: 0,
	pRight: 0,
	pJump: 0,
	pCrouch: 0,
}


// Bad guys in the game, haha I called them Baddies	
var Baddies = {
	//Pos of Baddies
	bCount = 0,
	x: [],
	y: [],
	//start Location on Level
	startX: [],
	startY: [],
	// Can Baddie Fly
	flying: [],
	//Images for baddies
	bwlc: 0,
	walkL: [],
	bwrc: 0,
	walkR: [],
	bsc: 0,
	static: [],
	}

//any dynamic object on the map that can be pushed.. for puzzles and protection..	
var Pushables = {
	pCount: 0,
	image: [],
	x: [],
	y: [],
	//start Location on Level
	startX: [],
	startY: [],
	}	

//Static Impassible Objects, Can't Fuck with these guys.
//Also these will take the longest to set up on a world...
var walls = {
	image: [],
	x: [],
	y: [],
	}
	
//pickups Like coins or Health or Something
var items = {
	iCount: 0,
	image: [],
	effect: [],
	x: [],
	y: [],
	//start Location on Level
	startX: [],
	startY: [],
	}
	
//elevators...
var elevators = {
	eCount: 0,
	image: [],
	playerStanding: false
	x: [];
	y: [];
	//start Location on Level
	startX: [],
	startY: [],
	}

//The Exit can be any image you want :P	
var exit = {
	image: new Image(),
	x: [],
	y: [],
	playerLeft: false,
	}
