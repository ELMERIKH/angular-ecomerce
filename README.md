# Atelier5
On souhaite créer une application web basée sur Angular qui permet de gérer les produits. Chaque Produit est défini par son id, name, price, quantity, available. Le backend de l'application est basé sur une REST API basée sur Json-Server

L'application doit permettre de :
- Afficher les produits

- Chercher les produits

- Faire la pagination

- Supprimer un produits
  
- Editer un produit

- Mettre à jour un produit

- Faire l'authentification et protéger les routes

# Ressources:
 - Part 1 : https://www.youtube.com/watch?v=Bq-vewCZk-o&authuser=0

 - Part 2 : https://www.youtube.com/watch?v=h0zPn2d4fGI&authuser=0

 - Part 3 : https://www.youtube.com/watch?v=ZWQtLaRM49o&authuser=0


![image](https://github.com/Moujoudrana/Atelier6_JEE/assets/93864104/8af91fb5-d44f-41ab-ae73-166a3444166e)
Angular est un framework open-source développé par Google. Il est utilisé pour créer des applications web dynamiques et interactives. Angular est basé sur le langage TypeScript, qui est une extension de JavaScript.

Angular est largement utilisé pour développer des applications web d'entreprise, des applications de gestion, des tableaux de bord, des applications mobiles, etc. Il est apprécié pour sa performance, sa robustesse et sa capacité à créer des applications complexes et évolutives.

Parmi ses principales caractéristiques :
-
Composants : Angular utilise une architecture basée sur des composants. Les composants sont des éléments autonomes de l'application qui encapsulent à la fois le HTML, le CSS et le comportement de l'interface utilisateur. Ils permettent de créer une application modulaire et réutilisable.

Liaison de données : Angular propose une liaison de données bidirectionnelle entre les composants et les vues. Cela signifie que les modifications effectuées dans la vue sont reflétées dans les données du composant, et vice versa. Cela facilite la manipulation des données et maintient l'interface utilisateur synchronisée avec l'état de l'application.

Routage : Angular fournit un système de routage qui permet de gérer la navigation entre les différentes vues de l'application. Le routage permet de créer des liens profonds et des URL significatives pour chaque vue, facilitant ainsi la navigation et le partage de liens.

Services : Les services dans Angular sont des classes réutilisables qui fournissent des fonctionnalités spécifiques à travers l'application. Ils sont utilisés pour gérer la logique métier, l'accès aux données externes, les appels API, etc. Les services favorisent la séparation des préoccupations et permettent de créer une application plus modulaire.

L'authentification dans Angular est généralement mise en œuvre en utilisant des services, des gardiens de route (route guards) et des mécanismes tels que JSON Web Tokens (JWT).

Concernant le projet:
-
Installation :

    npm i bootstrap bootstrap-icon
    
    npm install -g json-server
    
Lancement du json-server sur le port 8089 :

    json-server -w data/db.json -p 8089

Les interfaces:
-
Interface d'authentification:
![image](https://github.com/Moujoudrana/Atelier5_5JEE/assets/93864104/00440445-1b06-41e9-a990-8cac7d70f6d7)

Il exite 3 comptes au niveau de la database (2comptes utilssateur et un compte administrateur)
![image](https://github.com/Moujoudrana/Atelier5_5JEE/assets/93864104/6ec9758e-5aa9-4eed-bf7c-0183b512122b)

1-Connection a un compte administrateur
![image](https://github.com/Moujoudrana/Atelier5_5JEE/assets/93864104/f7be8762-d7b6-4a93-8b20-ac5e81f069c9)

Possibiliter de visualition, modifier et supprimer les produits par l'admin
-visualiser
![image](https://github.com/Moujoudrana/Atelier5_5JEE/assets/93864104/7daa9525-229a-4816-8df5-0cd420d44c12)

-modifier
![image](https://github.com/Moujoudrana/Atelier5_5JEE/assets/93864104/d321545f-c670-44f1-9065-49648e7a57d3)

![image](https://github.com/Moujoudrana/Atelier5_5JEE/assets/93864104/ec35cffb-5d6e-4211-b24c-92bdad3ba044)

-supprimer
![image](https://github.com/Moujoudrana/Atelier5_5JEE/assets/93864104/df164003-934f-491f-8bbb-6e119a1b1e11)

![image](https://github.com/Moujoudrana/Atelier5_5JEE/assets/93864104/ae47fcf8-5928-494a-94b7-602e96b6d9a7)

Possibilité d'ajouter un nouveau produit
![image](https://github.com/Moujoudrana/Atelier5_5JEE/assets/93864104/d40569b4-1e40-4385-8e62-1e1e8f73a466)

![image](https://github.com/Moujoudrana/Atelier5_5JEE/assets/93864104/a206aaca-6d41-481e-bf6d-899e60de6ba0)

Déconnection via le bouton logout
![image](https://github.com/Moujoudrana/Atelier5_5JEE/assets/93864104/fe40589d-84f5-4260-bd1a-694347f0bfeb)

2-Connection a un compte utilisateur
![image](https://github.com/Moujoudrana/Atelier5_5JEE/assets/93864104/e862ee3e-3ead-4d81-8335-264747a3d604)

Possibilité de visualiser les produits sans les supprimer ni les modifier
![image](https://github.com/Moujoudrana/Atelier5_5JEE/assets/93864104/a31fad10-a05b-4be4-8df8-4f8f6ac7dbd7)

Sans oublier qu'il est aussi possible de chercher des produits selon leurs noms
![image](https://github.com/Moujoudrana/Atelier5_5JEE/assets/93864104/ff8e6d11-c81e-44fa-ade0-7738de609e1b)

Impossible pour un utilisateur d'ajouter un nouveau produit 
![image](https://github.com/Moujoudrana/Atelier5_5JEE/assets/93864104/e04b913d-f633-4e39-8c30-c5f68a2e3950)











