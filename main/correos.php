<?php
    $us = 'bannermuere@gmail.com';

    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    $header = $asunto
    $contenido = 
        $nombre. "\n". 
        $correo. "\n".  
        $mensaje;
    
    mail($us, $asunto, $mensaje, $header)

    echo "<script>alert('Enviado');window.location = '../index.php'</script>";

?>