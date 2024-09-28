Instalar dependencias del proyecto:

npm install -D typescript ts-node nodemon @types/node @types/express bcrypt jsonwebtoken

npm install express dotenv mongoose

Para correr el proyecto: npm run dev


Posibles pruebas de datos: 

register: 
{
    "name": "andres",
    "email": "andresa@example.com",
    "password": "andres123",
    "role": "user",
    "status": "new"
}

login:
{
    "email": "andresa@example.com",
    "password": "andres123"
}