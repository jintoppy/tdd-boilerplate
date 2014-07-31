var boilerplate, assert;

if(typeof require === 'function'){
	assert = require('assert');
	boilerplate = require('../../index.js');
}

describe('smoke test', function(){
	it('should pass', function(){
		assert.equal(boilerplate(), 'boilerplate', 'failure message');
	});
});