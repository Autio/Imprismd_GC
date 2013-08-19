#pragma strict

var score2 : int = 0;

function Start () {
	
	
	
}

function Update () {

	var GUImain : GameObject = GameObject.Find("GUI");
	var Level_Manager : Level_Manager = GUImain.GetComponent(Level_Manager);
	
	score2 = Level_Manager.score2;
	
	guiText.text = score2.ToString();


}