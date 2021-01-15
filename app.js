$(function(){

    let editar = false;
    console.log('hey i am jquery and im working....');
    $('#tareas-resultado').hide();
    obtenerTarea();

    $('#search').keyup(function(e){
        
        if($('#search').val()){
            let search = $('#search').val();
            $.ajax({
                url:'buscartarea.php',
                type:'POST',
                data:{search},
                success:function(response){
                    let tareas = JSON.parse(response);
                    let template = '';    
    
                    tareas.forEach(tarea => {
                        template += `<li>
                            ${tarea.nombre}
                        </li>`
                    });
    
                    $('#container').html(template)
                    $('#tareas-resultado').show();
                }
            })
        }
    });

    $('#tareas-formulario').submit(function(e){
        const datospost ={
            nombre:$('#nombre').val(),
            descripcion: $('#descripcion').val(),
            id: $('#tareaId').val()
        };
            let url = editar === false ? 'tareas-agregar.php' : 'tarea-editar.php';

            $.post(url, datospost, function (response){
                console.log(response);
                obtenerTarea();
                $('#tareas-formulario').trigger('reset');
            });
            e.preventDefault();
    });


    function obtenerTarea() {
      $.ajax({
        url: "tareas-lista.php",
        type: "GET",
        success: function (response) {
          let tareas = JSON.parse(response);
          let template = "";

          tareas.forEach((tarea) => {
            template += `
               <tr tareaId="${tarea.id}">
               <td>${tarea.id}</td>
               <td>
               <a href="#" class="tarea-seleccionada">${tarea.nombre}</a>
               </td>
               <td>${tarea.descripcion}</td>
               <td>
                <button class="tarea-borrar btn btn-danger">
                    Delete
                </button>
                </td>
               </tr>
               `;
          });
          $("#task").html(template);
        },
      });
    }

    $(document).on('click','.tarea-borrar', function(){
       if(confirm('Seguro de querer eliminarlo chato??')){
        let element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr('tareaId');

        $.post('tarea-borrar.php', {id},function(response){
            obtenerTarea();
        });
       }
    })

    $(document).on('click', '.tarea-seleccionada', function(){
        let elemento = $(this)[0].parentElement.parentElement;
        let id = $(elemento).attr('tareaId');
        $.post('tarea-actualizar.php',{id}, function(response){
              const tarea =  JSON.parse(response);
              $('#nombre').val(tarea.nombre);
              $('#descripcion').val(tarea.descripcion);
              $('#tareaId').val(tarea.id);
              editar = true;
        });
    });
});