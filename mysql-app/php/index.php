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
    else {
        echo "<p>connection success</p>";
    }

    // json sent by react axios post - json_decode() for array / json_encode() for json
    $input_values = file_get_contents("php://input");
    $array_input_values = json_decode($input_values, true);
    $name = '';
    $email = '';
    // check if array from json exists
    if (isset($array_input_values)) {
        $name = $array_input_values["name"];
        $email = $array_input_values["email"];
    }
    else {
        echo '<p>json not existing</p>';
    }

    echo "<p>" . $name . "</p>";
    echo "<p>" . $email . "</p>";
    echo "<p>" . $input_values . "</p>";

    // insert query to do: add sql injection prevention
    $ins_query = "INSERT INTO user (name, email) VALUES (?, ?);"; 


    if (!empty($name) && !empty($email)) {

        // sql injection prevention
        // Prepare query and bind the parameters to the statement in the query
        $stmt = $conn->prepare($ins_query);
        $stmt->bind_param("ss", $name, $email);
    
        // execute the query
        if($stmt->execute()) {
            echo "<p>ins_query execution success</p>";
        }
        else {
            echo "<p>ins_query execution fail</p>";
        }
        $stmt->close();
    }
    else {
        echo '<p>mandatory form value is empty</p>';
    }
   
    $conn->close();
?>