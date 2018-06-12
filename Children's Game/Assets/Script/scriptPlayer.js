#pragma strict
var tagName : String;
var rayDistance : float = 100.0;
var score : int = 0;
var gameTime : int = 50;

//
function Start()
{
	InvokeRepeating("CountDown", 1, 1);
}

//
function Update () {
	if(Input.GetMouseButtonDown(0))	
	{
		var hit : RaycastHit;
		var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if(Physics.Raycast(ray, hit, rayDistance))
		{
		
			if(hit.transform.tag == tagName)
			{
				var enemyScript = hit.transform.GetComponent(scriptEnemy);
				enemyScript.numberOfClicks--;
				
				if(enemyScript.numberOfClicks == 0)
				{
					score += enemyScript.enemyPoint;					
				}
			}
		}
	}
}

function CountDown()
{
	if(--gameTime == 0)
	{
		CancelInvoke("CountDown");
		if(score >5)
		{
			
		}
		else
		{
		Application.LoadLevel("menu_fases");
		}
	}
}

function OnGUI()
{
	GUI.Label(Rect(10, 10, 100, 30), "Pontos: " + score);
	GUI.Label(Rect(10, 40, 100, 30), "Tempo: " + gameTime);
}

