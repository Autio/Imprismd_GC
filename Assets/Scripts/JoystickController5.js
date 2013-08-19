#pragma strict
// Gamepad controls for all players || archbang85@gmail.com
var speed : float = 0.01;
var extra_speed : float = 0.05;
var reset_speed : float = 0.05;

private var x_min : float;
private var x_max : float;
private var z_min : float;
private var z_max : float;
var buffer : int = 1;
var dir : Vector3;
var y_resetTimer : float = 2;
var timerReset : float;
var y_reset : float = 0.02;

function Start () {
	timerReset = y_resetTimer;
	reset_speed = speed;
	extra_speed = reset_speed * 2;

	// Pull controller extents from the camera 
	var dist = Camera.main.transform.position.y;
 
	x_min = Camera.main.ViewportToWorldPoint(Vector3(0,0,dist)).x + buffer;
    x_max = Camera.main.ViewportToWorldPoint(Vector3(1,0,dist)).x - buffer;
 	
    z_min = Camera.main.ViewportToWorldPoint(Vector3(0,0,dist)).z + buffer;
    z_max = Camera.main.ViewportToWorldPoint(Vector3(0,1,dist)).z - buffer;
	
}

function Update () {
	
	// reset y to standard
	/*
	y_resetTimer = y_resetTimer - Time.deltaTime;
	if(y_resetTimer < 0){
	
		transform.position.y = y_reset;
		y_resetTimer = timerReset;
	}
	*/
	
	
	var x : float;
	var z : float;
	
	if(this.gameObject.tag == "player1"){
	
		x = Input.GetAxis ("Horizontal");
		z = Input.GetAxis ("Vertical");
		// joybutton 5 is right upper trig, 7 lower
		if(Input.GetKey ("joystick 1 button 6"))
		{
			speed = extra_speed;
		} else{
			speed = reset_speed;
		}
	}
	
	if(this.gameObject.tag == "player2"){
	
		x = Input.GetAxis ("H2");
		z = Input.GetAxis ("V2");
		// joybutton 5 is right upper trig, 7 lower
		if(Input.GetKey ("joystick 2 button 6"))
		{
			speed = extra_speed;
		} else{
			speed = reset_speed;
		}
	}
	
	if(this.gameObject.tag == "player3"){
	
		x = Input.GetAxis ("H3");
		z = Input.GetAxis ("V3");
		// joybutton 5 is right upper trig, 7 lower
		if(Input.GetKey ("joystick 3 button 6"))
		{
			speed = extra_speed;
		} else{
			speed = reset_speed;
		}
	}
	
	if(this.gameObject.tag == "player4"){
	
		x = Input.GetAxis ("H4");
		z = Input.GetAxis ("V4");
		// joybutton 5 is right upper trig, 7 lower
		if(Input.GetKey ("joystick 4 button 6"))
		{
			speed = extra_speed;
		} else{
			speed = reset_speed;
		}
	}

	dir = Vector3(x, 0, z);
	
			if(dir.magnitude > 0.1){
				this.rigidbody.AddForce(dir.normalized * speed, ForceMode.Impulse);
				this.rigidbody.AddTorque(dir.normalized * speed / 1000, ForceMode.Impulse);
			}
	// Implement rotation for the right analog hat																																			
}

function LateUpdate(){


}