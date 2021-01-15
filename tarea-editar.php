<?php

    include('basedatos.php');

    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];

    $query = "UPDATE tarea set nombre = '$nombre', descripcion = '$descripcion' where 
    id = '$id'";

    $resultado = mysqli_query($conexion,$query);

    if(!$resultado){
        die('Consulta fallo');
    }

    echo "Tarea actualizada ";

?>