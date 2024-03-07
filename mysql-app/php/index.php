<?php

    // allow data access from different ports
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    echo "sqool server on 127.0.0.1:80 is listening.." . "\r\n";

    // encode json sent by react axios post
    $input_values = json_encode(file_get_contents('php://input'));
    echo "INPUT VALUES:" . $input_values . "\n";
    
    // connect to mysql using mysqli
    $servername = "127.0.0.1";
    $username = "test_user";
    $password = "test_user";
    $database = "react";
    $conn = new mysqli($servername, $username, $password, $database);

    // connection check
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    else {
        echo "Connected successfully";
    }

    // query check
    // $sql = "SELECT * FROM user";
    // // execute the query
    // $result = $conn->query($sql);
    //     while ($row = $result->fetch_assoc()) {
    //         echo $row["user_id"].$row["name"].$row["email"]."\n";
    //     }

    // connection close
    $conn->close();
?>