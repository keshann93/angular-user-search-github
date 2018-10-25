import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MarkdownModule, MarkdownService, MarkedOptions } from 'ngx-markdown';
import {ProfileComponent, ReadmeComponent, SearchComponent} from './components' ;

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {GithubService} from './services/github.services';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ReadmeComponent,
    SearchComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    MarkdownModule
  ],
  providers: [GithubService, MarkdownService, MarkedOptions],
  exports: [
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
