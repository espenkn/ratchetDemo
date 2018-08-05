# ratchetDemo

For å kjøre er det noen krav:

1 Du må ha ZMQ på serveren

~~~~
 sudo apt install libzmq5
~~~~

2 du trenger zmq extension til php


~~~~
 sudo apt install php-zmq
~~~~

Videre må du kjøre 

~~~~
 php composer.phar install
~~~~

etter å ha klonet ned dette repo, for å laste ned eksterne pakker.


Så for å teste eksempelet må du åpne 3 terminaler.
1. I den første så navigerer du til bin folderen og starter `push-server.php`

2. I den andre så navigerer du til bin folderen og starter `Publisher.php`

3. I den tredje så navigerer du til roten av prosjektet og starter PHP sin innebygget dev server `php -S localhost:8000`

Så åpner du en nettleser på localhost:8000 


Og da bør demoen kjøre....


Jeg drev også i samme slengen å prøvde å støtte RabbitMQ, men har ikke kommet langt nok til å teste dette enda...


