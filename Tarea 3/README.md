Depedencias a instalar para normales:

npm install express dotenv multer uuid

Dependencias a instalar para desarrollo:

npm install -D @types/express @types/multer @types/node @types/uuid nodemon ts-node typescript


## ======= **POST /uploads** =======

**Descripción**: Permite cargar múltiples archivos (hasta 10) al servidor.

**Parámetro**: Se deben enviar los archivos en un campo de formulario llamado docs.

**Respuesta** exitosa: Retorna un JSON con información de los archivos cargados (nombre del campo, nombre original, tipo MIME, tamaño, nombre del archivo guardado y la ruta).

**Error**: Si no se suben archivos, responde con un estado 400 y un mensaje de "Carga no satisfactoria".

## ======= **GET /download** =======

**Descripción**: Permite descargar un archivo previamente cargado.

**Parámetro**: Se debe enviar el nombre del archivo a descargar como un parámetro de consulta (fileName).

**Respuesta** **exitosa**: Inicia la descarga del archivo si existe.

**Error**: Si el archivo no se encuentra, responde con un estado 404 y un mensaje de "File not found".