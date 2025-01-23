import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {





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
