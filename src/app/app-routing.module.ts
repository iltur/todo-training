import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { OamebachPageModule } from './pages/oamebach.page-module';

const routes: Routes = [{ 
        path: 'Home', 
        loadChildren: () => HomePageModule
      },
  { 
        path: 'home', 
        loadChildren: () => HomePageModule
      },
  { 
        path: 'oamebach', 
        loadChildren: () => OamebachPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
