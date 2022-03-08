import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PracownikDetailsPage } from './pracownik-details.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: PracownikDetailsPage,
        }
      ])],
  	declarations: [PracownikDetailsPage],
  	providers: [],
  	exports: [] })
export class PracownikDetailsPageModule {
}
