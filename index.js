"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
//create a server object:
http
    .createServer(function (req, res) {
    var requiredProps = ["b"];
    var optionalProps = ["a"];
    res.write(JSON.stringify({ requiredProps: requiredProps, optionalProps: optionalProps })); //write a response to the client
    res.end(); //end the response
})
    .listen(8080); //the server object listens on port 8080
