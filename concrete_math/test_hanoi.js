var assert = require("assert"),
    Peg    = require("./peg"),
    hanoi  = require("./hanoi");

var peg = new Peg();

assert(peg.empty(), true, "")
