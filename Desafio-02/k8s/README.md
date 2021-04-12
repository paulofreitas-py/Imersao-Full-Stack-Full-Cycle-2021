# To start the application using kubernetes, run the following commands

---

## Start nest api

```
kubectl apply -f nest-api/deploy.yaml
kubectl expose -f nest-api/deploy.yaml
kubectl port-forward service/nest-api 3000
```

---

## Start react frontend

```
kubectl apply -f frontend/deploy.yaml
kubectl expose -f frontend/deploy.yaml
kubectl port-forward service/frontend 3001:3000
```

Then, acess the application at http://localhost:3001
