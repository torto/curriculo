if (!window.app) {
    window.app = {};
}
(function($) {
    'use strict';
    var body, bLazy, pageCentral, oFs = {};
    app.textDefault = 'pt-BR';

    function init() {
        initVariables();
        loadFull();
        preloadImages(app.imagens);
        $('.change-second').click(function() {
            mixpanel.track("Paginas Acessadas", {
                "page": "Click Botão Inicial"
            });
            app.textDefault = $('select').val() === null ? 'pt-BR' : $('select').val();
            oFs.requestFullScreen(pageCentral[0]);
            $('.traducao').css('display', 'block');
            changePage('second-page.html');
            app.audio.playAudio();
            // changePage('page-tres.html');
            // changePage('page-quatro.html');
            // changePage('page-cinco.html');
            // changePage('page-seis.html');
            // changePage('page-sete.html');
            // changePage('page-oito.html');
            // changePage('page-nove.html');
            // changePage('page-dez.html');
						// changePage('page-onze.html');
            // changePage('page-doze.html');
            // changePage('final.html');
        });
          $('.change-info').click(function() {
            changePage('final.html');
          });
    }

    function initVariables() {
        app.imagesLoad = {};
        body = $('body');
        pageCentral = $('#page-central');
        $('select').material_select();
    }

    function reloadButtons(page) {
        // if(app.audio){
        //   app.audio.pauseAudio();
        // }
        switch (page) {
            case 'second-page.html':
                app.secondPage.init();
                break;
            case 'page-tres.html':
                app.pageTres.init();
                break;
            case 'page-quatro.html':
                app.pageQuatro.init();
                break;
            case 'page-cinco.html':
                app.pageCinco.init();
                break;
            case 'page-seis.html':
                app.pageSeis.init();
                break;
            case 'page-sete.html':
                app.pageSete.init();
                break;
            case 'page-oito.html':
                app.pageOito.init();
                break;
            case 'page-nove.html':
                app.pageNove.init();
                break;
            case 'page-dez.html':
                app.pageDez.init();
                break;
            case 'page-onze.html':
                app.pageOnze.init();
                break;
            case 'page-doze.html':
                app.pageDoze.init();
                break;
            default:
                break;
        }

    }

    function removePage(callback) {
        $('.page').hide("slow", function() {
            this.remove();
            callback();
        });
    }

    function initOtherPage(page) {
        $.get("partials/" + page, function(data) {
            body.hide();
            pageCentral.append(data);
            body.fadeIn('slow');
            reloadButtons(page);
        });
    }

    function changePage(page) {
        removePage(function() {
            initOtherPage(page);
        });
    }

    function preloadImages(array) {
        // {elem, url, alt, class}
        var i = 0;
        for (i; i < array.length; i++) {
            if (!app.imagesLoad[array[i].elem]) {
                app.imagesLoad[array[i].elem] = {};
            }
            app.imagesLoad[array[i].elem][array[i].alt] = new Image();
            app.imagesLoad[array[i].elem][array[i].alt].src = array[i].url;
            app.imagesLoad[array[i].elem][array[i].alt].className = array[i].class;
            app.imagesLoad[array[i].elem][array[i].alt].alt = array[i].alt;
        }
    }

    function loadImagens(elem, classInject) {
        var classInjectLocal = document.querySelector(classInject);
        for (var i = 0; i < app.imagens.length; i++) {
            if (app.imagens[i].elem === elem) {
                classInjectLocal.appendChild(app.imagesLoad[app.imagens[i].elem][app.imagens[i].alt]);
            }
        }
    }

    function loadFull() {

        var docElm = document.documentElement;
        oFs = {
            requestFullScreen: function(el) {
                if (docElm.requestFullscreen) {
                    el.requestFullscreen();
                } else if (docElm.mozRequestFullScreen) {
                    el.mozRequestFullScreen();
                } else if (docElm.webkitRequestFullScreen) {
                    el.webkitRequestFullScreen();
                }

            },
            cancelFullScreen: function() {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            }
        };

        var botaoSair = document.getElementById('btn-sair');
        botaoSair.addEventListener('click', function(evt) {
            evt.cancelBubble = true;
            oFs.cancelFullScreen();
        }, false);

        app.fullScreen = oFs;
    }


    app.changePage = changePage;
    app.loadImagens = loadImagens;
    $(document).ready(function() {
        init();
    });

})(jQuery);
