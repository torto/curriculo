'use sctrit';
if (!app) {
    app = {};
}
app.pageNove = (function($) {

    function init() {
      app.loadImagens('nove', '.page-nove');
      setTimeout(function() {
          app.changePage('page-dez.html');
      },8000);
    }


    return {
        init: init
    };

})(jQuery);
