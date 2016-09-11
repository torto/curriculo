'use sctrit';
if (!app) {
    app = {};
}
app.pageTres = (function($) {

    function init() {
      app.loadImagens('tres', '.page-tres');

    }

    function visibleMenino() {
      $('.menino').addClass('play');
    }

    function visibleMedio() {
      $('.medio').addClass('play');
    }

    function visibleVeio() {
      $('.veio').addClass('play');
    }

    return {
        init: init,
        visibleMenino: visibleMenino,
        visibleMedio: visibleMedio,
        visibleVeio: visibleVeio
    };

})(jQuery);
