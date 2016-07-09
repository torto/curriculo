(function($) {
    var body;

    function init() {
        initVariables();
        reloadButtons();

        $('.change-second').click(function() {
            changePage('second-page.html');
        });

    }

    function initVariables() {
        body = $('body');
    }

    function reloadButtons(page) {
        switch (page) {
            case 'second-page.html':
                setTimeout(loadSecondPage(),0);
                break;
            default:

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
            body.hide().html(data).fadeIn('slow');
            reloadButtons(page);
        });
    }

    function changePage(page) {
        removePage(function() {
            initOtherPage(page);
        });
    }

    // LOAD PAGES

    function loadSecondPage() {
        var omundo, encantado, de, tortolandia, cavalo;
        omundo = $('.o-mundo');
        encantado = $('.encantado');
        de = $('.de');
        tortolandia = $('.tortolandia');
        horse = $('.me-horse');
        var arrayObjetos = [omundo, encantado, de, tortolandia];

        for (var i = 0; i < arrayObjetos.length; i++) {
          loopSecondPage(arrayObjetos[i], i);
        }
        setTimeout(function(){
          horse.animate({
              'width': "100%",
              'left': '0'
          }, {
              duration: 2000,
              specialEasing: {
                  width: "easeOutBounce"
              },
              complete: function() {
                  // Animation complete.
              }
          });
        }, 4000);
    }

    function loopSecondPage(element, i){
      setTimeout(function(){
        element.animate({
            'width': '100%',
            'top': '0',
            'left': '0'
        }, {
            duration: 3000,
            specialEasing: {
                width: "easeOutQuart"
            },
            complete: function() {
                // Animation complete.
            }
        });
      }, 1000*i);
    }

    init();
})(jQuery);
