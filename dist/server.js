const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, 'index.html');
    const publicPath = express.static(path.join(__dirname, '../dist'));

    app.use(publicPath);
    app.get('/', (request, respone) => { 
      res.sendFile(indexPath) 
    });

    return app;
  }
}