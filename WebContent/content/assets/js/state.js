$(document).ready(function(){
    getState();
});

function createNewPage(){
    $(".page").css({
        "height" : $(window).height()-39+"px"
    });
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
function getState(){
    var states = ["success","info","warn","error","waiting"];
    var state = states[parseInt(getUrlParam("state"))];
    var info;
    $.getJSON("./content/assets/json/state_info.json",function(data){
        info = data[state][parseInt(getUrlParam("info"))];
        initPage(state,info);
    });
}
function initPage(state,info){
    switch(state){
        case "success": var html = document.getElementById("successPage").innerHTML;    break;
        case "info": var html = document.getElementById("infoPage").innerHTML;   break;
        case "warn": var html = document.getElementById("warnPage").innerHTML;   break;
        case "error": var html = document.getElementById("errorPage").innerHTML;  break;
        case "waiting": var html = document.getElementById("waitingPage").innerHTML;    break;
        default: var html = document.getElementById("errorPage").innerHTML; break;
    }
    var source = html.replace(reg, function (node, key) { return { 'info': info}[key]; });
    $(document.body).append(source);
    createNewPage();
    btn_ok();
}
function btn_ok(){
    $(".page__ft .weui-btn-area").children("a").click(function(){
        window.close();
    });
}
