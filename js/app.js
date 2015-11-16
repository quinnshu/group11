angular.module('SignupApp', [])
		// requirement of date of birth for users to be older than 13
		.directive('olderThan13', function () {
			return {
				require: 'ngModel',
				link: function (scope, elem, attrs, controller) {
					controller.$validators.olderThan13 = function (modelValue) {
						return (moment().diff(moment(modelValue), 'years') > 13);
					}
				}
			}
		})
		//directive to ensure "password" and "confirm password" fields match
		.directive('passwordVerify', function () {
			return {
				require: "ngModel",
				link: function (scope, element, attrs, ctrl) {
					ctrl.$parsers.unshift(function (viewValue) {
						var origin = scope.$eval(attrs["passwordVerify"]);
						if (origin !== viewValue) {
							ctrl.$setValidity("passwordVerify", false);
							return undefined;
						} else {
							ctrl.$setValidity("passwordVerify", true);
							return viewValue;
						}
					});

				}
			};
		}).controller('SignupController', function ($scope) {
	'use strict';
	// shows successful signup message
	$('.submit').click(function () {
		$('.alert').show();
	});

	// hides successful signup message
	$('.reset').click(function () {
		$('.alert').hide();
	});
});