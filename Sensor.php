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

class SensorZMQ extends Sensor
{

    protected $messageQueue;
    protected $socket;

    public function __construct(string $topic, int $port = null)
    {
        parent::__construct($topic, $port);

        $this->messageQueue = new ZMQContext();
        $this->socket = $this->messageQueue->getSocket(ZMQ::SOCKET_PUSH, 'sensor pusher');
        $this->socket->connect("tcp://localhost:{$this->port}");
    }

    protected function getSensorData()
    {
        //Just generate some data
        return [
            'topic' => $this->topic,
            'time' => time(),
        ];
    }

    protected function sendSensorData(array $entryData)
    {
        $this->socket->send(json_encode($entryData));
    }


    public function update()
    {
        $data = $this->getSensorData();
        $this->sendSensorData($data);
    }
   
}


class SensorRabbitMQ extends Sensor
{

    protected $connection;
    protected $channel;

    const DEFAULT_PORT = 5672;


    public function __construct(string $topic, int $port = null)
    {
        parent::__construct($topic, $port);



        $this->connection = new AMQPStreamConnection('localhost', 5672, 'guest', 'guest');
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
