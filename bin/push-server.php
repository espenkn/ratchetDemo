<?php

require_once(dirname(__DIR__) . '/vendor/autoload.php');
require_once(dirname(__DIR__) . '/helpers.php');
require_once(dirname(__DIR__) . '/Pusher.php');

$loop   = React\EventLoop\Factory::create();
$pusher = new SensorRealtime\Pusher;

// Listen for the web server to make a ZeroMQ push after an ajax request
$context = new React\ZMQ\Context($loop);
$pull = $context->getSocket(ZMQ::SOCKET_PULL);

$port = env('ZMQ_BIND_PORT', '5555');

$pull->bind('tcp://127.0.0.1:'. $port); // Binding to 127.0.0.1 means the only client that can connect is itself
$pull->on('message', [$pusher, 'onSensorEntry']);

// Set up our WebSocket server for clients wanting real-time updates
$webSock = new React\Socket\Server('0.0.0.0:8080', $loop); // Binding to 0.0.0.0 means remotes can connect
$webServer = new Ratchet\Server\IoServer(
    new Ratchet\Http\HttpServer(
        new Ratchet\WebSocket\WsServer(
            new Ratchet\Wamp\WampServer(
                $pusher
            )
        )
    ),
    $webSock
);

echo "Starting server. ctrl+c to exit\n";

$loop->run();
