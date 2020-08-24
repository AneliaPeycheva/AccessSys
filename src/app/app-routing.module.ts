import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from '../app/users/users.component'
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { CardsComponent } from './cards/cards.component'
import { CardNewComponent } from './card-new/card-new.component';
import { CompaniesComponent } from './companies/companies.component';
import { DepartmentsComponent } from './departments/departments.component';
import { CompanyNewComponent } from './company-new/company-new.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: 'users', component: UsersComponent },
  { path: 'user-new', component: UserNewComponent },
  { path: 'user-edit', component: UserEditComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'card-new', component: CardNewComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'company-new', component: CompanyNewComponent},
  { path: 'departments', component:DepartmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
