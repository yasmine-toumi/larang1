import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeconventionsComponent } from './listeconventions.component';

describe('ListeconventionsComponent', () => {
  let component: ListeconventionsComponent;
  let fixture: ComponentFixture<ListeconventionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeconventionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeconventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
