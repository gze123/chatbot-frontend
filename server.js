const express = require('express');

const app = express();

app.use(express.static('./dist/chatbot-frontend'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/chatbot-frontend/'}),
);

app.listen(process.env.PORT || 8080);
