import assert from 'assert';

import JS from '../src/JS';

describe('JS', function() {
    describe('padNumber', function() {
        it('should pad one zero to 9', function(done) {
            assert.equal(JS.padNumber(9, 2), '09');
            done();
        });
        it('should pad one zero to 0', function(done) {
            assert.equal(JS.padNumber(0, 2), '00');
            done();
        });
        it('should pad nothing to 10', function(done) {
            assert.equal(JS.padNumber(10, 2), '10');
            done();
        });
        it('should pad nothing to -1', function(done) {
            assert.equal(JS.padNumber(-1, 2), '-1');
            done();
        });
    });
});
