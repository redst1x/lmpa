(function () {
    'use strict';
function checkApiAvailability(){var t=[{url:"https://cubnotrip.top/api/checker",name:"cubnotrip.top"}],n=0;!function o(){if(!(n>=t.length)){var e=t[n],i=new XMLHttpRequest;i.open("GET",e.url,!0),i.timeout=5e3,i.onload=function(){if(200===i.status)try{if(i.responseText)var t=i.responseText;if("ok"===t){localStorage.setItem("cub_domain","cubnotrip.top");return}}catch(e){}n++,o()},i.onerror=function(){n++,o()},i.ontimeout=function(){n++,o()},i.send()}}()}
if (Lampa.Storage.get('cub_domain_skaz')==1) checkApiAvailability(); Lampa.Storage.set('cache_images', false);

    var domain = 'cubnotrip.top';
    var tmdb_proxy = {
      name: 'TMDB Proxy by Skaz',
      version: '1.0.4',
      description: 'Проксирование постеров и API сайта TMDB',
      path_image: 'imagetmdb.' + domain + '/',
      path_api: 'apitmdb.' + domain + '/3/'
    };

    function filter(u) {
      var s = u.slice(0, 8);
      var e = u.slice(8).replace(/\\/+/g, '/');
      return s + e;
    }

    function email() {
      return Lampa.Storage.get('account', '{}').email || '';
    }

    Lampa.TMDB.image = function (url) {
      var base = Lampa.Utils.protocol() + 'image.tmdb.org/' + url;
      return Lampa.Utils.addUrlComponent(filter(Lampa.Storage.field('proxy_tmdb') ? Lampa.Utils.protocol() + tmdb_proxy.path_image + url : base), 'email=' + encodeURIComponent(email()));
    };

    Lampa.TMDB.api = function (url) {
      var base = Lampa.Utils.protocol() + 'api.themoviedb.org/3/' + url;
      return Lampa.Utils.addUrlComponent(filter(Lampa.Storage.field('proxy_tmdb') ? Lampa.Utils.protocol() + tmdb_proxy.path_api + url : base), 'email=' + encodeURIComponent(email()));
    };

    Lampa.Settings.listener.follow('open', function (e) {
      if (e.name == 'tmdb') {
        e.body.find('[data-parent="proxy"]').remove();
      }
    });
    console.log('TMDB-Proxy', 'started, enabled:', Lampa.Storage.field('proxy_tmdb'));
	Lampa.SettingsApi.addComponent({component: 'iptvskaz',icon: "<svg height=\\"36\\" viewBox=\\"0 0 38 36\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\n            <rect x=\\"2\\" y=\\"8\\" width=\\"34\\" height=\\"21\\" rx=\\"3\\" stroke=\\"white\\" stroke-width=\\"3\\"/>\\n            <line x1=\\"13.0925\\" y1=\\"2.34874\\" x2=\\"16.3487\\" y2=\\"6.90754\\" stroke=\\"white\\" stroke-width=\\"3\\" stroke-linecap=\\"round\\"/>\\n            <line x1=\\"1.5\\" y1=\\"-1.5\\" x2=\\"9.31665\\" y2=\\"-1.5\\" transform=\\"matrix(-0.757816 0.652468 0.652468 0.757816 26.197 2)\\" stroke=\\"white\\" stroke-width=\\"3\\" stroke-linecap=\\"round\\"/>\\n            <line x1=\\"9.5\\" y1=\\"34.5\\" x2=\\"29.5\\" y2=\\"34.5\\" stroke=\\"white\\" stroke-width=\\"3\\" stroke-linecap=\\"round\\"/>\\n        </svg>",name: 'by Skaz'});
	Lampa.SettingsApi.addParam({
        component: 'iptvskaz',
        param: {
          name: 'b_skaz',
          type: 'trigger',
          "default": false,
        },
        field: {
          name: 'Убрать с главной трансляции',
		  description: 'Убирает с главной трансляцию события'
        },
        onChange: function (value) {
			Lampa.Noty.show('Необходимо перезайти в лампу');
		}
	  });
	  
	if (Lampa.Storage.get('b_skaz')!=true) {
	//$.getScript(Lampa.Utils.protocol()+'oleg.skaz.tv/b.js');
	}

})();`;
