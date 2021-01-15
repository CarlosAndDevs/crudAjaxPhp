<?php

    include('basedatos.php');

    $search = $_POST['search'];

    if(!empty($search)){
        $query = "Select * from tarea where nombre like '$search%'";
        $result = mysqli_query($conexion, $query);

        if(!$result){
            die('Error en la consulta'. mysqli_error($conexion));
        }
            $json = array();
            while($row = mysqli_fetch_array($result)){
                $json[] = array(
                    'nombre'=> $row['nombre'],
                    'descripcion'=> $row['descripcion'],
                    'id' => $row['id']
                );
            }
                $jsonstring = json_encode($json);
                echo $jsonstring;
    }



?>