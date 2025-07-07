import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeatMapComponent } from './seat-map/seat-map.component';
import { ManagerSeatFilterComponent } from './manager-seat-filter/manager-seat-filter.component';
import { FormsModule } from '@angular/forms';
import { SeatAdminComponent } from './seat-admin/seat-admin.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmployeeAdminComponent } from './employee-admin/employee-admin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SeatMapComponent,
    ManagerSeatFilterComponent,
    SeatAdminComponent,
    AdminPageComponent,
    AdminDashboardComponent,
    EmployeeAdminComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [LandingPageComponent]
})
export class AppModule { }
