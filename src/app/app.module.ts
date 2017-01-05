import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UpgradeModule } from '@angular/upgrade/static';
import { HomeModule } from './home/home.module';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HomeModule,
    UpgradeModule,
  ],
  entryComponents: [
    AppComponent,
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public upgrade: UpgradeModule) {}

  ngDoBootstrap() {}
}
