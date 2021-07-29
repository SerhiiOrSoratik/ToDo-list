const express = require('express');
const app = express();
const router = require('./routes')




app.use(express.json());
// app.use((req, res, next) => {
//     logRequest(req, next);
// })
app.use(router)


module.exports = app;