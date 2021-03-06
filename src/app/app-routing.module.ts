import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OtherformsComponent } from './otherforms/otherforms.component';
import { FeedbackComponent } from './feedback/feedback.component';
const routes: Routes = [
  {
path:'otherforms',
component:OtherformsComponent
  },
  {
    path:'feedback',
    component:FeedbackComponent
      },
  { 
    path: 'attendance', 
    loadChildren:"./attendance/attendance.module#AttendanceModule"
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  
  { 
    path: 'coursetracking', 
    loadChildren:"./coursetracking/coursetracking.module#CoursetrackingModule"
  },
  { 
    path: 'student', 
    loadChildren:"./student/student.module#StudentModule"
  },{ 
    path: 'trainer', 
    loadChildren:"./trainer/trainer.module#TrainerModule"
  },
  { 
    path: 'batch', 
    loadChildren:"./batch/batch.module#BatchModule"
  },
  { 
    path: 'reports', 
    loadChildren:"./reports/reports.module#ReportsModule"
  },
  {
    path: 'assesment', 
    loadChildren:"./assesment/assesment.module#AssesmentModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
