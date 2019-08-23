import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prime-pro';
  users: User[];
  user:any;
  newUser:boolean=false;
  displayDialog:boolean=false;

  cols: any[];
  profileForm = this.fb.group({
    id: ['', Validators.required],
    firstName: ['', Validators.required],
    email: ['', Validators.required],
    city:['', Validators.required],
    state: ['', Validators.required],
    zip:['', Validators.required]
  });

  // get aliases() {
  //   return this.profileForm.get('aliases') as FormArray;
  // }

  ngOnInit() {
    this.users = [
      { id: '', name: '', email:'', city:'' , state:"", zipcode:""}     

  ];
    this.cols = [
        { field: 'id', header: 'Id' },
        { field: 'firstName', header: 'First Name' },
        { field: 'email', header: 'Email' },
        { field: 'city', header: 'City' },
        { field: 'state', header: 'State' },
        { field: 'zip', header: 'Zip Code' },
    ];
}

  constructor(private fb: FormBuilder) { }


 

  // addAlias() {
  //   this.aliases.push(this.fb.control(''));
  // }

  showDialogToAdd() {
      this.newUser = true;
      this.user = {};
      this.displayDialog = !this.displayDialog;
      console.log(this.displayDialog)
  }

  onSubmit(value) {
    console.log(value);
    this.user = value;
    let users = this.users;
    users.push(this.user);
   

    
    this.users = users
    this.displayDialog = false;
    this.clearForm();
    console.log(this.users)
  }
  clearForm() {

    this.profileForm.reset({
          'id': '',
          'firstname': '',
          'email': '',
         
          'city': '',
          'state': '',
         
          'zip': ''
         });
    }
  
  
}
export interface User {
id,
name,
email,
city,
state,
zipcode,


}
