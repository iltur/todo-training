import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MessageDTO } from '../../../application/ports/secondary/message.dto';
import { AddsMessageDtoPort } from '../../../application/ports/secondary/adds-message.dto-port';

@Injectable()
export class FirebaseMessageService implements AddsMessageDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(message: Partial<MessageDTO>): void {
    this._client.collection('messages').add(message);
  }
}
