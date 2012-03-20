var should = require('chai').should();
var fetcher = require('../index.js');

describe('文字コードの検出', function() {
    it('HTTPヘッダー: utf8', function() {
        var charset = 'utf8'
        var header = { 'content-type': 'Content-Type:text/html; charset='+charset };
        var body = new Buffer('');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('UTF-8');
    });
    
    it('HTTPヘッダー: utf-8', function() {
        var charset = 'utf-8';
        var header = { 'content-type': 'Content-Type:text/html; charset='+charset };
        var body = new Buffer('');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('UTF-8');
    });
    
    it('HTTPヘッダー: sjis', function() {
        var charset = 'sjis';
        var header = { 'content-type': 'Content-Type:text/html; charset='+charset };
        var body = new Buffer('');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('Shift_JIS');
    });
    
    it('HTTPヘッダー: shiftjis', function() {
        var charset = 'shiftjis';
        var header = { 'content-type': 'Content-Type:text/html; charset='+charset };
        var body = new Buffer('');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('Shift_JIS');
    });
    
    it('HTTPヘッダー: shift-jis', function() {
        var charset = 'shift-jis';
        var header = { 'content-type': 'Content-Type:text/html; charset='+charset };
        var body = new Buffer('');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('Shift_JIS');
    });
    
    it('HTTPヘッダー: shift_jis', function() {
        var charset = 'shift_jis';
        var header = { 'content-type': 'Content-Type:text/html; charset='+charset };
        var body = new Buffer('');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('Shift_JIS');
    });
    
    it('HTTPヘッダー: eucjp', function() {
        var charset = 'eucjp';
        var header = { 'content-type': 'Content-Type:text/html; charset='+charset };
        var body = new Buffer('');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('EUC-JP');
    });
    
    it('HTTPヘッダー: euc-jp', function() {
        var charset = 'eucjp';
        var header = { 'content-type': 'Content-Type:text/html; charset='+charset };
        var body = new Buffer('');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('EUC-JP');
    });
    
    it('HTTPヘッダー: euc_jp', function() {
        var charset = 'eucjp';
        var header = { 'content-type': 'Content-Type:text/html; charset='+charset };
        var body = new Buffer('');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('EUC-JP');
    });
    
    it('HTTPヘッダー: ISO-2022-JP', function() {
        var charset = 'iso-2022-jp';
        var header = { 'content-type': 'Content-Type:text/html; charset='+charset };
        var body = new Buffer('');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('ISO-2022-JP');
    });
    
    it('HTTPヘッダー: Unknown', function() {
        var charset = 'unknown';
        var header = { 'content-type': 'Content-Type:text/html; charset='+charset };
        var body = new Buffer('');
        
        var encoding = fetcher.detectEncoding(header, body);
        should.not.exist(encoding);
    }); 
    
    it('HTTPヘッダー: 文字コード未指定', function() {
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('');
        
        var encoding = fetcher.detectEncoding(header, body);
        should.not.exist(encoding);
    });
    
    it('マークアップ: utf8', function() {
        var charset = 'utf8'
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta http-equiv="content-type" content="text/html; charset='+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('UTF-8');
    });
    
    it('マークアップ: utf-8', function() {
        var charset = 'utf-8';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta http-equiv="content-type" content="text/html; charset='+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('UTF-8');
    });
    
    it('マークアップ: sjis', function() {
        var charset = 'sjis';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta http-equiv="content-type" content="text/html; charset='+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('Shift_JIS');
    });
    
    it('マークアップ: shiftjis', function() {
        var charset = 'shiftjis';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta http-equiv="content-type" content="text/html; charset='+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('Shift_JIS');
    });
    
    it('マークアップ: shift-jis', function() {
        var charset = 'shift-jis';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta http-equiv="content-type" content="text/html; charset='+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('Shift_JIS');
    });
    
    it('マークアップ: shift_jis', function() {
        var charset = 'shift_jis';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta http-equiv="content-type" content="text/html; charset='+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('Shift_JIS');
    });
});
