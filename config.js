(function() {

	'use strict';

	angular
		.module('ngContacts')

		.config(function($stateProvider) {

			var listState = {
				name: 'list',
				url: '',
				templateUrl: 'templates/list.html',
				controller: 'personsListController as list'
      }
      
      var listDetailState = {
        name: 'detailList',
        url: '/:index',
        templateUrl: 'templates/detail-list.html',
        controller: 'personsDetailController as detail'
      }

			$stateProvider.state(listState);
			$stateProvider.state(listDetailState);

		});


})();