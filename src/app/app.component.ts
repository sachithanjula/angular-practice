import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent, FormsModule, NgIf, NgTemplateOutlet, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, NgStyle, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // ------------------------------ Angular basics -------------------------------------------
  // title: string = 'This is loaded dynamically';
  // imageURL: string = 'https://www.cricwire.lk/wp-content/uploads/2021/05/Mahela.jpg';
  // isDisabled: boolean = true;
  // isActive: boolean = true;

  // userName: string = "Sachith Anujula"

  // buttonClick() {

  // }

  // keyEnter(event:any) {
  //   if (event.keyCode == 13) {
  //     console.log("Pressed Enter !!")
  //   } else {
  //     console.log("Not pressed Enter !!");
  //   }
  // }

  // keyUpFiltering (user:HTMLInputElement) {
  //   console.log(user.value)
  // }

  // updateUserName(username:HTMLInputElement) {
  //     this.userName = username.value;
  //     console.log(this.userName);
  // }

  // ----------------------------------------------------------------------------


  // isLoggedIn: boolean = false;
  // userName: string = "Sachith Anjula"

  // isAdmin: boolean = false;
  // isMember: boolean = false;
  // isGuest: boolean = true;

  // loginCount: number = 0;

  // userRole: string = "Member";

  // countLoginAttemps() {
  //    this.loginCount ++;
  //    console.log(this.loginCount);
  // }

  // -----------------------------------------------------------------------------

  // users: Array<string> = ["Sachith", "Amal", "Kamal"];

  // usersObj: Array<any> = [
   
  // ]

  // constructor () {
  //   console.log(this.usersObj.length);
  // }


  // addNewUser () {
  //   let user = {
  //     id: 5,
  //     name: "Nayani",
  //     email: "nayani@gmai.com"
  //   }

  //   this.usersObj.push(user);

  // }

  // deleteUser(user: object) {
  //   let index = this.usersObj.indexOf(user);
  //   console.log(index);
  //   this.usersObj.splice(index, 1);
  // }

  // deleteUser(index: number) {
  //   this.usersObj.splice(index, 1);
  // }

  
  // -----------------------------------------------------------------------------

  // userRole: string = "";

  // -----------------------------------------------------------------------------
  isLoggedIn: boolean = false;



}
