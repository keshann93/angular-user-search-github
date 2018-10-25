import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { GithubService } from '../../services/github.services';
@Component({
    moduleId : module.id,
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {


    userName: any;
    user: any;
    repos: any = [];
    readmeMdLink: string;
    constructor(private _githubService: GithubService, private route: ActivatedRoute, public router: Router) {
        this.user = false;
    }
    ngOnInit(): void {
        this.route.queryParams.subscribe((v: any) => {
            this.userName = v.userName;
        });
        this._githubService.getUser().subscribe(user => {
            console.log(user);
            this.user = user;
        });

        this._githubService.getRepos().subscribe(repos => {
            console.log(repos);
            this.repos = repos;
        });
    }
    goSearch() {
        this.router.navigate(['/search']);
    }
    readmeFun(name: string){
        this.router.navigate(['/readme'], {queryParams: {repoName: name}})
    }

}