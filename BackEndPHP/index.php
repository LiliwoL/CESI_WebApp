<?php

# Connexion à la base de données
include ('db.php');
db_connect();


# Requête sur la liste de TOUS les produits en base
$sth = $GLOBALS['db']->prepare("SELECT * FROM products LIMIT 10");
$sth->execute();


# Récupération de TOUS les produits dans un tableau $resultset
while ($result = $sth->fetch(PDO::FETCH_ASSOC)) 
{
    $resultset[] = $result;
}


# Affichage des résultats au format JSON
header('Content-Type: application/json');
echo json_encode($resultset);
