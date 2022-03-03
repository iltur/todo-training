import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';

const routes: Routes = [{ 
        path: 'Home', 
        loadChildren: () => HomePageModule
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
