import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCheckTestComponent } from './modal-check-test.component';

describe('ModalCheckTestComponent', () => {
  let component: ModalCheckTestComponent;
  let fixture: ComponentFixture<ModalCheckTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCheckTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCheckTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
