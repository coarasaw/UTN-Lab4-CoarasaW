const express = require('express');
const app = express('express');
const path = require('path');
app.listen(process.env.PORT || 8080);
app.get('/*',function(reg, res) {
    res.sendFile(path.join(__dirname + '/angularapp/index.html'));
});

console.log('¡¡Construido con éxito!!')