import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditagencesComponent } from './editagences.component';

describe('EditagencesComponent', () => {
  let component: EditagencesComponent;
  let fixture: ComponentFixture<EditagencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditagencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditagencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
