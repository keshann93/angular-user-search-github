"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var GithubService = (function () {
    function GithubService(_http) {
        this._http = _http;
        this.clientSecret = '62551cc02cee983fff0bac41baf170eb5a312c1c';
        this.userName = '';
        this.clientId = '60b9f23dedffbdfc476c'; //d9308aacf8b204d361fd
        this.clientSecret = 'd1c186c6373f96571c0bfcf76b84e4dc6fd0c15a'; //62551cc02cee983fff0bac41baf170eb5a312c1c
        this.getUserUrl = 'http://api.github.com/users/[userName]?client_id=[clientId]&client_secret=[clientSecret]';
        this.getRepoUrl = 'http://api.github.com/users/[userName]/repos?client_id=[clientId]&client_secret=[clientSecret]';
        this.getReadmeUrl = 'http://api.github.com/repos/[userName]/[repo]/readme?client_id=[clientId]&client_secret=[clientSecret]';
    }
    GithubService.prototype.getUser = function () {
        if (this.userName) {
            return this._http.get(this.getUserUrl.replace('[userName]', this.userName)
                .replace('[clientId]', this.clientId)
                .replace('[clientSecret]', this.clientSecret))
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
    };
    GithubService.prototype.getRepos = function () {
        if (this.userName) {
            return this._http.get(this.getRepoUrl.replace('[userName]', this.userName)
                .replace('[clientId]', this.clientId)
                .replace('[clientSecret]', this.clientSecret))
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
    };
    GithubService.prototype.getReadme = function (repoName) {
        if (this.userName) {
            return this._http.get(this.getReadmeUrl.replace('[userName]', this.userName)
                .replace('[clientId]', this.clientId)
                .replace('[clientSecret]', this.clientSecret)
                .replace('[repo]', repoName))
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
    };
    GithubService.prototype.updateUsername = function (userName) {
        this.userName = userName;
    };
    GithubService.prototype.handleError = function (error) {
        if (error.status === 401) {
            return Observable_1.Observable.throw(error.status);
        }
        else {
            return Observable_1.Observable.throw(error.status || 'Server error');
        }
    };
    GithubService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GithubService);
    return GithubService;
}());
exports.GithubService = GithubService;
//# sourceMappingURL=github.services.js.map