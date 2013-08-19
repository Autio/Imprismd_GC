#pragma strict

// Controls cloud behaviour when clouds are hit - archbang85@gmail.com

private var death_counter = 2; // How many times can a cloud be hit before destruction
private var speedIncrement = 1.05; // All clouds get faster when one is hit
private var invCounter : float = 1; // Makes clouds invulnerable for a little while after being hit
var invReset : float  = 2; 
var cloudparticles : GameObject;

function Start () {

}

function Update () {
	
	// Temporary invulnerability after being hit
	invCounter = invCounter - Time.deltaTime;

	if(death_counter < 1) {
	
		Destroy(this.gameObject, 0.5);
	
		// If last cloud, launch game end
		
	}

}



function OnTriggerEnter(collider : Collider){

	if(collider.tag == "pellet" && invCounter < 0){
		invCounter = invReset;
		// shrink
		transform.localScale = transform.localScale * 0.7;
		// add to rotation speed
		var cloudDisc : GameObject = GameObject.Find("CloudDisc"); 
		var CloudRotation : CloudRotation = cloudDisc.GetComponent(CloudRotation);
		CloudRotation.rotationSpeed = CloudRotation.rotationSpeed * speedIncrement; 
		if(Random.Range(0,15) < 3){
		
			CloudRotation.direction = CloudRotation.direction * -1;
		
		}
	
	
	// Instantiate particle effect
	Instantiate(cloudparticles, transform.position, transform.rotation);
	
	// increment death counter
	death_counter--;
	}


}