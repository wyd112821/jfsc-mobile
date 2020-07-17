//ajax BaseURL
var ajaxBaseUrl = 'http://123.59.58.111/';

//获取地址栏参数
function getUrlParam() {
    var _arr = location.search.substr(1).split('&');
    var _obj = {};
    for (var i = 0; i < _arr.length; i++) {
        _obj[_arr[i].split('=')[0]] = _arr[i].split('=')[1]
    };
    return _obj;
}