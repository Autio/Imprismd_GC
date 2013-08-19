#pragma strict

// This controls the movement of the projectiles from NSA - archbang85@gmail.com

var randomDirection : Vector3;
var randomSpeed : float;
private var hasHit = false;

// Speed range of spawned projectile
var minSpeed : float = 5; 
var maxSpeed : float = 15; 

var cloudparticles2 : GameObject; // particle effect on projectiles when they hit something
var bump : AudioClip; 
private var notBumped : boolean = true;

function Start () {
	Destroy(this.gameObject, 8);
	
	// How to get agents to orient properly???
	//var PRISM : GameObject = GameObject.Find("PRISM");
	//var PRISM_Fire : PRISM_Fire = PRISM.GetComponent(PRISM_Fire);
	//randomDirection = PRISM_Fire.direction;
	randomSpeed = Random.Range(minSpeed, maxSpeed);
	randomDirection = Vector3(Random.Range(-20,20), 0, Random.Range(-20,20));
	//transform.eulerAngles = randomDirection.eulerAngles;
	//transform.localEulerAngles = randomDirection;
	var relPos : Vector3 = randomDirection - transform.position;
	//transform.rotation = Quaternion.LookRotation(relPos);

}

function Update () {
	transform.RotateAround(transform.position, transform.forward, 0.9f);
	// How to orient the agents to face their direction?
	//if(hasHit == false){
		//var v2 : Vector3 = randomDirection - transform.position;
		//transform.rotation = Quaternion.LookRotation(v2);
		this.rigidbody.AddForce(Vector3(randomDirection.x, 0, randomDirection.z).normalized * randomSpeed, ForceMode.Impulse); // Movement
		
	//}
}

function OnTriggerEnter(collider : Collider){

	if(collider.tag == "player1" || collider.tag == "player2" || collider.tag == "player3" || collider.tag == "player4"){
		
		this.tag = "Untagged";
		Instantiate(cloudparticles2, transform.position, transform.rotation);
		//randomDirection = Vector3(Random.Range(-10,10), 0, Random.Range(-10,10));
		//this.rigidbody.AddForce(randomDirection.normalized * randomSpeed, ForceMode.Impulse);
		//hasHit = true;
		playBump();
	
	}

	// Make the agents destruct if they hit the clouds or walls
	if(collider.tag == "cloud" && notBumped){
		playBump();
		Destroy(this.gameObject, 0.2);
		notBumped = false;
	}
	if(collider.tag == "wall" && notBumped){
		//Instantiate(cloudparticles, transform.position, transform.rotation);
		playBump();
		Destroy(this.gameObject, 0.2);
		notBumped = false;
	}

}

function LateUpdate(){
  //this.transform.Rotate(randomDirection, 90);
}
  
function playBump(){
 	AudioSource.PlayClipAtPoint(bump, Vector3.zero, 1.0f);
}
