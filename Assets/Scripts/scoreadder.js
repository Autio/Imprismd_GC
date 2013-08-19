#pragma strict

// This increments player scores whenever they deflect agents
var score_increment : int = 1;
function Start () {

}

function Update () {

}

function OnTriggerEnter(collider : Collider){
	if(collider.tag == "pellet"){
		var GUImain : GameObject = GameObject.Find("GUI");
		var Level_Manager : Level_Manager = GUImain.GetComponent(Level_Manager);
		var Emba : GameObject = GameObject.Find("Maintext");
		var Emb : Emb = Emba.GetComponent(Emb);
		Emb.switcher = true;
		
		if(this.gameObject.tag == "player2"){
			Level_Manager.score2 = Level_Manager.score2 + score_increment;
		}
	
		else if(this.gameObject.tag == "player1"){
			Level_Manager.score1 = Level_Manager.score1 + score_increment;
		}
		else if(this.gameObject.tag == "player3"){
			Level_Manager.score3 = Level_Manager.score3 + score_increment;
		}
		else if(this.gameObject.tag == "player4"){
			Level_Manager.score4 = Level_Manager.score4 + score_increment;
		}
	}
}