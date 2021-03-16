import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagenceComponent } from './listagence.component';

describe('ListagenceComponent', () => {
  let component: ListagenceComponent;
  let fixture: ComponentFixture<ListagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
