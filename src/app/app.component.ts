import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {ContainerLayoutComponent} from "./components/container-layout/container-layout.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, ContainerLayoutComponent],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'functional-guards';
}
