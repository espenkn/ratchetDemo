<?php

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
