const correspData = [
    {
        id: "demande_stage",
        categorie: "Emploi & Stage",
        titre: "Demande de stage académique",
        description: "Modèle standard pour solliciter un stage dans le cadre de vos études.",
        structure: {
            date: "[Ville, date]",
            expediteur: "[Noms & Prénoms] \n S/c (...) \n Tél: [Numéro] \n Email: [Email]",
            destinataire: "A Monsieur le Directeur de [Nom de l'entreprise]",
            objet: "Objet: Demande de stage académique / professionelle ",
            introduction: "Monsieur le Directeur, ",
            corps: "J'ai l'honneur de solliciter de votre bienveillance un accord de stage dans (nom de la structure)\n Agé de ...ans, je suis en fin de formation à ... en cycle ... \n  / Actuellement etudiant(e) en ... à ..., je suis à la recherche d'un stage d'impregnation/initiation d'une durée de [X] mois.",
            conclusion: "Je me tiens à votre entière disposition pour un entretien afin de vous détailler mes motivations.",
            politesse: "Dans l'attent d'une réponse favorable, veuillez agréer, Monsieur le Directeur, l'expression de ma considération distinguée.",
            signature: "[Votre signature]",
        },
        conseils: [
            "Joignez votre CV si cela est demandé.",
            "Soyez très précis sur la durée de votre stage."
        ]
    },
    {
        id: "demande_explication",
        categorie: "Plaintes & Explication",
        titre: "Réponse à une demande d'explication",
        description: "Comment répondre de manière formelle à une interpellation de la hiérarchie.",
        structure: {
            expediteur: "[Noms & Prénoms] \n[Matricule ou Poste]",
            destinataire: "A  [Titre du responsable ex: Monsieur le Chef de Département]",
            date: "[Ville, date]",
            objet: "Objet: Demande d'explication (d'absence)",
            introduction: "Monsieur [Titre du responsable ex: Monsieur le Chef de Département",
            corps: "Je viens très respectueusement auprès de votre bienveillance personnalité vous présenter tout d'abord mes excuses par rapport à mon absence, ensuite vous présenter mes pures et honnêtes explications pour une telle absence. \n [Expliquez les faits de manière simple, justifiez votre acte ou reconnaissez l'ereur avec objectivité].",
            conclusion: "Je reste à votre entière disposition pour tout complément d'information.",
            politesse: "Monsieur le Chef de Département, je me permets de vous remercier d'avance pour votre bonne comprehension.",
            signature: "[Votre signature]",

        },
        conseils: [
            "L'objectif est d'apaiser la situation, pas de créer un débat. Expliquez clairement votre version des faits et reconnaissez vos torts si nécessaire.",
            "Montrez votre respect pour la hiéarchie. Utilisez les titres exacts(ex: Monsieur le Chef de Département).\n L'administration accorde beaucoup d'importance à la forme."
        ]
    }
];