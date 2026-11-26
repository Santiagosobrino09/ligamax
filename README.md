## LigaMax

LigaMax es un proyecto web relacionado con el fútbol. Su propósito es
mostrar información de partidos de una manera sencilla y organizada.


## Integrantes
- Santiago Sobrino
- Rosmel Galvis Burbano
- Diego Vera
- Alejandro Saavedra


## Tecnologías utilizadas
- Next.js y React: herramientas utilizadas para crear las páginas
  y mostrar la información.
- TypeScript: ayuda a organizar el código.
- Tailwind CSS: permite darle diseño a la página.
- Git y GitHub: sirven para guardar el proyecto y trabajar en
  equipo.
- AWS EC2: servidor en la nube donde está publicada la página.


##¿Cómo ejecutar el proyecto?
1. Instalar Node.js en el ordenador.
2. Descargar o clonar el repositorio.
3. Abrir la carpeta del proyecto en Visual Studio Code.
4. Abrir una terminal dentro de esa carpeta.
5. Ejecutar:
npm install
npm run dev
6. Abrir en el navegador la dirección local que muestra la terminal.
¿Cómo preparar la versión para publicar?
Para generar la versión del proyecto que se publica en el servidor,ejecutar
:
npm run build
El proyecto está configurado para generar una versión estática. La
publicación en el servidor EC2 se realiza mediante el flujo de trabajo
configurado en GitHub Actions.
Publicación del proyecto
LigaMax está publicado en:

http://ligamax.site

El proyecto utiliza una instancia EC2 de AWS como servidor. Cuando se
realizan cambios y se suben al repositorio, GitHub Actions ejecuta los
pasos de preparación y envío de los archivos al servidor, según la
configuración del proyecto.

## Flujo del proyecto
1. El usuario entra a la página principal, donde se muestran los eventos deportivos.
2. Selecciona un evento y el reproductor de demostración actualiza su contenido.
3. Puede consultar los planes Standard y Premium.
4. Puede ir a la pantalla de acceso (inicio de sesión de demostración) y al panel de partidos.
Flujo de publicación: el equipo sube los cambios a GitHub, GitHub Actions instala las dependencias y construye la página, y los archivos se envían al servidor EC2 de AWS.


## Organización de las carpetas
- app/: contiene las páginas y archivos principales de la
  aplicación.
- public/: contiene imágenes y otros archivos públicos.
- .github/workflows/: contiene la configuración del proceso
  automático de publicación.
- package.json: contiene la información del proyecto y los comandos
  disponibles.
- next.config.ts: contiene la configuración de Next.js.



## Evidencias
<img width="1600" height="853" alt="0b47ecf7-b960-4a2a-94b6-6c0ad997f9e5" src="https://github.com/user-attachments/assets/813b734d-02d9-4f4d-9a0d-c863be665e90" />



<img width="1600" height="802" alt="fa05a960-2075-49e8-a847-aec4d77f730a" src="https://github.com/user-attachments/assets/5247d3f9-9377-4921-819d-ec921b9eec82" />


<img width="1575" height="502" alt="Captura de pantalla 2026-11-26 114659" src="https://github.com/user-attachments/assets/5b23cf52-9299-44af-89a1-783b9435a8c0" />



