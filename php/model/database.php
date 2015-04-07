<?php
// this class serves as a packet and holds all the private variables
// a class is a collection of variables
//it creates an object that connects to the database 
class Database {
	//private makes the variables unavailable to other classes. 
	private $connection;
	//private makes the variables unavailable to other classes. 
	private $host;
	//private makes the variables unavailable to other classes. 
	private $password;
	//private makes the variables unavailable to other classes. 
	private $database;
	//created a public variable so it could be used anywhere
	public $error;

	//local variables
	//this is the constructor of the class
	//this construct function is needed in order to make the objects 
	public function __construct($host, $username, $password, $database) {
		//setting our global variables to our local variables 
		$this->host = $host;
		$this->username = $username;
		$this->password = $password;
		$this->database = $database;
		//it looks for these variables
		$this->connection = new mysqli($host, $username, $password);


//this checks if there is an error i our connection
if($this->connection->connect_error){
die("<p>Error: " . $this->connection->connect_error . "</p>");
}
//checks if select exists
$exists = $this->connection->select_db($database);
//checks if databse doesnt exist 
if(!$exists){
	//if not, then you create one.
	$query = $this->connection->query("CREATE DATABASE $database");

	if($query){
		//jif it created it prints out the sentance
		echo "<p>Successfully created database: " . $database . "</p>";
	}
}
//database is already there
else{
	echo "<p>Database already exists</p>";
}
	}
	//this function opens the connection to the databse
	//A function will be executed by a call to the function.
	public function openConnection(){
		//establishes a new connection 
			$this->connection = new mysqli($this->host, $this->username, $this->password, $this->database);
			//this checks if there is an error in our connection
				if($this->connection->connect_error){
					//if thier is an error it outputs Error
		die("<p>Error: " . $this->connection->connect_error . "</p>");
		}

	}
	//this function closes the connection
	public function closeConnection(){
		//checks if the you opened the connection 
		//checks if the variable has been set and isnt NULL
		if(isset ($this->connection)) {
			//if  true, close the connection
				$this->connection->close();

		}

	}
	//every time we call the query we have to write a string 
	//in the end it wil be passed as a variable 
	public function query($string){
		//to run the open function which will open the connection
			$this->openConnection();
		//to query the connection we have
			$query = $this->connection->query($string);
		//reverses the query to output the false
			if(!$query) {
		//uses the error variable 
				$this->error = $this->connection->error;
			}

		//close the connection
			$this->closeConnection();
		//return the result 
			return $query;

	}
}