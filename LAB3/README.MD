
Configurar minikube: https://medium.com/devops-techable/get-up-and-running-with-minikube-kubernetes-on-macos-a355838fac62

1. Instalar minikube
```
brew install minikube
minikube start
minikube status
kubectl get namespace
minikube dashboard
minikube stop
```
2. Crear imagen y las subimos a minikube

```
docker build -t deployment/appflask .

minikube image load deployment/appflask 
```

3. Aplicar deployment y service

```
kubectl apply -f my-app-deployment.yaml 

kubectl apply -f my-app-service.yaml
```

4. Explorar servicios y pods generados
```
kubectl get services
minikube service my-app-service --url
kubectl get pods
kubectl logs -f <pod-name> 
```

5. Borrar ambientes o servicios
```
kubectl delete all --all -n default
kubectl delete -f my-app-service.yaml
```

6. Borrar minikube

```
minikube stop
minikube delete
```