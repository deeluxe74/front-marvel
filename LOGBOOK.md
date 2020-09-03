# Choix de l'api
Choisir une API, je veux une API qui m'intéresse et me donne une inspiration pour le design. Je l'ai trouvé après quelques recherches "Marvel API" (https://developer.marvel.com/)

# Design
Réaliser le design sur Adobe XD, comme toujours essayer de rester sur une base aérer et lisible. Avec une incitation a l'interaction et mise en évidence des éléments.

# Installation
Pas de gros soucis, quelques petites erreurs entre autres dues au yarn qui n'était pas le bon. J'ai pu le résoudre grâce à des recherches.
- https://stackoverflow.com/questions/46013544/yarn-install-command-error-no-such-file-or-directory-install#:~:text=The%20reason%20for%20the%20No,the%20cmdtest%20blackbox%20testing%20suite.

# Eslint
Je ne connaissais que de nom et cela m'a causé de gros problèmes. J'ai donc effectué quelques modifications dans le .eslintrc.js .
Après ça il a fallu m'habituer à mettre de la syntaxe "facultative".
Une fois l'utilité comprise et plusieurs moments de blocage je ne rencontre plus de gros soucis.

# Projet
Mon projet va donc comprendre différentes pages :
- Page d'accueil
- Page listing
- Page favoris
- Page detail

Puis différents systèmes :
- Gestion des favoris
- Possibilité d'effectuer une recherche
- Listing dans différents ordres (alphabétique, mis a jour)
- Animations simples

## Ordre de réalisation
**Front-end** Je commence par réaliser complètement toutes les vues, elles sont adaptées seulement à mon contenu statique.

**Listing**
Il faut commencer par le premier appel à l'api qui sera donc pour le listing. Un appel ordonné en "default"(alphabétique) seulement sur un item.
Comme cela j'affiche directement le contenu dans ma vue.
Ensuite je laisse de côté le nombre d'item par page ainsi que la pagination.

**Detail**
Comme j'ai un item dans mon listing je peux donc déjà faire ma Vue détail, je peux donc facilement passer l'id de mon item puis effectuer le rendu comme je le souhaite dans ma Vue Detail.

Je peux m'apercevoir que l'api manque pas mal d'information a mon grand regret. Je décide donc d'afficher une description et une image par défaut si celle-ci manque et garder la même structure.

Je m'aperçois que le site de Marvel n'utilise pas leur api et est bien plus complet, ce qui me permet de faire un bouton avec une redirection sur leur fiche item.

**Vue partagé**
Etant donné le manque d'information de l'api je peux voir que la plupart des items ont dans leur base de données plusieurs comics ou séries à leurs noms.
Je décide donc de faire une vue partagée qui va me rendre ces informations de la même façon.

Après quelques recherches je trouve une dépendance "https://www.npmjs.com/package/vue-awesome-swiper" qui me plaît bien. Après avoir compris comment elle fonctionne et surtout arrivé à afficher mes thumbnails correctement sans trop les déformer, je peux lui dire d'afficher mes séries et mes comics si l'item en possède. Toujours avec un bouton qui redirige directement sur le descriptif complet.

**Listing***Pagination*
Maintenant il faut mettre en place la pagination je sais déjà que je veux 9 items par pages. Grâce au système de l'api " limit=' ' " je peux facilement le faire.
Pour les pages je pense à bootstrap mais ça ne fonctionne pas comme je le souhaite, je trouve donc une dépendance bien utile vuejs-paginate(https://www.npmjs.com/package/vuejs-paginate).

Mon API possédant un offset, je me dis que je peux facilement suivant la page sur laquelle je me trouve afficher les items correspondants , pour cela il me suffit de retirer 1 à ma page et le multiplié par 9. (Page 3 : (3-1) * 9 = offset)

Seulement je ne veux pas de reload, donc les querys peuvent passer sans reload grâce à vuejs. Mais dans ce cas la page ne repasse pas par le lifecycle created, il me reste donc plus que a adapté le système. Je le fais entre autres avec updated pour que le contenu soit dynamique !

**Favoris**
*Pages Favoris*
Pour la page favoris j'ai déjà séparé chaque item dans un component ce qui me permet de juste de le rappeler et rendre mes favoris (statique pour le moment le système n'existe pas !)

*Store*
Pour créer les favoris je mets en place un module favori à mon store et commence par simplement lui mettre en place un state / getters / actions afin de le tester.

Je commence par créer une action addFavorites et la mettre en place, seulement je veux que de n'importe quelle vues (listing, favoris, detail) l'utilisateur puisse ajouter et retirer l'item de ses favoris.

Créer deux actions (add, delete) n'a pas grand sens au final. Je crée seulement une action update qui va directement vérifier pourquoi l'utilisateur à cliqué. Si l'event a lieu mon action va vérifier si l'item est déjà dans ses favoris, si tel est le cas je sais qu'il veut le supprimer ou sinon l'ajouter.

*Rendue différentes vues*
Le plus problématique reste la rendue dynamique dans mes vues, pour ce faire mapState va m'être très utile et me permet de mettre des watch dans mon component.
Grâce à cela je vais pouvoir rendre en visuel un coeur plein ou vide selon son ajout et le retirer de la vue Favoris s'il est supprimé.

Le même système va être appliqué pour mes items et ma vue details, je crée donc un mixin qui va regrouper les méthodes et l'utilisateur pourra donc ajouter/retirer de ces favoris sur toutes les vues.

Il ne reste donc plus qu'a stocké mes favoris (après reload). Pour cela j'utilise une dépendance que j'ai déjà utilisée avec vuex qui s'avèrent très pratique "vuex-persistedstate" (https://www.npmjs.com/package/vuex-persistedstate).

# Github
Pour finir le push sur mon repo, ce qui m'a couté quelques soucis par rapport à l'origin, ainsi que comprendre le fonctionnement upstream avec les ressources du document et cette vidéo (https://www.youtube.com/watch?v=pDmYNK68IEc&ab_channel=AlessandroCastellani).

Grâce à ça j'ai bien pu comprendre et il me reste plus qu'a push aisément ces dernières lignes ! (victoire)