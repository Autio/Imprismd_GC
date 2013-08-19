#pragma strict
var rope : Transform;

function Start () {




}

function Update () {


	if(Input.GetKey ("joystick 1 button 6")){
	
		Debug.Log("p");
		createRope();
	
	
	}
	// else if the rope exists, destroy it
	
	
}

function createRope(){

	
	// target location minus current location vector3
	Instantiate(rope, Vector3(transform.position.x + 10, 0, 0), Quaternion.identity);
	
	
	
	
}