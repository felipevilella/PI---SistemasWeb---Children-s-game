#pragma strict
// Enemy script

// Inspector variables
var rndColors : Color[];
var numberOfClicks : int = 2;
var respawnTime : float = 1.0;
var explosion : Transform;
var enemyPoint : int = 1;

// Private variables
//if(numberOfClicks <= 0)
function Update () {
	if(numberOfClicks <= 0)
	{
		if(explosion)
		{
			// Explosion
			var myExplosion = Instantiate(explosion, transform.position, transform.rotation);
		}
		


	}
}

function RespawnWaitTime()
{
	GetComponent.<Renderer>().enabled = false;
	yield WaitForSeconds(respawnTime);
	GetComponent.<Renderer>().enabled = true;
}

function RandomColor()
{
	var newColor = Random.Range(0, rndColors.length);
	GetComponent.<Renderer>().material.color = rndColors[newColor];
}