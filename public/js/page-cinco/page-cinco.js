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
      setTimeout(function(){
        app.changePage('page-seis.html');
      },8000);
    }


    return {
        init: init
    };

})(jQuery);
