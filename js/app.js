var videoUrl = 'https://www.youtube.com/embed/7KjsXBL5hQo?rel=0&controls=0&showinfo=0&autoplay=1';
var ref = {};

function onDeviceReady() {
    onDeviceResume();
}

function botaoVoltar() {
    return false;
}

function onDevicePause() {
    ref.close();
}
function onDeviceResume() {
    ref = cordova.InAppBrowser.open(videoUrl, '_blank', 'location=no,zoom=no,hardwareback=no,toolbar=no');
    ref.addEventListener('loadstop', function() {
        ref.executeScript(
            {code: "var elem = document.getElementsByClassName('ytp-watermark')[0];\
                    var video = document.getElementsByClassName('html5-video-player')[0];\
                    video.removeChild(elem);"}
        );
    });
    ref.addEventListener('loaderror', function() {
        $('#offline').show();
        $('#carregando').hide();
        ref.close();
    });
}

document.addEventListener("deviceready", onDeviceReady, false); 
document.addEventListener("pause", onDevicePause, false); 
document.addEventListener("resume", onDeviceResume, false); 
document.addEventListener("backbutton", botaoVoltar, false);

$(function() {
    $('#offline').click(function() {
        onDeviceReady();
    });
});