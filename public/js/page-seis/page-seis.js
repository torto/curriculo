'use sctrit';
if (!app) {
    app = {};
}
app.pageSeis = (function($) {

    function init() {
      mixpanel.track("Paginas Acessadas",{
        "page": "Professor"
      });
      app.loadImagens('seis', '.page-seis');
    }


    return {
        init: init
    };

})(jQuery);
