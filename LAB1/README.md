# containers_example
Es un ejemplo de manejo de contenedores.

Este ejemplo utiliza la imagen base de Ubuntu, actualiza los paquetes del sistema, instala el paquete nginx, copia un archivo de configuración y expone el puerto 80. También establece el comando por defecto que se ejecutará al iniciar un contenedor de esta imagen.

# LAB 1
## Pasos:

1. Crear un archivo de Dockerfile con la configuracion
    - FROM: Indica la imagen base
    - RUN: Ejecuta un comando
    - WORKDIR: Establece el directorio de trabajo
    - COPY: Copia un archivo o directorio
    - EXPOSE: Indica el puerto que se expone
    - CMD: Ejecuta un comando

2. Construir la imagen con el siguiente comando
```
docker build -t imgnginx:1.0 .
```

3. Crear un contenedor a partir de la imagen
```
docker run -d -p 8080:80 --name nginx1 imgnginx:1.0
```

4. Verificar que el contenedor se encuentra corriendo
```
docker ps
```

5. Verificar que este corriendo en el puerto 8080
```
curl localhost:8080
```

6. Detener el contenedor
```
docker stop nginx1
```