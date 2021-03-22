import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsbankComponent } from './conditionsbank.component';

describe('ConditionsbankComponent', () => {
  let component: ConditionsbankComponent;
  let fixture: ComponentFixture<ConditionsbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionsbankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionsbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
