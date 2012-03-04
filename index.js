var http = require('http');
var url = require('url');

var fetcher = {};

fetcher.fetch = function(req_url, option, cb) {
    // オプションの判定
    if(typeof option == 'function') {
        cb = option;
        option = null;
    }

    // URLのパース
    var parsed_url = url.parse(req_url);

    // HTTPリクエスト
    var req = http.request(parsed_url, function(res){
        var body = '';

        // エンコードをUTF-8に固定
        res.setEncoding('utf8');
       
        // data イベントハンドラを設定
        res.on('data', function(chunk) {
            body += chunk;
        });
       
        // end イベントハンドラを設定
        res.on('end', function() {
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

module.exports = fetcher;
