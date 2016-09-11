'use sctrit';
if (!app) {
    app = {};
}
app.pageCinco = (function($) {

    function init() {
      mixpanel.track("Paginas Acessadas",{
        "page": "Beltrão"
      });
      app.loadImagens('cinco', '.page-cinco');
      
    }


    return {
        init: init
    };

})(jQuery);
