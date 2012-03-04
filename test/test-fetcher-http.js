var should = require('chai').should();
var fetcher = require('../index.js');

describe('HTTP', function() {
    it('HTTPリクエスト', function(done) {
        var url = 'http://www.yahoo.co.jp';
        fetcher.fetch(url, function(err, res, data){
            res.statusCode.should.equal(200);
            data.should.be.a('string');
            done();
        });
    });
});

