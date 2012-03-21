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
    
    it('HTTPヘッダー: iso-2022-jp', function() {
        var charset = 'iso-2022-jp';
        var header = { 'content-type': 'Content-Type:text/html; charset='+charset };
        var body = new Buffer('');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('ISO-2022-JP');
    });
    
    it('HTTPヘッダー: unknown', function() {
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
    
    it('HTML4マークアップ: utf8', function() {
        var charset = 'utf8'
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta http-equiv="content-type" content="text/html; charset='+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('UTF-8');
    });
    
    it('HTML4マークアップ: utf-8', function() {
        var charset = 'utf-8';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta http-equiv="content-type" content="text/html; charset='+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('UTF-8');
    });
    
    it('HTML4マークアップ: sjis', function() {
        var charset = 'sjis';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta http-equiv="content-type" content="text/html; charset='+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('Shift_JIS');
    });
    
    it('HTML4マークアップ: shiftjis', function() {
        var charset = 'shiftjis';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta http-equiv="content-type" content="text/html; charset='+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('Shift_JIS');
    });
    
    it('HTML4マークアップ: shift-jis', function() {
        var charset = 'shift-jis';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta http-equiv="content-type" content="text/html; charset='+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('Shift_JIS');
    });
    
    it('HTML4マークアップ: shift_jis', function() {
        var charset = 'shift_jis';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta http-equiv="content-type" content="text/html; charset='+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('Shift_JIS');
    });
    
    it('HTML4マークアップ: eucjp', function() {
        var charset = 'eucjp';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta http-equiv="content-type" content="text/html; charset='+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('EUC-JP');
    });
    
    it('HTML4マークアップ: euc_jp', function() {
        var charset = 'euc_jp';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta http-equiv="content-type" content="text/html; charset='+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('EUC-JP');
    });
    
    it('HTML4マークアップ: euc-jp', function() {
        var charset = 'euc-jp';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta http-equiv="content-type" content="text/html; charset='+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('EUC-JP');
    });
    
    it('HTML4マークアップ: iso-2022-jp', function() {
        var charset = 'iso-2022-jp';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta http-equiv="content-type" content="text/html; charset='+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('ISO-2022-JP');
    });
    
    it('HTML4マークアップ: unknown', function() {
        var charset = 'unknown';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta http-equiv="content-type" content="text/html; charset='+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        should.not.exist(encoding);
    }); 
    
    it('HTML4マークアップ: 文字コード未指定', function() {
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('');
        
        var encoding = fetcher.detectEncoding(header, body);
        should.not.exist(encoding);
    });
    
    it('HTML5マークアップ: utf8', function() {
        var charset = 'utf8'
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta charset="'+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('UTF-8');
    });
    
    it('HTML5マークアップ: utf-8', function() {
        var charset = 'utf-8';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta charset="'+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('UTF-8');
    });
    
    it('HTML5マークアップ: sjis', function() {
        var charset = 'sjis';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta charset="'+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('Shift_JIS');
    });
    
    it('HTML5マークアップ: shiftjis', function() {
        var charset = 'shiftjis';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta charset="'+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('Shift_JIS');
    });
    
    it('HTML5マークアップ: shift-jis', function() {
        var charset = 'shift-jis';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta charset="'+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('Shift_JIS');
    });
    
    it('HTML5マークアップ: shift_jis', function() {
        var charset = 'shift_jis';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta charset="'+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('Shift_JIS');
    });
    
    it('HTML5マークアップ: eucjp', function() {
        var charset = 'eucjp';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta charset="'+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('EUC-JP');
    });
    
    it('HTML5マークアップ: euc_jp', function() {
        var charset = 'euc_jp';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta charset="'+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('EUC-JP');
    });
    
    it('HTML5マークアップ: euc-jp', function() {
        var charset = 'euc-jp';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta charset="'+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('EUC-JP');
    });
    
    it('HTML5マークアップ: iso-2022-jp', function() {
        var charset = 'iso-2022-jp';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta charset="'+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        encoding.should.equal('ISO-2022-JP');
    });
    
    it('HTML5マークアップ: unknown', function() {
        var charset = 'unknown';
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('<meta charset="'+charset+'">');
        
        var encoding = fetcher.detectEncoding(header, body);
        should.not.exist(encoding);
    }); 
    
    it('HTML5マークアップ: 文字コード未指定', function() {
        var header = { 'content-type': 'Content-Type:text/html' };
        var body = new Buffer('');
        
        var encoding = fetcher.detectEncoding(header, body);
        should.not.exist(encoding);
    });
});
