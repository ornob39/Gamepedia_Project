import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginUserData = { email: '', password: '' };

  constructor(
    public _auth: AuthService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}

  ngOnInit() {}

  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this._snackBar.open('Login Successful!', 'Clear', { duration: 3000 });
        this._router.navigate(['/home']);
      },
      (err) => {}
    );
  }

  onSubmit(form: NgForm) {}
}
