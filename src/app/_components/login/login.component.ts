import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticateService } from '../../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  isLogging = false;
  isLoginFailed = false;

  constructor(
    private auth: AuthenticateService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = fb.group({
      UserId: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  get f() {
    return this.form.controls;
  }

  login() {
    this.isLogging = true;
    this.auth.login(this.f.UserId.value, this.f.Password.value)
      .subscribe(response => {
        debugger;
        if (response["status"] == 0) {
          this.router.navigate(['/administrator']);
          localStorage.setItem('User', response["data"]); 
        }
        else {
          this.isLogging = false;
          this.form.reset();
          this.isLoginFailed = true
        }
      });
  }
}
