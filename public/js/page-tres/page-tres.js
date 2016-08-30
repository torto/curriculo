'use sctrit';
if (!app) {
    app = {};
}
app.pageTres = (function($) {

    function init() {
      mixpanel.track("Paginas Acessadas",{
        "page": "Quarto criança"
      });
      app.loadImagens('tres', '.page-tres');
      visibleMenino();
      setTimeout(visibleMedio, 2000);
      setTimeout(visibleVeio, 4000);
      setTimeout(function(){
        // app.changePage('page-quatro.html');
      },8000);
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
