
import express from 'express'
import fs from 'fs'
import path from 'path'

import React from 'react'
import ReactDOMServer from 'react-dom/server'

const app = express()

import App from '../src/App'



// app.use('^/$', (req , res , next) => {
//
//         console.log('uri', req.url)
//     fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data ) => {
//
//         if(err) {
//             res.status(500).send("Ooops! something broke")
//         }
//       return  res.send(data.replace('<div id="root"></div>', `<div id="root"> ${ReactDOMServer.renderToString(<App />)}</div>`))
//     });
//
// })

app.get('/about', (req,res) =>{

    console.log('uri', req.url)
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data ) => {

        if(err) {
            res.status(500).send("Ooops! something broke")
        }
        return  res.send(data.replace('<div id="root"></div>', `<div id="root"> ${ReactDOMServer.renderToString(<App />)}</div>`))
    });
});


app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(3000, () => {
    console.log('port 3001')
})
