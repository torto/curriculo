'use sctrit';
if (!app) {
    app = {};
}
app.pageSete = (function($) {

    function init() {
      app.loadImagens('sete', '.page-sete');
    }


    return {
        init: init
    };

})(jQuery);
