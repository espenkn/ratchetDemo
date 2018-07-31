<?php

/* IKKE TESTET ENDA!!!*/

class SensorRabbitMQ extends Sensor
{

    protected $connection;
    protected $channel;

    const DEFAULT_PORT = 5672;


    public function __construct(string $topic, int $port = null)
    {


        parent::__construct($topic, $port);



        $this->connection = new AMQPStreamConnection('localhost', $this->port, 'guest', 'guest');
        $this->channel = $this->connection->channel();

        $this->channel->exchange_declare($this->topic, 'fanout', false, false, false);

    }

    public function __destruct()
    {
        $this->cleanUp();
    }

    protected function getSensorData()
    {
    }
    
    protected function sendSensorData(array $entryData)
    {
        $msg = new AMQPMessage(json_encode($entryData));
        $channel->basic_publish($msg, $this->topic);
    }

    public function update()
    {
        $data = $this->getSensorData();
        $this->sendSensorData($data);
    }

    private function cleanUp()
    {
        $this->channel->close();
        $this->connection->close();
    }


}