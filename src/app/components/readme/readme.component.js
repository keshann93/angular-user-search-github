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
var ReadmeComponent = (function () {
    function ReadmeComponent(_githubService, route) {
        this._githubService = _githubService;
        this.route = route;
    }
    ReadmeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (v) {
            _this.repoName = v.repoName;
            _this.loadReadme(_this.repoName);
        });
    };
    ReadmeComponent.prototype.loadReadme = function (repoName) {
        var _this = this;
        this._githubService.getReadme(repoName).subscribe(function (readme) {
            // console.log(readme);
            var decodedString = atob(readme.content);
            console.log(decodedString);
            _this.readmeMdString = decodedString;
            // this.htmlContent = this.converter.makeHtml(this.encodedText);
        });
    };
    ReadmeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-readme',
            templateUrl: './readme.component.html'
        }), 
        __metadata('design:paramtypes', [github_services_1.GithubService, router_1.ActivatedRoute])
    ], ReadmeComponent);
    return ReadmeComponent;
}());
exports.ReadmeComponent = ReadmeComponent;
//# sourceMappingURL=readme.component.js.map