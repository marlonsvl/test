#!/usr/bin/env node
var fs = require('fs');
var outfile = "hello.txt";
var out = "A startup is a business built to grow rapidly.\n";
fs.writeFileSystem(outfile,out);
console.log("Script: " + __filename + "\n Wrote: " + out + "To: " + outfile);
