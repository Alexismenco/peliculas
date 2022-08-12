Instalación 🔧

1.- npm install 

2.- Crear en la raiz un archivo .env con los siguientes datos

//configuracion aplicación
APP_PORT=3000
APP_DB='postgres'

// configuracion de la db
PGUSER='postgres'
PGHOST='localhost'
PGPASSWORD='tupassword'
PGDATABASE='CalificacionPeliculas'
PGPORT=5432

// configuracion del token (sesión)

JWT_SECRET='jsjndfsjkdn'
JWT_COOKIE='TOKEN__JWT_EJEMPLO'
JWT_SALT=10

Solo quedar iniciar en la terminal con nodemon