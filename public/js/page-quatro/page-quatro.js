'use sctrit';
if (!app) {
    app = {};
}
app.pageQuatro = (function($) {

    function init() {
      app.loadImagens('quatro', '.page-quatro');
    }

    return {
        init: init
    };

})(jQuery);
