// Exercice 8
// Écrivez votre code ici


// Salaire mensuel
let salaireMensuel = 500;

// Loyer = 30% du salaire
let loyer = salaireMensuel * 0.3;

// Nourriture = 20% du salaire
let nourriture = salaireMensuel * 0.2;

// Transport = 10% du salaire
let transport = salaireMensuel * 0.1;

// Autres depenses (initialisées à 50, puis ajout +25)
let autresDepenses = 50;
autresDepenses +=25;

// Total des dépenses
let totalDepenses = loyer + nourriture + transport + autresDepenses;

// Reste après dépenses
let reste = salaireMensuel - totalDepenses;

// Vérification budget
function verifierReste(reste)
{
    if (reste >= 100)
    {
        console.log("Budget bien géré")
    }
    else
    {
        console.log("Attention, budget serré")
    }
}

verifierReste(50);


// Ajout de la catégorie loisirs (15%)
let loisirs = salaireMensuel * 0.15;
totalDepenses = loyer + nourriture + transport + autresDepenses + loisirs;
reste = salaireMensuel - totalDepenses;

// Affichage après ajout loisirs
console.log ("=== Dépenses avec loisirs ===");
console.log("Total dépenses :", totalDepenses);
console.log ("Reste :", reste);

// Pourcentage de chaque catégorie
console.log ("=== Pourcentages des dépenses ===");
console.log("Loyer :", (loyer / salaireMensuel) * 100, "%");
console.log("Nourriture :", (nourriture / salaireMensuel) * 100, "%");
console.log("Transport :", (transport / salaireMensuel) * 100, "%");
console.log("Autres dépenses :", (autresDepenses / salaireMensuel) * 100, "%");
console.log("Loisirs :", (loisirs / salaireMensuel) * 100, "%");

// Simulation d'une augmentation de 10%
salaireMensuel = salaireMensuel * 1.1;

//recalcul des dépenses
loyer = salaireMensuel * 0.3;
nourriture = salaireMensuel * 0.2;
transport = salaireMensuel * 0.1;
loisirs = salaireMensuel * 0.15;
autresDepenses = 75;

totalDepenses = loyer + nourriture + transport + autresDepenses + loisirs;
reste = salaireMensuel - totalDepenses;

// Affichage après augmentation
console.log("=== Après augmentation de salaire (+10%) ===");
console.log("Salaire :", salaireMensuel);
console.log("Total dépenses :", totalDepenses);
console.log ("Reste :", reste);

console.log("=== Pourcentage après augmentation ===");
console.log ("=== Pourcentages des dépenses ===");
console.log("Loyer :", (loyer / salaireMensuel) * 100, "%");
console.log("Nourriture :", (nourriture / salaireMensuel) * 100, "%");
console.log("Transport :", (transport / salaireMensuel) * 100, "%");
console.log("Autres dépenses :", (autresDepenses / salaireMensuel) * 100, "%");
console.log("Loisirs :", (loisirs / salaireMensuel) * 100, "%");

// Vérification si dépenses > 90% du salaire
if (totalDepenses > salaireMensuel * 0.9)
{
    console.log("Dépenses trop élevées, réduisez vos charges");
}

else{
    console.log("Vous avez bien geré vos dépenses");
}
