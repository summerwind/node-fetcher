var http  = require('http'),
    url   = require('url'),
    Iconv = require('iconv').Iconv;
    
require('buffertools');


// Fetcherオブジェクト
var Fetcher = module.exports = {};


// URLの取得メソッド
// ----------------------------------------------
Fetcher.fetch = function(req_url, option, cb) {
    var self = this;
    
    // オプションの判定
    if(typeof option == 'function') {
        cb = option;
        option = null;
    }

    // URLのパース
    var parsed_url = url.parse(req_url);

    // HTTPリクエスト
    var req = http.request(parsed_url, function(res){
        var body = new Buffer('');
       
        // data イベントハンドラを設定
        res.on('data', function(chunk) {
            body = body.concat(chunk);
        });
       
        // end イベントハンドラを設定
        res.on('end', function() {
            // 文字コードを判定
            var enc = self.detectEncoding(res.headers, body);
            // 文字コードを変換してBodyを取得
            body = self.convertEncoding(enc, body);
            // ユーザーコールバックを実行
            cb(null, res, body);
        });
    });

    // HTTPリクエストエラー
    req.on('error', function(e) {
        cb(e, null, null); 
    });

    // HTTPリクエストを送信
    req.end();
};


// 文字コード変換メソッド
// ----------------------------------------------
Fetcher.convertEncoding = function(enc, buf) {
    // 文字コードが不明ならASCIIとして返す    
    if(enc === null) {
        return buf.toString('ascii');
    }
    
    // 文字コードがUTF-8ならBufferの機能を使う
    if(enc == 'UTF-8') {
        return buf.toString('utf8');
    }
    
    // iconvを使ってUTF-8に変換
    var iconv = new Iconv(enc, 'UTF-8//TRANSLIT//IGNORE');
    var body = iconv.convert(buf).toString('utf8');

    return body;
};


// 文字コード検出メソッド
// ----------------------------------------------
Fetcher.detectEncoding = function(header, body) {
    var enc = null, charset = null;
    var header_pattern = /charset=([0-9a-zA-Z_\-]+)/;
    var markup_pattern = /<meta.+?(charset|encoding)=['"]?([0-9a-zA-Z_\-]+)/;
    var content_type = header['content-type'];
    
    // 文字コードの抽出
    if(content_type && content_type.match(header_pattern)) {
        // HTTPヘッダーから抽出
        charset = RegExp.$1.toLowerCase();
    } else if(body.toString('ascii').match(markup_pattern)) {
        // HTML/XMLから抽出
        charset = RegExp.$2.toLowerCase();
    }
    
    // 文字コードの正規化
    switch(charset) {
        case 'utf8':
        case 'utf-8':
            enc = 'UTF-8';
            break;
        case 'sjis':
        case 'shiftjis':
        case 'shift-jis':
        case 'shift_jis':
            enc = 'Shift_JIS';
            break;
        case 'eucjp':
        case 'euc-jp':
        case 'euc_jp':
            enc = 'EUC-JP';
            break;
        case 'iso-2022-jp':
            enc = 'ISO-2022-JP';
            break;
    }

    return enc;
};

