var app = angular.module('ngCribs', ['ui.bootstrap']);
app.controller('cribsController', function ($scope, cribsFactory) {

	$scope.cribs;

	cribsFactory.getCribs().then(function(data) {
		$scope.Cribs = data.data;
	}, function(error) {
		console.log(error)
	});﻿
});

