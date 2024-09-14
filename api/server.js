const express = require('express');
require('dotenv').config();
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;
//Testing pull
app.use(express.static('public'))

app.use('/hello', function(req, res){
    res.send('Hello')
})

app.use('*', function(req, res){
    res.sendFile(path.join(__dirname, './public', 'index.html'))
})


app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
    
})