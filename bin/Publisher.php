<?php

//Har ikke laget autoloader for mine klasser enda

require_once('../publishers/Sensor.php');
require_once('../publishers/SensorZMQ.php');

/*
$sensesors[] = new SensorZMQ('GPS');

foreach ($sensesors as $sensor) {
    
}
*/

$debug = true;

$run = true;
$sensor = new SensorZMQ('GPS');

while($run) {
    $data = $sensor->update();

    if ($debug) {
        echo "publish with data: \n", print_r($data, true), "\n";
        
    }

    sleep(3); //Just for test
}
