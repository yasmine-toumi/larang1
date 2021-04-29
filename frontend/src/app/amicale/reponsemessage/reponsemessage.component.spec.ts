import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponsemessageComponent } from './reponsemessage.component';

describe('ReponsemessageComponent', () => {
  let component: ReponsemessageComponent;
  let fixture: ComponentFixture<ReponsemessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReponsemessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponsemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
