<?php
	require_once(__DIR__ . "/../model/config.php");
	//to get rid/delete the variable authenticated
	unset($_SESSION[authenticated]);
	//destroy the remaining variable 
	session_destroy();
	//this redirects the user to index page 
	header("Location: " . $path . "index.php");