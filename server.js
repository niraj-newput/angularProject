const express = require('express'),
path = require('path');

const app = express();

app.get('/*', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname ,'/src/index.html'));
});
app.listen(process.env.PORT || 8080, () => {
  console.log('server started');

})
