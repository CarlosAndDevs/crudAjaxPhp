<?php
    include('basedatos.php');

    if(isset($_POST['id'])){
        $id = $_POST['id'];

        $query = "Delete  from tarea where id =$id";
        $resultado = mysqli_query($conexion,$query);
        if(!$resultado){
            die('Consulta fallida');
        }
        echo 'tarea elminada ok';

    }

 

?>