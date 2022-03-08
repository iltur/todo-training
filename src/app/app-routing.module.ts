import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnasPageModule } from './pages/onas.page-module';
import { HomePageModule } from './pages/home.page-module';
import { PracownicyPageModule } from './pages/pracownicy.page-module';
import { PracownikDetailsPageModule } from './pages/pracownik-details.page-module';

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
        path: 'pracownik', 
        loadChildren: () => PracownicyPageModule
      },
  { 
        path: 'pracownik/:name', 
        loadChildren: () => PracownikDetailsPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
