const express = require('express');
const app = express();


app.get('/', (req, res) => { res.send('App is working !'); });
app.listen(2323, () => { console.log('working on http://localhost:2323'); });