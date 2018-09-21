// http://station.louishe.xyz/api/typhoonjson
function getTyphoon(callback){
    var url="http://station.louishe.xyz/api/typhoonjson";
    $.getJSON(url,function(jsonObject){
        callback(jsonObject);
    })
}

function getNowData(callback){
    var url="http://station.louishe.xyz/api/nowData";
    $.get(url,function(result){
        callback(result);
    })
}

function getAlertInfo(callback){
    var url="http://station.louishe.xyz/api/nowAlert";
    $.get(url,function(result){
        callback(result);
    })
}

function getTempInfo(callback) {
    var url = "http://station.louishe.xyz/api/tempInfo";
    $.get(url, function (result) {
        callback(result);
    })
}

function getRadarAndRain(callback) {
    var url = "http://station.louishe.xyz/api/nowRadar";
    $.get(url, function (result) {
        callback(result);
    })
}


function getHsonLength(json){
    var jsonLength=0;
    for (var i in json) {
        jsonLength++;
    }
    return jsonLength;
}