<?php
session_start();
$_SESSION['messages']='';
$db= new mysqli('localhost','root','','products');
if($SERVER['REQUEST_METHOD']=='POST'){
	$firstname=mysqli_real_escape_string($_POST['firstname']);
	$secondname=mysqli_real_escape_string($_POST['secondname']);
	$phonenum=mysqli_real_escape_string($_POST['phonenumber']);
	$email=mysqli_real_escape_string($_POST['emailaddress']);

	if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
		$_SESSION['messages']='incorrect Email format';
	}else{
		$sql= "INSERT INTO users(firstname,secondname,phonenumber,email) VALUES ('$firstname','$secondname','$phonenumber','$email')"
	}
}
?>