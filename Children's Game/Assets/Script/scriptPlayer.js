var tagName : String;
var rayDistance : float = 100.0;
var score : int = 0;
var gameTime : int = 50;
var tempo: int=0;

public var estrela1: GameObject;
public var estrela2: GameObject;
public var estrela3: GameObject;
public var estrela4: GameObject;
public var estrela5: GameObject;
public var estrela6: GameObject;

function Start()
{	
	estrela1.SetActive(false);
	estrela2.SetActive(false);
	estrela3.SetActive(false);
	estrela4.SetActive(false);
	estrela5.SetActive(false);
	estrela6.SetActive(false);
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
				if(score >= 1){
					estrela1.SetActive(true);
				}
				if(score >= 2){
					estrela1.SetActive(false);
					estrela2.SetActive(true);
				}
				if(score >= 3){
					estrela3.SetActive(true);
				}
				if(score >= 4){
					estrela3.SetActive(false);
					estrela4.SetActive(true);
				}
				if(score >= 5){
					estrela5.SetActive(true);
				}
				if(score >= 6){
					estrela5.SetActive(false);
					estrela6.SetActive(true);
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
		Application.LoadLevel("game_over");
		}
	}
	else{

		if(score >5 )
		{
			Application.LoadLevel("concluido");
		}
	}
}

function OnGUI()
{
	var Label2:GUIStyle = new GUIStyle(GUI.skin.GetStyle("label"));
     Label2.fontSize = 18;

	GUI.Label(Rect(10, 40, 100, 30), "Tempo: " + gameTime,Label2);
	}

