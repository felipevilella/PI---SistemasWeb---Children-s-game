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


        /* public void bt_fase1(string cena)
         {
             if ((Input.touchCount == 1) && (Input.GetTouch(0).phase == TouchPhase.Began))
             {
                 SceneManager.LoadScene(cena);
             }


         }
         public void bt_fase2()
         {
             Debug.Log("Iniciou fase2");

         }
         public void bt_fase3()
         {
             Debug.Log("Iniciou fase3");

         }
         public void bt_fase4()
         {
             Debug.Log("Iniciou fase4");


         }*/
        if ((Input.touchCount == 1) && (Input.GetTouch(0).phase == TouchPhase.Began))
        {
            SceneManager.LoadScene("cubo");
        }
    }
}
