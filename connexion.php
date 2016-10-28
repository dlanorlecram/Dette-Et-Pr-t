<?php
//Paramete to connect at database
echo "Hello!";
$servername = "localhost";
$username = "root";
$password = "facesimplon";
$db = "compta";
//Je crée une nouvelle connexion
$connect = new mysqli($servername, $username, $password, $db);
//Je check la connexion
if($connect -> connect_error){
  die("Connection Failed!". $conn->connect_error);
}
else{
  echo "Connection Establish!";
}

//Rêquete SQL
$sql = "SELECT * FROM depenses";
//echo $sql;
$result = $connect -> query($sql);
print_r($result);

$obj_depense = {};

if ($result -> num_rows > 0) {
    echo "<table><tr><th>ID</th><th>Name</th></tr>";
    // output data of each row
    while($row = $result->fetch_assoc()){
        echo "<tr><td>".$row["id"]."</td><td>".$row["montant"]." ".$row["date"]." ".$row["name"]." ".$row["groupe_id"]."".$row["user_id"]."</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}
$connect->close();
?>
