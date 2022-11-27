import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPerzonalizadoComponent } from './error-perzonalizado.component';

describe('ErrorPerzonalizadoComponent', () => {
  let component: ErrorPerzonalizadoComponent;
  let fixture: ComponentFixture<ErrorPerzonalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPerzonalizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorPerzonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
