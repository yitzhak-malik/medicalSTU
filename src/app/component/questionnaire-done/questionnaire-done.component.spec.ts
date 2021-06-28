import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireDoneComponent } from './questionnaire-done.component';

describe('QuestionnaireDoneComponent', () => {
  let component: QuestionnaireDoneComponent;
  let fixture: ComponentFixture<QuestionnaireDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
