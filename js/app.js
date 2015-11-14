angular.module('SignupApp', [])
	// requirement of date of birth for users to be older than 13
	.directive('olderThan13', function() {
		return {
			require: 'ngModel',
			link: function(scope, elem, attrs, controller) {
				controller.$validators.olderthan13 = function(modelValue) {

				}
			}
		}
	})
	.controller('SignupController', function($scope) {
		'use strict';
		// shows successful signup message
		$('.submit').click(function() {
			$('.alert').show();
		});

		// hides successful signup message
		$('.reset').click(function() {
			$('.alert').hide();
		});
	});