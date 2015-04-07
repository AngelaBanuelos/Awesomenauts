<?php
//we require config file so we can use the info we need
	require_once(__DIR__ . "/../model/config.php");
	//checks if their is a session variable and if its true
	//if its not true, the user isnt logged in 
	//the if statements is used to check if session authenticated hasnt been set
	//to verify if user has logged in
	function authenticateUser() {
		if(!isset($_SESSION["authenticated"])) {
			return false;
		}
		
		else{
			//checking session variable has info 
			if($_SESSION["authenticated"] != true){
				return false;
			}
			else{
				return true;
			}
		}


	}