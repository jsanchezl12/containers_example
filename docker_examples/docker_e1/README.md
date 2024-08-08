```bash
# Construir la imagen de Docker
docker build -t my-nginx-docker-ex .

# Ejecutar el contenedor de Docker
docker run -d -p 3000:80 my-nginx-docker-ex

# Verificar que el contenedor está corriendo
docker ps

# Verificar que el contenedor está corriendo
docker stop <container_id>
```

