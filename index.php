<?php

//Client

?>

<!DOCTYPE html>

<head>
    <meta charset="utf-8" />
    <title>Realtime Client</title>

    <script src="js/when.min.js" type="text/javascript"></script>
    <script src="js/autobahn.min.js" type="text/javascript"></script>
    
</head>

<body>

    <h1>MG Sensor Display</h1>
    <p> Se Console </p>
    
<script>

/*
    var connection = new autobahn.Connection({url: 'ws://127.0.0.1:8080/'});
    connection.onopen = function (session) {

        console.log('opened');

        // 1) subscribe to a topic
        function onevent(args) {
            console.log("Event:", args[0]);
        }
        session.subscribe('GPS', onevent);

    }
*/


    var conn = new autobahn.Session('ws://localhost:8080',
        function() {
            conn.subscribe('GPS', function(topic, data) {
                // This is where you would add the new article to the DOM (beyond the scope of this tutorial)
                console.log('New article published to category "' + topic + '" : ' + data.time);
            });
        },
        function() {
            console.warn('WebSocket connection closed');
        },
        {'skipSubprotocolCheck': true}
    );


</script>




</body>