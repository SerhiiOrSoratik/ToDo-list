const express = require('express');
const app = express();
const router = require('./routes')

async function parser (req, res, next) {
    await req.on('data', (data) => {  
        if(req.headers['content-type'] === 'application/json') {
            req.body =  JSON.parse(data);
        }   
    });
    next();
}

app.use(parser)
app.use(router)
module.exports = app;