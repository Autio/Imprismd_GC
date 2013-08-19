#pragma strict
// Controls letter scoring - archbang85@gmail.com

var player : int; // Which player is trying to deliver the letter

function Start () {


}

function Update () {
//	Debug.Log(player);
}

function OnTriggerEnter(collider : Collider){
		var GUImain : GameObject = GameObject.Find("GUI");
		var Level_Manager : Level_Manager = GUImain.GetComponent(Level_Manager);
		
	if(collider.tag  == "cloud"){
	
		Level_Manager.addscore = true;
		Level_Manager.player = player;
		Destroy(this.transform.parent.gameObject, 0.05);
	}

	
}

/*
	if(collider.tag == "player1"){
	
		Level_Manager.score1 = Level_Manager.score1 + scoreup;
	
	
	
	}
		if(collider.tag == "player2"){
	
		Level_Manager.score2 = Level_Manager.score2 + scoreup;
	
	
	
	}
		if(collider.tag == "player3"){
	
		Level_Manager.score3 = Level_Manager.score3 + scoreup;
	
	
	
	}
		if(collider.tag == "player4"){
	
		Level_Manager.score4 = Level_Manager.score4 + scoreup;
	
	
	
	}
	
	Destroy(this.gameObject, 1.0);
	
	*/