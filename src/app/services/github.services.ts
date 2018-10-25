import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GithubService {
    private userName: string;
    private clientId: string;
    private clientSecret: string;
    private getUserUrl: string;
    private getRepoUrl: string;
    private getReadmeUrl: string;

    constructor(private _http: Http) {
        this.userName = '';
        this.clientId = '60b9f23dedffbdfc476c';
        this.clientSecret = 'd1c186c6373f96571c0bfcf76b84e4dc6fd0c15a';
        this.getUserUrl = 'https://api.github.com/users/[userName]?client_id=[clientId]&client_secret=[clientSecret]';
        this.getRepoUrl = 'https://api.github.com/users/[userName]/repos?client_id=[clientId]&client_secret=[clientSecret]';
        this.getReadmeUrl = 'https://api.github.com/repos/[userName]/[repo]/readme?client_id=[clientId]&client_secret=[clientSecret]';
    }

    getUser(userName) {
        this.userName = userName;
        if (this.userName) {
            return this._http.get(this.getUserUrl.replace('[userName]', this.userName)
                .replace('[clientId]', this.clientId)
                .replace('[clientSecret]', this.clientSecret))
                .map(res => res.json())
                .catch(this.handleError);
        }
    }

    getRepos(userName) {
        this.userName = userName;
        if (this.userName) {
            return this._http.get(this.getRepoUrl.replace('[userName]', this.userName)
                .replace('[clientId]', this.clientId)
                .replace('[clientSecret]', this.clientSecret))
                .map(res => res.json())
                .catch(this.handleError);
        }
    }

    getReadme(repoName: string, userName: string) {
        this.userName = userName;
        if (this.userName) {
            return this._http.get(this.getReadmeUrl.replace('[userName]', this.userName)
                .replace('[clientId]', this.clientId)
                .replace('[clientSecret]', this.clientSecret)
                .replace('[repo]', repoName))
                .map(res => res.json())
                .catch(this.handleError);
        }
    }

    updateUsername(userName: string) {
        this.userName = userName;
    }

    private handleError(error: any) {

        if (error.status === 401) {
            return Observable.throw(error.status);
        } else {
            return Observable.throw(error.status || 'Server error');
        }
    }
}
