#pragma strict

var score1 : int = 0;

function Start () {
	
	
	
}

function Update () {

	var GUImain : GameObject = GameObject.Find("GUI");
	var Level_Manager : Level_Manager = GUImain.GetComponent(Level_Manager);
	
	score1 = Level_Manager.score1;
	
	guiText.text = score1.ToString();

}