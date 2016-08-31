if(!window.app){
	window.app = {};
}
(function(app) {

    app.changeImages = {
        '00:21': function(){
					app.changePage('page-tres.html');
				},
				'00:23' : function () {
						app.pageTres.visibleMenino();
				},
				'00:30': function () {
					app.pageTres.visibleMedio();
				},
				'00:39' : function () {
						app.pageTres.visibleVeio();
				},
				'00:50': function(){
					app.changePage('page-quatro.html');
				},
				'01:21': function(){
					app.changePage('page-cinco.html');
				},
				'01:32': function(){
					app.changePage('page-seis.html');
				},
				'01:52': function(){
					app.changePage('page-sete.html');
				},
				'02:40': function(){
					app.changePage('page-oito.html');
				},
				'02:54': function(){
					app.changePage('page-nove.html');
				},
				'02:22': function(){
					app.changePage('page-dez.html');
				}
    };

})(window.app);
