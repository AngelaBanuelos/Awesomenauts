<?php
//this looks for database.php
require_once(__DIR__ . "/Database.php");
//starts the session variable
session_start();
session_regenerate_id(true);

$path = "/awesomenauts/php/";

//you store information here
//closing tag isnt needed when only php
//this is where you store database server information
$host = "localhost";
$username = "root";
$password = "root";
$database = "awesomenauts_db";
//checks if the variable has been set snd reverses the ouput
if(!isset($_SESSION["connection"])) {
	//created a new object
	$connection = new Database($host, $username, $password, $database);
	// Added a session variable, which preserves information
	$_SESSION["connection"] = $connection;
}