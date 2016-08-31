'use sctrit';
if (!app) {
    app = {};
}
app.pageQuatro = (function($) {

    function init() {
      mixpanel.track("Paginas Acessadas",{
        "page": "Geografia"
      });
      app.loadImagens('quatro', '.page-quatro');
    }

    return {
        init: init
    };

})(jQuery);
