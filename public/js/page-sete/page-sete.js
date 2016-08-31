'use sctrit';
if (!app) {
    app = {};
}
app.pageSete = (function($) {

    function init() {
      mixpanel.track("Paginas Acessadas",{
        "page": "Acidente"
      });
      app.loadImagens('sete', '.page-sete');
    }


    return {
        init: init
    };

})(jQuery);
