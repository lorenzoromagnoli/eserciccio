<?php

abstract class Forma {
    //properties
    protected $ID = "";
    protected $type = "";

    //getters
    public function getId(){
        return $this->ID;
    }

    public function getType(){
        return $this->type;
    }
}

class Quadrato extends Forma {
    private $height =0;
    public function __construct( $h) {
        $this->type="Quadrato";
        $this->ID= uniqid($this->type.'_');
        $this->height=$h;
    }

    public function getArea(){
        return $this->height*$this->height;
    }
}

class Rettangolo extends Forma {
    private $width =0;
    private $height =0;

    public function __construct($w, $h) {
        $this->type="Rettangolo";
        $this->ID= uniqid($this->type.'_');
        $this->width=$w;
        $this->height=$h;

    }
    public function getArea(){
        return $this->height*$this->width;
    }
}

class Cerchio extends Forma {
    private $raggio =0;

    public function __construct( $r) {
        $this->type="Cerchio";
        $this->ID= uniqid($this->type.'_');
        $this->raggio=$r;
    }

    public function getArea(){
        return pi()*$this->raggio*$this->raggio;
    }
}

?>

<?php
    //some tests
    $r = new Rettangolo(20,30);
    echo $r->getType().' '.$r->getId().' '.$r->getArea();
    echo "<br/>";

    $q = new Quadrato(20);
    echo $q->getType().' '.$q->getId().' '.$q->getArea();
    echo '<br/>';

    $c = new Cerchio(20);
    echo $c->getType().' '.$c->getId().' '.$c->getArea();

?>
