# Dokumentation Übung Software Deployment
##### von Svenja Bahr und Britta Bahr 

## Angabe 

In deiser Übung soll eine containerized DevOps pipeline erstellt werden welche eine Node.js application in AKS zu Verfüung stellt. Am einfachsten kann dies erfolgen wenn man auf dem in Lab2 erstellten Beispiel und dem DevOps projekt aufsetzt. 

So bald ein neuer CheckIn in GIT erfollgt soll die pipeline getriggerd werden und folgende Aktionen ausführen. 

-) eine Docker Image bauen
-) das Image in einer registry ablegen
-) das neue Image im AKS deployed und untern einer öffentlichen IP zu Verfügung stellt

## Einstellung der Registry und des Clusters

1. in seinem Azure Account einloggen mit `az login`
2. Erstellung des AKS Clusters mit folgenden Befehl: `az aks create -g teamwork_bahr_bahr -n aksbahrbahr --node-count 1 --generate-ssh-keys` (Das `--generate-ssh-keys` haben wir benötigen aufgrund einer Fehlermeldung)
3. Anschließend erstellen wir die registry mit folgenden Befehl: `az acr create -g teamwork_bahr_bahr -n DeploymentRegistryBahrBahr --sku basic`

## Erstellung der Web App inklusive Dockerfile 

1. Erstellung der Web App mit einem "Hello World" Beispiel und inklsuive eines Tests.
2. Erstellung des Dockerfiles. Der Port für das File ist 8080. Anschließend erstellen wi das Docker Image. 

## Erstellung der Pipeline

1. Erstellen einer neuen Pipeline in der DevOps Umgebung. 
2. die Verbindung zum Git Repository setzten
3. Im Configuration Tab `Deploy to Azure Kubernetes Service` auswählen. 
   -) Subscription auswählen und den Cluster
   -) Für den Namespace Exsisting auswählen und default
   -) einen Namen für das container registry geben
4. Anschließend das `yaml-File` speicher und die Pipeline starten
5. Nach dem erfolgreichen Deployment der Pipeline sind wir im besietztz eines Manifestes, welches über die Pipeline erstellt wird. Das Manifest beinhaltet alle relevante Informationen für das AKS cluster. Zusätzlich wird durch die Pipeline unser Docker Image in das registry geladen. 

## Links

Links des public AKS endpoint: 

`http://20.73.145.139:8080/`

Link zum Docker Image in der registry: 

`deploymentregistrybahrbahr.azurecr.io/deploymentuebungbahrbahr`

## Screenshots

### erfolgreiches Deployment der Pipeline

 ![erfolgreiches Deployment der Pipeline](pipeline.JPG)

### registry 

 ![registry](registry.JPG)

 ### Azure Cluster

  ![azure cluster](aks.JPG)