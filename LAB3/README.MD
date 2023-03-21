
```
docker build -t appflask .

kubectl apply -f my-app-deployment.yaml 

kubectl apply -f my-app-service.yaml

kubectl get services
kubectl get pods

kubectl delete all --all -n default

```