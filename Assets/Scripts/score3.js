#pragma strict

var score3 : int = 0;

function Start () {
	
	
	
}

function Update () {

	var GUImain : GameObject = GameObject.Find("GUI");
	var Level_Manager : Level_Manager = GUImain.GetComponent(Level_Manager);
	
	score3 = Level_Manager.score3;
	
	guiText.text = score3.ToString();


}