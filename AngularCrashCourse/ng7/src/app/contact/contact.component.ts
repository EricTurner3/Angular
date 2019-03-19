import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false; //Based on form submitted
  success = false; //Based on validation

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required],

    })
   }

   onSubmit(){
     this.submitted = true;
     if (this.messageForm.invalid){
       return; //Do not let any more code to execute
     }

     this.success = true;

     //Now we would send the data to a db

   }

  ngOnInit() {
  }

}
