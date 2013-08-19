#pragma strict
var Arena : GameObject;
function Start () {
	Arena = GameObject.Find("ArenaFloor");
	// what happens when letter is born
	this.transform.parent = Arena.transform;
}

function Update () {

}