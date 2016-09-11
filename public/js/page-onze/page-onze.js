'use sctrit';
if (!app) {
    app = {};
}
app.pageOnze = (function($) {

    function init() {
        app.loadImagens('onze', '.page-onze');
    }


    return {
        init: init
    };

})(jQuery);
