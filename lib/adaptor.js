"use strict";

var Cylon = require("cylon");
var events = require("events");

var Adaptor = module.exports = function Adaptor(opts) {
  Adaptor.__super__.constructor.apply(this, arguments);
    opts = opts || {};
    this.events = events;
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.connect = function(callback) {
  callback();
};

Adaptor.prototype.disconnect = function(callback) {
  callback();
};



