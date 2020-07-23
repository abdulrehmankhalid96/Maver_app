import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommoditiesComponent } from './commodities/commodities.component';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngb-modal';
import { ChatComponent } from './chat/chat.component';
import { NotificationComponent } from './notification/notification.component';
import { UsersComponent } from './users/users.component';
@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule,
    ModalModule

  ],
  declarations: [ DashboardComponent, CommoditiesComponent, ChatComponent, NotificationComponent, UsersComponent ]
})
export class DashboardModule { }
