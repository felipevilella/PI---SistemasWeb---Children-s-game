#pragma strict
@script RequireComponent(AudioSource)


var numberOfClicks : int = 2;
var enemyPoint : int = 1;
var target:Transform;
var sinal: int = 1;
var speed: float = 0.01;
var audioSource: AudioSource;


function Start() {
	audioSource = GetComponent.<AudioSource>();
	audioSource.Stop();
	if (transform.position.x > target.position.x)
		sinal = -1;
	else if (transform.position.x == target.position.x)
		sinal = 0;
}

function Update () {
   	
	if(numberOfClicks <= 0)
	{
		var deslocamentoX = Mathf.Abs(transform.position.x - target.position.x);
		var deslocamentoY = Mathf.Abs(transform.position.y - target.position.y);

		transform.position.x = transform.position.x + (sinal * speed * deslocamentoX);
		transform.position.y = transform.position.y - (speed * deslocamentoY);
		  if (!audioSource.isPlaying) {
				audioSource.Stop();
				audioSource.Play();

		   }
	}
	
	if ((Mathf.Abs(transform.position.y - target.position.y) < 0.05) &&  (Mathf.Abs(transform.position.x - target.position.x) < 0.05)) {
	       
		 

			numberOfClicks = 1;
			//Destroy(gameObject);

	
	}
}