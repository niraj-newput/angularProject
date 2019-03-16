const express = require('express'),
path = require('path');

const app = express();
app.use(express.static('./angular-project'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/angular-project/index.html'));
});
app.listen(process.env.PORT || 8080, () => {
  console.log('server started');

})
