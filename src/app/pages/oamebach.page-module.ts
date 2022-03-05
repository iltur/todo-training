import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OamebachPage } from './oamebach.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: OamebachPage,
        }
      ])],
  	declarations: [OamebachPage],
  	providers: [],
  	exports: [] })
export class OamebachPageModule {
}
