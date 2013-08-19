#pragma strict

// This makes a player drop the parcel they're carrying if they are rammed by a fellow player
var inv_counter : float;
var inv_reset : float = 0.5;
function Start () {
	inv_counter = inv_reset;
}

function Update () {
	if(inv_counter >= 0){
		inv_counter = inv_counter - Time.deltaTime;
	}
}

function OnTriggerEnter(collider : Collider){

	if(collider.tag == "player1" || collider.tag == "player2" || collider.tag == "player3" || collider.tag == "player4" || collider.tag == "pellet"){
		if(inv_counter < 0){
			// set parent object as being bumped
			var pickup : Pickup = transform.parent.gameObject.GetComponent("Pickup");
			pickup.bumped = true;
			inv_counter = inv_reset;
		}
	}

}