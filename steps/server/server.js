const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('FOO !')
});


app.listen(3000)