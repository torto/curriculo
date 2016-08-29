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
      setTimeout(function(){
        app.changePage('page-sete.html');
      },8000);
    }


    return {
        init: init
    };

})(jQuery);
