import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.model';
import { DataService } from '../data.service';
import {FormsModule, NgForm} from '@angular/forms'

@Component({
  selector: 'app-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.css']
})
export class ProjectsViewComponent implements OnInit {

  currentProjects$: Project[] = [];
  constructor(
    private dataService: DataService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSubmit(data: any, myForm : NgForm) {
    return this.dataService.getProjects(data)
    .subscribe(data => this.currentProjects$ = data);
    myForm.reset();
  }

}
