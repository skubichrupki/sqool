<?php
    // allow data access from different ports
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    // connect to mysql using mysqli
    $servername = "127.0.0.1";
    $username = "test_user";
    $password = "test_user";
    $database = "react";
    $conn = new mysqli($servername, $username, $password, $database);
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
            // insert user query
            $query = "INSERT INTO user (name, email) VALUES (?, ?);"; 

            if (!empty($name) && !empty($email)) {
                // sql injection prevention
                $stmt = $conn->prepare($query);
                $stmt->bind_param("ss", $name, $email);
            
                // execute the query and check
                if($stmt->execute()) {
                    // echo "<p>$query query execution success</p>";
                }
                else {
                    echo "<p>$query query execution fail</p>";
                }
                $stmt->close();
            }
            else {
                echo '<p>mandatory form value is empty</p>';
            }
        }
    }
    // GET
    else if ($method == "GET") {
        //select user query
        $query = "SELECT user_id, name, email, created_on, updated_on FROM user;";
        $stmt = $conn->prepare($query);

        if($stmt->execute()) {
            // echo "<p>$query query execution success</p>";
            $query_result = $stmt->get_result();
            $rows = mysqli_fetch_all($query_result, MYSQLI_ASSOC);
            $json_rows = json_encode($rows);
            echo $json_rows;
        }
        else {
            echo "<p>$query query execution fail</p>";
        }
        $stmt->close();
    }
   
    $conn->close();
?>