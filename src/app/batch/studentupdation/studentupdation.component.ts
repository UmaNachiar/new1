import { Component, OnInit } from '@angular/core';
import { TraineeserviceService } from '../../traineeservice.service';
import { Studentdetails } from '../../models/StudentDetails';
import { Issue } from '../../models/issue';

@Component({
  selector: 'app-studentupdation',
  templateUrl: './studentupdation.component.html',
  styleUrls: ['./studentupdation.component.css']
})
export class StudentupdationComponent implements OnInit {
  assign: Issue[];
  bat: Studentdetails;
  getassign: Studentdetails[];
  onOptionsSelected(value: string) {
    this.traineeservice.getassigned(value).subscribe(data => { this.getassign = data; });
  }
  constructor(public traineeservice: TraineeserviceService) { }
  ngOnInit() {
    this.bat = new Studentdetails();
    this.traineeservice.getbatch().subscribe(data => { this.assign = data; })
  }
  onchange(value) {
    var element = document.getElementById('team');
    var ele = document.getElementById('reason');
    if (value == "deployed") {
      element.style.display = 'block';
      ele.style.display = 'none';
    }
    else if (value == "terminated" || value == "discontinued") {
      ele.style.display = 'block';
      element.style.display = 'none';
    }
  }
  onSubmit() {
    this.traineeservice.savestuupdate(this.bat).subscribe(data => { this.bat = data; console.log("connection status:" + this.bat) })
  }

}
