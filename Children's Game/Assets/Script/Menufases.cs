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

        if ((Input.touchCount == 1) && (Input.GetTouch(0).phase == TouchPhase.Began))
        {
            SceneManager.LoadScene("cubo");
        }
    }
}
