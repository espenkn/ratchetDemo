<?php

require_once('Sensor.php');
/*
$sensesors[] = new SensorZMQ('GPS');

foreach ($sensesors as $sensor) {
    
}
*/
$run = true;
$sensesor = new SensorZMQ('GPS');

while($run) {
    $sensesor->update();
    sleep(3);
}
