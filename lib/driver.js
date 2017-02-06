"use strict";

var Cylon = require("cylon");
var http = require("http");
var fs = require("fs");
var socketio = require("socket.io");
var Commands = require("./commands");
var express = require("express");
var app = express();
var server = http.createServer(app);
var io = socketio().listen(server);

app.use("/", express.static(__dirname));

io.on('connection', function(socket){
    console.log("user connected");
});

server.listen(3005, function(){
    console.log('listening on 3005 PORT at skylifesim');
});

var Driver = module.exports = function Driver(opts) {
    Driver.__super__.constructor.apply(this, arguments);
    opts = opts || {};
    this.setupCommands(Commands);
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

Driver.prototype.start = function(callback) {    
    callback();
};

Driver.prototype.halt = function(callback) {
  callback();
};

Driver.prototype.hello = function() {
  Cylon.Logger.info("Hello World!");
};

Driver.prototype.takeoff = function(){
    io.sockets.emit('command', {command: "takeoff"});
};

Driver.prototype.land = function(){
    io.sockets.emit('command', {command: "landing"});
};

Driver.prototype.stop = function(){
    io.sockets.emit('command', {command: "hover"});
};

Driver.prototype.up = function(speed){
    io.sockets.emit('command', {command: "up", value: speed});
};

Driver.prototype.down = function(speed){
    io.sockets.emit('command', {command: "down", value: speed});    
};

Driver.prototype.left = function(speed){
    io.sockets.emit('command', {command: "left", value: speed});    
};

Driver.prototype.right = function(speed){
    io.sockets.emit('command', {command: "right", value: speed});    
};

Driver.prototype.front = function(speed){
    io.sockets.emit('command', {command: "forward", value: speed});    
};

Driver.prototype.back = function(speed){
    io.sockets.emit('command', {command: "backward", value: speed});    
};

Driver.prototype.clockwise = function(speed){
    io.sockets.emit('command', {command: "clockwise", value: speed});    
};

Driver.prototype.counterClockwise = function(speed){
    io.sockets.emit('command', {command: "counterClockwise", value: speed});    
};



