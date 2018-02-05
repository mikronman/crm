import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CreateComponent } from './products/create/create.component';
import { ManageComponent } from './products/manage/manage.component';
import { EditComponent } from './products/edit/edit.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { TopComponent } from './menu/top/top.component';
import { SideComponent } from './menu/side/side.component';
import { SettingsComponent } from './settings/settings.component';
import { ImportComponent } from './orders/import/import.component';
import { ExportComponent } from './orders/export/export.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CreateComponent,
    ManageComponent,
    EditComponent,
    CampaignsComponent,
    OrdersComponent,
    CustomersComponent,
    ReportsComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    TopComponent,
    SideComponent,
    SettingsComponent,
    ImportComponent,
    ExportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
