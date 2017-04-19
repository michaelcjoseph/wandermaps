const path = require('path')
const express = require('express')
var fs = require('fs')

module.exports = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, 'index.html');
    const publicPath = express.static(path.join(__dirname, '../dist'));
    const emailsJsonPath = path.join(__dirname, 'emails.json');

    app.use(publicPath);
    app.get('/', (request, response) => { 
      response.sendFile(indexPath) 
    });

    app.post('/api/emails/:email', (request, response) => {
      fs.readFile(emailsJsonPath, 'utf8', function readFileCallback(err, data){
        if (err) {
          console.log(err);
        } else {
        obj = JSON.parse(data); //now its an object
        obj.push(request.params.email); //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile(emailsJsonPath, json, 'utf8'); // write it back 
      }});

      response.send(request.params);
    });

    return app;
  }
}