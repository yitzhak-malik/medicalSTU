import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSMSComponent } from './auth-sms.component';

describe('AuthSMSComponent', () => {
  let component: AuthSMSComponent;
  let fixture: ComponentFixture<AuthSMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthSMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
