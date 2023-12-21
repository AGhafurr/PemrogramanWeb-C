<?php

namespace Characters;

abstract class Character{
    var $name;
    var $tier;

    public function __construct($name, $tier)
    {
        $this->name = $name;
        $this->tier = $tier;
    }

    abstract public function Element();
}