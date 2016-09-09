(function() {

    'use sctrit';
    if (!app) {
        app = {};
    }
    app.audio = (function($) {
        var audio, arrayImgs = 0,
            elemTrad;

        function init() {
            loadVariables();

        }

        function loadVariables() {
            audio = $('#audioTrack');
            elemTrad = document.querySelector("#traducao");
        }
        app.lastTime = "";

        function updateListenerMusic(track) {
            var realTime = formatSecondsAsTime(track.currentTime);
            if (realTime !== app.lastTime) {
                console.log(realTime);
                mudarPage(realTime);
                traducao(realTime);
                app.lastTime = realTime;
            }
        }

        function checkPauseOrPlay() {
            console.log(arrayImgs);
            checkPause(++arrayImgs);
        }

        function checkPause(value) {
            switch (value) {
                case 1:
                    // playAudio();
                    break;
                case 4:
                    setTimeout(app.secondPage.init(), 0);
                    playAudio();
                    break;
                default:
                    pauseAudio();
            }
        }

        function pauseAudio() {
            audio[0].pause();
        }

        function playAudio() {
            try {
                audio[0].play();
            } catch (e) {
                playAudio();
            }
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

        function traducao(valor) {
            if (app.traducaoElements[app.textDefault][valor]) {
                elemTrad.innerHTML = app.traducaoElements[app.textDefault][valor];
            }
        }

        function mudarPage(valor) {
            if (app.changeImages[valor]) {
                app.changeImages[valor]();
            }
        }


        init();

        return {
            updateListenerMusic: updateListenerMusic,
            checkPauseOrPlay: checkPauseOrPlay,
            pauseAudio: pauseAudio,
            playAudio: playAudio
        };

    })(jQuery);

})();
