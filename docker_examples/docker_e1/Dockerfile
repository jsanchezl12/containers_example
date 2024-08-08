# Utiliza la imagen oficial de Nginx
FROM nginx:latest

# Copia el archivo de configuración de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copia el contenido web a la carpeta raíz de Nginx
COPY . /usr/share/nginx/html

# Exponer el puerto 80 para Nginx
EXPOSE 80
