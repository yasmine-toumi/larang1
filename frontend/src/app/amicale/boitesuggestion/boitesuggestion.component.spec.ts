import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoitesuggestionComponent } from './boitesuggestion.component';

describe('BoitesuggestionComponent', () => {
  let component: BoitesuggestionComponent;
  let fixture: ComponentFixture<BoitesuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoitesuggestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoitesuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
