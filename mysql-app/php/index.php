<?php
    // allow data access from different ports
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    // connect to mysql using mysqli
    $servername = "127.0.0.1";
    $username = "test_user";
    $password = "test_user";
    $database = "react";
    $port = 3306;
    $conn = new mysqli($servername, $username, $password, $database, $port);
    // connection check
    if ($conn->connect_error) {
        die("connection fail: " . $conn->connect_error);
    }

    // POST or GET
    $method = $_SERVER['REQUEST_METHOD'];

    // POST
    if ($method == "POST") {
        // json sent by react axios post - json_decode() for array / json_encode() for json
        // json structure = {{key:value, key:value}, key:value}
        $json_data = file_get_contents("php://input");
        $array_data = json_decode($json_data, true);
        $action = '';
        $name = '';
        $email = '';
        // check if array from json exists
        if (isset($array_data)) {
            $action = $array_data["action"]; // object with key action
            $array_input_values = $array_data["input_values"]; // object with key: input_values
            $name = $array_input_values["name"];
            $email = $array_input_values["email"];
            echo $action;
            echo $email;
        }
        else {
            echo '<p>json not existing</p>';
        }
        if ($action == '1') {

            $query = "INSERT INTO user (name, email) VALUES (?, ?);"; 

            // sql injection prevention
            $stmt = $conn->prepare($query);
            $stmt->bind_param("ss", $name, $email); // ss for string string
        
            if($stmt->execute()) {
            }
            else {
                echo "<p>$query fail</p>";
            }
            $stmt->close();
        }
    }
    // GET
    else if ($method == "GET") {

        $query = "SELECT * FROM user";
        
        // if in get url: user_id=x appears, add WHERE to the query
        if (isset($_GET['user_id'])) {
            $user_id = $_GET['user_id'];
            $query .= " WHERE user_id = ?";
            $stmt = $conn->prepare($query);
            $stmt->bind_param("i", $user_id); // i for int
        }
        else {
            $stmt = $conn->prepare($query);
        }
        // execute query, return data in json format
        if($stmt->execute()) {
            $query_result = $stmt->get_result();
            $rows = mysqli_fetch_all($query_result, MYSQLI_ASSOC);
            $json_rows = json_encode($rows);
            echo $json_rows;
        }
        else {
            echo "<p>$query fail</p>";
        }
        $stmt->close();
    }
    $conn->close();
?>