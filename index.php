<!DOCTYPE html>

<head>
    <meta charset="utf-8" />
    <title>Realtime Client</title>

    <script src="js/autobahn.alt.js" type="text/javascript"></script>
    
</head>

<body>

    <h1>MG Sensor Display</h1>
    <p> Se Console </p>
    
<script>


var wamp = (function (autobhanInstance) {

    return {

        wsuri : 'ws://127.0.0.1:8080',

        ws_not_supported : false,
        ab_sess : null,

        timers : {'ab_reconnect' : null},

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
            if (this.timers.ab_reconnect == null) {        
                this.timers.ab_reconnect = setInterval(this.ab_reconnect_function, 5000);
            }
            
            return;
        },

        stopTimer : function(timername) {
            if (typeof this.timers.timername == "undefined") {
                return;
            }
            
            clearInterval(this.timers.timername);
            this.timers.timername = null;
        },

        ab_reconnect_function : function() {
            if (this.ws_not_supported == true) {
                return;
            }
                
            this.ABStart();
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

                
            console.log(autobhanInstance);

            autobhanInstance.Session(connect_wsuri, 
                function (session) { // WAMP session was established
                
                    wamp.link = 'up';
                    
                    if (wamp.timers.ab_reconnect != null) {
                        clearInterval(wamp.timers.ab_reconnect);
                        wamp.timers.ab_reconnect = null;
                    }
                    
                
                    wamp.ab_sess = session;

                    // Register all topics to subscribe to
                    wamp.ab_sess.subscribe('GPS', wamp.subscriber_handler);
                
                }, function (code, reason) { // WAMP session is gone
                
                    // Unreg session
                    wamp.ab_sess = null;
                    
                    // Log reason
                    console.log(reason);
                    
                    // Notify websock closed
                    console.warn('WebSocket connection closed');
                    
                    
                    wamp.link = 'down';
                
                    // Start reconnect timer
                    wamp.ab_reconnect_timer();
                    
                }, { // The session options
                'maxRetries': 0,
                'retryDelay': 2000
            });
            
        }
    }
})(window.ab);



window.onload = function() {
    wamp.ABStart();
};

</script>




</body>