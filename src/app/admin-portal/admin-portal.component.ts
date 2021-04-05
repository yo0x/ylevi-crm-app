import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.model';
import { DataService } from '../data.service';

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

  ngOnInit(): void {
    return this.dataService.getProjects()
    .subscribe(data => this.currentProjects$ = data)
  }
  onSubmit(data: any) {
    this.http.post('http://localhost:3000/contact', data).subscribe((data) => {
      console.warn(data);
    });

  }
}