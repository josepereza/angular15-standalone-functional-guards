import {Injectable} from '@angular/core';
import {of, tap} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DomainService {
authenticated:boolean=false
  isAvailable() {
    return of(this.authenticated).pipe(
      tap((v) =>console.log(v) )
    )
  }
}