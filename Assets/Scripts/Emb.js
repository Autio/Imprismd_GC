#pragma strict

// archbang85@gmail.com | This displays intel that NSA agents garner from the players


var switcher : boolean = false;
private var switch_cooldown : float = 5;
private var s_reset = 5;
var texts = [];
var end = false;
var clouds : GameObject[];
function Start () {

	texts = ["Intel:\nSubject eats toenails",
			 "Intel:\nSubject osculated the Chancellor",
			 "Intel:\nAccumulated 900 hours of indecent website visitation in the month of March",
			 "Intel:\nSubject has a lactating third nipple",
			 "Intel:\nSubject has £3.42 in Library arrears",
			 "Intel:\nDr Watson Daydreams of Pixels",
			 "Intel:\nThe code is 4728af83g21h8, enjoy the software!",
			 "Intel:\nRumour is going around that Glasgow Rangers\n paid their debt",
			 "Intel:\nCarried out a heart bypass on his dog",
			 "Intel:\nSubject uses comic sans",
			 "Intel:\nSubject has three recorded cases of public flatulence"
			];

	guiText.text = "";
	
	
}

function Update () {


	clouds = GameObject.FindGameObjectsWithTag ("cloud");
	
	var x = clouds.Length;
	if(switcher && switch_cooldown < 0 && end == false){
		guiText.text = texts[Random.Range(0, texts.length)];
		switcher = false;
		switch_cooldown = s_reset;
	}
	
	// If all the clouds are gone, will display end text and reload the level
	if(end == true){
	
		guiText.text = "ALL PRIVACY ERADICATED - YOU LOSE";
		WaitAndReload(5.0f);
		
	
	}
	
	switch_cooldown = switch_cooldown - Time.deltaTime;
	
	if (clouds.Length <= 0){
	
		end = true;
	
	
	}
	
}

function WaitAndReload (waitTime: float){

	// delay before reloading level
	yield WaitForSeconds(waitTime);
	Application.LoadLevel("Main");

}