
//ANIMACION LOGO
function animacionlogo(){
    const animationContainer = document.getElementById('animacion-logo');
    const anim = lottie.loadAnimation({
      container: animationContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'animaciones/logoBOOK.json' // Ruta a tu archivo JSON de animación
    });
}

animacionlogo();

//ANIMACION DE APPS

function animacionAPPS(){
    const animationContainer = document.getElementById('animacion-aps');
    const anim = lottie.loadAnimation({
      container: animationContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'animaciones/APSGIRANDO.json' // Ruta a tu archivo JSON de animación
    });
}

animacionAPPS();


//IMAGENES MULTIMEDIA

function animacionIMAGEN(){
  const animationContainer = document.getElementById('animacion-imagen');
  const anim = lottie.loadAnimation({
    container: animationContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animaciones/icIMAGEN.json' // Ruta a tu archivo JSON de animación
  });

  animationContainer.addEventListener('mouseover', () => {
    anim.play(); // Reproduce la animación al pasar el mouse sobre el contenedor
  });
  
  animationContainer.addEventListener('mouseout', () => {
    anim.stop(); // Detiene la animación al quitar el mouse del contenedor
  });
}


animacionIMAGEN();



function animacionAUDIO(){
  const animationContainer = document.getElementById('animacion-sonido');
  const anim = lottie.loadAnimation({
    container: animationContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animaciones/audioicono.json' // Ruta a tu archivo JSON de animación
  });
}

animacionAUDIO();


function animacionINTERACTIVIDAD(){
  const animationContainer = document.getElementById('animacion-interactividad');
  const anim = lottie.loadAnimation({
    container: animationContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animaciones/interactividad.json' // Ruta a tu archivo JSON de animación
  });
}

animacionINTERACTIVIDAD();


/**********************IMAGENES MULTIMEDOA 2**************************** */

function animacionPCWEB(){
  const animationContainer = document.getElementById('animacion-PCWEB');
  const anim = lottie.loadAnimation({
    container: animationContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animaciones/webPC.json' // Ruta a tu archivo JSON de animación
  });
}

animacionPCWEB();


function animacionPCIMAGEN(){
  const animationContainer = document.getElementById('animacion-PCIMAGEN');
  const anim = lottie.loadAnimation({
    container: animationContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animaciones/creacionIMAGENpc.json' // Ruta a tu archivo JSON de animación
  });
}

animacionPCIMAGEN();


function animacionPCVIDEO(){
  const animationContainer = document.getElementById('animacion-PCVIDEO');
  const anim = lottie.loadAnimation({
    container: animationContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animaciones/iconoVIDEOpc.json' // Ruta a tu archivo JSON de animación
  });
}

animacionPCVIDEO();


/************************ANIMACION CONOCIMIENTOS*******************************************/

function animacionCONOCIMIENTOS(){
  const animationContainer = document.getElementById('animacion-conocimientos');
  const anim = lottie.loadAnimation({
    container: animationContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animaciones/personayAPPS.json' // Ruta a tu archivo JSON de animación
  });
}

animacionCONOCIMIENTOS();