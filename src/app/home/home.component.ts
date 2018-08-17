import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../services/equipment.service';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  visibleSidebar1 = false;
  opened = false;
  data: any;
  nameList: any[] = [];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  show = false;
  selectedItem: any;
  containedItem: any;

  constructor(private equip:EquipmentService) { }

  ngOnInit() {
    this.equip.getJson().subscribe(
      data => {
        this.data = data;
        // make namelist for autocomplete
        for(let i of this.data){
          this.nameList.push(i.name);
        }
        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );
        // this.filteredOptions = of(this.nameList);
      },
      error => {
        console.log("error");
      }
    );
  }

  showSidebar() {
    this.opened = !this.opened;
  }

  getJson() {
    this.equip.getJson();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.nameList.filter(option => option.toLowerCase().includes(filterValue));
  }


  delete(item: any): void {
    this.show = false;
  }

  indexURL(url: string){
    var splitted = url.split("/", 6);
    var result = Number(splitted[5]);
    for(let item of this.data){
      if(item.index === result){
        this.containedItem = item;
        return this.containedItem.name;
      }
    }
    return "larry";
  }

  isTool(item: any) {
    if(item.equipment_category === "Tools") return true;
  }

  isMount(item: any) {
    if(item.equipment_category === "Mounts and Vehicles") return true;
  }

  clickList(listItem: any) {
    console.log(listItem);
    // this.myControl.value gives name of item);
    for(let item of this.data){
      if(item.name.toLowerCase() === listItem.toLowerCase()){
        this.selectedItem = item;
        this.show = true;
        break;
      }
    }
  }


  onSubmit() {
    // this.myControl.value gives name of item);
    for(let item of this.data){
      if(item.name.toLowerCase() === this.myControl.value.toLowerCase()){
        this.selectedItem = item;
        this.show = true;
        break;
      }
    }
  }

}
