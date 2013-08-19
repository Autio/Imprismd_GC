#pragma strict
// This collates player scores
var scoreup : int = 25; // How much parcel delivery adds to points
var addscore : boolean = false;
var score1 : int;
var score2 : int;
var score3 : int;
var score4 : int;

var player;

function Start () {
	score1 = 0;
	score2 = 0;
	score3 = 0;
	score4 = 0;
}

function Update () {
	// Add points for parcel delivery
	if(addscore){
		if(player == 1){
			score1 = score1 + scoreup;
		} else if(player == 2){
			score2 = score2 + scoreup;
		} else if(player == 3){
			score3 = score3 + scoreup;
		} else if(player == 4){
			score4 = score4 + scoreup;
		}
		addscore = false;
	}
}