<?php

    include('basedatos.php');

    $query = "SELECT * FROM tarea";
    $resultado = mysqli_query($conexion,$query);

    if(!$resultado){
        die('Consulta fallida'. mysqli_error($conexion));
    }

    $json = array();
    while($row=mysqli_fetch_array($resultado)){
        $json[] = array(
            'nombre' =>$row['nombre'],
            'descripcion' =>$row['descripcion'],
            'id'=>$row['id']
        );
    }
     $jsonstring = json_encode($json);
    echo $jsonstring;
?>