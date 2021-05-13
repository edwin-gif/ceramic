<?php

$para = 'ediazmarin014@gmail.com';
$asunto = "Mensaje";
$mailheader = "From: ". $_POST["email"]. "\r\n";
$mailheader .= "Replay-To: ". $_POST["email"]. "\r\n";
$mailheader .= "Content-type text/html; charset=utf-8\r\n";
$MESSAGE_BODY = "Nombre".$_POST["name"]."\n";
$MESSAGE_BODY .= "\n<br>Email:".$_POST["email"]."\n";
$MESSAGE_BODY .= "\n<br>Mensaje:".nl2br($_POST["name"])."\n";


mail($para, $asunto, $MESSAGE_BODY, $mailheader) or die ("error al enviar email");

header('Location: https://charly2299.github.io/proyecto1/')

?>