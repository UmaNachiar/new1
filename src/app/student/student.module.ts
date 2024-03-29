import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { FreshersComponent } from './freshers/freshers.component';
import { UpskillingComponent } from './upskilling/upskilling.component';
import { ViewsComponent } from './views/views.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [FreshersComponent, UpskillingComponent, ViewsComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class StudentModule { }
