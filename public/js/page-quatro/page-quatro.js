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
      setTimeout(function(){
        // app.changePage('page-cinco.html');
      }, 6000);
    }


    return {
        init: init
    };

})(jQuery);
