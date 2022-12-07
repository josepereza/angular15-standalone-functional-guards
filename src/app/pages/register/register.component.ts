import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DomainService } from 'src/app/domain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });
 constructor(private domainService: DomainService){

 }
  router = inject(Router);
  sendForm() {
    console.log(this.registerForm.value);
    this.domainService.authenticated=true;
    this.router.navigate(['/home'])
  }

}
