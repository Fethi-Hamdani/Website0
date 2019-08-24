<?php

    //if($_SERVER['REQUEST_METHOD'] == 'POST' )
    //{
        $userName = $_POST['userName'];
        $emailAddress = $_POST['emailAddress'];
        $message = $_POST['message'];
        $headers = 'From ' . $emailAddress . '\r\n';
        mail('a.fellague27@gmail.com', $userName, $message, $headers);
    //}

?>