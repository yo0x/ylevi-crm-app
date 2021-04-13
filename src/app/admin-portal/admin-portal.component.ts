import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.model';
import { DataService } from '../data.service';
import {FormsModule, NgForm} from '@angular/forms'
@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {

  project$: Project = new Project();
  currentProjects$: Project[] = [];

  constructor(
    private dataService: DataService,
    private http: HttpClient
  ) { }

  ngOnInit() {
   
  }
  onSubmit(data: any, myForm : NgForm) {
    this.http.post('https://localhost:3001/projects', data).subscribe((data) => {
      console.warn(data);
    });
   // this.dataService.postProject(data);
    myForm.reset();
  }
}