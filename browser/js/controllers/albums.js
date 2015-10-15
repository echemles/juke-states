app.controller('AlbumsCtrl', function ($scope, $rootScope, AlbumFactory) {
	AlbumFactory.fetchAll()
	.then(function (albums) {
		$scope.albums = albums;
	});
	$rootScope.$on('changeView', function (evt, data) {
		$scope.showMe = (data.name == 'allAlbums');
	});
	$scope.viewAlbum = function (albumId) {

		// $rootScope.$broadcast('changeView', {
		// 	name: 'oneAlbum',
		// 	id: albumId
		// });
	};
});


app.config(function ($stateProvider) {
    $stateProvider.state('albumsList', {
        url: '/albums',
        templateUrl: '/albums.html',
        controller: 'AlbumsCtrl'
    });
});