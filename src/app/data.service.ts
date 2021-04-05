import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './models/project.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api_projects_url = 'http://localhost:3000/projects';
  
  constructor(private _http: HttpClient) { }
  getProjects() {
    return this._http.get<Project[]>(this.api_projects_url);
  }
  postProject(data: any){
    this._http.post(this.api_projects_url,data);
    console.warn(data);
  }
}
