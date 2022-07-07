let section1 = document.querySelector(".personnas");
let urlPhoto = "assets/img/";

class Card {
    constructor(nom, prenom, age, sexe, hobbie, photo) {
        this.nom = nom,
            this.prenom = prenom,
            this.age = age,
            this.sexe = sexe,
            this.hobbie = hobbie,
            this.photo = photo
    }

    createPersonna() {
        let sectionPersonna = document.createElement("section");
        section1.append(sectionPersonna);
        sectionPersonna.classList.add("sectionPersonna");

        let artclPers1 = document.createElement("article");
        sectionPersonna.append(artclPers1);
        artclPers1.classList.add("artclPers1");

        let artclPers2 = document.createElement("article");
        sectionPersonna.append(artclPers2);
        artclPers2.classList.add("artclPers2");

        let nom = document.createElement("p");
        artclPers1.append(nom);
        nom.classList.add("nom");
        nom.textContent =`Nom : ${this.nom}`

        let prenom = document.createElement("p");
        artclPers1.append(prenom);
        prenom.classList.add("prenom");
        prenom.textContent =`Prenom : ${this.prenom}`

        let age = document.createElement("p");
        artclPers1.append(age);
        age.classList.add("age");
        age.textContent =`Age : ${this.age}`

        let sexe = document.createElement("p");
        artclPers1.append(sexe);
        sexe.classList.add("sexe");
        sexe.textContent=`Sexe : ${this.sexe}`

        let hobbie = document.createElement("p");
        artclPers1.append(hobbie);
        hobbie.classList.add("hobbie");
        hobbie.textContent=`Description : ${this.hobbie}`;

        let photo = document.createElement("img")
        artclPers2.append(photo);
        photo.classList.add("photo");
        photo.setAttribute("src", urlPhoto+`${this.photo}`);
    }

  
}

export {
    Card 
}