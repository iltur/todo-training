import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPustyComponent } from './test-pusty.component';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [TestPustyComponent],
	providers: [],
	exports: [TestPustyComponent]
})
export class TestPustyComponentModule {
}
