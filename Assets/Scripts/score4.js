#pragma strict

var score4 : int;

function Start () {
	
	
	
}

function Update () {

	var GUImain : GameObject = GameObject.Find("GUI");
	var Level_Manager : Level_Manager = GUImain.GetComponent(Level_Manager);
	
	score4 = Level_Manager.score4;
	
	guiText.text = score4.ToString();


}