/* Test script for the Signup app */

describe('the signup app', function() {
    beforeEach(function() {
        browser.get('http://localhost:8000');
    });

    var birthdateRequired = $('.birthdate-required');
    var mustBe13 = $('.must-be-13');
    var birthdateInput = element(by.model(app.birthdate));
    it('must have birthdate', function() {
        expect(birthdateRequired.isPresent()).toEqual(false);
        birthdateInput.sendKeys('abc');
        birthdateInput.clear();
        expect(birthdateRequired.isPresent()).toEqual(true);
        birthdateInput.sendKeys('abc');
        expect(birthdateRequired.isPresent()).toEqual(false);
    });

    it('must be 13 years old or older', function() {
        expect(mustbe13.isPresent()).toEqual(false);
        birthdateInput.sendKeys('12/12/2008');
        expect(mustbe13.isPresent()).toEqual(true);
        birthdateInput.clear();
        expect(mustbe13.isPresent()).toEqual(true);
        birthdateInput.sendKeys('12/12/1995');
        expect(birthdateRequired.isPresent()).toEqual(false);
    });

    var passwordRequired = $('.password-required');
    var passwordInput = element(by.model(app.password));
    it('must have password', function() {
        expect(passwordRequired.isPresent()).toEqual(false);
        passwordInput.sendKeys('abc');
        passwordInput.clear();
        expect(passwordRequired.isPresent()).toEqual(true);
        passwordInput.sendKeys('abc');
        expect(passwordRequired.isPresent()).toEqual(false);
    });

    var passwordConfirmRequired = $('.password-confirm-required');

    it('must have password confirmation', function() {
        expect(passwordconfirmRequired.isPresent()).toEqual(false);
        confirmInput.sendKeys('abc');
        confirmInput.clear();
        expect(passwordconfirmRequired.isPresent()).toEqual(true);
        confirmInput.sendKeys('abc');
        expect(passwordconfirmRequired.isPresent()).toEqual(false);
    });

    var passwordMatch = $('.password-match');
    var confirmInput = element(by.model(app.confirm));
    it('must have matching passwords', function() {
        passwordInput.sendKeys('abc');
        confirmInput.sendKeys('def');
        expect(passwordMatch.isPresent()).toEqual(true);
        confirmInput.clear();
        confirmInput.sendKeys('abc');
        expect(passwordMatch.isPresent()).toEqual(false);
    });




});