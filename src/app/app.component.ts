import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Dealer } from './modals/dealer';

@Component({
  selector: 'app-root',
  imports: [ ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  dealerFrom: FormGroup = new FormGroup({});
  dealerObj?: Dealer;
  dealerDataList: Dealer[] = [];

constructor(){
  this.initialiseForm();
  let dealerLocalData = localStorage.getItem("DealerData");
  if(dealerLocalData != null){
    let dealerParsedData = JSON.parse(dealerLocalData);
    this.dealerDataList = dealerParsedData;
  }
}


initialiseForm() {
  this.dealerFrom = new FormGroup({
    id : new FormControl(this.dealerObj?.id),
    dealerName : new FormControl(this.dealerObj?.dealerName),
    latitude : new FormControl(this.dealerObj?.latitude),
    longitude : new FormControl(this.dealerObj?.longitude),
    totalBudget : new FormControl(this.dealerObj?.totalBudget),
    owerFirstName : new FormControl(this.dealerObj?.owerFirstName),
    owerLastName : new FormControl(this.dealerObj?.owerLastName),
  })

}

onSave(){
  console.log('this.dealerFrom.value', this.dealerFrom.value);
  if(this.dealerDataList.length !== 0){
    this.dealerFrom.controls['id'].setValue(this.dealerDataList.length + 1);
    this.dealerDataList.push(this.dealerFrom.value);
  }else{
    this.dealerFrom.controls['id'].setValue(1);
    this.dealerDataList.push(this.dealerFrom.value);
  }
  
  localStorage.setItem("DealerData", JSON.stringify(this.dealerDataList));

}

onUpdate(){
  let formValue = this.dealerDataList.find((data) => data.id == this.dealerFrom.controls['id'].value)

  if(formValue != undefined){
    formValue.dealerName = this.dealerFrom.controls['dealerName'].value;
    formValue.latitude = this.dealerFrom.controls['latitude'].value;
    formValue.longitude = this.dealerFrom.controls['longitude'].value;
    formValue.totalBudget = this.dealerFrom.controls['totalBudget'].value;
    formValue.owerFirstName = this.dealerFrom.controls['owerFirstName'].value;
    formValue.owerLastName = this.dealerFrom.controls['owerLastName'].value;
  }
  localStorage.setItem("DealerData", JSON.stringify(this.dealerDataList));
}

onEdit(item : Dealer){
 this.dealerObj = item;
 this.initialiseForm();
}

onDelete(id:any){
  let isDelete = confirm("You sure you want to delete this record?");
  if(isDelete){
    let index = this.dealerDataList.findIndex(data => data.id == id);
    this.dealerDataList.splice(index, 1);
  }
}


 dealersData = {
  "dealers": [
    {
      "id": 1003,
      "name": "Ford",
      "totalBudget": "$1525",
      "remainingBudget": "$2700",
      "owner": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "location": {
        "latitude": "46545.45",
        "longitude": "4655.245"
      },
      "cars": [
        {
          "id": "10001",
          "name": "Ford Endeavour",
          "model": "2018",
          "brand": "Ford",
          "color": "Silver",
          "price": "$5452"
        },
        {
          "id": "10002",
          "name": "Ford EcoSport",
          "model": "2020",
          "brand": "Ford",
          "color": "red",
          "price": "$542"
        },
        {
          "id": "10003",
          "name": "Ford Figo",
          "model": "2018",
          "brand": "Ford",
          "color": "white",
          "price": "$855"
        }
      ]
    }
  ]
}

}
