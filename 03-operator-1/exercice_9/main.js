// Exercice 9
// Écrivez votre code ici


// === Données de base ===
let maison = 60000000;
let terrains = 40000000;
let liquidites = 20000000;

// Total du patrimoine
let totalPatrimoine = maison + terrains + liquidites;

// === Pourcentages ===
let partEnfants = 0.75 * totalPatrimoine;  // 75%
let partConjointEtFreres = 0.25 * totalPatrimoine;  // 25%

// --- Première catégorie : enfants (75%) ---
// 3 parts : Paul, Marie, Alain (représenté par Éric et Claire)
let partParEnfant = partEnfants / 3; // chaque enfant (ou groupe d’enfants) reçoit 1/3 de 75%

let paul = partParEnfant;   // 25% du total
let marie = partParEnfant;  // 25% du total

// Alain est décédé, ses enfants (Éric et Claire) partagent sa part également
let eric = partParEnfant / 2;   // 12,5% du total
let claire = partParEnfant / 2; // 12,5% du total

// --- Deuxième catégorie : conjoint + frères (25%) ---
// 3 parts : Madame MUKUNA, Joseph, Sarah
let partParMembre2eCat = partConjointEtFreres / 3;

let madameMukuna = partParMembre2eCat;
let joseph = partParMembre2eCat;
let sarah = partParMembre2eCat;

// === Affichage des résultats ===
console.log("=== Répartition de l'héritage de Jean MUKUNA ===");
console.log("Patrimoine total :", totalPatrimoine, "CDF\n");

console.log("— Première catégorie (75%) —");
console.log("Paul :", paul, "CDF");
console.log("Marie :", marie, "CDF");
console.log("Éric :", eric, "CDF");
console.log("Claire :", claire, "CDF\n");

console.log("— Deuxième catégorie (25%) —");
console.log("Madame MUKUNA :", madameMukuna, "CDF");
console.log("Joseph :", joseph, "CDF");
console.log("Sarah :", sarah, "CDF");

// === Vérification de la somme totale ===
let totalDistribue = paul + marie + eric + claire + madameMukuna + joseph + sarah;
console.log("\nTotal distribué :", totalDistribue, "CDF");
console.log("Écart :", totalPatrimoine - totalDistribue, "CDF (doit être 0)");
