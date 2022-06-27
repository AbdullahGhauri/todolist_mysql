import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputfieldvalidationComponent } from './inputfieldvalidation.component';

describe('InputfieldvalidationComponent', () => {
  let component: InputfieldvalidationComponent;
  let fixture: ComponentFixture<InputfieldvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputfieldvalidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputfieldvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
