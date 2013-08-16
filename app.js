
/**
 * Module dependencies
 */

var express = require('express'),
  http = require('http'),
  path = require('path');
  http.globalAgent = false; // FIX problem when serving large app.js

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/include', express.static(path.join(__dirname, 'public/js/lib/novnc/include')));
// app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
};

app.get('/streaming', function(req, res) {
	res.redirect(303, '/');
});


http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
