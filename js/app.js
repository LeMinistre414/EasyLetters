document.addEventListener('DOMContentLoaded', () => {
    //MENU DEROULANT(list)
    const categoryLinks = document.querySelectorAll('#category-menu a');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const categoryId = e.target.getAttribute('data-cat');
            localCategory(categoryId);
        });
    });

    // Charger une lettre spécifique 
    window.loadLetter = function(letterId) {
        const letterData = correspData.find(item => item.id === letterId);

        if(!letterData){
            console.error("Modèle introuvable : " + letterId);
            return;
        }
        renderLetterView(letterData);
    };

    //Afficher la vu d'une lettre 
    function renderLetterView(data) {
        const appContainer = document.getElementById('app-contenair');
        const letterHtml = `
            <section class="letter-view">
                <button onclick="location.reload()" class="btn-back"> Retour à l'acceuil</button>

                <header class="letter-header">
                    <h2>${data.titre}</h2>
                    <p class="letter-desc">${data.description}</p>
                </header>

                <div class="letter-content-wrapper">
                    <article class="letter-paper">
                        <div class="date section-hover">${formatText(data.structure.date)}</div>
                        <div class="expediteur section-hover">${formatText(data.structure.expediteur)}</div>
                        <div class="destinaire section-hover">${formatText(data.structure.destinataire)}</div>
                        

                        <div class="objet section-hover"><strong>${data.structure.objet}</strong></div>
                        <div class="body-letter">
                            <p class="introduction section-hover">${data.structure.introduction}</p>
                            <div class="paragraphes section-hover">
                            <p class="conclusion section-hover">${data.structure.corps}</p>
                            <p class="conclusion section-hover">${data.structure.conclusion}</p>
                            <p class="politesse section-hover">${data.structure.politesse}</p>
                        </div>
                        <div class="signature section-hover">${data.structure.signature}</div>
                    </article>

                    <!-- Zone des conseils -->
                    <aside class="letter-tips">
                        <h3> Conseils de rédaction</h3>
                        <ul>
                            ${data.conseils.map(conseil => `<li>${conseil}</li>`).join('')}
                        </ul>
                    </aside>
                </div>
            </section>
        `;
        //On remplace le contenu du main par la nouvelle vue
        appContainer.innerHTML = letterHtml;

        //On remonte au debut de la page pour une meilleur lecture
        window.scrollTo(0, 0);
    }

    //Fonction pour transformer les (\n) en balises <br>
    function formatText(text){
        if (!text) return '';
        return text.replace(/\n/g, '<br>');
    }

    //Fonction pour gérer le clic sur les catégorie 
    function localCategory(categoryId){
        console.log("Catégorie cliquée : ", categoryId);
    }
});