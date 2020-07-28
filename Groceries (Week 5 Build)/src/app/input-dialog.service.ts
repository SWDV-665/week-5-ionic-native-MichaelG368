import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceriesService } from './groceries.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  constructor(public alertController: AlertController, public dataService: GroceriesService) {}

  // Prompt used for adding/editing grocery items
  async item_prompt(item?, index?){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: item ? 'Edit Item': 'Add Item',
      message: item ? "Please update item details." : "Please input item details.",
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
          value: item ? item.name: null
        },
        {
          name: 'quantity',
          type: 'number', 
          min : "0",
          placeholder: 'Quantity',
          value: item ? item.quantity: null
        },
        {
          name: 'price',
          type: 'number', 
          min : "0.00",
          placeholder: 'Price',
          value: item ? item.price: null
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (item) => {
            console.log('Confirm Ok');
            if (index !== undefined){
              this.dataService.edit_item(item, index);
            }
            else{
              this.dataService.add_item(item);
            }
          }
        }
      ]
    });
    await alert.present();
  }
}
