<!DOCTYPE html>

<head>
    <meta charset="utf-8" />
    <title>Realtime Client</title>

    <script src="js/autobahn.alt.js" type="text/javascript"></script>
    <link href="css/reset.css" rel="stylesheet" type="text/css"  />
    <link href="css/default.css" rel="stylesheet" type="text/css"  />
    <link href="css/google_web_fonts.css" rel="stylesheet" type="text/css"  />

</head>

<body>

    

<div class="main">
    <div class="sensor_display">
        <section class="header">
            <h1>MG Sensor Display</h1> 
        </section>
        <section class="speedometer">
            <p><span id="speed">100</span>  <sup>Km</sup>/<sub>h</sub>​</p>
        </section>
        <section class="gps_data">
            <table>
                <tr>
                    <td>
                        <p>Lat: &nbsp;&nbsp; </p> 
                    </td>
                    <td>
                        <span id="lat">59.911491</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Long: &nbsp;&nbsp; </p> 
                    </td>
                    <td>
                        <span id="long">10.757933</span>
                    </td>
                </tr>
            </table>
        
      
        </section>
        <section class="telemetri">
            <p>Temp: <span id="temperature">28</span> &deg;C </p>
        </section>
        <section class="footer"> 
            <p>~ Drive Safe ~</p>
        </section>
    </div>
</div>
    
<script>
                    

var handlers = {
    'GPS' : HandlerSpeed,
    'coordinates' : HandlerCoordinates,
    'temperature' : handlerTemperature
};

var wamp = (function (autobhanInstance) {

    return {

        //wsuri : 'ws://127.0.0.1:8080',
        wsuri : 'ws:' + window.location.host,

        shutdown : false,
        ws_not_supported : false,
        ab_sess : null,

        timers : {'reconnect' : null},

        last_topic : null,
        last_data : null,
        last_topic_time : null,
        link : 'down',
        last_data : null,
        last_error : null,
        last_rpc_error : null,

        subscriber_handler : function(topic, data) {
            // Data vi mottar her forteller vidre hvordan vi skal fortsette presentasjonen
            console.log('New article published to category "' + topic + '"');
            
            this.last_topic  = topic;
            this.last_data   = data;
            
        },

        ab_reconnect_timer : function() {
            if (this.timers.reconnect == null) {        
                this.timers.reconnect = setInterval(this.reconnect_function, 5000);
            }
            
            return;
        },

        stop : function() {
            shutdown = true;
            this.ab_sess.close();
        },
        start : function() {
            shutdown = false;
            this.ABStart();
        },

        stopTimer : function(timername) {

            a = this.timers;
            console.log(timername);

            if (!this.timers.hasOwnProperty(timername)) {
                return;
            }
            
            clearInterval(this.timers[timername]);
            this.timers[timername] = null;
        },

        reconnect_function : function() {
            if (this.ws_not_supported == true) {
                return;
            }
                
            wamp.ABStart();
        },

        ABStart : function(other_wsuri) {
            
            let connect_wsuri = '';
            if (typeof other_wsuri != "undefined") {
                connect_wsuri = other_wsuri;

            } else {
                connect_wsuri = this.wsuri;
            }

            
            if("WebSocket" in window) {
                this.ws_not_supported = false;

            } else {
                // The browser doesn't support WebSocket - Do you need to enable it?
                console.console.error("WebSocket NOT supported by your Browser!");
                this.ws_not_supported = true;
                return;
            }

            
            if (typeof this.ab_sess == "object" && this.ab_sess != null && typeof this.ab_sess._wsuri != "undefined" ) {
                this.ab_sess.close();
            }


            autobhanInstance.connect(connect_wsuri, 
                function (session) { // WAMP session was established
                
                    wamp.link = 'up';
                    
                    if (wamp.timers.ab_reconnect != null) {
                        clearInterval(wamp.timers.ab_reconnect);
                        wamp.timers.ab_reconnect = null;
                    }
                    
                
                    wamp.ab_sess = session;

                    for(var handler in handlers) {
                        wamp.ab_sess.subscribe(handler,  handlers[handler]);
                    }
                    /*
                    // Register all topics to subscribe to
                    wamp.ab_sess.subscribe('GPS', wamp.HandlerSpeed);
                    wamp.ab_sess.subscribe('coordinates', wamp.HandlerCoordinates);
                    wamp.ab_sess.subscribe('temperature', wamp.handlerTemperature);
                    */

                }, function (code, reason) { // WAMP session is gone
                
                    // Unreg session
                    wamp.ab_sess = null;
                    
                    // Log reason
                    console.log(reason);
                    
                    // Notify websock closed
                    console.warn('WebSocket connection closed');
                    
                    
                    wamp.link = 'down';
                
                    if (!shutdown) {
                        // Start reconnect timer
                        wamp.ab_reconnect_timer();    
                    }
                    
                    
                }, { // The session options
                'maxRetries': 0,
                'retryDelay': 2000
            });
            
        }
    }
})(window.ab);

/*
wamp.__proto__.HandlerSpeed = function (topic, data) {
    console.log(data);
    document.getElementById('speed').innerHTML = data.data;
}
*/

function HandlerSpeed(topic, data) {
    console.log(data);
    document.getElementById('speed').innerHTML = data.data;
}

function HandlerCoordinates(topic, data) {
    console.log(data);
    document.getElementById('lat').innerHTML = data.data[0];
    document.getElementById('long').innerHTML = data.data[1];
}

function handlerTemperature(topic, data) {
    console.log(data);
    document.getElementById('temperature').innerHTML = data.data;
}


window.onload = function() {
    wamp.start();
}

</script>




</body>