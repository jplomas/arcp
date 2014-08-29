<?php
include "config.php"; 
// read variables from POST
if ((!isset($_POST["address"])) or ($_POST["address"] === "")) {
    die("INVALID");
} else {
    $email = $_POST["address"];
//echo $email;
    // $email = urldecode($email);
    
}

if (is_valid_email($email)) {

try {
    $ss = "mysql:host=".$sql_host.";dbname=".$sql_db;
    $dbh = new PDO($ss, $sql_user, $sql_pass);
//    $email = mysql_real_escape_string($email);
    } catch (Exception $e) {
        echo("FAIL");
        exit;
    }

// check if user already in - if so, send 'ok!'
      $mysqli = mysql_connect($sql_host, $sql_user, $sql_pass);
      mysql_select_db($sql_db, $mysqli);
      $sql = "SELECT *  FROM arcp WHERE email = '$email'";
//echo $sql;  
    $result = mysql_query($sql,$mysqli) or die(mysql_error($mysqli));
	$count = mysql_num_rows($result);
	if (($count > 0)) { 
            die("ALREADY");
        }


try {
        $stmt = $dbh->prepare("INSERT INTO arcp (email) VALUES (:email)");
        
        $stmt->bindParam('email',$email);
        $stmt->execute();
        $count = $stmt->rowCount();
  //      echo $count;
        if (($count == "1")) {
                echo "OK";
            } else {
                echo "FAIL";
        }
            

} catch (Exception $e) {
    echo "FAIL";
}
} else {
    echo "INVALID";
}
exit;

function is_valid_email($email)
{
if(!filter_var($email, FILTER_VALIDATE_EMAIL))
  {
  return false;
  }
else
  {
  return true;
  }
}


            ?>
