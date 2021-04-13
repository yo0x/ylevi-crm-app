import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './models/project.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api_projects_url = 'https://127.0.0.1:3001/projects';
  project$: Project = new Project();
  constructor(private _http: HttpClient) { }
  getProjects(data : any) {
    this.project$ = data;
    console.warn(this.project$.IDnumber);
    return this._http.get<Project[]>(this.api_projects_url+'/'+this.project$.IDnumber);
    
  }
  postProject(data: any){
   
    this._http.post(this.api_projects_url,data);
    console.warn(data);
  }
}
