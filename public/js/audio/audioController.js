'use sctrit';
if (!app) {
    app = {};
}
app.audio = (function($) {

    function updateListenerMusic(track) {
        console.log(formatSecondsAsTime(track.currentTime));
    }

    function formatSecondsAsTime(secs, format) {
        var hr = Math.floor(secs / 3600);
        var min = Math.floor((secs - (hr * 3600)) / 60);
        var sec = Math.floor(secs - (hr * 3600) - (min * 60));

        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }

        return min + ':' + sec;
    }
    return {
        updateListenerMusic: updateListenerMusic
    };

})();
