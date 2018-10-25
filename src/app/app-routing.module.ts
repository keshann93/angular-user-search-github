import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent, ReadmeComponent, SearchComponent } from './components';


const routes: Routes = [
  { path: '', redirectTo: 'angular-user-search-github/search', pathMatch: 'full' },
  { path: 'angular-user-search-github', redirectTo: 'angular-user-search-github/search', pathMatch: 'full' },
  { path: 'angular-user-search-github/search', component: SearchComponent },
  { path: 'angular-user-search-github/profile', component: ProfileComponent },
  { path: 'angular-user-search-github/readme', component: ReadmeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
