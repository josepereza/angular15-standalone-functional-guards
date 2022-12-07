import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomainService } from 'src/app/domain.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule,RouterModule ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  service = inject(DomainService)
logout(){
this.service.authenticated=false
}
}
