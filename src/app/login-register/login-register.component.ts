import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  UserData = {
    username : '',
    password : '' }
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  CheckLogin(){
    if (this.UserData.username === 'admin' && this.UserData.password === '1234'){
      this.router.navigate(['Dashboard']);
    }else{
      alert('invalid');
    }
  }
}
