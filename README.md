He creado un proyecto con ReactJS utilizando una base de datos falsa implementada con JSON Server. Subí ambos repositorios por separado en GitHub y luego los desplegué en Vercel. Integré la dirección del backend falso dentro de mi aplicación React. Este proyecto permite crear nuevos vídeos con título, URL de imagen y enlace de YouTube para visualizar el contenido. Las imágenes de portada las obtuve desde Blogger copiando sus URLs y pegándolas en mi archivo db.json para visualización.
En la aplicación, hay un ícono para marcar vídeos como favoritos, y al hacer clic en él, se agregan al componente de Favoritos. Desde allí, se pueden gestionar los vídeos marcados como favoritos. Además, se pueden destacar vídeos y ver los listados en el banner. También es posible editar y eliminar vídeos, así como reproducirlos haciendo clic en las imágenes.
Aquí está el enlace al proyecto desplegado en Vercel:  
Para el backEnd: para los videos: https://backendalura.vercel.app/videos 
 Para el frontEnd: https://alura-flix-seven-psi.vercel.app/  
Repositorio en github 
backEnd: 
https://github.com/edgarromero1994/backendalura/
frontEnd
https://github.com/edgarromero1994/aluraFlix 


Para utilizar los códigos localmente, pueden descargar el repositorio como un archivo ZIP o clonarlo. Solo es necesario cambiar las URL base para actualizar y eliminar vídeos a http://localhost:5000/videos en el componente de la aplicación. Para obtener y crear categorías, se utiliza http://localhost:5000/categorias.

