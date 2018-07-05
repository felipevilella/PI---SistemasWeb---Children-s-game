using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;
using UnityEngine;
using UnityEngine.SceneManagement;
 

public class Menufases : MonoBehaviour
{


    // Use this for initialization
    void Start()
    {

    }

    
    void Update()
    {
        
    }
    public void fase1()
    {
   
            SceneManager.LoadScene("sceneLevel01");
    

    }
    public void fase2()
    {
            SceneManager.LoadScene("Level02");

    }
    public void menu()
    {
            SceneManager.LoadScene("tela_inicial");
      
    }
    public void pause()
    {
        Time.timeScale = 0;

    }
    public void resume()
    {
        Time.timeScale = 1;
 
    }
    public void euvouteeperar()
    {
        SceneManager.LoadScene("sceneLevel01");
        Time.timeScale = 1;

    }
}
