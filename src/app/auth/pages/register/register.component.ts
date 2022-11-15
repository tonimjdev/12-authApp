import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    name: ['Test 4', [Validators.required ]],
    email: ['test4@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor( private fb: FormBuilder,
              private router: Router ) { }

  registro() {
    console.log(this.miFormulario.value);

    this.router.navigateByUrl('/dashboard');
  }

}
