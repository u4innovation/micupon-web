function indexService(o,n){function e(o){Stamplay.User.socialLogin(n[o])}function i(o,n){return Stamplay.Object("cupones").get(o).then(function(o){return o.data&&(cupones=[],Stamplay.Object("cupones_usuarios").get({usuario:"580a08882be61c073254b8d6"}).then(function(n){if(n.data.length>0){for(var e=n.data,i=o.data.length-1;i>=0;i--){var a=o.data[i];a.flag=!1;for(var t=e.length-1;t>=0;t--)for(var c=e[t].codigos.length-1;c>=0;c--)console.log(a._id),console.log(e[t].codigos[c]),console.log(a._id==e[t].codigos[c]),a._id==e[t].codigos[c]&&(a.flag=!0);cupones.push(a)}return cupones}},function(o){console.log(o)})),o.data},function(o){console.log(o)})}function a(o){Stamplay.Object("cupones").patch("codigo",o).then(function(o){},function(o){console.log(o)})}function t(o){Stamplay.Object("cupones").remove("codigo").then(function(o){},function(o){console.log(o)})}function c(o,n){Stamplay.Object("cupones_usuarios").get({usuario:"580a08882be61c073254b8d6"}).then(function(e){if(e.data&&e.data.length>0)e.data[0].codigos.push(o),console.log(e.data[0].codigos),Stamplay.Object("cupones_usuarios").patch("580a08882be61c073254b8d6",{codigos:e.data[0].codigos}).then(function(o){l(n)},function(o){console.log(o)});else{var i={usuario:["580a08882be61c073254b8d6"],codigos:[o]};Stamplay.Object("cupones_usuarios").save(i).then(function(o){l(n)},function(o){console.log(o)})}},function(o){console.log(o)})}function l(n){o.sendPush(n.perfil.push_token,"El cupón ha sido enviado a su movil."),addAlert()}var s={busqueda:i,modificar:a,eliminar:t,nuevo:c,login:e};return s}function indexCtrl(o,n,e,i,a,t){var c=this;c.globalService=e,c.cupones=[],c.showFiltros=!1,c.showNuevo=!1,c.filtros={},c.nuevo={},c.itemSeleccionado={},a.currentUser().then(function(o){(o||n.user)&&(n.user=o?o:n.user,Stamplay.Object("usuarios").get({owner:n.user._id}).then(function(o){n.user.perfil=o.data[0]},function(o){console.log(o)})),c.buscar()}),c.modalEliminar=t({scope:o,template:'<div class="modal"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Eliminar la banda horaria con id {{ctrl.bandaSeleccionada.id}}?</h4></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Cancelar</button><button type="button" class="btn btn-danger" ng-click="ctrl.confirmarElim()">Eliminar</button></div></div></div></div>',html:!0,show:!1,animation:"am-slide-top"}),c.tableConfig={itemsPerPage:5,fillLastPage:!0},c.ingresar=function(o){i.login(o)},c.ocultarSide=function(){c.showFiltros=!1,c.showNuevo=!1},c.buscar=function(){i.busqueda(c.filtros,n.user).then(function(n){c.cupones=n,c.showFiltros=!1,o.$apply()})},c.eliminar=function(o){c.itemSeleccionado=o,c.modalEliminar.$promise.then(c.modalEliminar.show)},c.confirmarElim=function(){i.eliminar(c.itemSeleccionado).then(function(o){c.modalEliminar.$promise.then(c.modalEliminar.hide)})},c.guardar=function(o){i.nuevo(o,n.user)},c.limpiarFiltros=function(){c.filtros={}}}angular.module("micupon").factory("indexService",["globalService","socialProvider",indexService]),angular.module("micupon").controller("indexCtrl",["$scope","$rootScope","globalService","indexService","AccountService","$modal",indexCtrl]);
//# sourceMappingURL=maps/index.js.map
