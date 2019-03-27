<?php
# Configuration credentials
    define ('DB_HOST', 'localhost');
    define ('DB_USER', 'formation_webapp');
    define ('DB_PASS', 'formation_webapp');
    define ('DB_PORT', 3306);
    define ('DB_NAME', 'formation_webapp');


# Fonction de connexion à la base
function db_connect()
{
    # Database Serial Name
    define ('DSN', 
        "mysql:host=" . DB_HOST .
        ";port=" . DB_PORT .
        ";dbname=" . DB_NAME
    );

    global $db;

    $db = new PDO(
        DSN,
        DB_USER,
        DB_PASS
    );

    return $db;
}
