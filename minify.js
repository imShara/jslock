#!/usr/bin/env node
var src = require('fs').readFileSync('lock.js').toString('utf-8');
// minify css
src = src.replace(/(css:\s*)('(?:[^']|\\')*')/, function(_, cssDecl, cssString){
	var cssString = eval(cssString); // Use VM module if you want
	return cssDecl + JSON.stringify(require('cssmin')(cssString));
});
require('fs').createWriteStream('lock.min.js').write(require('uglify-js').minify(src, {'fromString': true}).code);
