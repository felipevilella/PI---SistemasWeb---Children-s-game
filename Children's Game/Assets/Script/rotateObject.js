#pragma strict

function Update () {
	gameObject.transform.Rotate(Vector3.up * Time.deltaTime * 100);
}