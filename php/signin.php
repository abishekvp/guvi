<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "guvi";
$connect = new mysqli($servername, $username, $password, $dbname);


$email = $_POST['email'];
$passcode = $_POST['password'];


$sql = $connect->prepare('SELECT 1 FROM users WHERE email=? AND passcode=?');
$sql->bind_param('ss', $email, $passcode);
$sql->execute();
$found = (bool) $sql->get_result()->fetch_row();
if($found){
    echo "found";
} else{
    echo "notfound";
}

?>