'use sctrit';
if (!app) {
    app = {};
}
app.pageOnze = (function($) {

    function init() {
      mixpanel.track("Paginas Acessadas",{
        "page": "Firefox"
      });
      app.loadImagens('onze', '.page-onze');
    }


    return {
        init: init
    };

})(jQuery);
