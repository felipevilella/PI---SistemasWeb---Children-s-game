using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class menucontroler : MonoBehaviour {

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
	public void Bt_star(){
        
            SceneManager.LoadScene("menu_fases");
     

    }
    public void Bt_sobre(){
        SceneManager.LoadScene("menu_2");

    }
    public void Bt_sair(){
		Application.Quit ();
	}
}
