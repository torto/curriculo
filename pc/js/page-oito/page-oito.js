'use sctrit';
if (!app) {
    app = {};
}
app.pageOito = (function($) {

    function init() {
      mixpanel.track("Paginas Acessadas",{
        "page": "Pato Branco"
      });
      app.loadImagens('oito', '.page-oito');
    }


    return {
        init: init
    };

})(jQuery);
