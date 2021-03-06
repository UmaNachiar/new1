import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Studentdetails } from 'src/app/models/StudentDetails';
import { Issue } from 'src/app/models/issue';
import { Studentatten } from 'src/app/models/Deployed';

@Component({
  selector: 'app-rstudentwise',
  templateUrl: './rstudentwise.component.html',
  styleUrls: ['./rstudentwise.component.css']
})
export class RstudentwiseComponent implements OnInit {
  @ViewChild("mbno", { static: false }) mbno: ElementRef;
  assign: Issue[];
  t: string;
  assign1: Studentdetails[];
  q: string;
  sub: Studentdetails[];
  sub1: Studentatten;
  p:Number = 1;
  count:Number = 10;
  stud:Studentdetails[];
  studentwise: any;
  constructor(public traineeservice: TraineeserviceService) {
    this.sub1 = new Studentatten();
  }
  search($event) {
    let q = $event.target.value;
    this.traineeservice.getassessmentstudent(q).subscribe(data => { 
      this.stud = data; console.log(this.stud)
    })
  }
  select(selected:string)
{
  let r = this.mbno.nativeElement.value;
    console.log(r)
    let s = r.split("/");
    this.t = s[2];
    this.traineeservice.getstudentwise(this.t).subscribe(data => {
      this.studentwise = data;})
  }
  ngOnInit() {
    this.sub1 = new Studentatten();
  }

}