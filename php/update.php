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


$sql = "UPDATE users SET username='$name', gender='$gender', dob='$dob', contact='$contact' WHERE email='$email'";
$sql = $connect->query($sql);

if ($sql) {
    echo "updated";
} else {
    echo "error";
}

?>