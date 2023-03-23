
Configurar minikube: https://medium.com/devops-techable/get-up-and-running-with-minikube-kubernetes-on-macos-a355838fac62

```
brew install minikube
minikube start
minikube status
kubectl get namespace
minikube dashboard
minikube stop
```

```
docker build -t deployment/appflask .

minikube image load deployment/appflask 

kubectl apply -f my-app-deployment.yaml 

kubectl apply -f my-app-service.yaml

kubectl get services
minikube service my-app-service --url
kubectl get pods
kubectl logs -f <pod-name> 


kubectl delete all --all -n default
kubectl delete -f my-app-service.yaml


```