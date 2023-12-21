<?php

namespace Characters;

require_once 'Traits.php';
use Characters\Character;
use Characters\powerTrait;

class Hero extends Character{
    use powerTrait;
    var $gender;
    var $weaponType;
    var $elemental;

    public function __construct($name, $tier, $gender, $weaponType, $elemental)
    {
        parent::__construct($name, $tier);
        $this->gender = $gender;
        $this->weaponType = $weaponType;
        $this->elemental = $elemental;
    }

    public function Information(){
        return "{$this->name} is a {$this->gender} hero who uses a {$this->weaponType} and is at tier {$this->tier} \n";
    }
    public function Element()
    {
        return "{$this->name} also has elemental {$this->elemental} {$this->power()}\n";
    }
    
}