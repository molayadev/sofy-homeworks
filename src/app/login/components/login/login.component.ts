import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      const credentials = this.form.value;
      this.authService.login(credentials.email, credentials.password);
      this.submitEM.emit();
      this.router.navigate(['home']);
    }
  }

}
