<?php

//Har ikke laget autoloader

require_once('../Sensor.php');
require_once('../SensorZMQ.php');

/*
$sensesors[] = new SensorZMQ('GPS');

foreach ($sensesors as $sensor) {
    
}
*/

$run = true;
$sensor = new SensorZMQ('GPS');

while($run) {
    $sensor->update();
    sleep(3);
}
