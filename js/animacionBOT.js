// Cargar animación predeterminada cuando se carga la página
window.addEventListener('load', function() {
    mostrarAnimacion('animaciones/BOTNORM.json'); // Reemplaza 'ruta/a/animacionPredeterminada.json' con la ubicación de tu archivo JSON de animación predeterminada
  });
  
  document.getElementById('btn-normal').addEventListener('click', function() {
    mostrarAnimacion('animaciones/BOTNORM.json'); // Reemplaza 'ruta/a/animacion1.json' con la ubicación de tu primer archivo JSON de animación
  });
  
  document.getElementById('btn-feliz').addEventListener('click', function() {
    mostrarAnimacion('animaciones/BOTFELIZ.json'); // Reemplaza 'ruta/a/animacion2.json' con la ubicación de tu segundo archivo JSON de animación
  });

  document.getElementById('btn-enojado').addEventListener('click', function() {
    mostrarAnimacion('animaciones/BOTENOJADO.json'); // Reemplaza 'ruta/a/animacion1.json' con la ubicación de tu primer archivo JSON de animación
  });
  
  document.getElementById('btn-triste').addEventListener('click', function() {
    mostrarAnimacion('animaciones/BOTTRISTE.json'); // Reemplaza 'ruta/a/animacion2.json' con la ubicación de tu segundo archivo JSON de animación
  });

function mostrarAnimacion(rutaAnimacion) {
    const animationContainer = document.getElementById('animationContainer');
    // Limpia cualquier animación previa en el contenedor
    animationContainer.innerHTML = '';
    // Carga la nueva animación
    const animation = bodymovin.loadAnimation({
      container: animationContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: rutaAnimacion
    });
  }