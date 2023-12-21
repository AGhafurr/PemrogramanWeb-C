<?php

include "Characters/Character.php";
include "Characters/Hero.php";
include "Characters/Villain.php";

use Characters\Hero;
use Characters\Villain;

$hero = new Hero("Yae Miko", "S", "Female", "Chatalyst", "electro");
$villain = new Villain("Azdhaha", "SS", "Geo");

echo $hero->Information();
echo $hero->Element();

echo $villain->Information();
echo $villain->Element();