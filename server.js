const express = require('express'),
path = require('path');

const app = express();
app.use(express.static(__dirname,'/dist/angularProject'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/angularProject/index.html'));
});
app.listen(process.env.PORT || 8080, () => {
  console.log('server started');
console.log(path.join(__dirname ,'/dist/angularProject/index.html'));
})
