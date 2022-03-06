import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnasPageModule } from './pages/onas.page-module';
import { PracownicyPageModule } from './pages/pracownicy.page-module';
import { HomePageModule } from './pages/home.page-module';

const routes: Routes = [
  { 
        path: 'onas', 
        loadChildren: () => OnasPageModule
      },
  { 
        path: 'pracownicy', 
        loadChildren: () => PracownicyPageModule
      },
  { 
        path: '', 
        loadChildren: () => HomePageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
