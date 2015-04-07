<?php
	require_once(__DIR__ . "/../model/config.php");
	$array = array{
		'exp'=> '',
		'exp1'=> '',
		'exp2'=> '',
		'exp3'=> '',
		'exp4'=> '',



	};
	$username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_STRING);
	$password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_STRING);
	// this query selects  a username and password that match the users info
	$query = $_SESSION["connection"]->query("SELECT * FROM users WHERE username = '$username'");
//this function checks to see if the login info matches the login info from our database
	if($query->num_rows == 1) {
		$row = $query->fetch_array();
//this if statement runs the login info in the database and the 3 equal signs checks to see if the login info matches
		if($row["password"] === crypt($password, $row["salt"])) {
			$_SESSION["authenticated"] = true;
			$array["exp"] = $row["exp"];
			$array["exp1"] = $row["exp1"];
			$array["exp2"] = $row["exp2"];
			$array["exp3"] = $row["exp3"];
			$array["exp4"] = $row["exp4"];
			$_SESSION["name"] = $username;
			echo json_encode($array);
			?>
			<button type="button"><a href="../index.php">Home</a></button>
			<?php
		}		
		else {
			echo "<p>Invalid username and password</p>";
		}
	}
		else {
			echo "<p>Invalild username and password</p>";
		}

