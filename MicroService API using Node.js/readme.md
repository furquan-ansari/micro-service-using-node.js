MicroService Architechture:-

It's used to developed separate services on separate port no.
but we can connect all that services using a single port which
can be used to navigate through all of them.

Main reason to use Microservice architechture to make sure each 
service do their job separately and if any one of them shut down
it will not affect other once.

To implement that service follow below statement

1. create a folder/service name as order and install node_module inside that and create a simple api using express
2. crate an another folder/service name as payment and do the same as above statement 1.
3. create a new folder/service name as api_gateway and install a library named as fast-gateway by using command npm i fast-gateway
4. Then specify each routes for every services inside routes block
