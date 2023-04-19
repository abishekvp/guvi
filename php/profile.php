<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "guvi";
$connect = new mysqli($servername, $username, $password, $dbname);


$email = $_POST['email'];

$sql = $connect->prepare('SELECT 1 FROM users WHERE email=?');
$sql->bind_param('s', $email);
$sql->execute();

$sql = "SELECT username, gender, dob, contact, email FROM users WHERE email='$email'";
$result = $connect->query($sql);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo $row["username"]."&".$row["gender"]."&".$row["dob"]."&".$row["contact"]."&".$row["email"];
  }
} else {
  echo "0 results";
}

?>