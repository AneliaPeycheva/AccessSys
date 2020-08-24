import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { CardsComponent } from './cards/cards.component';
import { CardNewComponent } from './card-new/card-new.component';
import { CompaniesComponent } from './companies/companies.component';
import { DepartmentsComponent } from './departments/departments.component';
import { CompanyNewComponent } from './company-new/company-new.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserNewComponent,
    UserEditComponent,
    CardsComponent,
    CardNewComponent,
    CompaniesComponent,
    DepartmentsComponent,
    CompanyNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
