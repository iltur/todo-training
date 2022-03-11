import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactPage } from './contact.page';
import { ContactFormComponentModule } from '../../../projects/messages/src/lib/adapters/primary/ui/contact-form.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: ContactPage,
        }
      ]),
  ContactFormComponentModule,
],
  	declarations: [ContactPage],
  	providers: [],
  	exports: [] })
export class ContactPageModule {
}
