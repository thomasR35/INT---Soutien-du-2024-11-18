/* Exercice 1
   - Soit l'adresse suivante : 12 rue des lilas 44100 Nantes
   - Ecrire l'adresse dans un objet en la découpant dans les propriétés suivantes :
   numero, rue, codePostal, ville
*/
let adresse = {
  numero: 12,
  rue: "rue des lilas",
  codePostal: 44100,
  ville: "Nantes",
  // Ton code ici
};

/* Exercice 2
   - Soit la personne suivante : Marcel Dupont, né le 23/05/2001, célibataire, 2 enfants
   - Ecrire la personne dans un objet avec les propriétés suivantes :
   nom, prenom, dateNaissance, situation, nbreEnfants
*/
let personne = {
  nom: "Dupont",
  prenom: "Marcel",
  dateNaissance: "23/05/2001",
  situation: "celibataire",
  nbreEnfants: 2,
  // Ton code ici
};

/* Exercice 3
   - Afficher l'objet précédent dans la console, de la forme suivante :
   "Marcel Dupont, né le 23/05/2001, célibataire, 2 enfants"     
*/
console.log(
  `${personne.prenom} ${personne.nom} né le ${personne.dateNaissance}, ${personne.situation}, ${personne.nbreEnfants} enfants`
);

/* Exercice 4
   - Calculer le prix total = prix * quantite
   - Afficher le résultat dans la console
*/
let produitCommande = {
  prix: 12,
  quantite: 52,
};
let prixTotal = produitCommande.prix * produitCommande.quantite;
console.log(prixTotal);

/* Exercice 5
   - Sans réécrire le code, modifier l'objet produitCommande comme demandé ci-dessous :
   le prix est 56 et la quantite 89
   - Afficher le résultat dans la console
*/
produitCommande.prix = 56;
produitCommande.quantite = 89;
let prixTotals = produitCommande.prix * produitCommande.quantite;
console.log(prixTotals);

/* Exercice 6
   - Effectuer la somme des prix des 2 produitCommande ci-dessus
   - Afficher le résultat dans la console
*/
let produitCommande1 = {
  prix: 45,
  quantite: 102,
};
let produitCommande2 = {
  prix: 78,
  quantite: 123,
};

let prixTotal1 = produitCommande1.prix * produitCommande1.quantite;
let prixTotal2 = produitCommande2.prix * produitCommande2.quantite;
let prixTotal3 = prixTotal1 + prixTotal2;
console.log(prixTotal3);
/* Exercice 7
   - Pour chaque élément de la collection, afficher dans la console le modele et le stock.
   INFO : Une collection est un tableau d'objets
*/

let stockVoitures = [
  {
    modele: "Opel Astra",
    couleur: "noir",
    stock: 2,
  },
  {
    modele: "Jaguar",
    couleur: "noir",
    stock: 120,
  },
  {
    modele: "Peugeot 205",
    couleur: "bleu",
    stock: 4500,
  },
  {
    modele: "Ferrari",
    couleur: "rouge",
    stock: 56,
  },
];

stockVoitures.forEach((voiture) => {
  console.log(voiture.modele, voiture.stock);
});
