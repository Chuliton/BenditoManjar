function mostrarMenu(comida) {
    // Oculta todos los menús
    var menus = document.getElementsByClassName('menu');
    for (var i = 0; i < menus.length; i++) {
      menus[i].style.display = 'none';
    }
    
    // Muestra el menú correspondiente a la comida seleccionada
    var menu = document.getElementById('menu-' + comida);
    if (menu) {
      menu.style.display = 'block';
    }
  }
  