#pragma strict
// | - Script to carry parcels - | archbang85@gmail.com

// We want to create a joint between the player unit and the letter when the letter is picked up
// Can only carry one letter at a time
// Only one player can carry any given letter

private var pickupRange : float;
public var breakForce : float = 20;
private var checkTime : float;
public var resetTime : float = 0.6;
static var pickupDistance = 0.02;
static var itemHeld = 0;
private var letters : GameObject[];
private var activeLetter : GameObject = null; 
private var readyToLift : boolean = true;
private var readyToLiftCount : boolean = false;
private var counter : float;

public var throwMail : AudioClip;
public var pickedUp : AudioClip;
var pickupButton : String;
var throwButton : String;
var bumped : boolean = false;

function Start() {
	// Set the pickupRange to be the same as the gameobject radius. So multiply the local scale by the collider radius
	pickupRange = this.GetComponent(SphereCollider).radius * this.transform.localScale.x;
	//hingeJoint.connectedBody = null;
	
	checkTime = resetTime;
	counter = resetTime;
	// Find player number
	var thisTag = this.gameObject.tag;
	var playerNumber : String = thisTag.Substring(thisTag.Length - 1);
	// Specify controls based on player number
	pickupButton = "Pickup" + playerNumber;//"joystick " + playerNumber  + " button 7";
	throwButton = "Throw" + playerNumber;//"joystick " + playerNumber + " button 8";
	//Debug.Log(pickupButton);
	//Debug.Log(pickupButton);
}

function Update () {
	
	
	// Populate an array with all the letters on the field
	letters = GameObject.FindGameObjectsWithTag("letter");

	// Only run this every x frames...
	if(checkTime < 0 && readyToLift){
		// find a letter within reach
		for (var letter in letters){
				if((letter.transform.position - transform.position).magnitude < pickupRange){
					activeLetter = letter;
					break;
				} else {
				
				activeLetter = null;	
				
			}
		}
		checkTime = resetTime * 3;
	}
	checkTime = checkTime - Time.deltaTime;
	
	// Picking the parcel up
    if(readyToLift && Input.GetButtonDown(pickupButton) && activeLetter != null){
	    	
	    	// Only allow one joint per mail
			if(this.gameObject.GetComponent(FixedJoint) == null){
			
				// Play pickup animation etc
				
				// Play sound
				pickupSound();
				
			    // Create fixed joint
			    this.gameObject.AddComponent(FixedJoint);
		    	var fixJoint = this.gameObject.GetComponent(FixedJoint);
		    	fixJoint.breakForce = breakForce;
		    		  
			    // bring letter close
			    activeLetter.transform.position = transform.position + Vector3(0, -0.02, 0);
			    
			    // Activate hinge joint
			    fixJoint.connectedBody = activeLetter.GetComponent(Rigidbody);
			    
			    // Make letter aware who's carrying it (for scoring)
			    var thisTag : String= this.gameObject.tag;
			    var playerNumber : int = parseInt(thisTag.Substring(thisTag.Length - 1));
			 	
			 	var letterChildren : Component[];
			 	letterChildren = activeLetter.GetComponentsInChildren(DestroyLetter);
			 	for (var child : DestroyLetter in letterChildren){
			 		child.player = playerNumber;
			 	}	
				//	activeLetter.GetComponent(DestroyLetter).player = playerNumber;
			 	
	 		} 
	    readyToLift = false;
    }
    
    // Releasing the package
	if(Input.GetButtonUp(pickupButton) && activeLetter != null && readyToLift == false){
		letterRelease();
    } 
    
    if(bumped){
    	letterRelease();
    	bumped = false;
    }

	if(readyToLiftCount){
		counter = counter - Time.deltaTime;
		if(counter < 0){
			readyToLift = true;
			readyToLiftCount = false;
			counter = resetTime;
		}
	}


}

function letterRelease(){
  
			// play sound
			throwSound();
			
			// get current direction
			var GUImain : GameObject = GameObject.Find("GUI");
			var JoystickController5 = this.gameObject.GetComponent(JoystickController5);
			var dir : Vector3 = JoystickController5.dir;
			
			Destroy(this.gameObject.GetComponent(FixedJoint));
			
			// Push the parcel in the direction of travel a little bit
			if(activeLetter != null){
				activeLetter.rigidbody.AddForce((dir.normalized + Vector3(0, 0.05, 0)) * breakForce, ForceMode.Impulse);
			}
		
			// trigger countdown to lifting readiness
			readyToLiftCount = true;
			activeLetter = null;			
		
}


function throwSound(){
	AudioSource.PlayClipAtPoint(throwMail, Vector3.zero, 1.0f);
}

function pickupSound(){
	AudioSource.PlayClipAtPoint(pickedUp, Vector3.zero, 1.0f);
}    