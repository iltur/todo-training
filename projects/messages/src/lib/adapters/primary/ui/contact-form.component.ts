import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_MESSAGE_DTO, AddsMessageDtoPort } from '../../../application/ports/secondary/adds-message.dto-port';

@Component({
  selector: 'lib-contact-form',
  templateUrl: './contact-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContactFormComponent {
  readonly sendMessage: FormGroup = new FormGroup({
    email: new FormControl(),
    name: new FormControl()
  });

  constructor(@Inject(ADDS_MESSAGE_DTO) private _addsMessageDto: AddsMessageDtoPort) {
  }

  onSendMessageSubmited(sendMessage: FormGroup): void {
    this._addsMessageDto.add({
      email: sendMessage.get('email').value,
      name: sendMessage.get('name').value,
    });
  }

}
