import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnasPageModule } from './pages/onas.page-module';
import { HomePageModule } from './pages/home.page-module';
import { PracownicyPageModule } from './pages/pracownicy.page-module';
import { PracownikDetailsPageModule } from './pages/pracownik-details.page-module';
import { ContactPageModule } from './pages/contact.page-module';
import { AdminPageModule } from './pages/admin.page-module';

const routes: Routes = [
  {
    path: 'onas',
    loadChildren: () => OnasPageModule
  },

  {
    path: '',
    loadChildren: () => HomePageModule
  },

  {
    path: 'home',
    loadChildren: () => HomePageModule
  },
  {
    path: 'pracownik',
    loadChildren: () => PracownicyPageModule
  },
  {
    path: 'pracownik/:employeeId',
    loadChildren: () => PracownikDetailsPageModule
  },
  {
    path: 'contact',
    loadChildren: () => ContactPageModule
  },
  {
    path: 'admin',
    loadChildren: () => AdminPageModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
