import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PracownikDetailsPage } from './pracownik-details.page';
import { EmployeeDetailComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/employee-detail.component-module';
import { FirebaseEmployeesServiceModule } from '@team';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PracownikDetailsPage,
      }
    ]),
    EmployeeDetailComponentModule,
    FirebaseEmployeesServiceModule
  ],
  declarations: [PracownikDetailsPage],
  providers: [],
  exports: []
})
export class PracownikDetailsPageModule {
}
