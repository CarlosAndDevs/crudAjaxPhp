<?php
    include('basedatos.php');

    if(isset($_POST['nombre'])){
        $nombre = $_POST['nombre'];
        $descripcion = $_POST['descripcion'];
        $query = "INSERT into tarea(nombre,descripcion) values ('$nombre','$descripcion')";
        $resultado =  mysqli_query($conexion,$query);
        if(!$resultado){
            die('Consulta Fallida');
        }
        echo "Tarea agregada satisfactoriamente";



    }

?>