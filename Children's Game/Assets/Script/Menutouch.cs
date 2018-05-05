using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Menutouch : MonoBehaviour {
    public float speed;

    void Start()
    {
        speed = 0.01f;
    }

    void Update()
    {

        if (Input.touchCount == 1)
        {

            transform.Translate(Input.touches[0].deltaPosition.x * speed * Time.deltaTime,
                                Input.touches[0].deltaPosition.y * speed * Time.deltaTime, 0);
        }
    }

}
