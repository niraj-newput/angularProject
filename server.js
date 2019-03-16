const express = require('express'),
path = require('path');

const app = express();
app.use(express.static(__dirname + '/dist'));
app.get('/*', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.join(__dirname ,'/dist/index.html'));
});
app.listen(process.env.PORT || 8080, () => {
  console.log('server started');
console.log(path.join(__dirname ,'/src/index.html'))
})
