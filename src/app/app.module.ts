import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ProjectsComponent } from './components/projects/projects.component';
import { CardComponent } from './components/card/card.component';
import { ProjectsService } from './services/projects.service';
import { HttpClientModule } from '@angular/common/http';
import { BackgroundComponent } from './components/background/background.component';
import { BackgroundService } from './services/background.service';
import { NavComponent } from './components/nav/nav.component';
import { ProjectResolve } from './services/project.resolve';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    CardComponent,
    BackgroundComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgxJsonLdModule,
  ],
  providers: [
    ProjectsService,
    BackgroundService,
    ProjectResolve,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
