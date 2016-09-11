'use sctrit';
if (!app) {
    app = {};
}
app.pageOito = (function($) {

    function init() {
      app.loadImagens('oito', '.page-oito');
    }


    return {
        init: init
    };

})(jQuery);
