document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".loader").style.display = "block"

    setTimeout(function () {
        document.querySelector(".loader").style.display = "none"
        document.getElementById("container").style.display = "block"
        document.body.classList.add("fond")
    }, 3000)

    let form = document.querySelector("form")
    form.addEventListener("submit", function (event) {
        event.preventDefault()
        let nomInput = document.getElementById("nom")
        let prenomInput = document.getElementById("prenom")
        let nom = nomInput.value
        let prenom = prenomInput.value

        function displayPseudo(nom,prenom) {
            let pseudoGenereElement = document.getElementById("pseudoGenere")

            if (!nom.trim() || !prenom.trim()) {
                pseudoGenereElement.textContent = "Veuillez remplir tous les champs pour continuer."
                pseudoGenereElement.classList.add("errorText")
            } else if (!/^[a-zA-Z]+$/.test(prenom) || !/^[a-zA-Z]+$/.test(nom)) {
                pseudoGenereElement.textContent = "Le prénom et le nom doivent contenir uniquement des lettres."
                pseudoGenereElement.classList.add("errorText");
            }else if(prenom===nom){
                pseudoGenereElement.textContent = "Le prénom et le nom ne doivent pas etre identique."
                pseudoGenereElement.classList.add("errorText")
            }else {
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

    form.addEventListener("reset", function () {
        document.getElementById("prenom").value = ""
        document.getElementById("pseudoGenere").textContent = "Pseudo généré :"
        document.getElementById("pseudoGenere").classList.remove("errorText")
    })

})
