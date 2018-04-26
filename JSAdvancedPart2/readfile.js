'use strict';

// blocking IO example
// var fs = require('fs');
// var data = fs.readFileSync('file.txt', 'utf-8');
// console.log("this cannot run until entire file is read");
// console.log(data);

// async IO example 1
// var fs = require('fs');
// fs.readFile("file.txt", 'utf-8', function(err, contents) {console.log(contents);});

// async IO example 2
// var fs = require('fs');
// var myFunc = function(err, contents) {
//     console.log(contents);
// };
// fs.readFile("file.txt", 'utf-8', myFunc);

// async IO example 3 in a closure
// var fs = require('fs');
// var readFileAsync = function(filename) {
//     var myFunc = function(err, contents) {
//         // you can use the contents of the file in this function
//         console.log(contents);
//     };
//     fs.readFile(filename, 'utf-8', myFunc);
//     // you can do other things here but CANNOT use the contents of the file
// };
// var myVar = readFileAsync("file.txt");

// async IO example 4 in a closure using IIFE
var fs = require('fs');
var filename = "file.txt";

var readFileAsync = (function(filename) {
    var myFunc = function(err, contents) {
        // you can use the contents of the file in this function
        console.log(contents);
    };
    fs.readFile(filename, 'utf-8', myFunc);
    // you can do other things here but CANNOT use the contents of the file
})(filename);
