import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {

  items = [];

  constructor() {}

  get_items(){
    return this.items
  }

  // Function for removing grocery items
  remove_item(index){
    this.items.splice(index, 1);
  }

  // Function for adding grocery items
  add_item(item){
    this.items.push(item);
  }

  // Function for editing grocery items
  edit_item(item, index){
    this.items[index] = item;
  }
  
}
