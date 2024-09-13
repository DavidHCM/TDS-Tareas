Instalar dependencias del proyecto:

npm install -D typescript ts-node nodemon @types/node @types/express

npm install express

===============================================================

Para correr el proyecto:

npm start

===============================================================

Ya corriendo el proyecto para poder probar la funcionalidad de la api sera necesario ingresar alguna de
las siguientes rutas:

Admin donde se permite ver la lista de usuarios: 

localhost:3000/users/usuarios?key=pancho1

Gerente donde se permite ver la lista de usuarios:

localhost:3000/users/usuarios?key=juan2

Cliente que no le permite ver la lista de usuarios:

localhost:3000/users/usuarios?key=mortal3