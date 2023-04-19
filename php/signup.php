<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "guvi";
$connect = new mysqli($servername, $username, $password, $dbname);


$name = $_POST['name'];
$gender = $_POST['gender'];
$dob = $_POST['dob'];
$contact = $_POST['contact'];
$email = $_POST['email'];
$passcode = $_POST['password'];


$sql = $connect->prepare('SELECT 1 FROM users WHERE email=?');
$sql->bind_param('s', $email);
$sql->execute();
$exists = (bool) $sql->get_result()->fetch_row();
if($exists){
    echo "exists";
} else{
    $sql = $connect->prepare("INSERT INTO users (username, gender, dob, contact, email, passcode) VALUES (?, ?, ?, ?, ?, ?)");
    $sql->bind_param("ssssss", $name, $gender, $dob, $contact, $email, $passcode);
    $sql->execute();
    echo "registered";
}

?>