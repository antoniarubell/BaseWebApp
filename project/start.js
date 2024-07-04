var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

// views is directory for all template files
app.set('views', __dirname + '/html');
app.set('view engine', 'ejs');


//This is what gets pages to render when a request is sent for a URL
app.get('/', function(request, response) {
  response.render('pages/index');
});

//Add new pages here with this format:
app.get('/albums', function(request, response) {
  response.render('pages/albums');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// This file is what handles incoming requests and
// serves files to the browser, or executes server-side code