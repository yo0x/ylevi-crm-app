import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { ProjectsViewComponent } from './projects-view/projects-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPortalComponent,
    ProjectsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
