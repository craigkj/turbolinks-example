const compression = require('compression');
const express = require('express');
const app = express();
const port = 3000;

// set up some vanilla html links
const links = '<ul><li><a href="/" >home</a></li><li><a href="/one" >one</a></li><li><a href="/two" >two</a></li></ul>';

// our include for our turbolinks bundle
const scriptIncludes = '<script type="text/javascript" src="turbo.js"></script>';

// lets render some html...
function renderTemplate(headContent, bodyContent) {
  return `
  <html>
    <head>
      ${headContent}
      ${scriptIncludes}
    </head>
    <body>
      ${links}
      ${bodyContent}
    </body>
  </html>
  `;
}

// enable serving and gzipping of static resources
app.use(compression())
app.use(express.static('public'))

// routes
app.get('/', (req, res) => res.send(renderTemplate('', 'hello world')));
app.get('/one', (req, res) => res.send(renderTemplate('', 'one')))
app.get('/two', (req, res) => res.send(renderTemplate('', 'two')));

// start server
app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
