import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesService } from './../groceries.service';
import { InputDialogService } from './../input-dialog.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public toastController: ToastController, public alertController: AlertController, public dataService: GroceriesService, public InputDialogService: InputDialogService, private socialSharing: SocialSharing) {}

  // Function for loading grocery items
  load_items(){
    return this.dataService.get_items()
  }
  
  // Implementation/interface for removing items
  async remove_item(item, index){
    console.log("Removing Item -", item.name);
    const toast = await this.toastController.create({
      message: "Removing Item - " + item.name,
      duration: 3000
    });
    toast.present();
    this.dataService.remove_item(index);
  }

  // Implementation/interface for adding items
  async add_item(){
    console.log("Adding New Item");
    this.InputDialogService.item_prompt()
  }

  // Implementation/interface for editing items
  async edit_item(item, index){
    console.log("Editing Item -", item.name);
    const toast = await this.toastController.create({
      message: "Editing Item - " + item.name,
      duration: 3000
    });
    toast.present();
    this.InputDialogService.item_prompt(item, index)
  }

  // Implementation/interface for sharing items
  async share_item(item){
    console.log("Sharing Item -", item.name);
    const toast = await this.toastController.create({
      message: "Sharing Item - " + item.name,
      duration: 3000
    });
    toast.present();
    let message = "Grocery Item - Name: " + item.name + " Quantity: x" + item.quantity + " Price: $" + item.price;
    let subject = "Shared via Groceries App"
    this.socialSharing.share(message, subject).then(() => {
      console.log("Shared successfully.");
    }).catch((error) => {
      console.error("Error while sharing ", error);
    });
  }
  
}


