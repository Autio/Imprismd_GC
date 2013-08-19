#pragma strict
// Neutralises projectiles once they've collided with a player unit
private var countdown : boolean = false;
var c = 0.5;
function Start () {

}

function Update () {
	
	if(countdown){
		c = c - Time.deltaTime;
		if(c < 0){
			this.tag = "Untagged";
			countdown = false;
		}
	}
}

function OnTriggerEnter(collider : Collider) {

		if(collider.tag == "player1" || collider.tag == "player2" || collider.tag == "player3" || collider.tag == "player4"){
		
			countdown = true;
		
		}

}