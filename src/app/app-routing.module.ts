import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminPortalComponent} from './admin-portal/admin-portal.component';
import {ProjectsViewComponent} from './projects-view/projects-view.component';

const routes: Routes = [
  {path: '',component: ProjectsViewComponent},
  {path: 'projects',component: ProjectsViewComponent},
  {path: 'adduser',component: AdminPortalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
