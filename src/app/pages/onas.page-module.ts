import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnasPage } from './onas.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: OnasPage,
        }
      ])],
  	declarations: [OnasPage],
  	providers: [],
  	exports: [] })
export class OnasPageModule {
}
