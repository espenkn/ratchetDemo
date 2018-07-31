<?php

/**
 * Klasse som generer meldinger (publiserer).
 * Disse meldingne blir distrubiert og konsumert av 
 *  alle prossesser som lytter etter 
 *  oppdateringer på emmne (topic) som "sensoren" publiserer på
 */

abstract class Sensor
{
    const DEFAULT_PORT = 5555;

    protected $topic;
    protected $port;


    public function __construct(string $topic, int $port = null)
    {
        $topic = str_replace(' ', '_', $topic);
        $this->topic = $topic;

        if ($port == null) {
            $port = self::DEFAULT_PORT;
        }

        $this->port = $port;
        
    }

    abstract protected function getSensorData();

    abstract protected function sendSensorData(array $entryData);
    
    abstract public function update();

}

