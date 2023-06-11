VALIDACIÓN DE FORMULARIO Y OPERACIONES CRUD EN LA BASE DE DATOS MySQL

Creamos un formulario de alta a una página web, una base de datos con una tabla y los campos necesario para guardar la información y un Scrip PHP que valide los datos, los guarde en dicha tabla y permita su consulta. 

En un primer archivo index.html creamos el formulario con los datos requeridos, se realiza una primera validación añadiendo restecciones a cada campo 
del formulario, después realizamos otra validación mediante el archivo index.js en el front-end para que salten los avisos de que se cumplen con las características especificadas en el archivo html, además añadimos el archivo style.css parar crear un formulario visualmente atractivo para el usuario.

Validamos en PHP por tercera vez si los campos están rellenos y el tamaño de la contraseña. No volvemos a validar los patrones ya que se validaron dos veces anteriormente (en HTML y en Javascript), y realmente nunca llegará a validar esto porque HTML y Javascript van a detectarlo antes, pero se incluye igualmente.

Se añade el archivo usuarios.sql de la BBDD que hemos creado con un primer usuario "test" para que contenga al menos un primer registro.

Hay que poner la carpeta del proyecto con todos sus ficheros en la ruta de XAMPP, subdirectorio htdocs

Para ejecutar el formulario es desde: http://localhost/Laboratorio_final_2023/
