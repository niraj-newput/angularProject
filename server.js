const express = require('express'),
path = require('path');

const app = express();

app.get('/*', (req, res) => {
  res.sendFile('index.html');
});
app.listen(process.env.PORT || 8080, () => {
  console.log('server started');

})
