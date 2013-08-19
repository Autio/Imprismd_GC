#pragma strict
// archbang85@gmail.com | Randomly spawns letters on the play arena

var letter : GameObject;
var spawnTime : float;
var minTime : float = 5;
var maxTime : float = 15;
var maxLetters : int = 3; // how many letters can be on the field at any given moment

// Specify the area within which the parcels may spawn
var minX : float = -0.1;
var maxX : float = 0.1;
var minZ : float = -0.1;
var maxZ : float = 0.1;

var prismMinX : float = -0.03;
var prismMaxX : float = 0.03;
var prismMinZ : float = -0.03;
var prismMaxZ : float = 0.03;

function Start () {
	spawnTime = Random.Range(minTime, maxTime);
}

function Update () {

	var x : float;
	var z : float;
	
	spawnTime = spawnTime - Time.deltaTime;
	var letters : GameObject[];
	letters = GameObject.FindGameObjectsWithTag("letter");
	
	// Spawn if the counter has expired and there aren't too many letters on already
	if(spawnTime < 0 && letters.Length < maxLetters){
	
		spawnTime = Random.Range(minTime, maxTime);
		//Instantiate(pellet, transform.position, transform.rotation);
		while(x > prismMinX && x < prismMaxX && z > prismMinZ && z < prismMaxZ){	
			x = Random.Range(minX, maxX);
			z = Random.Range(minZ, maxZ);		
		}
		Instantiate(letter, Vector3(x, 0.02, z), transform.rotation);	
	} else if (spawnTime < 0){
		spawnTime = Random.Range(minTime, maxTime);
	}
}