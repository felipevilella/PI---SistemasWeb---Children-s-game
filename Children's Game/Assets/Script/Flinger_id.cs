using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Flinger_id : MonoBehaviour {

	// Use this for initialization

	
	// Update is called once per frame
	void Update () {
		
	}
    void OnGUI()
    {

        foreach (Touch touch in Input.touches)
        {
            string texto = "";
            texto += "ID: " + touch.fingerId + "\n";
            texto += "tapCount: " + touch.tapCount + "\n";
            texto += "phase: " + touch.phase.ToString()+ "\n";
            texto += "Pos x:" + touch.position.x + "\n";
            texto += "Pos y:" + touch.position.y + "\n";
            int num = touch.fingerId;




           GUI.Label(new Rect(0 + 130 * num, 0, 120, 100), texto);



        }
    }
}
