import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingDocumentComponent } from './landing-document.component';

describe('LandingDocumentComponent', () => {
  let component: LandingDocumentComponent;
  let fixture: ComponentFixture<LandingDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
