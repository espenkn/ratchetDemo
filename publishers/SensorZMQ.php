<?php

class SensorZMQ extends Sensor
{

    protected $messageQueue;
    protected $socket;
    protected $data_source;

    public function __construct(string $topic, int $port = null)
    {
        parent::__construct($topic, $port);

        $this->messageQueue = new ZMQContext();
        $this->socket = $this->messageQueue->getSocket(ZMQ::SOCKET_PUSH, 'sensor pusher');
        $this->socket->connect("tcp://localhost:{$this->port}");

    }

    public function register_data_source(callable $data_source) 
    {
        $this->data_source = $data_source;
    }

    protected function getSensorData()
    {

        if ($this->data_source == null) {
            $data = '';
        } else {
            $data = call_user_func($this->data_source);
        }

        //Just generate some data
        return [
            'topic' => $this->topic,
            'data' => $data,
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

        return $data;
    }
   
}
