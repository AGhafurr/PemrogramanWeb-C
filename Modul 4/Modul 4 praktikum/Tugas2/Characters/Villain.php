<?php

namespace Characters;

use Characters\Character;

class Villain extends Character{

    var $element;

    public function __construct($name, $tier, $element)
    {
        parent::__construct($name, $tier);
        $this->element = $element;
    }

    public function Information(){
        return "\n{$this->name} are villains at tier {$this->tier} \n";
    }
    public function Element()
    {
        return "{$this->name} also has elemental {$this->element}";
    }
}