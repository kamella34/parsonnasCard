import {Card} from "./class.js";


let personnaArray = [
    {
        nom: "Doe",
        prenom: "John",
        age: 32,
        sexe: "Masculin",
        hobbie: "Passioné de cuir, il aime fabriquer des objet en tout genre sac à main, portefeuille, ceinture.", 
        photo: "/John.jpg"
    },
    {
        nom: "Molette",
        prenom: "Amy",
        age: 24,
        sexe: "Feminin",
        hobbie: "Elle adore jardiner, faire pousser des tomate de qualité extraordinaire et s'occuper de ses petites plante",
        etude: "Aucune",
        photo: "/Amy.jpg"
    },
    {
        nom: "Menvussa",
        prenom: "Gerard",
        age: 28,
        sexe: "Masculin",
        hobbie: "Passioné de jeux vidéo il les à tous, avec une preference pour les jeux 'old school'",
        photo: "/Gerard.jpg"
    },
    {
        nom: "Obistro",
        prenom: "Pascal",
        age: 52,
        sexe: "Masculin",
        hobbie: "Passioné de musique, il chante régulièrement",
        photo: "/Pascal.jpg"
    },
    {
        nom: "Truelle",
        prenom: "Patrick",
        age: 19,
        sexe: "Non renseigner",
        hobbie: "Il joue du piano",
        photo: "/Patrick.jpg"
    },
]


personnaArray.forEach(function(personna)  {
    let newPersonna = new Card(personna.nom, personna.prenom, personna.age, personna.sexe, personna.hobbie, personna.photo);
    newPersonna.createPersonna()
   
});