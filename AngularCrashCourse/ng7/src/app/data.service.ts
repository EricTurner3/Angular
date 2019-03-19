import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


//Use this class to use in other components
export class DataService {

  constructor(private http: HttpClient) { }

  //Get a user list from a testing API
  getUsers(){
    /*
    Return this from a testing API:
    {
      "page":1,
      "per_page":3,
      "total":12,
      "total_pages":4,
      "data":[
        { "id":1,
          "first_name":"George",
          "last_name":"Bluth",
          "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
        },
        { "id":2,
          "first_name":"Janet",
          "last_name":"Weaver",
          "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
        },
        { "id":3,
          "first_name":"Emma",
          "last_name":"Wong",
          "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
        }
      ]
    }
    */
    return this.http.get('https://reqres.in/api/users');
  }
}
