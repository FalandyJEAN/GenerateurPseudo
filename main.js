document.addEventListener("DOMContentLoaded", function () {
    // Affiche le loader pendant 3 secondes
    document.querySelector(".loader").style.display = "block"

    setTimeout(function () {
        // Cache le loader après 3 secondes et affiche le contenu
        document.querySelector(".loader").style.display = "none"
        document.getElementById("container").style.display = "block"
        document.body.classList.add("fond")
    }, 3000)

    //écouteur d'événements pour le formulaire
    let form = document.querySelector("form")
    form.addEventListener("submit", function (event) {
        event.preventDefault()
        let nomInput = document.getElementById("nom")
        let prenomInput = document.getElementById("prenom")
        let nom = nomInput.value
        let prenom = prenomInput.value

        // Fonction qui génère un pseudo combiné du prénom saisi et de nombres aléatoires
        function displayPseudo(nom,prenom) {
            let pseudoGenereElement = document.getElementById("pseudoGenere")

            if (!/^[a-zA-Z]+$/.test(prenom)) {
                pseudoGenereElement.textContent = "Veuillez remplir correctement les champs pour continuer."
                pseudoGenereElement.classList.add("errorText")
            } else {
                let decoupagePrenom = prenom.slice(0, 4).toLowerCase()
                let decoupageNom = nom.slice(0, 3).toLowerCase()
                let nombreAleatoire = Math.floor(Math.random() * 1000)
                let pseudo = decoupagePrenom + decoupageNom + nombreAleatoire

                pseudoGenereElement.innerHTML = `Pseudo généré : <span class="pseudoText">${pseudo}</span>`
                pseudoGenereElement.classList.remove("errorText")
            }
        }
        displayPseudo(nom,prenom)
    })

    // Efface les valeurs des champs du formulaire
    form.addEventListener("reset", function () {
        document.getElementById("prenom").value = ""
        document.getElementById("pseudoGenere").textContent = "Pseudo généré :"
        document.getElementById("pseudoGenere").classList.remove("errorText")
    });

})
