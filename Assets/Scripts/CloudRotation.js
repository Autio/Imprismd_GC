#pragma strict

// General rotation script

var rotationSpeed : float = 6;
var direction : int = 1;

var axis : int = 1;

function Start () {
	if(Random.Range(0,10) < 4){
		direction = 1;
	} else {
		direction = -1;
	}
}

function Update () {
	
	if(axis==1){
	transform.Rotate(Vector3.up * Time.deltaTime * rotationSpeed * direction);
	}
	if(axis==2){
	transform.Rotate(Vector3.right * Time.deltaTime * rotationSpeed * direction);
	}
	if(axis==3){
	transform.Rotate(Vector3.forward * Time.deltaTime * rotationSpeed * direction);
	}
	

}