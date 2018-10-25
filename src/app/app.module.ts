import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './components/profile/profile.component';
import { ReadmeComponent } from './components/readme/readme.component';
import { SearchComponent } from './components/search/search.component';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [AppRoutingModule, BrowserModule, HttpModule, FormsModule, MarkdownModule.forRoot()],
  declarations: [AppComponent, ProfileComponent, SearchComponent, ReadmeComponent],
  bootstrap: [AppComponent],
  exports: [
    AppRoutingModule
  ]
})
export class AppModule { }
