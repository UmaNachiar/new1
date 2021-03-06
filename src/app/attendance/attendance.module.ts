import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceRoutingModule } from './attendance-routing.module';
import { DailyComponent } from './daily/daily.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopicscoveredComponent } from './topicscovered/topicscovered.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [DailyComponent, TopicscoveredComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    FormsModule,ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class AttendanceModule { }
