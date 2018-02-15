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

    describe('format', function() {
      it('should replace {0} to foo', function(done) {
        const dest = JS.format('abc{0}', 'foo');
        assert.equal(dest, 'abcfoo');
        done();
      });
    });

    describe('styleToCss', function() {
        it('should convert fontSize to font-size', function(done) {
            const css = JS.styleToCss({ fontSize: '12px' });
            assert.equal(css, '{font-size:12px}');
            done();
        });
        it('should convert multiple attributes', function(done) {
            const css = JS.styleToCss({ fontSize: '12px', fontWeight: 100 });
            assert.equal(css, '{font-size:12px;font-weight:100}');
            done();
        });
    });
});
