import express from 'express';

import {factorialHandler, fibonacciHandler, rootHandler, saveContentHandler} from "./endpoints.js";

const app = express();


app.get('/', rootHandler);
app.get('/factorial', factorialHandler);
app.get('/fibonacci', fibonacciHandler);
app.post('/save', saveContentHandler);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});