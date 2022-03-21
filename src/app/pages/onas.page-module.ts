import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OnasPage } from './onas.page';
import { OurTeamComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/our-team.component-module';
import { TestPustyComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/test-pusty.component-module';
import { FirebaseEmployeesServiceModule } from '../../../projects/team/src/lib/adapters/secondary/infrastructure/firebase-employees.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: OnasPage,
        }
      ]),
  OurTeamComponentModule,
  TestPustyComponentModule,
  FirebaseEmployeesServiceModule
],
  	declarations: [OnasPage],
  	providers: [],
  	exports: [] })
export class OnasPageModule {
}
