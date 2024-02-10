/*
 * Created on Sat Feb 10 2024
 * Author : Abdellah Oulahyane
 * Copyright (c) 2024
 */

"use strict";
var http = require("http");
var fs = require("fs");

function readFile(req, res) {
  var filePath = __dirname + '/public' + req.url;
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(404);
      res.write("Not found error 404");
      res.end();
    } else {
      const url = req.url === "/" ? "public/index.html" : req.url;
      if (req.url.includes("js"))
        res.setHeader("Content-Type", "application/javascript");
      if (req.url.includes("css")) res.setHeader("Content-Type", "text/css");
      if (req.url.includes("html")) res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.write(data);
      res.end();
    }
  });
}
console.log("Server Started! on http://127.0.0.1:8080. ")
http
  .createServer(function (req, res) {
    
    readFile(req, res);
  })
  .listen(8080);