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
        
            SceneManager.LoadScene("nome_meu");
     

    }
    public void Bt_sobre(){
		Debug.Log ("Mudou de cena");
	}
	public void Bt_sair(){
		Debug.Log ("Você fechou o jogo");
		Application.Quit ();
	}
}
