<?php
    # Connexion à la base de données
    include ('db.php');
    db_connect();

    // On va créer une variable $requete
    $requete = "SELECT * FROM products LIMIT 30";

    // On teste s'il y a un paramètre lettre
    if ( isset( $_GET['lettre'] ) )
    {
        $lettre =  $_GET['lettre'];

        // Si le paramtere lettre existe
        // Modification de la $requete
        $requete = "SELECT *
        FROM products
        WHERE name LIKE '" . $lettre . "%' LIMIT 30";
    }

    # Requête sur la liste de TOUS les produits en base
    $sth = $GLOBALS['db']->prepare( $requete );
    $sth->execute();


    # Récupération de TOUS les produits dans un tableau $resultset
    while ($result = $sth->fetch(PDO::FETCH_ASSOC)) 
    {
        $resultset[] = $result;
    }


    # Affichage des résultats au format JSON
    header('Content-Type: application/json');
    echo json_encode($resultset);
