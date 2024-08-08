# Utiliza la imagen oficial de Node.js
FROM node:14

# Crear el directorio de trabajo y copiar los archivos
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "app.js"]
