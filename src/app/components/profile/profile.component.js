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
var router_1 = require('@angular/router');
var github_services_1 = require('../../services/github.services');
var ProfileComponent = (function () {
    function ProfileComponent(_githubService, route, router) {
        this._githubService = _githubService;
        this.route = route;
        this.router = router;
        this.repos = [];
        this.user = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (v) {
            _this.userName = v.userName;
        });
        this._githubService.getUser().subscribe(function (user) {
            console.log(user);
            _this.user = user;
        });
        this._githubService.getRepos().subscribe(function (repos) {
            console.log(repos);
            _this.repos = repos;
        });
    };
    ProfileComponent.prototype.goSearch = function () {
        this.router.navigate(['/search']);
    };
    ProfileComponent.prototype.readmeFun = function (name) {
        this.router.navigate(['/readme'], { queryParams: { repoName: name } });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
        }), 
        __metadata('design:paramtypes', [github_services_1.GithubService, router_1.ActivatedRoute, router_1.Router])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map