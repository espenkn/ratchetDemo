<?php

//Har ikke laget autoloader for mine klasser enda

require_once('../publishers/Sensor.php');
require_once('../publishers/SensorZMQ.php');

/*
$sensesors[] = new SensorZMQ('GPS');

foreach ($sensesors as $sensor) {
    
}
*/


function fake_speed() {
    static $lastDeg = 0;

    $sine_val = sin(deg2rad($lastDeg));

    $value = round(60 + ($sine_val * 20) );
    $lastDeg += 33 % 360;
    return $value;

}

function fake_temperature() {
    static $lastDeg = 0;

    $sine_val = sin(deg2rad($lastDeg));

    $value = round(23 + ($sine_val * 3) );
    $lastDeg += 33 % 360;
    return $value;

}


function fake_coordinates() {
    static $lat = 59.911491;
    static $long = 10.757933;

    $lat -= 0.0000001;
    $long -= 0.0000001;

    $lat_send = sprintf("%f6", $lat);
    $long_send = sprintf("%f6", $long);

    return [$lat_send, $long_send];

}


$sensor_gps_speed = new SensorZMQ('GPS');
$sensor_gps_speed->register_data_source('fake_speed');

$sensor_coordinates = new SensorZMQ('coordinates');
$sensor_coordinates->register_data_source('fake_coordinates');


$sensor_temp = new SensorZMQ('temperature');
$sensor_temp->register_data_source('fake_temperature');


$run = true;

while($run) {
    $sensor_gps_speed->update();
    $sensor_coordinates->update();
    $sensor_temp->update();


    sleep(3); //Just for test
}
