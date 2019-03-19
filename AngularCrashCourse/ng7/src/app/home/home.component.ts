import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Object;

  //Use the DataService import in the constructor 
  constructor(private data: DataService) { }

  //When the component is loading, perform the following actions:
  ngOnInit() {
    this.data.getUsers().subscribe(data =>{
      this.users = data
      console.log(this.users)
    })
  }


 

}
