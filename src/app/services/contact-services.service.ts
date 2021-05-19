import { Injectable } from '@angular/core';
import {Plugins} from '@capacitor/core';
const { Camera, Filesystem, Storage } = Plugins;
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactServicesService {
  contactListRef: AngularFireList<any>;
  contactRef: AngularFireObject<any>;
  aptService: any;

  constructor(private db: AngularFireDatabase) { }

  createContact(cont: Contact){
    return this.contactListRef.push({
      name: cont.name,
      mobile: cont.mobile
    })
  }

  getContact(id: string) {
    this.contactRef = this.db.object('/contact/' + id);
    return this.contactRef
  }

  getContactList(){ 
    this.contactListRef = this.db.list('/contact/');
    return this.contactListRef;
  }

  deleteContact(id: string) {
    this.contactRef = this.db.object('/contact/' + id);
    return this.contactRef.remove;
  }

}
