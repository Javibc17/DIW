$(document).ready(function () {
  const $tareaInput = $('#inputTarea');
  const $tareaLista = $('#listaTareas');
  const TAREA_STORAGE_KEY = 'toDoListTareas';
  let eliminarTarea = null; 

  $('#modal').hide();
  function cargarTarea() {
    const tareas = JSON.parse(localStorage.getItem(TAREA_STORAGE_KEY)) || [];
    tareas.forEach(tarea => {
      const tareaItem = crearTarea(tarea.text, tarea.status);
      $tareaLista.append(tareaItem);
    });
  }

  function guardarTarea() {
    const tareas = [];
    $tareaLista.children().each(function () {
      const $tarea = $(this);
      tareas.push({
        text: $tarea.find('span').text(),
        status: $tarea.attr('data-status'),
      });
    });
    localStorage.setItem(TAREA_STORAGE_KEY, JSON.stringify(tareas));
  }

  function crearTarea(text, status = 'pending') {
    return `
      <li data-status="${status}">
        <span>${text}</span>
        <div class="btnTarea">
          <button class="btnCompletar">Completar</button>
          <button class="btnEditar">Editar</button>
          <button class="btnEliminar">Eliminar</button>
        </div>
      </li>`;
  }

  $('#btnAgregarTarea').click(function () {
    const tareaText = $tareaInput.val().trim();
    if (tareaText) {
      const tareaItem = crearTarea(tareaText);
      $tareaLista.append(tareaItem);
      $tareaInput.val('');
      guardarTarea();
    }
  });

  $tareaLista.on('click', '.btnCompletar', function () {
    const $tarea = $(this).closest('li');
    $tarea.attr('data-status', 'completed').addClass('completed');
    guardarTarea();
  });

  $tareaLista.on('click', '.btnEditar', function () {
    const $tarea = $(this).closest('li');
    const tareaText = prompt('Editar tarea:', $tarea.find('span').text());
    if (tareaText) {
      $tarea.find('span').text(tareaText);
      guardarTarea(); 
    }
  });

  $tareaLista.on('click', '.btnEliminar', function () {
    eliminarTarea = $(this).closest('li');
    $('#modal').fadeIn();
  });

  $('#btnDanger').click(function () {
    if (eliminarTarea) {
      eliminarTarea.remove(); 
      guardarTarea(); 
      eliminarTarea = null; 
    }
    $('#modal').fadeOut(); 
  });

  $('#cancelarDel').click(function () {
    eliminarTarea = null; 
    $('#modal').fadeOut(); 
  });


  $('.btnFiltro').click(function () {
    const filtro = $(this).data('filter');
    $('.btnFiltro').removeClass('activo');
    $(this).addClass('activo');

    $tareaLista.children().each(function () {
      const $tarea = $(this);
      if (filtro === 'all') {
        $tarea.show();
      } else if ($tarea.attr('data-status') === filtro) {
        $tarea.show();
      } else {
        $tarea.hide();
      }
    });
  });

  cargarTarea();
});
