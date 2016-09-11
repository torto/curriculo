'use sctrit';
if (!app) {
    app = {};
}
app.pageDez = (function($) {

    function init() {
      mixpanel.track("Paginas Acessadas",{
        "page": "Anal. Desv. Sistemas"
      });
      app.loadImagens('dez', '.page-dez');
    }


    return {
        init: init
    };

})(jQuery);
