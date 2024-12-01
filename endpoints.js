import {getQueryParam, parseBody} from "./lib.js";
import {calculateFactorial, getFibonacci} from "./misc.js";
import fs from "fs";

export const rootHandler = (req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello, World!");
};

export const factorialHandler = (req, res) => {
  try {
    const n = getQueryParam(req, "n", parseInt);
    const factorial = calculateFactorial(n);
    if (factorial === "Infinity" || factorial === "-Infinity" || isNaN(factorial)) {
      throw new Error("Factorial is too large");
    }
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(`Factorial of ${n} is ${factorial}`);
  } catch (e) {
    res.writeHead(400, {"Content-Type": "text/plain"});
    res.end("Invalid input: n must be a number and smaller than 170");
  }
}

export const fibonacciHandler = (req, res) => {
  const n = getQueryParam(req, "n", parseInt);
  const fibonacci = getFibonacci(n);
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end(`Fibonacci of ${n} is ${fibonacci}`);
}

const stripFilename = (filename) => {
  return filename.replace(/[^a-zA-Z0-9.]/g, "");
}

export const saveContentHandler = async (req, res) => {
  const body = await parseBody(req);
  const {content, filename} = JSON.parse(body);

  try {
    fs.writeFileSync(`./files/${stripFilename(filename)}`, content);
    res.send({status: "success"});
  } catch (e) {
    res.json({error: e.message, status: "error"});
  }
}