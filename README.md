# Uso de A-Frame para un ejemplo básico con Realidad Virtual

Este proyecto muestra un ejemplo sencillo de realidad virtual usando A-Frame.

## Cómo comenzar

Para empezar con A-Frame lo mejor es visitar su completa web que incluye muchísimos recursos interesantes para su aprendizaje. https://aframe.io/


## Algunos conceptos previos

### Concepto de Realidad Virtual

Según la Wikipedia, la realidad virtual (RV) es un entorno de escenas u objetos de apariencia real.

### 3Dof vs 6Dof, e imágenes 360º

Distinguir entre 3DOF (3 grados de libertad) y 6DOF (6 grados de libertad):

![alt text](https://github.com/tcrurav/A-FRAME-example/blob/master/screenshots/6DOFvs3DOF.gif)

La imagen es del siguiente enlace que lo explica muy bien: https://packet39.com/blog/2018/02/25/3dof-6dof-roomscale-vr-360-video-and-everything-in-between/

Las imágenes 360º tienen 3Dof.

### WebGL -> Three.js --> A-Frame

Según su propia web, https://aframe.io/docs/1.0.0/introduction/, A-Frame es un framework para la web que permite crear experiencias de realidad virtual.

Se basa en Three.js, que a su vez hace uso de WebGL (librería para crear gráficos con JavaScript).

### WebVR/AR/XR

WebXR es aún un draft (borrador) de W3C para crear experiencias virtuales en la Web. Engloba WebVR y WebAR.

### Posicionamiento en A-Frame

Una imagen vale más que mil palabras:

![alt text](https://github.com/tcrurav/A-FRAME-example/blob/master/screenshots/position.jpg)

Aquí puedes encontrar más detalles: https://aframe.io/docs/1.0.0/guides/building-a-basic-scene.html


## Prerequisitos

Lo que necesitas es tiempo... mucho tiempo... y...

* Tener conocimientos básicos de HTML, CSS y JavaScript.
* Visual Studio Code.
* Estaría bien tener unas gafas VR de google ("Cardboard").
* Más horas de las que pensarías en un principio...

## Pasos a seguir en la creación de este proyecto

* PASO 1: Entender qué es Realidad Virtual (RV), qué es A-Frame. 
* PASO 2: Usar Street View Download 360 para descargar una imagen 360º de Google Street View.
* PASO 3: Crear una escena(a-scene) con una imagen de 360º(a-sky) con A-Frame.
* PASO 4: Probar la escena con XAMPP. O cualquier alternativa que proporcione un servidor HTTPS. P.Ej: Glitch.
* PASO 5: 3Dof vs 6 Dof. Una imagen 360º son 3Dof.
* PASO 6: Usar a-asset para los recursos como imágenes, vídeos o audios.
* PASO 7: Crear un plano(a-plane) con un texto(a-text), posicionarlo, y darle un ancho y un alto. Se mide en metros.
* PASO 8: No usar CSS en los elementos de A-Frame. Usar a-mixin.
* PASO 9: Crear otro plano.
* PASO 10: Entender las entidades y componentes.
* PASO 11: Crear una cámara(a-camara) con cursor(a-cursor). Y añadir elementos "clickeables", usando raycaster.
* PASO 12: Crear el componente "change-site" para cambiar el valor del componente "src" de la entidad "a-sky". Comprender el uso de this.el y this.data.
* PASO 13: Usar un componente preexistente para reproducir un sonido cuando se cambia de escena.
* PASO 14: Crear una animación para un elemento a-box.
* PASO 15: Agrupar elementos en un a-entity. a-entity equivale a un div. Los componentes position se heredan.
* PASO 16: Cambiar el componente change-site para hacer que el a-box cambie su posición según se seleccione un sky u otro. Entender el uso de this.el, querySelector, querySelectorAll, y la construcción Object.keys(Array).forEach().
* PASO 17: Usar el atributo "opacity" para hacer un elemento "a-circle" transparente y así crear una zona que permita cargar un nuevo "a-sky" cuando el cursor entra en ella. Aprovechamos para ver como depurar con Ctrl + Alt + i.
* PASO 18: Crear un botón con HTML para activar/desactivar el sonido.


## Y ahora qué...

Después de este tutorial es interesante que sigas las guías del propio sitio de A-Frame de dónde he sacado la mayor parte de la información de partida de este proyecto:

* Building a Basic Scene (https://aframe.io/docs/1.0.0/guides/building-a-basic-scene.html)
* Building a 360° Image Gallery (https://aframe.io/docs/1.0.0/guides/building-a-360-image-gallery.html).
* Building a Minecraft Demo (https://aframe.io/docs/1.0.0/guides/building-a-minecraft-demo.html).

## Creado con

* [Visual Studio Code](https://code.visualstudio.com/) - El editor usado en este proyecto.
* [A-Frame](https://aframe.io/) - Un framework web para crear experiencias de realidad virtual.
* [Street View Download 360](https://svd360.istreetview.com/) - Herramienta para capturar y descargar imágenes 360º de Google Street View.
* [Firebase](https://www.purebasic.fr/english/viewtopic.php?f=27&t=50248) - Usaremos firebase para el despliegue de nuestro ejemplo. (Uso de hosting con Firebase)
* [XAMPP](https://www.apachefriends.org/es/index.html) - Crea un servidor HTTP para realizar las pruebas en local.
* [Glitch](https://glitch.com/) - Permite probar y desplegar tus proyectos implementando un servidor HTTPs.
* [Voxedit](https://www.voxedit.io/) - Permite editar ficheros en formato Vox y exportarlos a diferentes formatos como gltf.
* [Audacity](https://audacity.es/) - Permite editar sonidos. Utilizado aquí para convertir a formato ogg y reducir el tamaño de los ficheros de sonido.

## Reconocimientos

* https://github.com/aframevr/aframe/blob/master/docs/components/sound.md. Projecto muy interesante que explica el uso de los sonidos con A-Frame.
* https://freesound.org/. Un excelente repositorio de sonidos.
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. Una plantilla muy completa para ficheros README.md.