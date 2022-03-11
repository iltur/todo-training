import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnasPage } from './onas.page';
import { OurTeamComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/our-team.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: OnasPage,
        }
      ]),
  OurTeamComponentModule
],
  	declarations: [OnasPage],
  	providers: [],
  	exports: [] })
export class OnasPageModule {
}
