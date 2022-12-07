import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoavaliableComponent } from './noavaliable.component';

describe('NoavaliableComponent', () => {
  let component: NoavaliableComponent;
  let fixture: ComponentFixture<NoavaliableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NoavaliableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoavaliableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
