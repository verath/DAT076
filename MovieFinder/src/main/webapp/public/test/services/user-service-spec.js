describe('Service: movieFinder.services.user', function() {
    'use strict';

    var httpBackend, userService;

    beforeEach(function (){
        // Set up the module that hold our service
        module('movieFinder.services', function($provide) {
            // Set up all dependencies the service requires
            $provide.value('$window', {});
        });

        // Get an instance of the service itself and
        // and instance of the http mock service.
        inject(function($httpBackend, _user_) {
            httpBackend = $httpBackend;
            userService = _user_;
        });
    });

    afterEach(function() {
        // Make sure no http requests are missing after each test
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should not indicate a logged in user by default', function() {
        expect(userService.isLoggedIn()).toBe(false);
    });

    it('should send username and password on login', function(){
        var response = {
            username: 'name',
            role: 'role'
        };

        httpBackend.expectPOST('api/login/login', {
            username: 'a',
            password: 'b'
        }).respond(response);

        userService.login('a', 'b');
        httpBackend.flush();

        // Note that this test will be asserted via the httpBackend, 
        // no need for any expects of our own.
    });

    it('should set user info on successful login', function(){
        var response = {
            username: 'name',
            role: 'role'
        };
        var promiseResolved = false;

        httpBackend.expectPOST('api/login/login').respond(response);

        userService.login('a', 'b').then(function(){
            promiseResolved = true;
        });
        httpBackend.flush();

        expect(userService.isLoggedIn()).toBe(true);
        expect(userService.getUsername()).toBe(response.username);
        expect(userService.getRole()).toBe(response.role);
        expect(promiseResolved).toBe(true);
    });

    it('should clear user info on successful logout', function() {
        // Set up user as logged in
        var loginResponse = {
            username: 'name',
            role: 'role'
        };
        httpBackend.expectPOST('api/login/login').respond(loginResponse);
        userService.login('a', 'b');
        httpBackend.flush();
        
        // Test logout
        var promiseResolved = false;

        httpBackend.expectPOST('api/login/logout').respond(200);
        userService.logout().then(function(){
            promiseResolved = true;
        });
        httpBackend.flush();

        expect(userService.isLoggedIn()).toBe(false);
        expect(userService.getUsername()).not.toBe('name');
        expect(userService.getRole()).not.toBe('role');
        expect(promiseResolved).toBe(true);
    });

    it('should not set user info on unsuccessful login', function(){
        var promiseResolved = false;

        httpBackend.expectPOST('api/login/login').respond(401);
        userService.login('a', 'b').then(function(){
            promiseResolved = true;
        });
        httpBackend.flush();

        expect(userService.isLoggedIn()).toBe(false);
        expect(promiseResolved).toBe(false);
    });

    it('should not clear user info on unsuccessful logout', function() {
        // Set up user as logged in
        var loginResponse = {
            username: 'name',
            role: 'role'
        };
        httpBackend.expectPOST('api/login/login').respond(loginResponse);
        userService.login('a', 'b');
        httpBackend.flush();
        
        // Test logout
        var promiseResolved = false;

        httpBackend.expectPOST('api/login/logout').respond(500);
        userService.logout().then(function(){
            promiseResolved = true;
        });
        httpBackend.flush();

        expect(userService.isLoggedIn()).toBe(true);
        expect(userService.getUsername()).toBe('name');
        expect(userService.getRole()).toBe('role');
        expect(promiseResolved).toBe(false);
    });

});
