var Mocha = require('mocha');

var mocha = new Mocha({ui: 'bdd', reporter: 'spec'});

mocha.addFile("./test/mocha/suite.js");

mocha.run(function(failures){
	process.exit(failures);
});