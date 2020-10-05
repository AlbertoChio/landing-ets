<?php
header("Access-Control-Allow-Origin: *");

header("Content-Type: application/json");

header("Access-Control-Allow-Headers: Content-Type");


$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

var_dump($request);



//clean post data

$firstName = $request->nombre ;

$lastName = $request->correo;

$email = $request->telefono;

$message = $request->razon;


$name = $firstName." ".$lastName;



// create email



$to = "a.chio@outlook.com";

$email_subject = "Message from Contact Form on Ad Webapp: ".$name;

$email_body = "this is an automated email from Ad webapp with the following message \n\n".

"Name of the person: ".$name.

"\n\n Email address: ".$email.

"\n\n Message: ".$message;

$headers = "From: jagmohan@localhost";


if(mail($to, $email_subject, $email_body, $headers)){

    echo json_encode("Success");

} else {

    echo json_encode("Failure");

}


?>
