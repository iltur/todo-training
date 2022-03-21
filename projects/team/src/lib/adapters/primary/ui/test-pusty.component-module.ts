import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPustyComponent } from './test-pusty.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TestPustyComponent],
  	providers: [],
  	exports: [TestPustyComponent] })
export class TestPustyComponentModule {
}
