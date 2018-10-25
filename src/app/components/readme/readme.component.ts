import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GithubService } from '../../services/github.services';

@Component({
    moduleId : module.id,
    selector: 'app-readme',
    templateUrl: './readme.component.html'
})

export class ReadmeComponent implements OnInit {
    

    readmeMdString: string;
    repoName: string;

    constructor(private _githubService: GithubService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe((v: any) => {
            this.repoName = v.repoName;
            this.loadReadme(this.repoName);
        });
    }
    loadReadme(repoName: any) {
        this._githubService.getReadme(repoName).subscribe(readme => {
            // console.log(readme);
            let decodedString = atob(readme.content);
            console.log(decodedString);
            this.readmeMdString= decodedString;

            // this.htmlContent = this.converter.makeHtml(this.encodedText);
        });
    }

}