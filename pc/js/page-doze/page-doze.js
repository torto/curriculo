'use sctrit';
if (!app) {
    app = {};
}
app.pageDoze = (function($) {

    function init() {
      mixpanel.track("Paginas Acessadas",{
        "page": "Final"
      });
      app.loadImagens('doze', '.page-doze');
    }


    return {
        init: init
    };

})(jQuery);
