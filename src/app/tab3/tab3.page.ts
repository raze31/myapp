import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  contName = "";
  contNumber= "";
  contacts: any=[];

  constructor( public alertCtrl: AlertController){ }

  saveContacts(){
    let contact = {
      name: this.contName,
      number: this.contNumber
    }
      this.contacts.push(contact);
      this.clearField();
  }
  clearField(){
    this.contName = "";
    this.contNumber ="";

  }
  async showConfirm(cont){
    const confirm = await this.alertCtrl.create({
      header: 'You are about to delete this contact!',
      message: 'Confirm Delete?',
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay.');
            let index = this.contacts.indexOf(cont);
            if(index > -1){
              this.contacts.splice(index, 1);
            }
          }
        }
      ]
    });
    await confirm.present();
  }

  
}
