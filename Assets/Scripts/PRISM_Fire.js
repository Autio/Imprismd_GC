#pragma strict

private var countdownTimer : float;
// Time interval for spawning units
var countdownTimerMax : float = 1;
var countdownTimerMin : float = 0.2;
var pellet : GameObject;
var direction : Quaternion;

function Start () {

}

function Update () {

	if(countdownTimer < 0){
	
		// Create pellet
		direction = Quaternion(Random.Range(-1, 1), 0 ,Random.Range(-1, 1), 0);
		Instantiate(pellet, this.transform.position, transform.rotation);
		
		countdownTimer = Random.Range(countdownTimerMin, countdownTimerMax);
	
	}

	// Random time decrement
	countdownTimer = countdownTimer - Time.deltaTime;


}