# Kubernetes task
## Description
Deploy a backend-frontend app using Kubernetes. 

* Backend: application that listens to a port and sends some 
response if a message comes there. Must be replicated.
* Frontend: application that sends incoming requests to the backend.
* Frontend must have an IP that can be used outside the cluster. 
Use Kubernetes Services. 

**Needed**: backend Deployment YAML, frontend Deployment YAML, 
backend Service YAML, frontend Service YAML, list of commands 
for everything to launch and test + any extra files for the system 
to work.

## Applications
The **Caesar cipher** is implemented in this task.

### back
The server application is written in python **Flask**.

API methods:
* `GET /encode?text=<str>&offset=<int>` - encode input *text* 
by given *offset*.

### front
**Nginx** server that serves frontend static files and proxies API 
requests to the backend. 

Application files:
* `html` - folder with static files
* `nginx.conf` - configuration file for Nginx

## Reproducible steps
The backend and frontend Docker images are pulled from 
the GitHub registry of this repository.

1. Start minikube cluster
    ```shell
    minikube start
    ```
2. Deploy backend
    ```shell
    kubectl apply -f kubernetes/back/deployment-back.yaml
    kubectl apply -f kubernetes/back/service-back.yaml
    ```
3. Deploy frontend
    ```shell
    kubectl apply -f kubernetes/front/deployment-front.yaml
    kubectl apply -f kubernetes/front/service-front.yaml
    ```
4. Bind the external IP address to our cluster 
    ```shell
    minikube service nginx-server
    ```
5. Open browser and navigate to url in 4th step output
