function indexService(o,n){function i(o){Stamplay.User.socialLogin(n[o])}function e(o,n){return Stamplay.Object("cupones").get(o).then(function(o){if(o.data){cupones=[];for(var i=o.data.length-1;i>=0;i--)cupon=o.data[i],cupon.flag="0",n&&Stamplay.Object("cupones_usuarios").get({usuario:n._id}).then(function(n){if(n)for(var i=o.codigos.length-1;i>=0;i--)cupon.codigo==n.data[i].codigo&&(cupon.flag="1")},function(o){}),cupones.push(cupon)}return o.data=cupones,o.data},function(o){})}function t(o){Stamplay.Object("cupones").patch("codigo",o).then(function(o){},function(o){})}function a(o){Stamplay.Object("cupones").remove("codigo").then(function(o){},function(o){})}function c(n,i){Stamplay.Object("cupones_usuarios").get({usuario:i._id}).then(function(e){e?(e.codigos.push(n),Stamplay.Object("cupones_usuarios").patch({usuario:i._id,codigos:e.codigos}).then(function(n){o.sendPush(i.perfil.push_token,"El cupón ha sido enviado a su movil."),addAlert()},function(o){})):Stamplay.Object("cupones_usuarios").save({usuario:i._id,codigos:n}).then(function(n){o.sendPush(i.perfil.push_token,"El cupón ha sido enviado a su movil."),addAlert()},function(o){})},function(o){})}var u={busqueda:e,modificar:t,eliminar:a,nuevo:c,login:i};return u}function indexCtrl(o,n,i,e,t,a){var c=this;c.globalService=i,c.cupones=[],c.showFiltros=!1,c.showNuevo=!1,c.filtros={},c.nuevo={},c.itemSeleccionado={},t.currentUser().then(function(o){(o||n.user)&&(n.user=o?o:n.user,Stamplay.Object("usuarios").get({owner:n.user._id}).then(function(o){n.user.perfil=o.data[0]},function(o){}))}),c.modalEliminar=a({scope:o,template:'<div class="modal"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Eliminar la banda horaria con id {{ctrl.bandaSeleccionada.id}}?</h4></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Cancelar</button><button type="button" class="btn btn-danger" ng-click="ctrl.confirmarElim()">Eliminar</button></div></div></div></div>',html:!0,show:!1,animation:"am-slide-top"}),c.tableConfig={itemsPerPage:5,fillLastPage:!0},c.ingresar=function(o){e.login(o)},c.ocultarSide=function(){c.showFiltros=!1,c.showNuevo=!1},c.buscar=function(){e.busqueda(c.filtros,n.user).then(function(n){c.cupones=n,c.showFiltros=!1,o.$apply()})},c.eliminar=function(o){c.itemSeleccionado=o,c.modalEliminar.$promise.then(c.modalEliminar.show)},c.confirmarElim=function(){e.eliminar(c.itemSeleccionado).then(function(o){c.modalEliminar.$promise.then(c.modalEliminar.hide)})},c.guardar=function(o){n.user?e.nuevo(o,n.user):$("#login-dialog").modal()},c.limpiarFiltros=function(){c.filtros={}},c.buscar()}angular.module("micupon").factory("indexService",["globalService","socialProvider",indexService]),angular.module("micupon").controller("indexCtrl",["$scope","$rootScope","globalService","indexService","AccountService","$modal",indexCtrl]);
//# sourceMappingURL=maps/index.js.map
