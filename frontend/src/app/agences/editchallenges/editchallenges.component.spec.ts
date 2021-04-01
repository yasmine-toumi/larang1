import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditchallengesComponent } from './editchallenges.component';

describe('EditchallengesComponent', () => {
  let component: EditchallengesComponent;
  let fixture: ComponentFixture<EditchallengesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditchallengesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditchallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
