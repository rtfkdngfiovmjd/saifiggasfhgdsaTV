function onDeviceReady() {
    var videoUrl = 'https://www.youtube.com/embed/mCKoW2-pLh4?rel=0&controls=0&showinfo=0&autoplay=1';
    var ref = cordova.InAppBrowser.open(videoUrl, '_blank', 'location=no,zoom=no,hardwareback=no');
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

function botaoVoltar() {
    return false;
}

document.addEventListener("deviceready", onDeviceReady, false); 
document.addEventListener("backbutton", botaoVoltar, false);

$(function() {
    $('#offline').click(function() {
        onDeviceReady();
    });
});