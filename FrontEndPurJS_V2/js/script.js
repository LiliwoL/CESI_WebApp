// Déclaration d'une fonction de vidage
function videResultats()
{
    // Sélection de la branche grid
    var grid = document.getElementById('grid');

    // Boucle qui retire TOUTES les branches filles de grid
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

// Déclaration de la fonction filtrealpha
function filtreAlpha( lettre )
{
    // Appel de la fonction de Vidage du résultat
    videResultats();

    // Requête AJAX pour charger le json à l'adresse configurable ci-dessous:
    var url = 'http://localhost/formation/WebApp/BackEndPHP/index.php?lettre=' + lettre;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url, true);

    xmlhttp.onreadystatechange = function() 
    {
        if (xmlhttp.readyState == 4) {
            if(xmlhttp.status == 200) {

                var obj = JSON.parse(xmlhttp.responseText);
                //console.log(obj);

                // Affichage des images dans le DOM
                var grid = document.getElementById('grid');

                // Parcours des objets du tableau reçu
                for(var i in obj){
                    // Objet en cours
                    var currentObject = obj[i];

                    // Nouvelle Colonne qui contiendra le produit en cours
                    var newColonne = document.createElement('div');
                    newColonne.setAttribute('class', "col");

                        // Nouvelle image
                        var newImgItem = document.createElement('img'); 
                        newImgItem.setAttribute('src', currentObject.imageURL);
                    
                        // Ajout de l'image dans la nouvelle colonne
                        newColonne.appendChild(newImgItem);

                        // ********************

                        // Nouveau titre
                        var newTitleItem = document.createElement('h5');
                        //newTitleItem.setAttribute('class','card-title');
                        newTitleItem.innerHTML = currentObject.name;

                        // Ajout du titre dans la nouvelle colonne
                        newColonne.appendChild(newTitleItem);
                    
                        // ********************

                        // Nouvelle catégorie
                        var newCategoryItem = document.createElement('span');
                        newCategoryItem.setAttribute('class', "badge badge-primary");
                        newCategoryItem.innerHTML = "Catégorie: " + currentObject.category;

                        // Ajout du titre dans la nouvelle colonne
                        newColonne.appendChild(newCategoryItem);

                    // Ajout de la colonne dans grid
                    grid.appendChild( newColonne );
                }
            }
        }
    };
    xmlhttp.send(null);
}
