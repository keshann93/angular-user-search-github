import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../../services/github.services';
@Component({
    moduleId : module.id,
    selector: 'app-search',
    templateUrl: './search.component.html'
})

export class SearchComponent {

    userName: string;

    constructor(private _githubService: GithubService, public router: Router) {
    }

    searchUser() {
        this._githubService.updateUsername(this.userName);
        this.router.navigate(['/angular-user-search-github/profile'], {queryParams: {userName: this.userName}})

    }

}