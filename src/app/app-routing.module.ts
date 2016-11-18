import { NgModule } from '@angular/core';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Routes, RouterModule, UrlHandlingStrategy } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TextComponent } from './text/text.component';

const routes: Routes = [
  {path: 'text', component: TextComponent},
  {path: '', component: HomeComponent},
];

// This URL handling strategy is custom and application-specific.
// Using it we can tell the Angular 2 router to handle only URL starting with settings.
export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {return url.toString().startsWith('/');}
  extract(url) {return url;}
  merge(url, whole) {return url;}
}

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,

      // We want to trigger navigation ourselves after ng1 is done bootstrapping.
      initialNavigation: false,
    }),
  ],
  exports: [RouterModule],
  providers: [
    {provide: APP_BASE_HREF, useValue: '!'},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy},
  ],
})
export class AppRoutingModule { }
