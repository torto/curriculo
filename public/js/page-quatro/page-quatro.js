'use sctrit';
if (!app) {
    app = {};
}
app.pageQuatro = (function($) {

    function init() {
      setTimeout(function(){
        app.changePage('page-cinco.html');
      }, 6000);
    }


    return {
        init: init
    };

})(jQuery);
