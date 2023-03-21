# LAB 2

1. Crear un api sencilla con express y nodejs

Esta api va a tener un endpoint que devuelve un mensaje junto con la hora actual de la bd en postgres.

2. Crear el archivo docker-compose.yml

Para este archivo se debe crear un servicio para la api y otro para la base de datos.

3. Correr docker-compose

```
docker-compose up -d --build
```

4. Verificar que el contenedor se encuentra corriendo

```
docker ps
```

5. Verificar que este corriendo en el puerto 3000

```
curl localhost:3000
```

6. Detener el contenedor

```
docker-compose down
```